import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import routes from '../../constants/routes';

export default class StationDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromStation: null,
      toStation: null,
    };
  }

  selectStation = type => {
    const {navigation} = this.props;
    const {fromStation, toStation} = this.state;
    navigation.navigate(routes.STATIONS_LISTING, {
      setStation: this.setStation,
      type,
      fromStationId: fromStation ? fromStation.id : null,
      toStationId: toStation ? toStation.id : null,
    });
  };

  setStation = station => {
    if (station.type === 'from') {
      this.setState({
        fromStation: {
          id: station.id,
          name: station.name,
          code: station.code,
        },
      });
    } else {
      this.setState({
        toStation: {
          id: station.id,
          name: station.name,
          code: station.code,
        },
      });
    }
  };

  static navigationOptions = {
    title: 'THATS MY STATION',
  };

  renderFromStations = () => {
    const {fromStation} = this.state;
    return (
      <TouchableOpacity onPress={() => this.selectStation('from')}>
        <Card containerStyle={{padding: 0}}>
          <Text
            style={{
              paddingLeft: 10,
              paddingTop: 10,
            }}>
            FROM :
          </Text>
          <ListItem
            roundAvatar
            title={
              fromStation ? `${fromStation.code} - ${fromStation.name}` : `Select From Station`
            }
          />
        </Card>
      </TouchableOpacity>
    );
  };

  renderToStations = () => {
    const {toStation} = this.state;
    return (
      <TouchableOpacity onPress={() => this.selectStation('to')}>
        <Card containerStyle={{padding: 0}}>
          <Text
            style={{
              paddingLeft: 10,
              paddingTop: 10,
            }}>
            TO :
          </Text>
          <ListItem
            roundAvatar
            title={toStation ? `${toStation.code} - ${toStation.name}` : `Select To Station`}
          />
        </Card>
      </TouchableOpacity>
    );
  };

  renderStart = () => {
    const {fromStation, toStation} = this.state;
    return (
      <View style={[{width: '80%', margin: 10, alignSelf: 'center'}]}>
        <Button
          onPress={() => {}}
          title="Start"
          color="#00B0FF"
          disabled={!fromStation || !toStation}
        />
      </View>
    );
  };

  renderForm = () => {
    return (
      <>
        {this.renderFromStations()}
        {this.renderToStations()}
        {this.renderStart()}
      </>
    );
  };

  render() {
    return <>{this.renderForm()}</>;
  }
}

StationDetailsScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
