/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {  Container, Header, Left, Body, Right, Button, Icon, Title , Content} from 'native-base';
import { TabNavigator, StackNavigator , DrawerNavigator} from 'react-navigation';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class MyComponent extends Component {
  render() {
    return (



      <MapView
      provider = { PROVIDER_GOOGLE }
      style = { styles.container }
      initialRegion={{
        latitude:39.7392,
        longitude:-104.9903,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421,
        showsCompass:'true'
      }}
      >
      <Button 
      style={styles.drawerButton}
      onPress={() => {this.props.navigation.openDrawer();}}>
        <Icon name='menu' />
      </Button>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  drawerButton:{
    paddingLeft:  10,
    paddingTop: 20,
  },
  container: {
    width:'100%',
    height:'100%',
  },
});
