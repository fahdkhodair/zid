
import { Router } from "express";
import { webhooksController } from "./webhooks.controller";

const router = Router();

router.post(
  "/zid",
  webhooksController.receiveZidWebhook
);

router.post(
  "/foodics",
  webhooksController.receiveFoodicsWebhook
);

router.post(
  "/shipping",
  webhooksController.receiveShippingWebhook
);

export default router;
