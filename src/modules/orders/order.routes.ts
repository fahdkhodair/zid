import { Router } from "express";
import { OrderController } from "./order.controller";
const router = Router();
const orderController = new OrderController();
router.post("/", orderController.createOrder);
router.get("/", orderController.getOrders);

export default router;
