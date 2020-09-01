/**
 * @author Vanderson de Moura Vauruk
 */

import React, { Fragment, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native'

import { getProductAction } from '../../../services/api'

import Styles from './ProductDetails.styles'
import Theme from '../../../Theme'
import Loading from '../../Loading'
import ProductImage from '../ProductImage'
import Price from '../Item/Price'
import ModalProduct from '../../Modal'
import { Colors } from '../../../Theme/colors'

const ProductDetails: () => React$Node = ({ route, navigation }) => {
  const onPress = () => navigation.goBack()
  const [product, setProduct] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)

  const { sku } = route.params

  useEffect(() => {
    setLoading(true)
    getProductAction(sku).then(res => {
      if (res.status !== 200) {
        throw 'Error in load product'
      }
      setLoading(false)
      setProduct(res.data)
      // console.log('getProductAction ', res.data)
    })
  }, [])

  const handleOpenModal = isOpen => {
    setOpenModal(isOpen)
  }

  return (
    <Fragment>
      <ModalProduct product={product} openModal={openModal} onOpenModal={handleOpenModal}>
        <Text>{product?.name}</Text>
      </ModalProduct>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {!loading && product && (
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles.scrollView}>
            <View style={Styles.header}>
              <Text style={Styles.fontHeader}>Detalhes de PRODUTOS</Text>
            </View>
            <View style={Theme.item}>
              <View>
                <Text style={Styles.textTop}>{product?.name}</Text>
                <View style={Styles.image}>
                  <ProductImage imageObjects={product.imageObjects} width={163} height={163} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10
                }}
              >
                <View style={{ flex: 0.5 }}>
                  <Price item={product} withPriceSpecification={true} />
                </View>
                <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                  <Text style={Styles.brand}>{product?.brand?.name}</Text>
                  <Text style={Theme.textCode}>cod: {sku}</Text>
                </View>
              </View>
              <View style={Styles.button}>
                {!!product?.inventory?.quantity && (
                  <TouchableOpacity style={Theme.button} onPress={() => handleOpenModal(true)}>
                    <Text style={Theme.buttonText}>compre</Text>
                  </TouchableOpacity>
                )}
                {!!product?.inventory?.quantity && (
                  <TouchableOpacity style={Theme.buttonSecondary} onPress={onPress}>
                    <Text style={Theme.buttonTextSecondary}>avise-me</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View style={{ padding: 10 }}>
                <Text style={[Styles.fontHeader, { textTransform: 'capitalize' }]}>
                  Descrição do Produto
                </Text>
                <Text style={{ marginTop: 5, marginRight: 2, marginBottom: 10 }}>
                  {product?.details?.shortDescription}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderColor: Colors.LIGHT_GRAY,
                    borderTopWidth: 1,
                    paddingTop: 5
                  }}
                >
                  <View style={{ flex: 0.8 }}>
                    <TouchableOpacity onPress={onPress}>
                      <Text style={Styles.textRead}>Continuar Lendo</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 0.2, alignItems: 'flex-end' }}>
                    <Text style={Theme.textCode}>cod:</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
        {loading && <Loading />}
      </SafeAreaView>
    </Fragment>
  )
}

export default ProductDetails
