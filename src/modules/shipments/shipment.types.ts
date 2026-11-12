export type ShipmentStatus =
  | "pending"
  | "created"
  | "picked_up"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "failed"
  | "returned"
  | "cancelled";

export interface IShippingAddress {
  city: string;
  country: string;
  street: string;
  postalCode?: string;
}

export interface IShipment {
  orderId: string;
  zidOrderId: string;

  shippingCompany: string;
  trackingNumber?: string;
  trackingUrl?: string;

  status: ShipmentStatus;

  shippingAddress: IShippingAddress;

  shippingCost: number;

  externalShipmentId?: string;

  shippedAt?: Date;
  deliveredAt?: Date;
}

export interface ICreateShipmentDTO {
  orderId: string;
  zidOrderId: string;
  shippingCompany: string;
  shippingAddress: IShippingAddress;
  shippingCost: number;
}

export interface IUpdateShipmentDTO {
  trackingNumber?: string;
  trackingUrl?: string;
  status?: ShipmentStatus;
  externalShipmentId?: string;
  shippedAt?: Date;
  deliveredAt?: Date;
}

export interface IShipmentTrackingDTO {
  trackingNumber: string;
  status: ShipmentStatus;
  shippingCompany: string;
}