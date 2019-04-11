import { NavigationActions } from 'react-navigation'
import { createReactNavigationReduxMiddleware, createReduxContainer } from 'react-navigation-redux-helpers'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import React from 'react'
import { Alert, BackHandler } from 'react-native'
import ProtoTypes from 'prop-types'
import routes from 'screens'
import { dark, light, ThemeProvider } from 'theme'
import { IActionCreators, IConnectedProps } from '../screens/Products/types'
import { IAppState } from './types'
import { bindActionCreators } from 'redux'

export const routerMiddleware = createReactNavigationReduxMiddleware(state => state.nav)

const App = createReduxContainer(routes)

interface IProps {
  nav: any
  dispatch: any
  theme?: boolean
}

interface IState {

}

const mapStateToProps: MapStateToProps<IConnectedProps, IProps, IAppState> = state => ({
  nav: state.nav,
  theme: state.app.theme,
})

const mapDispatchToProps: MapDispatchToProps<IActionCreators, IProps> = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  )

class Navigator extends React.Component<IProps, IState> {
  static propTypes = {
    dispatch: ProtoTypes.func.isRequired,
    nav: ProtoTypes.shape({
      index: ProtoTypes.number,
      key: ProtoTypes.string.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { nav, dispatch } = this.props

    if (nav.index === 0) {
      Alert.alert(
        'Exit',
        'Are you sure you want close the labeltone?',
        [
          {
            onPress: () => BackHandler.exitApp(),
            text: 'Yes',
          },
          {
            style: 'cancel',
            text: 'Cancel',
          },
        ],
        { cancelable: false },
      )
    }
    dispatch(NavigationActions.back())

    return true
  }

  render() {
    const { nav, dispatch, theme } = this.props
    return <ThemeProvider theme={theme ? light : dark}>
      <App state={nav} dispatch={dispatch}/>
    </ThemeProvider>
  }
}

export default connect(mapStateToProps)(Navigator)
