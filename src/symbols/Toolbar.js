import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "@builderx/icons";
import { withNavigation } from 'react-navigation';


export class Toolbar extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>

        <TouchableOpacity style={styles.buttonWrapper1}
            onPress={ ()=> {
              this.props.navigation.navigate('register')
            }}>
          <Icon name={"ios-navigate"} type={"Ionicons"} style={styles.icon1} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWrapper2} 
            onPress={ ()=> {
              this.props.navigation.navigate('login')
            }}>
          <Icon name={"television"} type={"MaterialCommunityIcons"} style={styles.icon2}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWrapper3}>
          <Icon name={"ios-share"} type={"Ionicons"} style={styles.icon3} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonWrapper4,
            {
              backgroundColor: this.props.active
                ? "rgba(0, 122, 255,0.1)"
                : "transparent"
            }
          ]}
        >
          <Icon
            name={
              this.props.active
                ? "ios-information-circle"
                : "ios-information-circle-outline"
            }
            type={"Ionicons"}
            style={styles.icon4}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(Toolbar)


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8
  },
  buttonWrapper1: {
    height: 38,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    opacity: 1,
    justifyContent: "center",
    minWidth: 30,
    maxWidth: 36,
    borderRadius: 4
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#007AFF",
    fontSize: 24
  },
  buttonWrapper2: {
    height: 38,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    opacity: 1,
    justifyContent: "center",
    minWidth: 30,
    maxWidth: 36,
    borderRadius: 4
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#007AFF",
    fontSize: 24
  },
  buttonWrapper3: {
    height: 38,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    opacity: 1,
    justifyContent: "center",
    minWidth: 30,
    maxWidth: 36,
    borderRadius: 4
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#007AFF",
    fontSize: 24
  },
  buttonWrapper4: {
    height: 38,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    opacity: 1,
    justifyContent: "center",
    minWidth: 30,
    maxWidth: 36,
    borderRadius: 4
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#007AFF",
    fontSize: 24
  }
});
