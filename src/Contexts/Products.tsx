import React, { useState, createContext, useContext } from 'react'

interface Product {
  image: {
    imageUrl: string
  }
  sku: string
  name: string
}

interface ProductContextData {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<any>>;
}

export const ProductsContext = createContext<ProductContextData>([] as unknown as ProductContextData)

const  Products: React.FC = ({ children })  => {
  const [products, setProducts] = useState([])

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProduct() {
  const context = useContext(ProductsContext)
  const { products, setProducts } = context
  return { products, setProducts }
}

export default Products
