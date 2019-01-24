import ClientBase from "./client-base";

const sing = {};

class ClientProducts {
  constructor() {
    this.client = ClientBase;
  }

  get(sku) {
    return this.client.get(`products/${sku}`);
  }

  getList(page = 1, size = 10) {
    return this.client.get(`products?page=${page}&size=${size}`);
  }
}

if (!sing.client) sing.client = new ClientProducts();
export default sing.client;
