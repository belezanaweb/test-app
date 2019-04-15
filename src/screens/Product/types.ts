import { NavigationScreenProp } from 'react-navigation'
import { IProduct } from 'store/product/types'
import { ITheme } from '../../theme'

export interface IConnectedProps {
  refreshing: boolean
  loading: boolean
  product: IProduct
}

export interface IActionCreators {
  ProductLoad: any
}

export interface IProps extends IConnectedProps, IActionCreators {
  navigation: NavigationScreenProp<any, any>
  screenProps: {
    theme: ITheme
  }
}

export interface IState {
  modal: boolean
}
