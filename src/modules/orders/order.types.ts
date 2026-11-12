export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "completed"
  | "cancelled"
  | "failed";

export interface IOrderItem {
  productId: string;
  zidProductId: string;
  foodicsProductId?: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface IOrder {
  zidOrderId: string;
  foodicsOrderId?: string;
  customerName: string;
  customerPhone: string;
  items: IOrderItem[];
  subtotal: number;
  total: number;
  status: OrderStatus;
  paymentStatus: string;
  source: "zid" | "foodics";
}

export interface ICreateOrderDTO {
  zidOrderId: string;
  customerName: string;
  customerPhone: string;
  items: IOrderItem[];
  subtotal: number;
  total: number;
  paymentStatus: string;
}

export interface IUpdateOrderDTO {
  status?: OrderStatus;
  foodicsOrderId?: string;
  paymentStatus?: string;
}