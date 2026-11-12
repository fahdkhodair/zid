
import { ProductService } from "../../../modules/products/product.service";

class FoodicsProductHandler {
  async handleCreate(payload: Record<string, unknown>) {
    return ProductService.syncFromFoodics(payload);
  }

  async handleUpdate(payload: Record<string, unknown>) {
    return ProductService.syncFromFoodics(payload);
  }

  async handleDelete(payload: Record<string, unknown>) {
    return ProductService.deleteFromFoodics(payload);
  }
}

export const foodicsProductHandler = new FoodicsProductHandler();
