
export type WebhookProvider = "zid" | "foodics" | "shipping";

export type WebhookStatus =
  | "received"
  | "processing"
  | "processed"
  | "failed";

export interface IWebhookRequest {
  provider: WebhookProvider;
  event: string;
  eventId?: string;
  storeId?: string;
  payload: Record<string, unknown>;
}

export interface IWebhookResponse {
  success: boolean;
  message: string;
}

export interface IWebhookJob {
  provider: WebhookProvider;
  event: string;
  eventId?: string;
  storeId?: string;
  payload: Record<string, unknown>;
}

export interface IWebhookHeaders {
  authorization?: string;
  "x-webhook-id"?: string;
}
