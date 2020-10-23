import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import Card from '../../src/components/Card'
import { formatCurrencyReal } from '../../src/util/currency'

const ProductMock = {
  image: {
    imageUrl:
      'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/lanvin-modern-princess-edp-90ml-41625-3978307386665513340.jpg',
  },
  sku: '4165',
  name: 'Sweet Star New Brand Eau de Parfum - Perfume Feminino 100ml',
  priceSpecification: {
    discount: 22,
    installments: { numberOfPayments: 1, monthlyPayment: 43 },
    maxPrice: 65,
    originalPrice: 43,
    percent: 34,
    price: 43,
  },
}

describe('Image', () => {
  const title = 'card'
  test('should be able to render an image', () => {
    const component = render(<Card testID={title} data={ProductMock} />)

    const imageCard = component.getByTestId(`${title} image`)
    expect(imageCard.props.source.uri).toBe(ProductMock.image.imageUrl)
  })
})

describe('Title', () => {
  const title = 'card'
  test('should be able to render a title', () => {
    const component = render(<Card testID={title} data={ProductMock} />)

    const imageCard = component.getByTestId(`${title} description`)
    expect(imageCard.props.children).toBe(ProductMock.name)
  })
})

describe('Price', () => {
  const title = 'card'
  test('should be able to render a price', () => {
    const component = render(<Card testID={title} data={ProductMock} />)

    const imageCard = component.getByTestId(`${title} price`)
    expect(imageCard.props.children).toBe(
      formatCurrencyReal(ProductMock.priceSpecification.originalPrice),
    )
  })
})
