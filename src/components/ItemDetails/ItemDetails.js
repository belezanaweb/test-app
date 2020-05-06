import React, { useState } from 'react'
import { ScrollView, Modal } from 'react-native'

import { Button, Card, Text, Image, ShowMore, Input } from '../../components'
import colors from '../../theme/colors'
import { Content, ContentDetails, ContentImage, ContainerModal } from './styles'
import sanitizePrice from '../../helpers/sanitizePrice'

const ModalBuy = ({ modalVisible, setVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setVisible(false)}
    >
      <ContainerModal>
        <Card>
          <Content>
            <Text>Quer adicionar o item ao carrinho?</Text>
            <Button onPress={() => setVisible(false)}>Sim</Button>
            <Button secundary onPress={() => setVisible(false)}>
              Não
            </Button>
          </Content>
        </Card>
      </ContainerModal>
    </Modal>
  )
}

const ModalWarning = ({ modalVisible, setVisible }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setVisible(false)}
    >
      <ContainerModal>
        <Card>
          <Content>
            <Text>Nome</Text>
            <Input onChangeText={setName} value={name} />
            <Text>Email</Text>
            <Input onChangeText={setEmail} value={email} />
            <Button onPress={() => setVisible(false)}>Salvar</Button>
            <Button secundary onPress={() => setVisible(false)}>
              Cancelar
            </Button>
          </Content>
        </Card>
      </ContainerModal>
    </Modal>
  )
}

const ItemList = props => {
  const [isWarning, setWarning] = useState(false)
  const [isBuy, setBuy] = useState(false)

  if (!props.priceSpecification) {
    return null
  }

  return (
    <>
      <ModalWarning modalVisible={isWarning} setVisible={setWarning} />
      <ModalBuy modalVisible={isBuy} setVisible={setBuy} />
      <ScrollView>
        <Card>
          <Content>
            <Text type="h2" color={colors.dark}>
              {props.name}
            </Text>
            <ContentImage>
              <Image large source={{ uri: props.imageObjects[0].extraLarge }} />
            </ContentImage>
            {props.priceSpecification.maxPrice !== props.priceSpecification.price && (
              <Text line type="h4" color={colors.grey}>
                {sanitizePrice(props.priceSpecification.maxPrice)}
              </Text>
            )}
            <Text type="h1" color={colors.primary}>
              {sanitizePrice(props.priceSpecification.price)}
            </Text>
            {props.priceSpecification.installments && (
              <Text type="h3" color={colors.darkOpacity}>
                {props.priceSpecification.installments.numberOfPayments}x{' '}
                {sanitizePrice(props.priceSpecification.installments.monthlyPayment)}
              </Text>
            )}
            {props.inventory.quantity > 0 ? (
              <Button
                onPress={() => {
                  setBuy(true)
                }}
              >
                comprar
              </Button>
            ) : (
              <Button
                secundary
                onPress={() => {
                  setWarning(true)
                }}
              >
                avise-me
              </Button>
            )}
            <ContentDetails>
              <Text type="h4">Descrição do Produto</Text>
              <ShowMore description={props.details.description} />
            </ContentDetails>
          </Content>
        </Card>
      </ScrollView>
    </>
  )
}

export default ItemList
