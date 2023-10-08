import {createContext, useContext} from "react";
import {action, makeObservable, observable, runInAction} from "mobx";
import {CategoryService} from "../services/category.service";
import {StoreStatus} from "../types";

export class CategoryStore {
  @observable
  items: string[] = [];

  @observable
  selectedCategory: string | null = null;

  @observable
  status: StoreStatus = StoreStatus.IDLE;

  constructor() {
    makeObservable(this);
    this.fetchCategories();
  }

  @action
  async fetchCategories() {
    this.status = StoreStatus.LOADING;
    this.items = [];

    const categories = await CategoryService.getAll();

    runInAction(() => {
      this.items = categories;
      this.status = StoreStatus.LOADED;
    });
  }

  @action
  selectCategory(category: string) {
    // validate that category name exists
    this.selectedCategory = category;
  }
}

export const CategoryContext = createContext(new CategoryStore());

export const useCategories = () => useContext(CategoryContext);
