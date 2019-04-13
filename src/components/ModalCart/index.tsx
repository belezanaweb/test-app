import * as React from 'react'
import { IProduct } from 'store/product/types'
import { ButtonClose, ButtonCloseText, Content, Container, Block, Header, Title } from './styles'
import { Button, ButtonText, ProductListItem } from 'components'

interface IProps {
  visible: boolean
  onPress: () => void
  product: IProduct
}


export const ModalCart: React.FunctionComponent<IProps> = ({ visible, product, onPress }): JSX.Element => (
  <Container
    transparent={true}
    animationType="fade"
    visible={visible}>
    <Block>
      <Content>
        <Header>
          <Title>Produto Adicionado</Title>
          <ButtonClose onPress={onPress}>
            <ButtonCloseText>X</ButtonCloseText>
          </ButtonClose>
        </Header>
        <ProductListItem item={product}/>
        <Button onPress={onPress}>
          <ButtonText>CONTINUAR COMPRANDO</ButtonText>
        </Button>
      </Content>
    </Block>
  </Container>
)
