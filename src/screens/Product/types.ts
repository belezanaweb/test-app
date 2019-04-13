import { NavigationScreenProp } from 'react-navigation'
import { IProduct } from 'store/product/types'

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
}

export interface IState {
  modal: boolean
}
