import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class LocationTrackingScreen extends Component {
  renderBody = () => {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text>Welcome to LocationTrackingScreen</Text>
      </View>
    );
  };

  render() {
    return <>{this.renderBody()}</>;
  }
}
