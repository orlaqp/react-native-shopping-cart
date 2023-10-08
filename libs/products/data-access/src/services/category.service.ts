export class CategoryService {
  public static getAll = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/categories');
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
}
