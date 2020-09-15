import React, { useState, useEffect, useRef } from 'react'
import { Image, ScrollView, View, StyleSheet, TextInput } from 'react-native'
import Modal from 'react-native-modal'

import { Box, TouchableButton } from '../../atomic/atoms/Spaces'

import Header from '../../atomic/atoms/Header'

import Loading from '../../atomic/atoms/Loading'
import colors from '../../atomic/constants/colors'
import { connect } from 'react-redux'

import * as productAction from '../../redux/actions/productActions'

import { TextRegular } from '../../atomic/atoms/Titles'
import Button from '../../atomic/atoms/Button'
import Input from '../../atomic/atoms/Input'
import Accordon from '../../atomic/atoms/Accordon'
import Icons from '../../atomic/atoms/Icons'

function Product({ navigation, _getInfo, dataProduct, darkMode }) {
  const [id] = useState(navigation.state.params.id)
  const [image] = useState(navigation.state.params.image)

  const imgDefault =
    'https://lh3.googleusercontent.com/RiRMSl_w2LMN-a32b1l64KfrRxVyoBf5yJFzvCTLv4Q6E7IQIB5G__lMw6d-GJ2qUw'

  const [cat, setCat] = useState('')
  const [catModal, setCatModal] = useState('')
  const [showImage, setShowImage] = useState(false)
  const [accordion, setAccordion] = useState(false)
  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const scrollViewRef = useRef()

  //getting request token
  useEffect(() => {
    _getInfo(id)
  }, [])

  useEffect(() => {
    //find image featured
    const { sku, name, releaseDate, priceSpecification } = dataProduct.data

    setCat({
      uri: image ? image : imgDefault,
      width: 163,
      height: 163
    })

    setCatModal({
      uri: image ? image : imgDefault,
      width: 83,
      height: 83
    })

    setShowImage(true)
  }, [dataProduct])

  const renderBag = () => {
    return (
      <>
        <TextRegular mb={25}>Já adicionamos na sua sacola!</TextRegular>
        <Image style={{ alignSelf: 'center' }} source={catModal} />
        <TextRegular size={13} mt={25}>
          {dataProduct.data.name}
        </TextRegular>
      </>
    )
  }

  const renderWarning = () => {
    return (
      <>
        <TextRegular size={14} mb={15}>
          Insira seus dados e avisaremos quando este produto estiver disponível
        </TextRegular>

        <Input placeholder={'Nome'} onChangeText={text => setName(text)} defaultValue={name} />

        <Input placeholder={'Email'} onChangeText={text => setEmail(text)} defaultValue={email} />
      </>
    )
  }

  return (
    <>
      <Header backButton={true} title={'DETALHES DO PRODUTO'} navigation={navigation} />
      <Box pl={10} pr={10} pb={10} bg={colors.lightGray}>
        {dataProduct.isLoading ? (
          <Loading name={'spinner'} size={30} color={colors.orange}></Loading>
        ) : (
          <Box
            border={4}
            flex={1}
            bg={colors.white}
            pl={10}
            pr={10}
            pt={8}
            pb={10}
            style={{
              shadowColor: colors.black,
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5
            }}
          >
            <ScrollView
              ref={scrollViewRef}
              scrollEnabled={accordion}
              style={{ marginBottom: 0, flex: 1, position: 'relative' }}
              showsVerticalScrollIndicator={accordion}
            >
              <TextRegular size={20} weight={'500'} align={'flex-start'} mb={12}>
                {dataProduct.data.name}
              </TextRegular>
              {showImage && (
                <Image style={{ alignSelf: 'center', marginBottom: 21 }} source={cat} />
              )}

              {/* <TextRegular
              decoration={'line-through'}
              size={14}
              align={'flex-start'}
              color={colors.gray}
            >
              R$ {dataProduct.data.priceSpecification.originalPrice.toFixed(2)}
            </TextRegular> */}

              <View flexDirection={'row'} style={{ justifyContent: 'space-between' }}>
                <TextRegular size={24} weight={'bold'} color={colors.orange}>
                  R$ {dataProduct.data.priceSpecification.originalPrice.toFixed(2)}
                </TextRegular>

                <TextRegular size={24} weight={'bold'}>
                  {dataProduct.data.brand.name}
                </TextRegular>
              </View>

              <View flexDirection={'row'} style={{ justifyContent: 'space-between' }}>
                {dataProduct.data.priceSpecification.installments && (
                  <TextRegular size={17} align={'flex-start'} color={colors.darkGray}>
                    {dataProduct.data.priceSpecification.installments.numberOfPayments}x de R$
                    {dataProduct.data.priceSpecification.installments.monthlyPayment.toFixed(2)}
                  </TextRegular>
                )}

                <TextRegular mb={13} size={17} align={'flex-end'} color={colors.gray}>
                  cod: {dataProduct.data.sku}
                </TextRegular>
              </View>

              {dataProduct.data.inventory.quantity > 0 ? (
                <Button
                  onPress={() => {
                    setModal(true)
                  }}
                  title={'COMPRE'}
                  bg={colors.orange}
                  textColor={colors.white}
                />
              ) : (
                <Button
                  onPress={() => {
                    setModal(true)
                  }}
                  title={'AVISE-ME'}
                  bg={'transparent'}
                  textColor={colors.orange}
                />
              )}

              <TextRegular weight={'500'} mt={18} align={'flex-start'} size={16}>
                Descrição do Produto
              </TextRegular>

              <Accordon
                subtitle={dataProduct.data.details.occasion}
                content={dataProduct.data.details.description}
                isOpen={accordion}
              />
            </ScrollView>
            <View
              style={{
                position: 'absolute',
                bottom: 35,
                left: 0,
                width: '100%',
                height: 25,
                opacity: accordion ? 0 : 0.5,
                backgroundColor: colors.white
              }}
            />
            <TouchableButton
              mt={15}
              onPress={() => {
                setAccordion(!accordion)
                if (accordion === false) {
                  scrollViewRef.current.scrollToEnd({ animated: true })
                } else {
                  scrollViewRef.current.scrollTo({ y: 0, animated: true })
                }
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderTopWidth: 1,
                  borderColor: colors.lightGray,
                  paddingTop: 8
                }}
              >
                <TextRegular weight={'500'} size={13} color={colors.purple}>
                  Continular lendo
                </TextRegular>

                <Icons
                  name={!accordion ? 'chevron-down' : 'chevron-up'}
                  color={colors.purple}
                  size={13}
                />
              </View>
            </TouchableButton>
            <Modal
              isVisible={modal}
              style={styles.modalView}
              hasBackdrop={true}
              backdropColor={colors.orange}
              backdropOpacity={0.6}
              onBackdropPress={() => setModal(false)}
            >
              <Box bg={'transparent'} style={{ flex: 0.5 }}>
                <Box bg={'transparent'}>
                  {dataProduct.data.inventory.quantity > 0 ? renderBag() : renderWarning()}
                </Box>
                <Button
                  bg={colors.orange}
                  textColor={colors.white}
                  title={dataProduct.data.inventory.quantity > 0 ? 'Fechar' : 'Enviar'}
                  pt={10}
                  pb={10}
                  pl={10}
                  pr={10}
                  onPress={() => setModal(false)}
                />
              </Box>
            </Modal>
          </Box>
        )}
      </Box>
    </>
  )
}

const mapStateToProps = state => ({
  dataProduct: state.productReducer,
  darkMode: state.appReducer.darkMode
})

const mapDispatchToProps = dispatch => {
  return {
    _getInfo: data => {
      dispatch(productAction.ProductRequest(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

const styles = StyleSheet.create({
  modalView: {
    flex: 0.5,
    margin: 15,
    marginTop: 40,
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 15,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})
