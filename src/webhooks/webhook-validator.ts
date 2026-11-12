
import { z } from "zod";

export const webhookSchema = z.object({
  provider: z.enum(["zid", "foodics", "shipping"]),
  event: z.string().min(1),
  eventId: z.string().optional(),
  storeId: z.string().optional(),
  payload: z.record(z.string(), z.unknown()),
});

export type ValidWebhook = z.infer<
  typeof webhookSchema
>;

export function validateWebhook(data: unknown): ValidWebhook {
  return webhookSchema.parse(data);
}
