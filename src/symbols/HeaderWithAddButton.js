import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "@builderx/icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

export class HeaderWithAddButton extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.leftIconButton}>
            <Icon name={"ios-list"} type={"Ionicons"} style={styles.leftIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.rect}>
          <Text numberOfLines={1} style={styles.title}>
            Wik-Apps
          </Text>
        </View>
        <View style={styles.rightWrapper}>
          <TouchableOpacity
            onPress={()=> {
              this.props.navigation.navigate('leaderboard')
            }}
            style={styles.button}
          >
            <Icon
              name={"ios-star"}
              type={"Ionicons"}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(HeaderWithAddButton)


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#EFEFF4",
    flexDirection: "row",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#007AFF",
    fontSize: 32
  },
  rect: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#000",
    fontSize: 17,
    fontFamily: "roboto-regular",
    fontWeight: "600",
    lineHeight: 17
  },
  rightWrapper: {
    flex: 0.5,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  button: {},
  rightIcon: {
    backgroundColor: "transparent",
    color: "rgba(255,201,0,1)",
    fontSize: 32
  }
});
