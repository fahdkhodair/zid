import { ShipmentRepository } from "./shipment.repository";

import {
  ICreateShipmentDTO,
  IUpdateShipmentDTO,
} from "./shipment.types";

export class ShipmentService {
  constructor(
    private readonly shipmentRepository: ShipmentRepository
  ) {}

  async createShipment(data: ICreateShipmentDTO) {
    const existingShipment =
      await this.shipmentRepository.findByOrderId(
        data.orderId
      );

    if (existingShipment) {
      return existingShipment;
    }

    return this.shipmentRepository.create(data);
  }

  async getShipment(orderId: string) {
    const shipment =
      await this.shipmentRepository.findByOrderId(
        orderId
      );

    if (!shipment) {
      throw new Error("Shipment not found");
    }

    return shipment;
  }

  async getAllShipments() {
    return this.shipmentRepository.findAll();
  }

  async updateShipmentStatus(
    orderId: string,
    status: IUpdateShipmentDTO["status"]
  ) {
    const shipment =
      await this.shipmentRepository.findByOrderId(
        orderId
      );

    if (!shipment) {
      throw new Error("Shipment not found");
    }

    const updateData: IUpdateShipmentDTO = { status };

    if (status === "delivered") {
      updateData.deliveredAt = new Date();
    }

    if (status === "picked_up") {
      updateData.shippedAt = new Date();
    }

    return this.shipmentRepository.updateByOrderId(
      orderId,
      updateData
    );
  }
}