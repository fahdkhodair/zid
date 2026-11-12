
import { ProductService } from "../../../modules/products/product.service";

class ZidProductHandler {
  async handleCreate(payload: Record<string, unknown>) {
    // Create or update the product in our system
    return ProductService.syncFromZid(payload);
  }

  async handleUpdate(payload: Record<string, unknown>) {
    return ProductService.syncFromZid(payload);
  }

  async handleDelete(payload: Record<string, unknown>) {
    return ProductService.deleteFromZid(payload);
  }
}

export const zidProductHandler = new ZidProductHandler();
