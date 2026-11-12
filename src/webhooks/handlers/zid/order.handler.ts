
import  { OrderService }  from "../../../modules/orders/order.service";

class ZidOrderHandler {
  async handleCreate(payload: Record<string, unknown>) {
    return OrderService.syncFromZid(payload);
  }

  async handleStatusUpdate(payload: Record<string, unknown>) {
    return OrderService.updateStatusFromZid(payload);
  }

  async handlePaymentStatusUpdate(payload: Record<string, unknown>) {
    return OrderService.updatePaymentStatusFromZid(payload);
  }
}

export const zidOrderHandler = new ZidOrderHandler();
