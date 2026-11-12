import { WebhookEvent } from "./webhook.types";

export class WebhookService {
  async processWebhook(payload: WebhookEvent) {
    switch (payload.event) {
      case "product.created":
        return this.handleProductCreated(payload);

      case "product.updated":
        return this.handleProductUpdated(payload);

      case "order.created":
        return this.handleOrderCreated(payload);

      default:
        throw new Error("Unsupported webhook event");
    }
  }

  private async handleProductCreated(payload: WebhookEvent) {
    console.log("New product received:", payload.data);

    // Process product
  }

  private async handleProductUpdated(payload: WebhookEvent) {
    console.log("Product updated:", payload.data);

    // Update product
  }

  private async handleOrderCreated(payload: WebhookEvent) {
    console.log("New order received:", payload.data);

    // Create order in Foodics
  }
}