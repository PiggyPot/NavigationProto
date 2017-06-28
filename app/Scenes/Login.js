import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { login } from '../actions';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login Scene</Text>
        <Button onPress={() => this.props.navigation.navigate('signup') } title="Signup" />
        <Button onPress={() => this.props.login() } title="log me in" />

      </View>
    );
  }
}

export default connect(undefined, (dispatch) => ({
  login: () => dispatch(login())
}))(Login);
