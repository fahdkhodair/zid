import { Order } from "./order.model";
import {
  ICreateOrderDTO,
  IUpdateOrderDTO,
} from "./order.types";

export class OrderRepository {
  async create(data: ICreateOrderDTO) {
    return Order.create({
      ...data,
      source: "zid",
    });
  }

  async findByZidId(zidOrderId: string) {
    return Order.findOne({ zidOrderId });
  }

  async findByFoodicsId(foodicsOrderId: string) {
    return Order.findOne({ foodicsOrderId });
  }

  async findAll() {
    return Order.find().sort({ createdAt: -1 });
  }

  async updateByZidId(
    zidOrderId: string,
    data: IUpdateOrderDTO
  ) {
    return Order.findOneAndUpdate(
      { zidOrderId },
      { $set: data },
      { new: true, runValidators: true }
    );
  }
}
