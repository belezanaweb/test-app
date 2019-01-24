import Types from "../actions-types";

function receivedOne(products, action) {
  return {
    ...products,
    [action.data.sku]: action.data
  };
}

function receivedList(products, action) {
  const nextProducts = { ...products };

  action.data.forEach(product => {
    nextProducts[product.sku] = product;
  });

  return nextProducts;
}

function handleReceivedProduct(products = {}, action) {
  switch (action.type) {
    case Types.PRODUCT_RECEIVED_ONE:
      return receivedOne(products, action);

    case Types.PRODUCT_RECEIVED_LIST:
      return receivedList(products, action);

    default:
      return products;
  }
}

function makeOrderProducts(order = [], action) {
  switch (action.type) {
    case Types.PRODUCT_RECEIVED_LIST:
      let newOrder = [...order];

      action.data.forEach(product => {
        newOrder.push(product.sku);
      });

      return newOrder;

    default:
      return order;
  }
}

export default (products = {}, action) => ({
  list: handleReceivedProduct(products.list, action),
  order: makeOrderProducts(products.order, action)
});
