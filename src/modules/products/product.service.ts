
import { ProductRepository } from "./product.repository";
import { ICreateProductDTO } from "./product.types";

export class ProductService {
  constructor(
    private productRepository: ProductRepository
  ) {}

  async createProduct(data: ICreateProductDTO) {
    return this.syncProduct(data);
  }

  async syncProduct(data: ICreateProductDTO) {
    const existingProduct =
      await this.productRepository.findByZidId(
        data.zidProductId
      );

    if (existingProduct) {
      return this.productRepository.updateByZidId(
        data.zidProductId,
        data
      );
    }

    return this.productRepository.create(data);
  }

  async getProducts() {
    return this.productRepository.findAll();
  }
}
