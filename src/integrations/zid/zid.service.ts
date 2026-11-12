import { ZidClient } from "./zid.client";
import { ZidMapper } from "./zid.mapper";

import {
  IZidProduct,
  IZidApiResponse,
} from "./zid.types";

export class ZidService {
  constructor(
    private readonly zidClient: ZidClient
  ) {}

  async getProducts() {
    return this.zidClient.get<
      IZidApiResponse<IZidProduct[]>
    >("/products");
  }

  async getProduct(productId: string) {
    return this.zidClient.get<
      IZidApiResponse<IZidProduct>
    >(`/products/${productId}`);
  }

  async mapProduct(product: IZidProduct) {
    return ZidMapper.toProductDTO(product);
  }
}