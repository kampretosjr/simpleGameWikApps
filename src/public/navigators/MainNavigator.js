import React, { Component } from 'react';
import { createAppContainer,createStackNavigator ,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';
import Home from '../../screens/home'
import leaderboard from '../../screens/leaderboard'
import login from '../../screens/login'
import register from '../../screens/register'
import Registerx from '../../screens/Registerx'
import sider from '../../screens/sideeffect'
import auth from '../../screens/auth'
import bridge from '../../screens/bridge'
import  { Text } from 'react-native';

const authLoading = createStackNavigator(
  {auth}
)
const AppNavigator = createStackNavigator(
  {
    
    bridge:{
      screen: bridge,
      navigationOptions: () => ({
        header: null
      }),
    },
      Game:{
        screen: Home,
        navigationOptions: () => ({
          header: null
        }),
      },
      leaderboard:{
        screen:leaderboard,
        navigationOptions:{
          title:"LEADER BOARD"
        }
      },
      login:{
        screen: login,
        navigationOptions: {
          title:"LOG in"
        },
      },
      register:{
        screen: Registerx,
        navigationOptions: () => ({
          header: null
        }),
      },

      
  }
)
  const drawer = createDrawerNavigator (
    {AppNavigator},{contentComponent:sider}

  )

export default createAppContainer(createSwitchNavigator({
  
  drawer,
  authLoading,
}))
