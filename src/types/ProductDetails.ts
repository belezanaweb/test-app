import { Products } from './Products'

export type ProductDetails = Pick<
  Products,
  'imageObjects' | 'priceSpecification' | 'name' | 'details' | 'brand' | 'inventory' | 'sku'
>
