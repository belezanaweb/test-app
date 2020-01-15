import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Wrapper,
  ProductImage,
  ContainerContent,
  ModalBuy,
  ModalWarn,
  ContainerInfo,
  BoxPrices,
  BoxSku,
  ContainerActions,
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  ButtonCloseModal,
  InputEmail,
} from './Item.style';

import MainTitle from '../../Components/Texts/MainTitle/MainTitle';
import TextDefault from '../../Components/Texts/TextDefault/TextDefault';
import ButtonPrimary from '../../Components/Buttons/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../Components/Buttons/ButtonSecondary/ButtonSecondary';
import { getProducts } from '../../Services/Products';
import { toBrazilianReal, showToast, isValidEmail } from '../../Utils/Functions';
import FullLoader from '../../Components/FullLoader/FullLoader';

import { Creators as MainActions } from '../../Store/Ducks/main';

class Item extends Component {
  state = {
    modalBuyVisible: false,
    modalWarnVisible: false,
    email: '',
  }
  refInputEmail;

  constructor(props) {
    super(props);
  }

  setModalBuyVisible(visible) {
    this.setState({modalBuyVisible: visible});
  }

  setModalWarnVisible(visible) {
    this.setState({modalWarnVisible: visible});
  }

  goToProductPage = (item) => {
    this.props.setCurrentItem(item);
  }

  render() {
    const { email } = this.state;
    const { currentItem } = this.props;

    return (
      <>
        <Wrapper>
          <MainTitle
            text={'DETALHES DO PRODUTO'}
            color={Colors.black}
            fontSize={20}
            fontWeight={'bold'} />

          <ContainerContent>
            <TextDefault
              text={currentItem.name}
              color={Colors.black}
              fontSize={24}
              letterSpacing={-0.8} />

            <ProductImage
              source={{uri: currentItem.imageObjects[0].large}}
            />

            <ContainerInfo>
              <BoxPrices>
                {
                  currentItem.priceSpecification.maxPrice > currentItem.priceSpecification.price && (
                    <TextDefault
                    text={`R$ ${toBrazilianReal(currentItem.priceSpecification.maxPrice)}`}
                    color={Colors.grey}
                    fontSize={14}
                    striked={true} />
                  )
                }

                <TextDefault
                  text={`R$ ${toBrazilianReal(currentItem.priceSpecification.price)}`}
                  color={Colors.primary}
                  fontSize={24} />

                <TextDefault
                  text={`${currentItem.priceSpecification.installments.numberOfPayments}x de ${toBrazilianReal(currentItem.priceSpecification.installments.monthlyPayment)}`}
                  color={'#999'}
                  fontSize={18} />
              </BoxPrices>
              <BoxSku>

                <TextDefault
                  text={currentItem.brand.name}
                  color={Colors.black}
                  fontSize={18} />

                <TextDefault
                  text={`cód: ${currentItem.sku}`}
                  color={Colors.grey}
                  fontSize={14} />
              </BoxSku>
            </ContainerInfo>

            <ContainerActions>
              {
                currentItem.inventory.quantity > 0 ? (
                  <ButtonPrimary
                    onPress={() => this.setModalBuyVisible(true)}
                    title={'COMPRE'} />
                ) : (
                  <ButtonSecondary
                    onPress={() => this.setModalWarnVisible(true)}
                    title={'AVISE-ME'} />
                )
              }


              <TextDefault
                text={'Descrição do Produto'}
                color={Colors.black}
                fontSize={16}
                marginTop={10}
                marginBottom={10} />

              <TextDefault
                text={currentItem.details.shortDescription}
                color={'#999'}
                fontSize={14} />
            </ContainerActions>


          </ContainerContent>


        </Wrapper>

        <ModalBuy
          animationType="slide"
          transparent={false}
          visible={this.state.modalBuyVisible}>
          <ModalWrapper>
            <ModalHeader>
              <ModalTitle>Adicionado ao carrinho</ModalTitle>
              <ButtonCloseModal onPress={() => {
                this.setModalBuyVisible(!this.state.modalBuyVisible);
              }}>
                <TextDefault
                text={'x'}
                color={Colors.primary}
                fontSize={40} />
              </ButtonCloseModal>
            </ModalHeader>

            <TextDefault
              text={`Este produto foi adicionado ao carrinho com sucesso!`}
              color={'#999'}
              fontSize={18} />
          </ModalWrapper>
        </ModalBuy>

        <ModalWarn
          animationType="slide"
          transparent={false}
          visible={this.state.modalWarnVisible}>
          <ModalWrapper>
            <ModalHeader>
              <ModalTitle>Avise-me</ModalTitle>
              <ButtonCloseModal onPress={() => {
                this.setModalWarnVisible(!this.state.modalWarnVisible);
              }}>
                <TextDefault
                text={'x'}
                color={Colors.primary}
                fontSize={40} />
              </ButtonCloseModal>
            </ModalHeader>

            <TextDefault
              text={`Informe o seu e-mail abaixo para ser informado quando houver a disponibilidade deste produto:`}
              color={'#999'}
              fontSize={18} />

            <InputEmail
              ref={ref => (this.refInputEmail = ref)}
              value={email}
              onChangeText={(text) => this.setState({email: text.toLowerCase().trim()})}
              placeholder="email@email.com"
              placeholderTextColor={'#fbb079'}
              autoCapitalize="none"
              maxLength={70}>
            </InputEmail>

            <ButtonPrimary
              onPress={() => this.setModalWarnVisible(!this.state.modalWarnVisible)}
              title={'Enviar'}
              disabled={!isValidEmail(email)} />
          </ModalWrapper>
        </ModalWarn>


      </>
    )
  }
}

const mapStateToProps = state => ({
  setCurrentItem: state.main.setCurrentItem,
  currentItem: state.main.currentItem,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MainActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item);
