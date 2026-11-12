import { Request, Response, NextFunction } from "express";
import { ProductService } from "./product.service";
import { ProductRepository } from "./product.repository";

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);

export class ProductController {
 createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { zidProductId, foodicsProductId, name, price, sku } = req.body;
      const product = await productService.createProduct({ zidProductId, foodicsProductId, name, price, sku });

      res.status(201).json({
        success: true,
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }
  async getProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const products = await productService.getProducts();

      res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      next(error);
    }
  }
}