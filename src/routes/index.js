import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import routes from '../constants/routes';
import LocationTrackingScreen from '../screens/LocationTrackingScreen';
import StationScreen from '../screens/StationDetailScreen';
import StationListingScreen from '../screens/StationsListingScreen';
import {headerStyle, headerTitleStyle} from '../styles/header';

const AppStack = createStackNavigator(
  {
    [routes.STATIONS]: StationScreen,
    [routes.TRACKING]: LocationTrackingScreen,
    [routes.STATIONS_LISTING]: StationListingScreen,
  },
  {
    initialRouteName: routes.STATIONS,
    defaultNavigationOptions: {
      headerStyle,
      headerTitleStyle,
      headerRight: <View />,
    },
  },
);

export default createAppContainer(AppStack);
