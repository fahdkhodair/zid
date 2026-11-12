
import { shippingClient } from "./shipping.client";

import {
  ICreateShipmentDTO,
  IShipmentResponse,
  IShipmentTracking,
  ICancelShipmentResponse,
} from "./shipping.types";

class ShippingService {
  // Create a new shipment
  async createShipment(
    data: ICreateShipmentDTO
  ): Promise<IShipmentResponse> {
    const response = await shippingClient.post<
      IShipmentResponse,
      ICreateShipmentDTO
    >("/shipments", data);

    return response;
  }

  // Track shipment
  async trackShipment(
    trackingNumber: string
  ): Promise<IShipmentTracking> {
    const response = await shippingClient.get<IShipmentTracking>(
      `/shipments/${encodeURIComponent(trackingNumber)}/tracking`
    );

    return response;
  }

  // Cancel shipment
  async cancelShipment(
    shipmentId: string
  ): Promise<ICancelShipmentResponse> {
    const response = await shippingClient.post<
      ICancelShipmentResponse,
      Record<string, never>
    >(`/shipments/${encodeURIComponent(shipmentId)}/cancel`, {});

    return response;
  }
}

export const shippingService = new ShippingService();
