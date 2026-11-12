import {
  Request,
  Response,
  NextFunction,
} from "express";

import { ShipmentRepository } from "./shipment.repository";
import { ShipmentService } from "./shipment.service";

const shipmentRepository = new ShipmentRepository();

const shipmentService = new ShipmentService(
  shipmentRepository
);

export class ShipmentController {
  async getAllShipments(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const shipments =
        await shipmentService.getAllShipments();

      res.status(200).json({
        success: true,
        data: shipments,
      });
    } catch (error) {
      next(error);
    }
  }

  async getShipment(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const shipment =
        await shipmentService.getShipment(
          req.params.orderId as string
        );

      res.status(200).json({
        success: true,
        data: shipment,
      });
    } catch (error) {
      next(error);
    }
  }
}