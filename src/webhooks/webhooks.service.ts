
import { Queue } from "bullmq";
import { timingSafeEqual } from "crypto";

import {
  IWebhookRequest,
  WebhookProvider,
} from "./webhooks.types";

const redisUrl = new URL(
  process.env.REDIS_URL || "redis://127.0.0.1:6379"
);

const connection = {
  host: redisUrl.hostname,
  port: Number(redisUrl.port) || 6379,
  username: redisUrl.username
    ? decodeURIComponent(redisUrl.username)
    : undefined,
  password: redisUrl.password
    ? decodeURIComponent(redisUrl.password)
    : undefined,
  db: Number(redisUrl.pathname.slice(1)) || 0,
  ...(redisUrl.protocol === "rediss:" ? { tls: {} } : {}),
};

const webhookQueue = new Queue("webhooks", {
  connection,
});

class WebhooksService {
  private verifyZidWebhook(authorization?: string): boolean {
    const username = process.env.ZID_WEBHOOK_USERNAME;
    const password = process.env.ZID_WEBHOOK_PASSWORD;

    if (!username || !password || !authorization) {
      return false;
    }

    const expected = Buffer.from(
      `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`
    );

    const received = Buffer.from(authorization);

    if (expected.length !== received.length) {
      return false;
    }

    return timingSafeEqual(expected, received);
  }

  private verifyProvider(
    provider: WebhookProvider,
    authorization?: string
  ): void {
    if (provider === "zid") {
      if (!this.verifyZidWebhook(authorization)) {
        throw new Error("Invalid Zid webhook credentials");
      }

      return;
    }

    // Foodics and shipping require their own
    // documented authentication mechanisms.
    throw new Error(
      `${provider} webhook authentication is not configured`
    );
  }

  async receive(data: IWebhookRequest & {
    authorization?: string;
  }): Promise<void> {
    this.verifyProvider(data.provider, data.authorization);

    const jobId = data.eventId
      ? `${data.provider}-${data.eventId}`.replace(/[^a-zA-Z0-9_-]/g, "_")
      : undefined;

    await webhookQueue.add(
      "process-webhook",
      {
        provider: data.provider,
        event: data.event,
        eventId: data.eventId,
        storeId: data.storeId,
        payload: data.payload,
      },
      {
        ...(jobId ? { jobId } : {}),
        attempts: 5,
        backoff: {
          type: "exponential",
          delay: 1000,
        },
        removeOnComplete: 1000,
        removeOnFail: 5000,
      }
    );
  }
}

export const webhooksService = new WebhooksService();
