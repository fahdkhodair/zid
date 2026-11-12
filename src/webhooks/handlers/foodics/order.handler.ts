
import { OrderService } from "../../../modules/orders/order.service";

class FoodicsOrderHandler {
  async handleCreate(payload: Record<string, unknown>) {
    return OrderService.syncFromFoodics(payload);
  }

  async handleUpdate(payload: Record<string, unknown>) {
    return OrderService.updateFromFoodics(payload);
  }

  async handleStatusUpdate(payload: Record<string, unknown>) {
    return OrderService.updateStatusFromZid(payload);
  }
}

export const foodicsOrderHandler = new FoodicsOrderHandler();
