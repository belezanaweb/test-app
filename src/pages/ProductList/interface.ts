export interface Product {
  image: {
    imageUrl: string
  }
  sku: string
  name: string
  priceSpecification: {
    discount: number
    installments: {
      numberOfPayments: number
      monthlyPayment: number
      installments?: {
        monthlyPayment: number
        numberOfPayments: number
      }
    }
    maxPrice: number
    originalPrice: number
    percent: number
    price: number
  }
  inventory?: {
    quantity: number
  }
  details?: {
    shortDescription: string
    description: string
  }
  brand?: {
    name: string
  }
}
