import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Welcome extends Component {
  render() {
    return (
      <View>
        <Text>Welcome Scene</Text>
        <Button onPress={() => this.props.navigation.navigate('login') } title="Login" />
        <Button onPress={() => this.props.navigation.navigate('signup') } title="Signup" />
      </View>
    );
  }
}
