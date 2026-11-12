
import { Request, Response } from "express";
import { webhooksService } from "./webhooks.service";
import { WebhookProvider } from "./webhooks.types";

class WebhooksController {
  private async receive(
  provider: WebhookProvider,
  req: Request,
  res: Response
): Promise<void> {
  try {
    const payload = req.body;

    console.log("Webhook Provider:", provider);
    console.log("Webhook Payload:", payload);

    if (
      !payload ||
      typeof payload !== "object" ||
      Array.isArray(payload)
    ) {
      res.status(400).json({
        success: false,
        message: "Invalid webhook payload",
      });
      return;
    }

    const event =
      req.header("x-webhook-event") ||
      (typeof payload.event === "string" ? payload.event : "");

    if (!event) {
      res.status(400).json({
        success: false,
        message: "Webhook event is missing",
      });
      return;
    }

    console.log("Webhook Event:", event);

    await webhooksService.receive({
      provider,
      event,
      eventId: req.header("x-webhook-id"),
      storeId: req.header("x-store-id"),
      payload,
      authorization: req.header("authorization"),
    });

    console.log("Webhook processed successfully");

    res.status(202).json({
      success: true,
      message: "Webhook accepted",
    });
  } catch (error) {
    console.error("Webhook Processing Error:", error);
    throw error;
  }
}

  receiveZidWebhook = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    await this.receive("zid", req, res);
  };

  receiveFoodicsWebhook = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    await this.receive("foodics", req, res);
  };

  receiveShippingWebhook = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    await this.receive("shipping", req, res);
  };
}

export const webhooksController = new WebhooksController();
