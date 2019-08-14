import React, { Component } from "react";
import { StyleSheet, View, Image,Text } from "react-native";
import PENCETAN from "../symbols/ButtonInfo";
import CupertinoHeaderWithAddButton from "../symbols/HeaderWithAddButton";
import CupertinoToolbar from "../symbols/Toolbar";
import {Toast} from 'native-base'
import { connect } from 'react-redux'
import Sound from "react-native-sound";

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hit:0,
      button:1,
      timer:null,
      hasil: 0,
      combo: 5,
      score: 0,
      pattern: [1,2,1,3,1,2],
      isNow: 0,
      showToast:false
      }
  }

  LAGUNYA(nada,tombol) {
        const s = new Sound(nada,Sound.MAIN_BUNDLE,  err => {
            if (err) {return;}
            s.play(() => s.release());
        });

            if (this.state.pattern[this.state.isNow] === tombol) {
              if (this.state.pattern.length -1 === this.state.isNow   ) {
                  this.setState({
                      combo: this.state.combo + 1,
                      isNow: this.state.isNow * 0
                  })
                  const next = new Sound('gtr.wav',Sound.MAIN_BUNDLE,  err => {
                    if (err) {return;}
                    next.play(() => next.release()); });
              }
              this.setState({
                  score: this.state.score + 10,
                  isNow: this.state.isNow + 1
              })
          }
          else {
              alert('salah kombo coeg')
              this.setState({
                  score: 0,
                  hasil: 0,
                  isNow: 0,
                  combo: 5
              })
          }
          this.setState({
              button: this.state.pattern[this.state.isNow]
          })

        this.setState({ hit:this.state.hit + 1 })

        if (this.state.timer) { 
            clearTimeout(this.state.timer); 
            this.setState({ timer :null }) 
          }

        this.setState({
          timer :setTimeout(()=>{ 
            alert("skor anda" + this.state.score );
            this.setState({
              hit:this.state.hit * 0,
              score: this.state.score * 0,
              combo: this.state.combo * 0,
            })
            
          }, 2000)
        })
}

  render() {
    console.warn("pola",this.state.pattern[this.state.isNow])
    console.log("isnow",this.state.isNow)
    return (
      <View style={styles.root}>
        <Image
          source={require("../assets/images/l-20181108161436lagu-1.png")}
          resizeMode={"stretch"}
          style={styles.image}
        />        
        <Text style={styles.score}>score {this.state.score} </Text>
        <Text style={styles.text}>HIT {this.state.hit} </Text>
        <Text style={styles.combo}>combo {this.state.isNow} </Text>
        <FlatList
            data={LeaderB}
            keyExtractor={item => item.id_leaderboard}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <PENCETAN sound={ ()=> this.LAGUNYA('wik.wav',1)} nama="wik" styletext={styles.wiktext} stylebutton={this.state.pattern[this.state.isNow] == 1 ? styles.wikBig : styles.wik } />
                </View>
              );
            }}
          />
        <PENCETAN sound={ ()=> this.LAGUNYA('wik.wav',1)} nama="wik" styletext={styles.wiktext} stylebutton={this.state.pattern[this.state.isNow] == 1 ? styles.wikBig : styles.wik } />
        <PENCETAN sound={ ()=> this.LAGUNYA('ihh.wav',2)} nama="ihh" styletext={styles.ohhtext} stylebutton={this.state.pattern[this.state.isNow] == 2 ? styles.ohhBig : styles.ohh } />
        <PENCETAN sound={ ()=> this.LAGUNYA('ayy.wav',3)} nama="ayy" styletext={styles.ayytext} stylebutton={this.state.pattern[this.state.isNow] == 3 ? styles.ayyBig : styles.ayy } />

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
  score: {
    top: 210.42,
    left: 13.76,
    width: 100,
    height: 42.13,
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-900",
    fontWeight: "500"
  },
  combo: {
    top: 210.42,
    left: "68.4%",
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
  wik: {
    top: 328.45,
    left: 13.76,
    width: 100,
    height: 42.13,
    position: "absolute",
    textShadowColor:"darkblue",
    flex: 1,
    backgroundColor: "rgba(255,86,107,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 100
  },
  wikBig: {
    top: 318.45,
    left: 13.76,
    width: 100,
    height: 72.13,
    position: "absolute",
    textShadowColor:"darkblue",
    flex: 1,
    backgroundColor: "rgba(255,86,107,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 100
  },
  wiktext: {
    color: "rgba(0,0,0,1)",
    margin: 0,
    fontSize: 25,
    fontFamily: "roboto-900",
    fontWeight: "500"
  },
  ohh: {
    top: 328.42,
    left: 130,
    width: 100,
    height: 42.13,
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(248,231,28,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 100
  },
  ohhBig: {
    top: 318.45,
    left: 130,
    width: 100,
    height: 72.13,
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(248,231,28,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 100
  },
  ohhtext: {
    color: "rgba(15,14,14,1)",
    fontSize: 20,
    fontFamily: "roboto-900",
    fontWeight: "500"
  },
  ayy: {
    top: 328.45,
    left: "68.4%",
    width: 100,
    height: 42.13,
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(64,255,0,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 100
  },
  ayyBig: {
    top: 318.45,
    left: "68.4%",
    width: 100,
    height: 72.13,
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(64,255,0,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 100
  },
  ayytext: {
    color: "rgba(7,7,7,1)",
    fontSize: 25,
    fontFamily: "roboto-900",
    fontWeight: "500"
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
