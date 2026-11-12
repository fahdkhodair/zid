import { Product } from "./product.model";
import { ICreateProductDTO } from "./product.types";

export class ProductRepository {
  async create(data: ICreateProductDTO) {
    return Product.create(data);
  }

  async findByZidId(zidProductId: string) {
    return Product.findOne({ zidProductId });
  }

  async findAll() {
    return Product.find();
  }

  async updateByZidId(
    zidProductId: string,
    data: Partial<ICreateProductDTO>
  ) {
    return Product.findOneAndUpdate(
      { zidProductId },
      data,
      { new: true }
    );
  }

  async deleteByZidId(zidProductId: string) {
    return Product.findOneAndDelete({ zidProductId });
  }
}