import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialRightIconTextbox2 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput placeholder={"Username"} style={styles.inputStyle} />
        <Icon
          name={"eye"}
          type={"MaterialCommunityIcons"}
          style={styles.iconStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 0,
    borderColor: "rgba(79,73,84,1)",
    borderWidth: 0
  },
  inputStyle: {
    backgroundColor: "rgba(255,255,255,1)",
    color: "#000",
    alignSelf: "flex-start",
    margin: 0,
    marginRight: 0,
    marginLeft: 12,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    shadowOpacity: 1,
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  iconStyle: {
    color: "#616161",
    fontFamily: "roboto-regular",
    fontSize: 24,
    paddingRight: 8,
    margin: 0
  }
});
