import { IZidProduct } from "./zid.types";

import {
  ICreateProductDTO,
} from "../../modules/products/product.types";

export class ZidMapper {
  static toProductDTO(
    product: IZidProduct
  ): ICreateProductDTO {
    return {
      zidProductId: String(product.id),
      name: product.name,
      price: product.price,
      sku: product.sku ?? "",
    };
  }
}