/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react'
import { SafeAreaView, Image, View, Dimensions } from 'react-native'
import axios from 'axios'

import ModalRemember from '../components/modalRemember'
import ModalBuy from '../components/modalBuy'
import Container from '../components/Container'
import Typography from '../components/Typography'
import Button from '../components/Button'
import Card from '../components/Card'
import Row from '../components/Row'

import COLORS from '../constants/COLORS'
import { ScrollView } from 'react-native-gesture-handler'

const App = props => {
  const [openmodalRemember, setopenmodalRemember] = React.useState(false)
  const [openModalBuy, setopenModalBuy] = React.useState(false)
  const [openDescription, setopenDescription] = React.useState(false)

  const item = props.navigation.getParam('item')
  const installments = item.product.priceSpecification.installments

  React.useEffect(() => {
    return () => {
      // cleanup
    }
  }, [openmodalRemember])

  return (
    <SafeAreaView>
      <ModalRemember
        open={openmodalRemember}
        close={() => {
          setopenmodalRemember(false)
          props.navigation.navigate('Home')
        }}
      />
      <ModalBuy
        open={openModalBuy}
        close={() => {
          setopenModalBuy(false)
          props.navigation.navigate('Home')
        }}
      />
      <Container fullscreen spacebetween backgroundcolor={COLORS.GRAY_LIGHT}>
        <ScrollView>
          <Typography bold uppercase title>
            Detalhes do produto
          </Typography>
          <Card flex1>
            <Typography bold fontsize={'22px'}>
              {item.name}
            </Typography>
            <View style={{ height: 5 }} />
            <Image
              style={{ flex: 4, height: (Dimensions.get('screen').height / 100) * 39 }}
              source={{ uri: item.image.large }}
            />

            <View style={{ flex: 1.5 }}>
              {item.maxPrice !== item.price && (
                <Typography textleft color={COLORS.GRAY_LIGHT}>
                  {'R$ '} {item.maxPrice}
                </Typography>
              )}
              <Row justifycontent="space-between" direction={'row'} flex={2}>
                <Typography color={COLORS.ORANGE} fontsize={'30px'}>
                  {'R$ '} {item.price}
                </Typography>
                <Typography bold fontsize={'20px'}>
                  {item.product.brand.name || item.product.brand.line.name || ''}
                </Typography>
              </Row>
              <Row justifycontent="space-between" direction={'row'} flex={2}>
                <Typography fontsize={'20px'} color={COLORS.GRAY}>
                  {`${installments.numberOfPayments}x de R$ ${parseFloat(
                    installments.monthlyPayment
                  ).toFixed(2)}`}
                </Typography>
                <Typography fontsize={'12px'} color={COLORS.GRAY_LIGHT}>
                  code:{item.product.sku}
                </Typography>
              </Row>
            </View>
            {item.product.inventory.quantity > 0 ? (
              <Button primary title={'COMPRE'} onPress={() => setopenModalBuy(!openModalBuy)} />
            ) : (
              <Button
                primary
                rounded
                title={'AVISE-ME'}
                onPress={() => setopenmodalRemember(!openmodalRemember)}
              />
            )}
            <Typography textleft title bold>
              Descriçao do produto
            </Typography>
            {openDescription ? (
              <ScrollView>
                <Typography color={COLORS.GRAY}>
                  {item.product.brand.description || item.product.details.description}
                </Typography>
              </ScrollView>
            ) : (
              <Typography numberOfLines={4} color={COLORS.GRAY}>
                {item.product.brand.description || item.product.details.description}
              </Typography>
            )}

            <Typography
              color={COLORS.ORANGE}
              bold
              fontsize="18px"
              textright
              onPress={() => setopenDescription(!openDescription)}
            >
              Ver mais
            </Typography>
          </Card>
        </ScrollView>
      </Container>
    </SafeAreaView>
  )
}
export default App
