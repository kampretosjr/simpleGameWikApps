import React, { Component } from "react";
import { StyleSheet,Text, View, Image,FlatList,TouchableOpacity ,Alert, AsyncStorage as storage} from "react-native";
import { Container,  Content, List, ListItem, Thumbnail,Button,  Left, Body, Right } from 'native-base';
import PENCETAN from "../symbols/ButtonInfo";
import CupertinoHeaderWithAddButton from "../symbols/HeaderWithAddButton";
import CupertinoToolbar from "../symbols/Toolbar";
import { connect } from 'react-redux'
import Sound from "react-native-sound";
import { getConfig } from "../public/redux/actions/gameconfig";
import { getScore } from "../public/redux/actions/leaderboard";
import { postleaderboard } from "../public/redux/actions/leaderboard";

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hit:0,
      button:1,
      timer:null,
      hasil: 0,
      combo: 0,
      score: 0,
      pattern: [1,2,3,2],
      isNow: 0,
      showToast:false,
      config:[],
      pause: false,
      loop:false,
      id_player: '',
      LeaderB: [],


      }
      storage.getItem('id_player', (err, result) => {
        if (result) {
            this.setState({
                id_player: result
            })
        }
    })
  }

  async componentDidMount() {
    await this.props.dispatch(getConfig());
    await this.props.dispatch(getScore());

    const LeaderB = await this.props.Lead;
    const config = await this.props.GameConfig;

    this.setState({ config });
    this.setState({ LeaderB });

  }
  
  LAGUNYA = async (nada,tombol) =>{

        if (this.state.timer) { 
          clearTimeout(this.state.timer); 
          await this.setState({ timer :null }) 
        }

        await this.setState({
          timer :setTimeout(()=>{ 
            var id_player = this.state.id_player
            var score = this.state.score
            var data = {
              id_player,score
            }
            // var lastscore = this.state.LeaderB['9']
              // if( this.state.score > lastscore  ){
                
                if( this.state.score > 10  ){
                  if(id_player == "" ){
                    Alert.alert(
                      'mau skornya di masukin leaderboard?',
                      `login dulu ya`,
                      [
                        {text: 'gak mau', onPress: () => console.log('gak mau pressed')},
                        {text: 'login', onPress: () => this.props.navigation.navigate('login')},
                      ],
                      {cancelable: false},
                    )
                  }else{
                    Alert.alert(
                      'skor kamu mencapai ',
                      `${this.state.score}`,
                     
                      [
                        {text: 'gak mau', onPress: () => console.log('gak mau pressed')},
                        {text: 'masukan ke leaderboard?', onPress: () => this.props.dispatch(postleaderboard(data))},
                      ],
                      {cancelable: false},
                    );
                  }
                
                // this.props.dispatch(postleaderboard(data))
              }else{
                alert("coba lagi")
              }

              this.setState({
              hit:this.state.hit * 0,
              score: this.state.score * 0,
              combo: this.state.combo * 0,
              isNow: this.state.isNow * 0,
            })
          }, 3000)
        })
        
        this.suara = new Sound(nada,Sound.MAIN_BUNDLE,  err => {
            if (err) {return;}
            this.suara.play(() => this.suara.release());
        });

            if (this.state.pattern[this.state.isNow] === tombol) {
              if (this.state.pattern.length -1 <= this.state.isNow   ) {
                // clearTimeout(this.state.timer); 
                await this.setState({
                      combo: this.state.combo + 1,
                      isNow: this.state.isNow * 0,
                      score: this.state.score + 10,

                  })
                  setTimeout(()=>{  
                      const next = new Sound('gtr.wav',Sound.MAIN_BUNDLE,  err => {
                      if (err) {return;}
                      next.play(() => next.release()); });
                    }, 300)
                    
              } else{                
                if (this.state.combo > 0) {
                    this.setState({
                      score: (this.state.score + 10) + (this.state.combo / 2) ,
                      isNow: this.state.isNow + 1,
                  })
                } else {
                    this.setState({
                      score: this.state.score + 10,
                      isNow: this.state.isNow + 1,
                  })
                }
                
              }
          }
          else {
            clearTimeout(this.state.timer); 
            alert('salah kombo coeg')
            await this.setState({
              score: 0,
              hasil: 0,
              isNow: 0,
              combo: 5,
              timer :null,
              hit:0 
            })
        }

          this.setState({
              button: this.state.pattern[this.state.isNow]
          })

          await this.setState({ hit:this.state.hit + 1 })
    }


    LOOPs = async (nada,tombol) => {
      if (this.state.loop == false ) {
        this.suara = new Sound(nada,Sound.MAIN_BUNDLE,  err => {
        this.suara.setNumberOfLoops(-1);
        this.suara.setVolume(0.35);
        this.suara.play(() => this.suara.release());
        });
          await this.setState({
            loop:true
          })
      } 
      else {
        await this.suara.stop(() => {
          // Note: If you want to play a sound after stopping and rewinding it,
          // it is important to call play() in a callback.
        });
        await this.setState({
          loop:false
        })
      }
    }
    
  render() {
    console.log("jancok",this.state.LeaderB[9] )
    var data = this.state.LeaderB
    data.map(item => {
      console.log(item.score)
    })

    // var numbers = [4, 9, 16, 25];
    // var x = data.map(score)
    // console.log(x );s

    console.log("isnow",this.state.isNow)

    return (
      <View style={styles.root}>
        <Image
          source={require("../assets/images/l-20181108161436lagu-1.png")}
          resizeMode={"stretch"}
          style={styles.image}
        />        
        <Text style={styles.score}> exp   {this.state.score}</Text>
        <Text style={styles.combo}>combo {this.state.combo}</Text>
        
          {/* <FlatList
              data={config}
              keyExtractor={item => item.id_button}
              renderItem={({ item, index }) => {
                return (
                //    <View >
                //     <Text style={styles[item.nama + 'text']}>{item.nama_sound} </Text>
                //    </View> 
                <TouchableOpacity onPressIn={()=> this.LAGUNYA(`${item.nama_sound}`,index + 1)} style={ this.state.pattern[this.state.isNow] == item.id_button ? styles[item.nama]Big : styles[item.nama] }>
                  <Text style={styles[item.nama + 'text']}>{item.nama}</Text>
                </TouchableOpacity>                
                );
              }}
            /> */}
        {/* <PENCETAN sound={ ()=> this.LAGUNYA(`${item.nama_sound}`,index + 1)} nama={item.nama} styletext={styles[item.nama + 'text']} stylebutton={this.state.pattern[this.state.isNow] == 1 ? styles[item.nama + 'Big'] : styles[item.nama] } /> */}

        <PENCETAN sound={ ()=> this.LAGUNYA('wik.wav',1)} nama="wik" styletext={styles.wiktext} stylebutton={this.state.pattern[this.state.isNow] == 1 ? styles.wikBig : styles.wik } />
        <PENCETAN sound={ ()=> this.LAGUNYA('ihh.wav',2)} nama="ihh" styletext={styles.wiktext} stylebutton={this.state.pattern[this.state.isNow] == 2 ? styles.ihhBig : styles.ihh } />
        <PENCETAN sound={ ()=> this.LAGUNYA('ayy.wav',3)} nama="ayy" styletext={styles.wiktext} stylebutton={this.state.pattern[this.state.isNow] == 3 ? styles.ayyBig : styles.ayy } />
         
        <CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton}/>
          
          {
            this.state.loop == false ? 
            <Button onPressIn={()=> this.LOOPs('backsound.wav')} style={{top: 310.45}}  block success>
              <Text>NYALAKEUN</Text>
            </Button> 
            :
            <Button onPressIn={()=> this.LOOPs('backsound.wav')} style={{top: 310.45}} block danger>
                <Text>MATIKEUN</Text>
            </Button>
          }
           

        <CupertinoToolbar style={styles.cupertinoToolbar} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    GameConfig: state.reConfig.ListConfig.result,
    Lead: state.reLeaderboard.ListLeaderboard.result
  };
};
export default connect(mapStateToProps)(home)


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
    width: 300,
    height: 142.13,
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
  backsoundON:{
    top: 458.45
  },
  backsoundOFF:{
    top: 458.45
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
    height: 82.13,
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
  ihh: {
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
  ihhBig: {
    top: 318.45,
    left: 130,
    width: 100,
    height: 82.13,
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
  ihhtext: {
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
    height: 82.13,
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
