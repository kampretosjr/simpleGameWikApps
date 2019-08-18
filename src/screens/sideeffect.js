import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar, AsyncStorage as storage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon, Thumbnail } from 'native-base';

import { connect } from 'react-redux'
import { logout } from '../public/redux/actions/player'

class SideBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            id_player: '',
            email: [],
            username: '',
            foto: '',
            token: '',
            score:''
        }

        storage.getItem('id_player', (err, result) => {
            if (result) {
                this.setState({
                    id_player: result
                })
            }
        })
        storage.getItem('score', (err, result) => {
          if (result) {
              this.setState({
                  score: result
              })
          }
        })

        storage.getItem('email', (err, result) => {
            if (result) {
                this.setState({
                    email: result
                })
            }
        })

        storage.getItem('username', (err, result) => {
            if (result) {
                this.setState({
                    username: result
                })
            }
        })

        storage.getItem('foto', (err, result) => {
            if (result) {
                this.setState({
                    foto: result
                })
            }
        })

        storage.getItem('token', (err, result) => {
            if (result) {
                this.setState({
                    token: result
                })
            }
        })

        this._signOutAsync = this._signOutAsync.bind(this)
    }

    _signOutAsync = async () => {
        await this.props.dispatch(logout(this.state.id_player))
            .then(() => {
                alert('Logout successfully!')
                this.setState({
                    id_player: ''
                })
                storage.clear()
                this.props.navigation.navigate('auth')
            })
            .catch(() => {
              this.props.navigation.navigate('auth')
              this.setState({
                id_player: ''
            })
                storage.clear()
                alert('Berhasil Keluar!')
            })
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor='transparent' barStyle='dark-content' />
                <View style={styles.imageBackground} />

                {
                    this.state.token
                        ?
                        <Thumbnail small rounded source={{ uri: this.state.foto }} style={styles.profileImage} />
                        :
                        <Thumbnail small rounded source={require('../assets/images/stikps.png')} style={styles.profileImage} />
                }

                <View style={styles.viewProfileData}>
                    <Text style={[styles.profileData, styles.capitalize]}>{this.state.email == '' ? 'anda belum masuk' :this.state.email }</Text>
                    <Text style={styles.profileData}>{this.state.username == '' ? 'silahkan login dulu ' :this.state.username}</Text>
                    <Text style={styles.profileData}>{this.state.score}</Text>
                </View>

                <View style={styles.flhome}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('leaderboard')}>
                        <Text style={styles.drawer}>
                            <Icon name="trophy" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Leaderboards
                            </Text>
                    </TouchableOpacity>
                    {
                        this.state.token ?
                            <TouchableOpacity
                                onPress={() => this._signOutAsync()}>
                                <Text style={styles.drawer}>
                                    <Icon name="sign-out" type="FontAwesome" style={[styles.signOutColor, styles.icon]} /> Sign Out (pencet 2x)
                        </Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('login')}>
                                <Text style={styles.drawer}>
                                    <Icon name="sign-in" type="FontAwesome" style={[styles.signInColor, styles.icon]} /> Sign In
                        </Text>
                            </TouchableOpacity>
                    }

                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
  return {
      proplayer: state.rePlayer.ListPlayer.result
  }
}

export default connect(mapStateToProps)(SideBar)
const styles = StyleSheet.create({
    signInColor: {
        color: 'blue'
    },
    signOutColor: {
        color: 'red'
    },
    capitalize: {
        textTransform: 'capitalize'
    },
    imageBackground: {
        backgroundColor: '#5dcc41',
        width: 'auto',
        height: 180
    },
    profileImage: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'blue',
        alignSelf: 'flex-start',
        left: 20,
        top: 10,
        width: 80,
        height: 80,
        borderRadius: 150
    },
    viewProfileData: {
        position: 'absolute',
        top: 100,
        marginHorizontal: 20
    },
    profileData: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 1
    },
    flhome: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    drawer: {
        margin: 15,
        fontWeight: "600",
        color: "#000",
        fontSize: 15,
    },
    icon: {
        fontSize: 18
    },
    leaderBoardColor: {
        color: '#FFD700'
    }
})
