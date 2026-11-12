
import { InventoryService } from "../../../modules/inventory/inventory.service";

class ZidInventoryHandler {
  async handleUpdate(payload: Record<string, unknown>) {
    return InventoryService.syncFromZid(payload);
  }
}

export const zidInventoryHandler = new ZidInventoryHandler();
