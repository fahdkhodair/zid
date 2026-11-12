export type InventorySource = "zid" | "foodics";

export interface IInventory {
  productId: string;
  zidProductId: string;
  foodicsProductId?: string;

  zidQuantity: number;
  foodicsQuantity: number;

  availableQuantity: number;

  lastSyncedAt?: Date;

  source: InventorySource;
}

export interface ICreateInventoryDTO {
  productId: string;
  zidProductId: string;
  foodicsProductId?: string;
  zidQuantity: number;
  foodicsQuantity: number;
  source: InventorySource;
}

export interface IUpdateInventoryDTO {
  zidQuantity?: number;
  foodicsQuantity?: number;
  availableQuantity?: number;
  lastSyncedAt?: Date;
}

export interface IInventorySyncDTO {
  productId: string;
  source: InventorySource;
  quantity: number;
}