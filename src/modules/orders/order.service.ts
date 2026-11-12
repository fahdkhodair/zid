
import { OrderRepository } from "./order.repository";
import { ICreateOrderDTO } from "./order.types";

export class OrderService {
  constructor(
    private orderRepository: OrderRepository
  ) {}

  async createOrder(data: ICreateOrderDTO) {
    const existingOrder =
      await this.orderRepository.findByZidId(
        data.zidOrderId
      );

    if (existingOrder) {
      throw new Error("Order already exists");
    }

    return this.orderRepository.create(data);
  }

  async getOrders() {
    return this.orderRepository.findAll();
  }
}

