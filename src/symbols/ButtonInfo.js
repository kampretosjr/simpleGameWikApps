import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

export default class CupertinoButtonInfo extends Component {
  render() {
    return (

      <TouchableOpacity onPressIn={this.props.sound} style={[ this.props.stylebutton]}>
        <Text style={this.props.styletext}>{this.props.nama}</Text>
      </TouchableOpacity>
    );
  }
}

