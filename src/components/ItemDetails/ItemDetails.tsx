import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'

import { Button, Card, Image, ModalAddToCart, ModalSendsEmail } from '../../components'
import * as S from './styles'
import { toMoney } from './../../utils/numberUtils'
import ContinueReading from '../ContinueReading/ContinueReading'
import { ProductDetails } from './../../types/ProductDetails'

type Props = {
  item: ProductDetails
}

const ItemDetails = ({ item }: Props) => {
  const [addToCart, setAddToCart] = useState(false)
  const [sendEmail, setSendEmail] = useState(false)

  const { imageObjects, priceSpecification, name, details, brand, inventory, sku } = item

  const numberOfPayments = priceSpecification?.installments.numberOfPayments
  const monthlyPayment = priceSpecification?.installments.monthlyPayment
  const nameBrand = brand?.name
  const maxPrice = priceSpecification?.maxPrice
  const price = priceSpecification?.price

  const hasInstallments = priceSpecification?.installments
  const hasDetails = details?.description
  const hasProductDiscount = maxPrice && price && maxPrice > price
  const hasProduct = inventory?.quantity && inventory?.quantity > 0

  const handleOnPress = () => (hasProduct ? setAddToCart(true) : setSendEmail(true))

  const renderTextOfButton = () => (hasProduct ? 'comprar' : 'avise-me')

  if (!priceSpecification) {
    return null
  }

  function renderButtonRules() {
    return (
      <Button onPress={handleOnPress} secondary={!hasProduct}>
        {renderTextOfButton()}
      </Button>
    )
  }

  function renderInstallmentsNumberOfPayments() {
    return (
      <>
        {hasInstallments && (
          <S.PriceInstallments>
            {numberOfPayments}x de R$ {toMoney(monthlyPayment)}
          </S.PriceInstallments>
        )}
      </>
    )
  }

  function renderNameAndCode() {
    return (
      <S.ContentNameAndCode>
        <S.ShortName>{nameBrand}</S.ShortName>
        <S.Code>cod: {sku}</S.Code>
      </S.ContentNameAndCode>
    )
  }

  function renderPriceOfProduct() {
    return (
      <>
        {hasProductDiscount ? (
          <View testID="oldprice">
            <S.PriceOld>R$ {toMoney(maxPrice)}</S.PriceOld>
            <S.Price>R$ {toMoney(price)}</S.Price>
          </View>
        ) : (
          <View testID="newprice">
            <S.Price>R$ {toMoney(price)}</S.Price>
          </View>
        )}
      </>
    )
  }

  return (
    <View testID="item">
      <ModalAddToCart modal={addToCart} setModal={setAddToCart} />
      <ModalSendsEmail modal={sendEmail} setModal={setSendEmail} />
      <ScrollView>
        <Card>
          <S.Content>
            <S.ProductName>{name}</S.ProductName>
            <S.ContentImage>
              <Image large source={{ uri: imageObjects[0].extraLarge }} />
            </S.ContentImage>
            <S.WrapperPriceAndName>
              <S.ContentPrices>
                {renderPriceOfProduct()}
                {renderInstallmentsNumberOfPayments()}
              </S.ContentPrices>
              {renderNameAndCode()}
            </S.WrapperPriceAndName>
            {renderButtonRules()}
            <S.Details>
              <S.TitleDescriptionProduct>Descrição do Produto</S.TitleDescriptionProduct>
              {hasDetails && (
                <>
                  <ContinueReading description={details?.description} />
                </>
              )}
            </S.Details>
          </S.Content>
        </Card>
      </ScrollView>
    </View>
  )
}

export default ItemDetails
