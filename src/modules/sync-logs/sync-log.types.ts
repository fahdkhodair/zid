export type SyncStatus =
  | "pending"
  | "processing"
  | "success"
  | "failed"
  | "retrying";

export type SyncSource =
  | "zid"
  | "foodics"
  | "shipping";

export type SyncEntity =
  | "product"
  | "order"
  | "inventory"
  | "shipment";

export type SyncDirection =
  | "zid_to_foodics"
  | "foodics_to_zid"
  | "zid_to_shipping"
  | "shipping_to_zid";

export interface ISyncLog {
  eventId: string;
  source: SyncSource;
  entity: SyncEntity;
  entityId: string;
  direction: SyncDirection;
  status: SyncStatus;

  attempts: number;
  maxAttempts: number;

  requestPayload?: Record<string, unknown>;
  responsePayload?: Record<string, unknown>;

  errorMessage?: string;

  startedAt?: Date;
  completedAt?: Date;
}

export interface ICreateSyncLogDTO {
  eventId: string;
  source: SyncSource;
  entity: SyncEntity;
  entityId: string;
  direction: SyncDirection;
  requestPayload?: Record<string, unknown>;
}

export interface IUpdateSyncLogDTO {
  status?: SyncStatus;
  attempts?: number;
  responsePayload?: Record<string, unknown>;
  errorMessage?: string;
  startedAt?: Date;
  completedAt?: Date;
}