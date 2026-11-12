
import { InventoryService } from "../../../modules/inventory/inventory.service";

class FoodicsInventoryHandler {
  async handleUpdate(payload: Record<string, unknown>) {
    return InventoryService.syncFromFoodics(payload);
  }
}

export const foodicsInventoryHandler =
  new FoodicsInventoryHandler();
