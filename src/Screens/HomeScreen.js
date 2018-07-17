import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {  Container, Header, Left, Body, Right, Button, Icon, Title , Content} from 'native-base';
import { TabNavigator, StackNavigator , DrawerNavigator} from 'react-navigation';


import MapView from 'react-native-maps';

export default class App extends Component {
render() {
  return (
    <Container >
          <Header transparent style={styles.headerView}>
            <Left transparent>
              <Button transparent onPress={() => {this.props.navigation.openDrawer();}}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body transparent>
              <Title>Home</Title>
            </Body>
            <Right transparent >
              <Button transparent>
                <Icon name='search' />
              </Button>
              <Button transparent onPress={() => {this.props.navigation.navigate('ModalScreen');}}>
                <Icon name='heart' />
              </Button>
              <Button transparent>
                <Icon name='more' />
              </Button>
            </Right>
          </Header>

          <Content style={styles.content}>
          <View style={styles.view}>
          <Button full onPress={() => {this.props.navigation.navigate('HomeDetailScreen');}}>
            <Text>Go to Detail</Text>
          </Button >
            <Text style={styles.contentText}>
              This is Content Section
            </Text>

            <Button full onPress={() => {this.props.navigation.navigate('ModalScreen');}}>
            <Text>Modal Screen</Text>

            </Button>
          </View>
          </Content>


        </Container>


  );
}


}

const styles = StyleSheet.create({
  contentText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  headerView:{

    backgroundColor: '#43F09E',

  },
  content:{
    flex: 1,
    backgroundColor: '#FB8C6D',
  }



});
