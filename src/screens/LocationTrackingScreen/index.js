import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class LocationTrackingScreen extends Component {
  renderBody = () => {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={{flex: 1}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    );
  };

  render() {
    return <>{this.renderBody()}</>;
  }
}
