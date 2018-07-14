import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, Icon } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  navOptions

static navigationOptions = ({ navigation }) => {

  navOptions = navigation;
  const{ params = {}} = navigation.state;

  return{
    headerLeft:(
      <Button transparent
        onPress = {() => params._onHeaderEventControl()}>
        <Icon
          name='menu'
          style={{fontSize: 30, color:'white'}}
        />
      </Button>
    )
  }
}

onHeaderEventControl(){
  const { params = {}} = navOptions.state;
  params._openNav()
}

componentDidMount(){
  this.props.navigation.setParams({
    _onHeaderEventControl: this.onHeaderEventControl,
    _openNav: () => this.openDrawer()
  })
}

openDrawer(){
  this.props.navigation.openDrawer();
}


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.contentText}>
          Screen 3 -- Dashboard
        </Text>
      </View>
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
