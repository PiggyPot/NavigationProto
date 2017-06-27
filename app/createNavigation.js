import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
  TabView,
  StackRouter,
  TabRouter,
  CardStack,
  createNavigator,
  CardStackTransitioner,
  TabBarBottom,
  TabBarTop
} from 'react-navigation';
import React, { Component } from 'react';
import { Linking, Text } from 'react-native';


class AppNavigator extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleUrl = this.handleUrl.bind(this);
  }

  static router = TabRouter(
    {
      auth: { screen: () => <Text>Hey this is the auth tab</Text>, path: 'auth' },
      unauth: { screen: () => <Text>Hey this is the unauth tab</Text>, path: 'unauth' }
    },
    {
      initialRouteName: 'auth'
    }
  );

  handleUrl(url) {
    const
      { navigation } = this.props,
      { dispatch } = navigation,
      uriPrefix = 'piggy://',
      params = {};
    let path = url.split(uriPrefix)[1];

    if (!path) { path = url; }

    const action = AppNavigator.router.getActionForPathAndParams(path, params);

    if (action) {
      dispatch(action);
    }
  }

  componentDidMount() {
    Linking.addEventListener('url', ({ url }) => {
      this.handleUrl(url);
    });

    Linking.getInitialURL().then(
      (url) => url && this.handleUrl(url)
    );
  }

  render() {
    // const { navigation } = this.props;
    // console.log(this.props,  AppNavigator.router);
    //
    // const { state, dispatch } = navigation;
    // const { routes, index } = state;
    // const Component = AppNavigator.router.getComponentForState(state);
    // let childNavigation = { dispatch, state: routes[index] };
    // childNavigation = addNavigationHelpers(childNavigation);
    return (
      <TabView
        navigation={this.props.navigation}
        router={AppNavigator.router}
        tabBarComponent={TabBarBottom}
        tabBarPosition="bottom"
      />
    );
  }
}

export default AppNavigator;
