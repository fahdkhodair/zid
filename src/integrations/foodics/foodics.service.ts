import { FoodicsClient } from "./foodics.client";

import {
  IFoodicsProduct,
  IFoodicsApiResponse,
  IFoodicsOrder,
  IFoodicsCreateOrderDTO,
} from "./foodics.types";

export class FoodicsService {
  constructor(
    private readonly foodicsClient: FoodicsClient
  ) {}

  async getProducts() {
    return this.foodicsClient.get<
      IFoodicsApiResponse<IFoodicsProduct[]>
    >("/products");
  }

  async getProduct(productId: string) {
    return this.foodicsClient.get<
      IFoodicsApiResponse<IFoodicsProduct>
    >(`/products/${productId}`);
  }

  async createOrder(data: IFoodicsCreateOrderDTO) {
    return this.foodicsClient.post<
      IFoodicsApiResponse<IFoodicsOrder>
    >("/orders", data);
  }

  async getOrder(orderId: string) {
    return this.foodicsClient.get<
      IFoodicsApiResponse<IFoodicsOrder>
    >(`/orders/${orderId}`);
  }
}