import React, { useEffect, useContext } from 'react'
import { ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductDetails } from '../../stores/products/productsAction'
import formatCurrency from '../../utils/formatCurrency'
import Button from '../Button'
import Accordion from '../Accordion'
import Loading from '../Loading'
import NewsLetterForm from '../NewsLetterForm'
import { ModalServiceContext } from '../ModalService'
import removeHtmlTags from '../../utils/removeHtmlTags'
import {
  ButtonContainer,
  Container,
  LeftContainer,
  ProductBrand,
  ProductCode,
  ProductCurrentCost,
  ProductImage,
  ProductImageContainer,
  ProductInfoContainer,
  ProductName,
  ProductPaymentMethod,
  ProductPreviousCost,
  RightContainer
} from './ProductDetails.styles'

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
  return <Loading />
}

export default ProductDetails
