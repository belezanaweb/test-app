import { Button, ButtonText, ProductImage } from 'components'
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
  PriceBlock,
} from './styles'
import { formatReal } from 'helpers'

interface IProps {
  item: IProduct
  border?: boolean
  onPress?: (sku: string) => void
}

export const ProductListItem: React.FunctionComponent<IProps> = ({ item, border, onPress }) =>
  <ProductBlock border={border}>
    <ProduckBlockImage>
      <ProductImage images={item.imageObjects}/>
      <ProductCode>cod: {item.sku}</ProductCode>
    </ProduckBlockImage>

    <ProductBlockDetail>
      <ProductText>{item.name}</ProductText>

     <PriceBlock>
       {item.priceSpecification.discount ? (
         <ProductPriceOld>{formatReal(
           item.priceSpecification.discount + item.priceSpecification.originalPrice)}</ProductPriceOld>
       ) : null}
       <ProductPrice>
         {formatReal(item.priceSpecification.originalPrice)}
       </ProductPrice>
     </PriceBlock>

      {onPress ?
        <Button onPress={() => onPress(item.sku)}>
          <ButtonText>VER DETALHES</ButtonText>
        </Button>
      : null}
    </ProductBlockDetail>
  </ProductBlock>

