import React from 'react';
import { View, Text, Button } from 'react-native';



export default class DrawerScreen extends React.Component {
  render() {
    return(
      <View>
        <Text> I am the Drawer </Text>
        <Button
          title='Hello Button'
        />
      </View>
    );
  }
}
