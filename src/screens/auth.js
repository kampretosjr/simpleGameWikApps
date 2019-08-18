import React, { Component } from 'react'
import {AsyncStorage, Text, View } from 'react-native'


export class auth extends Component {
  constructor(props) {
    super(props)
    this.cekToken()   
}

  cekToken = async () =>{
      const Token = AsyncStorage.getItem("token")
      await  this.props.navigation.navigate(Token ? 'Game':'bridge')
    }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default auth
