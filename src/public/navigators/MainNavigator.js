import React, { Component } from 'react';
import { createAppContainer,createStackNavigator ,createDrawerNavigator} from 'react-navigation';
import Home from '../../screens/home'
import leaderboard from '../../screens/leaderboard'
import login from '../../screens/login'
import register from '../../screens/register'
import sider from '../../screens/sideeffect'
import  { Text } from 'react-native';


const AppNavigator = createStackNavigator(
  {
      Home:{
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
          header: null
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
