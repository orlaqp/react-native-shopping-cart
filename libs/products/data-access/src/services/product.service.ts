import {Product} from "../types";
import products from "../../../feature/src/components/products/products";

export class ProductService {
  public static getAll = async (): Promise<Product[]> => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      return json.products;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
}
