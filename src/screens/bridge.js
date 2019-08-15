import React, { Component } from "react";
import { StyleSheet, View, Image, Text ,TouchableOpacity} from "react-native";
import { Center } from "@builderx/utils";

export default class Untitled2 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../assets/images/stikps.png")}
          resizeMode={"stretch"}
          style={styles.image3}
        />
        <Center horizontal>
          <Image
            source={require("../assets/images/stikps.png")}
            resizeMode={"stretch"}
            style={styles.image2}
          />
        </Center>

        <TouchableOpacity style={styles.oppaicitygame}
            onPress={ ()=> {
              this.props.navigation.navigate('Game')
            }}>
          <Center horizontal>
            <Image
              source={require("../assets/images/play.jpg")}
              resizeMode={"contain"}
              style={styles.image}
            />  
            {/* <Text style={styles.text}>MAINKEUN</Text> */}
          </Center>
          
        </TouchableOpacity>
        <Center horizontal>
        <TouchableOpacity style={styles.oppaicity}
            onPress={()=> {
              this.props.navigation.navigate('Game')
            }}
          >
            <Text style={styles.text}>MAINKEUN</Text> 
          </TouchableOpacity>
          </Center>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "column"
  },
  image3: {
    top: "13.77%",
    left: "-28.57%",
    width: 626.07,
    height: 364.5,
    position: "absolute",
    opacity: 0.18,
    transform: [
      {
        rotate: "-46.00deg"
      }
    ],
    borderColor: "#000000",
    borderWidth: 0
  },
  image2: {
    top: "13.62%",
    width: 626.07,
    height: 364.5,
    position: "absolute",
    opacity: 0.18,
    transform: [
      {
        rotate: "54.00deg"
      }
    ]
  },
  image: {
    width: 200,
    height: 200,
  },
  oppaicitygame:{
    top: 154.85,
  },
  text: {
    color: "#121212",
    fontSize: 50,
    fontFamily: "abhaya-libre-regular",
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "left"
  },
  oppaicity:{
    top: 381.71, 
  }
});
