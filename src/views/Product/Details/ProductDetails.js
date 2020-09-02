/**
 * @author Vanderson de Moura Vauruk
 */

import React, { Fragment, useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native'

import { getProductAction } from '../../../services/api'

import Styles from './ProductDetails.styles'
import Theme from '../../../Theme'
import Loading from '../../Loading'
import ProductImage from '../ProductImage'
import Price from '../Item/Price'
import ModalProduct from '../../Modal'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../../../Theme/colors'
import WebViewDetail from './WebViewDetail'

const chevron_down = 'chevron-down'
const chevron_up = 'chevron-up'

const ProductDetails: () => React$Node = ({ route, navigation }) => {
  const [product, setProduct] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const [chevron, setChevron] = useState(chevron_down)
  const [email, setEmail] = useState(undefined)
  const { sku } = route.params

  useEffect(() => {
    setLoading(true)
    getProductAction(sku).then(res => {
      if (res.status !== 200) {
        throw 'Error in load product'
      }
      setLoading(false)
      setProduct(res.data)
    })
  }, [])

  const handleOpenModal = isOpen => {
    setOpenModal(isOpen)
  }
  const onShowAll = () => {
    if (chevron === chevron_down) {
      setChevron(chevron_up)
    } else {
      setChevron(chevron_down)
    }
  }

  const renderShopAdd = () => {
    return (
      <View>
        <Text>{product?.name}</Text>
        <TouchableOpacity
          style={[Theme.button, { marginTop: 20 }]}
          onPress={() => handleOpenModal(false)}
        >
          <Text style={Theme.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const renderNotifyMe = () => {
    return (
      <View>
        <TextInput
          style={Styles.input}
          onChangeText={text => setEmail(text)}
          placeholder={'Email'}
          value={email}
        />
        <TouchableOpacity
          style={[Theme.buttonSecondary, { marginTop: 20 }]}
          onPress={() => handleOpenModal(false)}
        >
          <Text style={Theme.buttonTextSecondary}>Enviar</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <Fragment>
      <ModalProduct product={product} openModal={openModal} onOpenModal={handleOpenModal}>
        {!!product?.inventory?.quantity && renderShopAdd()}
        {!product?.inventory?.quantity && renderNotifyMe()}
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
                {!product?.inventory?.quantity && (
                  <TouchableOpacity style={Theme.buttonSecondary} onPress={onPress}>
                    <Text style={Theme.buttonTextSecondary}>avise-me</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View style={{ padding: 10 }}>
                <Text style={[Styles.fontHeader, { fontSize: 16, textTransform: 'capitalize' }]}>
                  Descrição do Produto
                </Text>

                {chevron === chevron_down && (
                  <Text style={{ marginTop: 5, marginRight: 2, marginBottom: 10, fontSize: 12 }}>
                    {product?.details?.shortDescription}
                  </Text>
                )}

                {chevron === chevron_up && <WebViewDetail html={product?.details?.description} />}
                {chevron === chevron_down && (
                  <View
                    style={{
                      opacity: 0.5,
                      marginBottom: 10,
                      marginTop: -30,
                      height: 20,
                      backgroundColor: Colors.WHITE
                    }}
                  ></View>
                )}

                <TouchableOpacity onPress={onShowAll}>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderColor: Colors.LIGHT_GRAY,
                      borderTopWidth: 1,
                      paddingTop: 5
                    }}
                  >
                    <View style={{ flex: 0.8 }}>
                      <Text style={Styles.textRead}>Continuar Lendo</Text>
                    </View>
                    <View style={{ flex: 0.2, alignItems: 'flex-end' }}>
                      <FontAwesome name={chevron} size={15} color={Colors.PINK} />
                    </View>
                  </View>
                </TouchableOpacity>
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
