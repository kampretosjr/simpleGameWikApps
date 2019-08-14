import React, { Component } from 'react';
import { Container,  Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {FlatList,View,TouchableOpacity,StyleSheet} from "react-native";
import { connect } from "react-redux";
import { getleaderboard } from "../public/redux/actions/leaderboard";


export class sideeffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LeaderB: []
    };
  }

  async componentDidMount() {
    await this.props.dispatch(getleaderboard());
    const LeaderB = await this.props.Lead;
    this.setState({ LeaderB });
  }
  render() {
    const {LeaderB} = this.state


    console.log("asd",LeaderB[0])
    return (
      <Container>
      <Content>
      <View style={styles.root} />
        <List>
        <FlatList
            data={LeaderB}
            keyExtractor={item => item.id_leaderboard}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                >
                
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={{ uri: `${item.foto}` }} />
                    </Left>
                    <Body>
                      <Text>{item.username}</Text>
                    </Body>
                    <Right>
                    <Text>skor</Text>
                    <Text>{item.score}</Text>
                    </Right>
                  </ListItem>
                </TouchableOpacity>
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
    backgroundColor: "rgba(230,230,43,1)",
    borderRadius: 24
  }
});
