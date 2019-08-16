import React, { Component } from 'react';
import { createAppContainer,createStackNavigator ,createDrawerNavigator} from 'react-navigation';
import Home from '../../screens/home'
import leaderboard from '../../screens/leaderboard'
import login from '../../screens/login'
import register from '../../screens/register'
import sider from '../../screens/sideeffect'
import bridge from '../../screens/bridge'
import  { Text } from 'react-native';


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
        screen: register,
        navigationOptions: () => ({
          header: null
        }),
      },
      
  }
)
  const drawer = createDrawerNavigator (
    {AppNavigator},{contentComponent:sider}

  )
export default createAppContainer(drawer)
