import React from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import PropTypes from 'prop-types';
import Snackbar from 'react-native-snackbar';
import STATIONS from '../../constants/stations';

export default class StationListingComponent extends React.Component {
  setSelectedItem = item => {
    const {navigation} = this.props;
    const selectedFromId = navigation.getParam('fromStationId');
    const selectedToId = navigation.getParam('toStationId');
    if (selectedFromId !== item.id && selectedToId !== item.id) {
      const setStation = navigation.getParam('setStation');
      const type = navigation.getParam('type');
      setStation({...item, type});
      navigation.goBack();
    } else {
      Snackbar.show({
        title: 'Source and Destination cannot be same.',
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };

  static navigationOptions = {
    title: 'STATION LIST',
  };

  renderStationDropDown = () => {
    return (
      <SearchableDropdown
        containerStyle={{padding: 5}}
        onItemSelect={item => this.setSelectedItem(item)}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: '#ddd',
          borderColor: '#bbb',
          borderWidth: 1,
          borderRadius: 5,
        }}
        itemTextStyle={{color: '#222'}}
        items={STATIONS}
        resetValue={false}
        textInputProps={{
          placeholder: 'Type to search stations',
          underlineColorAndroid: 'transparent',
          style: {
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
          },
        }}
        listProps={{
          nestedScrollEnabled: true,
        }}
      />
    );
  };

  render() {
    return <>{this.renderStationDropDown()}</>;
  }
}

StationListingComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
