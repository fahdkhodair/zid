import { Inventory } from "./inventory.model";

import {
  ICreateInventoryDTO,
  IUpdateInventoryDTO,
} from "./inventory.types";

export class InventoryRepository {
  async create(data: ICreateInventoryDTO) {
    return Inventory.create(data);
  }

  async findByProductId(productId: string) {
    return Inventory.findOne({ productId });
  }

  async findByZidProductId(zidProductId: string) {
    return Inventory.findOne({ zidProductId });
  }

  async findAll() {
    return Inventory.find().sort({ updatedAt: -1 });
  }

  async updateByProductId(
    productId: string,
    data: IUpdateInventoryDTO
  ) {
    return Inventory.findOneAndUpdate(
      { productId },
      { $set: data },
      {
        new: true,
        runValidators: true,
      }
    );
  }
}