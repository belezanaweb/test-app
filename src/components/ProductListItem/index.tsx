import { Button, ProductImage, ButtonText } from 'components'
import React from 'react'
import { IProduct } from 'store/product/types'
import {
  ProduckBlockImage,
  ProductBlock,
  ProductBlockDetail,
  ProductCode,
  ProductPrice,
  ProductPriceOld,
  ProductText,
} from './styles'
import { formatReal } from 'helpers'

interface IProps {
  item: IProduct
  onPress: (sku: string) => void
}

const ProductListItem: React.FunctionComponent<IProps> = ({ item, onPress }) => <ProductBlock>
  <ProduckBlockImage>
    <ProductImage images={item.imageObjects}/>
    <ProductCode>cod: {item.sku}</ProductCode>
  </ProduckBlockImage>

  <ProductBlockDetail>
    <ProductText>{item.name}</ProductText>
    {item.priceSpecification.discount ? (
      <ProductPriceOld>{formatReal(
        item.priceSpecification.discount + item.priceSpecification.originalPrice)}</ProductPriceOld>
    ) : null}
    <ProductPrice>
      {formatReal(item.priceSpecification.originalPrice )}
    </ProductPrice>

    <Button onPress={() => onPress(item.sku)}>
      <ButtonText>VER DETALHES</ButtonText>
    </Button>
  </ProductBlockDetail>
</ProductBlock>

export default ProductListItem

