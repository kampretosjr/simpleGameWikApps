import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialRightIconTextbox4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput placeholder={"PASSWORD"} style={styles.inputStyle} />
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
    borderColor: "rgba(21,21,21,1)",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 17,
    paddingBottom: 8,
    paddingLeft: 17,
    fontSize: 16,
    fontFamily: "times-new-roman",
    lineHeight: 16
  },
  iconStyle: {
    color: "#616161",
    fontFamily: "roboto-regular",
    fontSize: 24,
    paddingRight: 17,
    alignSelf: "center"
  }
});
