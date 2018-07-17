import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title , Content } from 'native-base';


export default class App extends Component {
  render() {
    return (



      <Container>
            <Header>
              <Left>
                <Button transparent onPress={() => {this.props.navigation.navigate('HomeScreen');}}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>Header Detail</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='search' />
                </Button>
                <Button transparent>
                  <Icon name='heart' />
                </Button>
                <Button transparent>
                  <Icon name='more' />
                </Button>
              </Right>
            </Header>

            <Content>

              <Text>
                Home Screen Detail
              </Text>

            </Content>


          </Container>




    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FB8C6D',
  },
  contentText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});
