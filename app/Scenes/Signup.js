import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { createAccount } from '../actions';

class Signup extends Component {
  render() {
    return (
      <View>
        <Text>Signup Scene</Text>
        <Button onPress={() => this.props.navigation.navigate('login') } title="Login" />

        <Button onPress={() => this.props.createAccount()} title="Create Account" />

      </View>
    );
  }
}

export default connect(undefined, (dispatch) => ({ createAccount: () => dispatch(createAccount()) }))(Signup)
