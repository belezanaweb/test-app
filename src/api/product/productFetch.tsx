export const productListFetch = async (size: number) => {
    const result = await fetch(`https://pacific-wave-51314.herokuapp.com/products?page=1&size=${size}`);
    const products = await result.json();
    return products;
}

export const productFetch = async (sku: string) => {
    const result = await fetch(`https://pacific-wave-51314.herokuapp.com/products/${sku}`);
    const product = await result.json();
    return product;
}