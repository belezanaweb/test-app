export const productFetch = async (size: number) => {
    const result = await fetch(`https://pacific-wave-51314.herokuapp.com/products?page=1&size=${size}`);
    const products = await result.json();
    return products;
}