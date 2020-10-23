import React, { useState } from 'react'

import { Product } from '../../pages/ProductList/interface'

import { formatCurrencyReal } from '../../util/currency'
import { removeTags } from '../../util/formatHtmlText'

import Modal from '../../components/Modal'
import Button from '../../components/Button'
import Accordion from '../../components/Accordion'
import Input from '../../components/Input'

import * as S from './styles'

interface ProductDetailProps {
  navigation: any
  route: {
    params: Product
  }
}

const ProductDetail = ({ route }: ProductDetailProps) => {
  const {
    image,
    name,
    priceSpecification,
    brand,
    sku,
    details,
    inventory,
  } = route.params
  const hasPromotion = !!priceSpecification.discount
  const hasStock = !!inventory?.quantity
  const [showModalConfirmation, setShowModalConfirmation] = useState(false)
  const [showModalEmail, setShowModalEmail] = useState(false)

  const shouldShowModalConfirmation = () => {
    return (
      <S.ContainerModalConfirmation>
        <S.TitleModalConfirmation>Confirmação pedido</S.TitleModalConfirmation>
        <S.DescriptionModalConfirmation>{`Deseja adicionar ${name} ao carrinho?`}</S.DescriptionModalConfirmation>
        <Button
          styleOptional={{ marginBottom: 10 }}
          testID="modal confirmation"
          onPress={() => {
            setShowModalConfirmation(false)
          }}
        >
          Confirmar
        </Button>
        <Button
          outline={true}
          testID="modal back"
          onPress={() => {
            setShowModalConfirmation(false)
          }}
        >
          Voltar
        </Button>
      </S.ContainerModalConfirmation>
    )
  }

  const shouldShowModalEmail = () => {
    return (
      <S.WrapperCode>
        <S.DescriptionModalConfirmation>{`Me avise quando o ${name} estiver disponível`}</S.DescriptionModalConfirmation>

        <Input name="Nome" />
        <Input name="Email" />
        <Button
          styleOptional={{ marginBottom: 20 }}
          testID="modal confirmation"
          onPress={() => {
            setShowModalEmail(false)
          }}
        >
          Avise me
        </Button>

        <Button
          outline={true}
          testID="modal confirmation"
          onPress={() => {
            setShowModalEmail(false)
          }}
        >
          Voltar
        </Button>
      </S.WrapperCode>
    )
  }

  return (
    <S.ScrollView showsVerticalScrollIndicator={false}>
      <S.Container>
        <S.Title>{name}</S.Title>
        <S.Image source={{ uri: image?.imageUrl }} />
        <S.Wrapper>
          <S.WrapperPrice>
            {hasPromotion && (
              <S.Promotion>
                {formatCurrencyReal(priceSpecification.maxPrice)}
              </S.Promotion>
            )}
            <S.Price>
              {hasPromotion
                ? formatCurrencyReal(priceSpecification.originalPrice)
                : formatCurrencyReal(priceSpecification.maxPrice)}
            </S.Price>
            <S.Plots>{`${
              priceSpecification.installments.numberOfPayments > 1
                ? priceSpecification.installments.numberOfPayments + 'x'
                : ''
            } ${formatCurrencyReal(
              priceSpecification.installments.monthlyPayment,
            )}`}</S.Plots>
          </S.WrapperPrice>
          <S.WrapperCode>
            <S.Brand>{brand?.name}</S.Brand>
            <S.Code>{`cod ${sku}`}</S.Code>
          </S.WrapperCode>
        </S.Wrapper>
        <Button
          outline={!hasStock}
          testID="button ProductDetail"
          onPress={() => {
            hasStock ? setShowModalConfirmation(true) : setShowModalEmail(true)
          }}
        >
          {hasStock ? 'Compre' : 'Avise-me'}
        </Button>
        <S.ContainerAccordion>
          <S.TitleDescription>Descrição do Produto</S.TitleDescription>
          <Accordion description={removeTags(details?.description)} />
        </S.ContainerAccordion>
      </S.Container>
      {showModalConfirmation && <Modal>{shouldShowModalConfirmation()}</Modal>}
      {showModalEmail && <Modal>{shouldShowModalEmail()}</Modal>}
    </S.ScrollView>
  )
}

export default ProductDetail
