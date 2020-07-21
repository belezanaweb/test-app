export const productFetch = async () => {
    const result = await fetch("https://pacific-wave-51314.herokuapp.com/products?page=1&size=5");
    const products = await result.json();
    return products;
}