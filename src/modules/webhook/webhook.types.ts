export interface WebhookEvent {
  event: string;
  store_id: string;
  data: Record<string, unknown>;
}