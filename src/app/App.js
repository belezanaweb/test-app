import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'mobx-react';
import  RootRouter  from 'routes/RootRouter';
import NavigationService from 'services/NavigationService';
import NavigationStore from 'stores/navigation/NavigationStore';
import stores from 'stores';

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <View style={{ flex: 1 }}>
          <RootRouter
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
            onNavigationStateChange={(prevState, currentState) => {
              NavigationStore.trackScreen(prevState, currentState);
            }}
          />
        </View>
      </Provider>
    );
  }
}
