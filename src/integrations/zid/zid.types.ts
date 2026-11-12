export interface IZidConfig {
  baseURL: string;
  authorizationToken: string;
  managerToken: string;
}

export interface IZidProduct {
  id: string | number;
  name: string;
  sku?: string;
  price: number;
  description?: string;
  quantity?: number;
  is_active?: boolean;
}

export interface IZidOrder {
  id: string | number;
  code?: string;
  customer?: {
    name?: string;
    mobile?: string;
    email?: string;
  };
  products: Array<{
    id: string | number;
    name: string;
    sku?: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: string;
}

export interface IZidApiResponse<T> {
  status: string;
  data: T;
  message?: string;
}

export interface IZidWebhookPayload<T> {
  event: string;
  data: T;
}