import React, { useState, createContext, useContext } from 'react'

export const ProductsContext = createContext()

export default function Products({ children }) {
  const [products, setProducts] = useState({})

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
