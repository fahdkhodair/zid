import { Router } from "express";

import productRoutes from "../modules/products/product.routes";
import orderRoutes from "../modules/orders/order.routes";
import webhookRoutes from "../webhooks/webhooks.routes";

const router = Router();

// Products
router.use("/products", productRoutes);

// Orders
router.use("/orders", orderRoutes);

// Webhooks
router.use("/webhooks", webhookRoutes);

export default router;