import {createContext, useContext} from "react";
import {action, makeObservable, observable, runInAction} from "mobx";
import {CategoryService} from "../services/category.service";
import {Product, StoreStatus} from "../types";
import {ProductService} from "../services/product.service";

export class ProductStore {
  @observable
  items: Product[] = [];

  @observable
  filteredItems: Product[] = [];

  @observable
  selectedProduct: Product | null = null;

  @observable
  status: StoreStatus = StoreStatus.IDLE;

  constructor() {
    makeObservable(this);
    this.fetchProducts();
  }

  @action
  async fetchProducts() {
    this.status = StoreStatus.LOADING;
    this.items = [];
    this.filteredItems = [];

    const products = await ProductService.getAll();

    runInAction(() => {
      this.items = products;
      this.filteredItems = products;
      this.status = StoreStatus.LOADED;
    });
  }

  @action
  filterItems(category: string | null) {
    console.log('category: ', category);
    if (!category) {
      this.filteredItems = this.items;
      return;
    }

    this.filteredItems = this.items.filter((product) => product.category === category);
  }

  @action
  selectProduct(product: Product) {
    // validate that product exists
    this.selectedProduct = product;
  }
}

export const ProductContext = createContext(new ProductStore());

export const useProducts = () => useContext(ProductContext);
