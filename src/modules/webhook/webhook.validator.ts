import { z } from "zod";

export const webhookSchema = z.object({
  event: z.enum([
    "product.created",
    "product.updated",
    "product.deleted",
    "order.created",
    "order.updated",
    "inventory.updated",
  ]),

  store_id: z.string().min(1),

  data: z.record(z.string(), z.unknown()),
});

export function validateWebhook(payload: unknown) {
  return webhookSchema.safeParse(payload);
}