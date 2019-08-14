import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class CupertinoButtonInfo extends Component {
  render() {
    return (

      <TouchableOpacity onPressIn={this.props.sound} style={[styles.root, this.props.style]}>
        <Text style={styles.caption}>wik</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,86,107,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 100
  },
  caption: {
    color: "rgba(0,0,0,1)",
    margin: 0,
    fontSize: 25,
    fontFamily: "roboto-900",
    fontWeight: "500"
  }
});
