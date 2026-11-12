export type SyncJobType =
  | "PRODUCT_SYNC"
  | "ORDER_SYNC"
  | "INVENTORY_SYNC";

export interface SyncJobPayload {
  type: SyncJobType;
  source: "ZID" | "FOODICS";
  entityId: string;
  data?: Record<string, unknown>;
}