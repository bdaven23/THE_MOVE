import React from 'react';
import { TabNavigator, StackNavigator , DrawerNavigator} from 'react-navigation';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import Screen4 from '../Screens/Screen4';
import HomeScreen from '../Screens/HomeScreen';
import ModalScreen from '../Screens/ModalScreen';
import HomeDetailScreen from '../Screens/HomeDetailScreen';
import MapScreen from '../Screens/MapScreen';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DrawerScreen from './DrawerScreen';




//PUSH STACK
const HomeModalStack = StackNavigator({

  HomeScreen:HomeScreen,


  HomeDetailScreen:HomeDetailScreen,
},{
  headerMode: 'none'

});

//MODAL STACK
const HomeStack = StackNavigator({
  HomeModalStack:HomeModalStack,

  ModalScreen:ModalScreen,


},{
  headerMode: 'none',
  mode: 'modal',

});

const DashboardStack = StackNavigator({
  Dashboard: {
    screen: Screen3,
    navigationOptions:()=>({
      title: 'Dashboard',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor:'#390AE4',
        elevation:0,
        shadowOpacity:0,
      }
    })
  },
},{
});

const FriendsStack = StackNavigator({
  Friends: {
    screen: Screen2,
    navigationOptions:()=>({
      title: ' Friends',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor:'#390AE4',
        elevation:0,
        shadowOpacity:0,
      }
    })
  },
  Screen4: Screen4
},{
});

const ProfileStack = StackNavigator({
  Dashboard: {
    screen: Screen1,
    navigationOptions:()=>({
      title: 'Profile',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor:'#390AE4',
        elevation:0,
        shadowOpacity:0,
      }
    })
  },
},{
});

const TabNav = TabNavigator({
  Profile: {
      screen: ProfileStack,
      navigationOptions: () =>({
        tabBarIcon: ({ tintColor }) => {
          return (
            <IconIonicons
            name='ios-contact'
            size={26}
            color={tintColor}
          />
          );
        }
      })
    },
  Friends: {
      screen: FriendsStack,
      navigationOptions: () =>({
        tabBarIcon: ({ tintColor }) => {
          return (
            <IconIonicons
            name='ios-contacts'
            size={26}
            color={tintColor}
          />
          );
        }
      })
    },
  Dashboard: {
      screen: DashboardStack,
      navigationOptions: () =>({
        tabBarIcon: ({ tintColor }) => {
          return (
            <IconIonicons
            name='ios-globe-outline'
            size={26}
            color={tintColor}
          />
          );
        }
      })
    }
  }, {
    tabBarOptions: {
      showIcon:true,

    }
  });

const ProfileStackTab = StackNavigator({
  Tabs: TabNav,
},{
  headerMode: 'none'
});

export default Drawer = DrawerNavigator ({
  Home:{
    screen: HomeStack
  },
  Profile:{
    screen: ProfileStackTab
  },

  MapView:{
    screen:MapScreen
  },

},{

});
