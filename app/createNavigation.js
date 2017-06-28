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
import { scheduleRedirect, resetRedirect, appBoot } from './actions';
import {
  Welcome,
  Booting,
  Signup,
  Login
} from './Scenes';

const SettingsNavigation = StackNavigator(
  {
    settings: { screen: () => <Text>Settings Screen</Text> },
    settings2: { screen: () => <Text>Settings 2 Screen</Text> }
  }
)

const HomeNavigation = StackNavigator(
  {
    home: { screen: () => <Text>Home Screen</Text> },
    home2: { screen: () => <Text>Home 2 Screen</Text> }
  }
)

const AppNavigation = TabNavigator(
  {
    homeTab: { screen: HomeNavigation },
    rewardsTab: { screen: () => <Text>Rewards screen</Text> },
    settingsTab: { screen: SettingsNavigation },
  }
);

const OnboardingNavigation = StackNavigator(
  {
    waitingList: { screen: () => <Text>Waitinglist</Text> },
    onboarding1: { screen: () => <Text>Onboarding 1</Text> },
    onboarding2: { screen: () => <Text>Onboarding 2</Text> },
    onboarding3: { screen: () => <Text>Onboarding 3</Text> },
  }
);

const RegisterNavigation = StackNavigator(
  {
    welcome: { screen: Welcome, navigationOptions: { header: null }},
    signup: { screen: Signup },
    login: { screen: Login }
  }
);

const RootNavigation = TabRouter(
  {
    booting: { screen: Booting, path: 'booting'},
    register: { screen: RegisterNavigation, path: 'register'  },
    onboarding: { screen: OnboardingNavigation  },
    app: { screen: AppNavigation },
  },
  {
    initialRouteName: 'booting',
  }
)


class AppNavigator extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleUrl = this.handleUrl.bind(this);
  }

  static router = RootNavigation

  handleUrl(url) {
    console.log('handle url')
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
    console.log('component mounted');
    // this.props.navigation.dispatch(appBoot())

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
        lazy
        animationEnabled={false}
      />
    );
  }
}

export default AppNavigator;
