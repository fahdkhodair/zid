import { InventoryRepository } from "./inventory.repository";

import {
  IInventorySyncDTO,
} from "./inventory.types";

export class InventoryService {
  static syncFromFoodics(payload: Record<string, unknown>) {
      throw new Error("Method not implemented.");
  }
  static syncFromZid(payload: Record<string, unknown>) {
      throw new Error("Method not implemented.");
  }
  constructor(
    private readonly inventoryRepository: InventoryRepository
  ) {}

  async syncInventory(data: IInventorySyncDTO) {
    const inventory =
      await this.inventoryRepository.findByProductId(
        data.productId
      );

    if (!inventory) {
      throw new Error("Inventory not found");
    }

    const updateData =
      data.source === "zid"
        ? { zidQuantity: data.quantity }
        : { foodicsQuantity: data.quantity };

    return this.inventoryRepository.updateByProductId(
      data.productId,
      {
        ...updateData,
        availableQuantity: data.quantity,
        lastSyncedAt: new Date(),
      }
    );
  }

  async getInventory(productId: string) {
    const inventory =
      await this.inventoryRepository.findByProductId(
        productId
      );

    if (!inventory) {
      throw new Error("Inventory not found");
    }

    return inventory;
  }

  async getAllInventory() {
    return this.inventoryRepository.findAll();
  }
}