import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import AppNavigator from './createNavigation';
import { connect } from 'react-redux';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(App);
