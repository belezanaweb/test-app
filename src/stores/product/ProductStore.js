import { observable, action } from 'mobx';
import { getListOfProducts, getProductBySKU } from 'api/product';

class ProductStore {
  @observable products = [];
  @observable pagination = { page: 1, size: 5, noMore: false };
  @observable product = {};
  @observable loading = false;

  @action RESET_PRODUCT_LIST() {
    this.products = [];
    this.pagination = { page: 1, size: 5, noMore: false };
  }

  @action SET_PRODUCT(product) {
    this.product = { ...product };
  }
  @action HANDLE_PAGINATION(products) {
    if (products.length == 0) {
      this.pagination.noMore = true;
    }
    this.pagination.page = this.pagination.page + 1;
  }

  @action PUSH_PRODUCTS_IN_LIST(products) {
    this.products = [...this.products, ...products];
  }

  @action getProducts = async url => {
    try {
      this.loading = true;
      const { data } = await getListOfProducts(url);
      this.PUSH_PRODUCTS_IN_LIST(data);
      this.HANDLE_PAGINATION(data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      this.loading = false;
    }
  };

  @action getProduct = async sku => {
    try {
      this.loading = true;
      const { data } = await getProductBySKU(sku);
      this.SET_PRODUCT(data);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      this.loading = false;
    }
  };

  @action getFreshListOfProducts = () => {
    this.RESET_PRODUCT_LIST();
    const { page, size } = this.pagination;
    this.getProducts({ page, size });
  };

  @action getNextPage = async () => {
    const { page, size, nextPage } = this.pagination;
    this.getProducts({ page, size, nextPage });
  };

  @action setProduct(product) {
    this.SET_PRODUCT(product);
  }
}

export default new ProductStore();
