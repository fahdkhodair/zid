export interface IProduct {
  zidProductId: string;
  foodicsProductId?: string;
  name: string;
  price: number;
  sku: string;
  description?: string;
  isActive: boolean;
}

export interface ICreateProductDTO {
  zidProductId: string;
  foodicsProductId?: string;
  name: string;
  price: number;
  sku: string;
}

export interface IUpdateProductDTO {
  name?: string;
  price?: number;
  sku?: string;
}