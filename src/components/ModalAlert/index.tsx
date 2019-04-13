import * as React from 'react'
import { IProduct } from 'store/product/types'
import { Button, ButtonText } from 'components'
import { ButtonClose, ButtonCloseText, Content, Container, Block, Header, Title, Input } from './styles'
import { withTheme } from 'styled-components'
import { ITheme } from '../../theme'

interface IProps {
  visible: boolean
  onPress: () => void
  theme?: ITheme
  product: IProduct
}


const ModalAlertComponent: React.FunctionComponent<IProps> = ({ visible, theme, onPress }): JSX.Element => (
  <Container
    transparent={true}
    animationType="fade"
    visible={visible}>
    <Block>
      <Content>
        <Header>
          <Title>Avisar quando disponível</Title>
          <ButtonClose onPress={onPress}>
            <ButtonCloseText>X</ButtonCloseText>
          </ButtonClose>
        </Header>

        <Input
          autoFocus={true}
          placeholder={'Digite seu nome'}
          placeholderTextColor={theme.grayLight}
        />

        <Input
          placeholder={'Digite seu e-mail'}
          keyboardType={'email-address'}
          placeholderTextColor={theme.grayLight}
        />

        <Button onPress={onPress}>
          <ButtonText>ENVIAR</ButtonText>
        </Button>
      </Content>
    </Block>
  </Container>
)

export const ModalAlert = withTheme(ModalAlertComponent)
