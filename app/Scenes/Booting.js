import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { appBoot } from '../actions';

class Booting extends Component {
  componentDidMount() {
    console.log(this.props.navigation.state)
    console.log('Booting mounted');
    this.props.dispatch(appBoot());
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>booting…</Text>
      </View>
    );
  }
}

export default connect((state) => {
  console.log(state)
  return {};
})(Booting)
