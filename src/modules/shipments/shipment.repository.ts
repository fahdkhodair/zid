import { Shipment } from "./shipment.model";

import {
  ICreateShipmentDTO,
  IUpdateShipmentDTO,
} from "./shipment.types";

export class ShipmentRepository {
  async create(data: ICreateShipmentDTO) {
    return Shipment.create(data);
  }

  async findByOrderId(orderId: string) {
    return Shipment.findOne({ orderId });
  }

  async findByTrackingNumber(trackingNumber: string) {
    return Shipment.findOne({ trackingNumber });
  }

  async findByExternalId(externalShipmentId: string) {
    return Shipment.findOne({ externalShipmentId });
  }

  async findAll() {
    return Shipment.find().sort({ createdAt: -1 });
  }

  async updateByOrderId(
    orderId: string,
    data: IUpdateShipmentDTO
  ) {
    return Shipment.findOneAndUpdate(
      { orderId },
      { $set: data },
      {
        new: true,
        runValidators: true,
      }
    );
  }
}