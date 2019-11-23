/* eslint-disable react/prefer-stateless-function */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import AppNavigator from './src/routes';

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <View style={{flex: 1}}>
          <AppNavigator />
        </View>
      </>
    );
  }
}
