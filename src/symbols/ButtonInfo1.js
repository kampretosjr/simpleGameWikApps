import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class CupertinoButtonInfo1 extends Component {
  render() {
    return (
      <TouchableOpacity onPressIn={this.props.sound}  style={[styles.root, this.props.style]}>
        <Text style={styles.caption}>ohh</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(248,231,28,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 100
  },
  caption: {
    color: "rgba(15,14,14,1)",
    fontSize: 20,
    fontFamily: "roboto-900",
    fontWeight: "500"
  }
});
