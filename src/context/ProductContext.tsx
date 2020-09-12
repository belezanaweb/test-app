import React, { useState, useCallback, createContext } from 'react'

import { getProducts } from '../services/products'
import { Products } from './../types/Products'
import { WithChildren } from '../utils/helper/WithChildren'

const sizeOfPagination = 3

interface ProductData{
  products: Partial<Products>[] | null,
  thePage:number,
  productSizeList: number,
  sizeOfPagination:number,
  loadingMore:boolean,
  loading:boolean,
  getData():void,
  fetchMoreData(): void,
}

// eslint-disable-next-line prettier/prettier
const ProductContext = createContext<ProductData>({} as ProductData)

export const ProductProvider = ({ children }: WithChildren) => {
  const [products, setProducts] = useState<Products[]>([])
  const [thePage, setThePage] = useState(1)
  const [productSizeList, setProductSizeList] = useState(sizeOfPagination)
  const [loadingMore, setLoadingMore] = useState(false)
  const [loading, setLoading] = useState(true)

  const getData = useCallback(async () => {
    getProducts(thePage, productSizeList)
      .then(newProducts => {
        setProductSizeList(newProducts.length)
        setThePage(thePage + 1)
        setLoading(false)
        setProducts(newProducts)
      })
      .catch(e => {
        console.log(e)
      })
  }, [thePage, productSizeList])

  const fetchMoreData = useCallback(async () => {
    setLoadingMore(true)
    getProducts(thePage)
      .then(newProducts => {
        setProductSizeList(newProducts.length)
        setThePage(thePage + 1)
        setProducts([...products, ...newProducts])
        setLoadingMore(false)
      })
      .catch(e => {
        console.log(e)
      })
  }, [products, thePage])



  return (
    <ProductContext.Provider
      value={{
        products,
        getData,
        fetchMoreData,
        productSizeList,
        loading,
        loadingMore,
        sizeOfPagination,
        thePage
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}



export default ProductContext
