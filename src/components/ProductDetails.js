import React, { useEffect, useContext } from 'react'
import { ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchProductDetails } from '../stores/products/productsAction'
import formatCurrency from '../utils/formatCurrency'
import Button from './Button'
import Accordion from './Accordion'
import NewsLetterForm from './NewsLetterForm'
import { ModalServiceContext } from './ModalService'
import removeHtmlTags from '../utils/removeHtmlTags'

const ProductDetails = ({ productSku }) => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const modal = useContext(ModalServiceContext)

  useEffect(() => {
    dispatch(fetchProductDetails(productSku))
  }, [dispatch, productSku])

  if (products.selectedItem) {
    const featuredImageObject = products.selectedItem.imageObjects.find(
      imageObject => imageObject.featured
    )

    const {
      name: productName,
      priceSpecification: {
        maxPrice: previousPrice,
        price: currentPrice,
        installments: { numberOfPayments, monthlyPayment }
      },
      details: { description },
      brand: { name: brandName },
      inventory: { quantity }
    } = products.selectedItem

    const openCartModal = () =>
      modal.openModal({
        title: 'Produto adicionado no carrinho com sucesso!',
        text: `1x ${productName} - ${formatCurrency(currentPrice)}`,
        acceptButtonText: 'OK',
        dismissOnBackdropPress: false
      })

    const openWarningModal = () =>
      modal.openModal({
        title: 'Produto fora de estoque no momento!',
        text:
          'Preencha seus dados abaixo e te avisaremos em breve assim que ele ficar disponível novamente :)',
        innerComponent: <NewsLetterForm />,
        acceptButtonText: 'Enviar',
        cancelButtonText: 'Voltar',
        dismissOnBackdropPress: false
      })

    return (
      <ScrollView>
        <Container>
          <ProductName>{productName}</ProductName>
          <ProductImageContainer>
            <ProductImage
              source={{
                uri: featuredImageObject?.medium
              }}
            />
          </ProductImageContainer>
          <ProductInfoContainer>
            <LeftContainer>
              {previousPrice > currentPrice && (
                <ProductPreviousCost>{formatCurrency(previousPrice)}</ProductPreviousCost>
              )}
              <ProductCurrentCost>{formatCurrency(currentPrice)}</ProductCurrentCost>
              {numberOfPayments > 1 ? (
                <ProductPaymentMethod>
                  {numberOfPayments}x de {formatCurrency(monthlyPayment)}
                </ProductPaymentMethod>
              ) : (
                <ProductPaymentMethod>À vista</ProductPaymentMethod>
              )}
            </LeftContainer>
            <RightContainer>
              <ProductBrand>{brandName}</ProductBrand>
              <ProductCode>cod: {productSku}</ProductCode>
            </RightContainer>
          </ProductInfoContainer>
          <ButtonContainer>
            {quantity > 0 ? (
              <Button onPress={openCartModal} primary>
                Compre
              </Button>
            ) : (
              <Button onPress={openWarningModal} secondary>
                Avise-me
              </Button>
            )}
          </ButtonContainer>
          <Accordion body={removeHtmlTags(description)} title={'Descrição do Produto'} />
        </Container>
      </ScrollView>
    )
  }
  return <ProductName>LOADING</ProductName>
}

const Container = styled.View`
  margin: 0 10px 10px 10px;
  padding: 8px 10px;
  background-color: #fff;
`

const ProductName = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
`

const ProductImageContainer = styled.View`
  align-items: center;
  margin: 12px 0;
`

const ProductImage = styled.Image`
  align-items: center;
  height: 163px;
  width: 163px;
`

const ProductInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 9px;
`

const ProductCode = styled.Text`
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #c4c4c4;
`

const ProductBrand = styled.Text`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  color: #212121;
`

const LeftContainer = styled.View``
const RightContainer = styled.View``

const ProductPreviousCost = styled.Text`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #cccccc;
`

const ProductCurrentCost = styled.Text`
  font-weight: 500;
  font-size: 24px;
  color: #ff6c00;
`

const ProductPaymentMethod = styled.Text`
  font-weight: normal;
  font-size: 17px;
  color: #6f6f6f;
`

const ButtonContainer = styled.View`
  margin: 13px -5px;
`

export default ProductDetails
