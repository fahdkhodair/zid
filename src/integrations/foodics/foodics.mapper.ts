import { IFoodicsProduct } from "./foodics.types";

import {
  ICreateProductDTO,
} from "../../modules/products/product.types";

export class FoodicsMapper {
  static toProductDTO(
    product: IFoodicsProduct
  ): ICreateProductDTO {
    return {
      zidProductId: "",
      name: product.name,
      price: product.price,
      sku: product.sku ?? "",
    };
  }
}