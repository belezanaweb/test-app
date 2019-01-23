import { observable, action } from 'mobx';
class NavigationStore {
  @observable currentScreen = undefined;

  @action _getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return this._getActiveRouteName(route);
    }
    return route.routeName;
  }

  @action trackScreen(prevState, currentState) {
    const currentScreen = this._getActiveRouteName(currentState);
    const prevScreen = this._getActiveRouteName(prevState);
    if (prevScreen !== currentScreen) {
      this.currentScreen = currentScreen;
    }
  }
}

export default new NavigationStore();
