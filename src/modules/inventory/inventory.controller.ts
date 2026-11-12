import {
  Request,
  Response,
  NextFunction,
} from "express";

import { InventoryRepository } from "./inventory.repository";
import { InventoryService } from "./inventory.service";

const inventoryRepository = new InventoryRepository();

const inventoryService = new InventoryService(
  inventoryRepository
);

export class InventoryController {
  async getAllInventory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const inventory =
        await inventoryService.getAllInventory();

      res.status(200).json({
        success: true,
        data: inventory,
      });
    } catch (error) {
      next(error);
    }
  }

  async getInventory(
    req: Request<{ productId: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const inventory =
        await inventoryService.getInventory(
          req.params.productId
        );

      res.status(200).json({
        success: true,
        data: inventory,
      });
    } catch (error) {
      next(error);
    }
  }
}