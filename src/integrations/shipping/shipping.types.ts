
export interface IShippingAddress {
  city: string;
  district?: string;
  street: string;
  building?: string;
  floor?: string;
  apartment?: string;
  postalCode?: string;
  country: string;
}

export interface IShippingCustomer {
  name: string;
  phone: string;
  email?: string;
}

export interface IShippingItem {
  name: string;
  quantity: number;
  price: number;
  sku?: string;
}

export interface ICreateShipmentDTO {
  orderId: string;
  customer: IShippingCustomer;
  address: IShippingAddress;
  items: IShippingItem[];
  paymentMethod: "cash" | "paid";
  codAmount?: number;
  notes?: string;
}

export interface IShipmentResponse {
  providerShipmentId: string;
  trackingNumber: string;
  trackingUrl?: string;
  status: string;
}

export interface IShipmentTracking {
  trackingNumber: string;
  status: string;
  description?: string;
  updatedAt?: string;
}

export interface ICancelShipmentResponse {
  success: boolean;
  message?: string;
}
