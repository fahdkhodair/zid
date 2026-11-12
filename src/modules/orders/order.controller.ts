import {
  Request,
  Response,
  NextFunction,
} from "express";

import { OrderRepository } from "./order.repository";
import { OrderService } from "./order.service";
import { ICreateOrderDTO } from "./order.types";

const orderRepository = new OrderRepository();
const orderService = new OrderService(orderRepository);

export class OrderController {
  createOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const order = await orderService.createOrder(
        req.body as ICreateOrderDTO
      );

      res.status(201).json({
        success: true,
        data: order,
      });
    } catch (error) {
      next(error);
    }
  }
  async getOrders(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const orders = await orderService.getOrders();

      res.status(200).json({
        success: true,
        data: orders,
      });
    } catch (error) {
      next(error);
    }
  }
}