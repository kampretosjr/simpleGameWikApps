import React, { Component } from "react";
import { StyleSheet, View, Image,Text } from "react-native";
import CupertinoButtonInfo from "../symbols/ButtonInfo";
import CupertinoButtonInfo1 from "../symbols/ButtonInfo1";
import CupertinoButtonInfo2 from "../symbols/ButtonInfo2";
import CupertinoHeaderWithAddButton from "../symbols/HeaderWithAddButton";
import CupertinoToolbar from "../symbols/Toolbar";
import { connect } from 'react-redux'
import Sound from "react-native-sound";

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      button:0,
      timer:null
     }
  }
   
  
  pukul() {
    const requireAudio = require('../assets/sound/Wik.wav')
    const s = new Sound(requireAudio, (e) => {
        if (e) {
            console.log('Error in SOUND', e);
            return;
        }
        s.play(() => s.release());
    });
    let button = this.state.button
        button = button + 1
  
        this.setState({
          button:this.state.button + 1
        })
      
        if (this.state.timer) {
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
              timer :null
            })
        }
  
        this.setState({
          timer :setTimeout(()=>{ 
            this.setState({
              button:this.state.button * 0
            })
            alert("reset");
          }, 4000)
        })
}

  jurus() {
      const requireAudio = require('../assets/sound/ohh.wav');
      const s = new Sound(requireAudio, (e) => {
          if (e) {
              console.log('Error in SOUND', e);
              return;
          }
          s.play(() => s.release());
      });
      let button = this.state.button
        button = button + 1
  
        this.setState({
          button:this.state.button + 1
        })
      
        if (this.state.timer) {
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
              timer :null
            })
        }
  
        this.setState({
          timer :setTimeout(()=>{ 
            this.setState({
              button:this.state.button * 0
            })
            alert("reset");
          }, 4000)
        }) 
    }

kunai() {
    const requireAudio = require('../assets/sound/ayy.wav');
    const s = new Sound(requireAudio, (e) => {
        if (e) {
            console.log('Error in SOUND', e);
            return;
        }
        s.play(() => s.release());
    });
    let button = this.state.button
    button = button + 1

    this.setState({
      button:this.state.button + 1
    })

    if (this.state.timer) {
        clearTimeout(this.state.timer); //cancel the previous timer.
        this.setState({
          timer :null
        })
    }

    this.setState({
      timer :setTimeout(()=>{ 
        this.setState({
          button:this.state.button * 0
        })
        alert("reset");
      }, 4000)
    }) 
}
    

  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../assets/images/l-20181108161436lagu-1.png")}
          resizeMode={"stretch"}
          style={styles.image}
        />
        <Text style={styles.text}>HIT {this.state.button} </Text>
        <CupertinoButtonInfo sound={this.pukul.bind(this)} style={styles.cupertinoButtonInfo} />
        <CupertinoButtonInfo1 sound={this.jurus.bind(this)} style={styles.cupertinoButtonInfo1} />
        <CupertinoButtonInfo2 sound={this.kunai.bind(this)} style={styles.cupertinoButtonInfo2} />

        <CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton}/>
        <CupertinoToolbar style={styles.cupertinoToolbar} />
      </View>
    )
  }
}

export default home


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    top: 210.42,
    left: 130,
    width: 100,
    height: 42.13,
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-900",
    fontWeight: "500"
  },
  image: {
    top: "8.04%",
    left: "0%",
    width: 360,
    height: 506.13,
    position: "absolute",
    opacity: 0.25
  },
  cupertinoButtonInfo: {
    top: 328.45,
    left: 13.76,
    width: 100,
    height: 42.13,
    position: "absolute"
  },
  cupertinoButtonInfo1: {
    top: 328.42,
    left: 130,
    width: 100,
    height: 42.13,
    position: "absolute"
  },
  cupertinoButtonInfo2: {
    top: 328.45,
    left: "68.4%",
    width: 100,
    height: 42.13,
    position: "absolute"
  },
  cupertinoHeaderWithAddButton: {
    top: 0,
    left: 0,
    width: 360,
    height: 51.47,
    position: "absolute"
  },
  cupertinoToolbar: {
    top: 557.58,
    left: "0%",
    width: 360,
    height: 62.42,
    position: "absolute",
    opacity: 1
  }
});
