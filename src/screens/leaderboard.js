import React, { Component } from 'react';
import { Container,  Content, List, ListItem, Thumbnail, Text, Left, Body, Right } from 'native-base';
import {FlatList,View,TouchableOpacity,StyleSheet} from "react-native";
import { connect } from "react-redux";
import { getleaderboard } from "../public/redux/actions/leaderboard";
import Icon from "@builderx/icons";


export class sideeffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LeaderB: [],
    };
  }

  async componentDidMount() {
    await this.props.dispatch(getleaderboard());
    const LeaderB = await this.props.Lead;
    this.setState({ LeaderB });
  }

  render() {
    const {LeaderB,i} = this.state


    console.log("aa",LeaderB)
    return (
      <Container>
      <Content>
      <List>
        <FlatList
            data={LeaderB}
            keyExtractor={item => item.id_leaderboard}
            renderItem={({ item, index }) => {
              return (
                <View style={ index === 0 ? styles.root:styles.aa}>
                <ListItem  style={ index === 0 ? styles.root:styles.aa} thumbnail>
                  
                    <Left style={ index === 0 ? styles.root:styles.aa}>
                    <View>
                      {
                        index +1 == 1 ? <Icon name={"ios-trophy"} type={"Ionicons"} style={ styles.nomer} /> :
                        <Text style={ styles.nomerz}> { index+1 }</Text>
                      }
                    </View>
                      <Thumbnail style={ index === 0 ? styles.root:styles.aa} source={{ uri: `${item.foto}` }} />
                    </Left>
                    <Body  >
                      <Text>{item.username} </Text>
                    </Body>
                    <Right>
                      <Text>skor</Text>
                      <Text>{item.score} K </Text>
                    </Right>
                  </ListItem>
                </View>
              );
            }}
          />
          
        </List>

      </Content>
    </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    Lead: state.reLeaderboard.ListLeaderboard.result
  };
};

export default connect(mapStateToProps)(sideeffect)
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FBD602'
  },
  aa: {
    backgroundColor: '#ffffff'
  },
  nomer: {
    top: 14.23,
    fontSize: 32,
    left:-11
  },
  nomerz: {
    top: 14.23,
    fontSize: 25,
    left:-11
  },
  rect: {
    top: 60.23,
    left: "14.98%",
    width: 252.12,
    height: 105.92,
    backgroundColor: '#FBD602',
    position: "absolute",
    borderRadius: 24
  }
});
