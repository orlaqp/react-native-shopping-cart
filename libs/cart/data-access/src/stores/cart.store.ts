import {Product} from "@cart/products/data-access";
import {action, computed, makeObservable, observable} from "mobx";
import {createContext, useContext} from "react";

export class CartStore {
  @observable
  items: Product[];

  @computed
  get totalValue() {
    return this.items.reduce((prev, cur) => prev + cur.price, 0);
  }

  constructor() {
    makeObservable(this);
    this.items = [];
  }

  @action
  addItem(item: Product) {
    this.items.push(item);
  }

  @action
  removeItem(item: Product) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  @action
  clearItems() {
    this.items = [];
  }
}

const CartContext = createContext(new CartStore());

export const useCart = () => useContext(CartContext);
