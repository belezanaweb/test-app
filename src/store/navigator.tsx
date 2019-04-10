import { NavigationActions } from 'react-navigation'
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import React from 'react'
import { Alert, BackHandler } from 'react-native'
import ProtoTypes from 'prop-types'
import routes from 'screens'

export const routerMiddleware = createReactNavigationReduxMiddleware(state => state.nav)

const App = createReduxContainer(routes)

interface IProps {
  nav: any
  dispatch: any
}

interface IState {

}
class navigator extends React.Component<IProps, IState> {
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
        { cancelable: false }
      )
    }
    dispatch(NavigationActions.back())

    return true
  }

  render() {
    const { nav, dispatch } = this.props
    return <App state={nav} dispatch={dispatch} />
  }
}

const mapStateToProps = ({ nav }) => ({ nav })

export default connect(mapStateToProps)(navigator)
