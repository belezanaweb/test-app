import React, { useState, useEffect, useRef } from 'react'
import { Image, Dimensions, ScrollView, Animated, PixelRatio, View } from 'react-native'

import { BoxSafe, Box, TouchableButton } from '../../atomic/atoms/Spaces'

import Header from '../../atomic/atoms/Header'

import Loading from '../../atomic/atoms/Loading'
import colors from '../../atomic/constants/colors'
import { connect } from 'react-redux'

import * as productAction from '../../redux/actions/productActions'

import { TextRegular } from '../../atomic/atoms/Titles'
import Button from '../../atomic/atoms/Button'
import Accordon from '../../atomic/atoms/Accordon'
import Icons from '../../atomic/atoms/Icons'
import { find } from 'lodash'

function Product({ navigation, _getInfo, dataProduct, darkMode }) {
  const [id] = useState(navigation.state.params.id)
  const [image] = useState(navigation.state.params.image)

  const imgDefault =
    'https://lh3.googleusercontent.com/RiRMSl_w2LMN-a32b1l64KfrRxVyoBf5yJFzvCTLv4Q6E7IQIB5G__lMw6d-GJ2qUw'

  const [opacity] = useState(new Animated.Value(0))
  const [cat, setCat] = useState('')
  const [showImage, setShowImage] = useState(false)

  const [accordion, setAccordion] = useState(false)

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

    setShowImage(true)
  }, [dataProduct])

  return (
    <>
      <Header backButton={true} title={'DETALHES DO PRODUTO'} navigation={navigation} />
      <Box pl={10} pr={10} pb={10} bg={colors.lightGray}>
        {dataProduct.isLoading ? (
          <Loading name={'spinner'} size={30} color={colors.gold}></Loading>
        ) : (
          <Box border={4} flex={1} bg={colors.white} pl={10} pr={10} pt={8} pb={10}>
            <ScrollView
              ref={scrollViewRef}
              scrollEnabled={accordion}
              style={{ marginBottom: 0, flex: 1 }}
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
                    {dataProduct.data.priceSpecification.installments.numberOfPayments}x de R${' '}
                    {dataProduct.data.priceSpecification.installments.monthlyPayment.toFixed(2)}
                  </TextRegular>
                )}

                <TextRegular mb={13} size={17} align={'flex-end'} color={colors.gray}>
                  cod: {dataProduct.data.sku}
                </TextRegular>
              </View>

              <Button title={'COMPRE'} bg={colors.orange} textColor={colors.white} />

              <TextRegular weight={'500'} mt={18} align={'flex-start'} size={16}>
                Descrição do Produto
              </TextRegular>

              <Accordon
                title={'Continue lendo'}
                subtitle={dataProduct.data.details.occasion}
                content={dataProduct.data.details.description}
                isOpen={accordion}
              />
            </ScrollView>
            <TouchableButton
              mt={30}
              onPress={() => {
                setAccordion(!accordion)
                if (accordion === false) {
                  scrollViewRef.current.scrollToEnd({ animated: true })
                } else {
                  scrollViewRef.current.scrollTo({ y: 0, animated: true })
                }
              }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
