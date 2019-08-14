import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class CupertinoButtonInfo2 extends Component {
  render() {
    return (
      <TouchableOpacity onPressIn={this.props.sound} style={[styles.root, this.props.style]}>
        <Text style={styles.caption}>ayy</Text>
      </TouchableOpacity>
    );
  }
}


