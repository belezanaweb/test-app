import { NavigationScreenProp } from 'react-navigation'
import { IProduct } from 'store/product/types'

export interface IConnectedProps {
  refreshing: boolean
  loading: boolean
  data: IProduct[]
}

export interface IActionCreators {
  ProductsLoad: any
  ProductsPaginate: any
  ThemeSwitch: any
}

export interface IProps extends IConnectedProps, IActionCreators {
  navigation: NavigationScreenProp<any, any>
}

export interface IState {
  progress: boolean
}
