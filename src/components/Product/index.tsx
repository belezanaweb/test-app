import { Button, ButtonText } from 'components'
import React from 'react'
import { IProduct } from 'store/product/types'
import {
  htmlStyle,
  ProductBlock,
  ProductCode,
  ProductDescTitle,
  ProductPrice,
  ProductPriceOld,
  ProductPricePayment,
  ProductText,
  Row,
  Col,
  ColRight,
  BrandName,
  CarouselBackgroundView,
  ImageContainer,
  ProductImage,
} from './styles'
import HTMLView from 'react-native-htmlview'
import Carousel  from 'react-native-snap-carousel'
import { formatReal } from 'helpers'

interface IProps {
  item: IProduct
  onPress: (sku: string) => void
}

export const Product: React.FunctionComponent<IProps> = ({ item, onPress }) => {
  if (!item) return null

  const _renderItem = ({item}) => {
    return (
      <ImageContainer>
        <ProductImage source={{ uri: item.large }}/>
      </ImageContainer>
    )
  }

  return <ProductBlock>
    <ProductText>{item.name}</ProductText>

    <CarouselBackgroundView>
    <Carousel
      data={item.imageObjects}
      renderItem={_renderItem}
      sliderWidth={360}
      itemWidth={200}
      layout={'default'}
      firstItem={0}
    />
    </CarouselBackgroundView>

    <Row>
      <Col>
        {item.priceSpecification.discount ? (
          <ProductPriceOld>{formatReal(
            item.priceSpecification.discount + item.priceSpecification.originalPrice)}</ProductPriceOld>
        ) : null}
        <ProductPrice>
          {formatReal(item.priceSpecification.originalPrice)}
        </ProductPrice>

        <ProductPricePayment>
          {item.priceSpecification.installments.numberOfPayments}X de {formatReal(item.priceSpecification.installments.monthlyPayment)}
        </ProductPricePayment>
      </Col>
      <ColRight>
        <BrandName>{item.brand.name}</BrandName>
        <ProductCode>cod: {item.sku}</ProductCode>
      </ColRight>
    </Row>




    <Button
      border={!item.inventory.quantity}
      onPress={() => onPress(item.sku)}>
      <ButtonText
        primary={!item.inventory.quantity}
      >{
        item.inventory.quantity > 0 ? 'COMPRE' : 'AVISE-ME'
      }</ButtonText>
    </Button>

    <ProductDescTitle>Descrição do Produto</ProductDescTitle>
    <HTMLView
      value={item.details.description}
      stylesheet={htmlStyle}
    />

  </ProductBlock>
}


