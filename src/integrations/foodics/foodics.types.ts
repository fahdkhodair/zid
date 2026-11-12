export interface IFoodicsConfig {
  baseURL: string;
  accessToken: string;
}

export interface IFoodicsProduct {
  id: string;
  name: string;
  sku?: string;
  price: number;
  is_active?: boolean;
}

export interface IFoodicsOrder {
  id: string;
  reference?: string;
  status: string;
  total_price: number;

  products?: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
}

export interface IFoodicsApiResponse<T> {
  data: T;
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
  };
}

export interface IFoodicsCreateOrderDTO {
  reference: string;
  products: Array<{
    product_id: string;
    quantity: number;
  }>;
}