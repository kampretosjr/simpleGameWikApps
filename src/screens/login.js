import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, AsyncStorage as storage } from 'react-native'
import { Header, Left, Body, Form, Item, Label, Input, Container, Button, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { connect } from 'react-redux'
import { loginPlayer } from '../public/redux/actions/player'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            username: '',
            password: ''
        }
    }

    _signInAsync = async (data) => {
        await this.props.dispatch(loginPlayer(data))
            .then(() => {
                alert('Login successfully!')
                this.setState({
                    users: this.props.propalyer,
                    username: '',
                    password: ''
                })
                
                storage.setItem('token')
                this.props.navigation.navigate('auth')
            })
            .catch(() => {
                alert('username atau password salah!')
            })
    }

    render() {
        const { username, password } = this.state
        const data = {
            username: username,
            password: password
        }
        return (
            <Container>
                
                <Image resizeMode={"stretch"} source={require('../assets/images/l-20181108161436lagu-1.png')} style={styles.img} />
                <View style={{ marginTop: 100 }}>
                    <Form style={styles.container}>
                        <Item floatingLabel>
                            <Label style={{ color: 'black' }}>Username</Label>
                            <Input onChangeText={username => this.setState({ username })} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{ color: 'black' }}>Password</Label>
                            <Input secureTextEntry={true} onChangeText={password => this.setState({ password })} />
                        </Item>
                    </Form>
                    <Button onPress={() => this._signInAsync(data)} style={{top: 38.45}} block success>
                        <Text>login</Text>
                    </Button>
                    
                </View>
                <TouchableOpacity
                    style={styles.btnSkip}
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                >
                    <Text style={styles.txtBtnSkip}>SKIP >></Text>
                </TouchableOpacity>
            </Container >
        )
    }
}

const styles = StyleSheet.create({
    txtBtnSkip: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    btnSkip: {
        alignSelf: 'center',
        margin: 0,
        bottom: 0
    },
    img: {
        left: "0%",
        width: 360,
        height: 576.13,
        position: "absolute",
        opacity: 0.25
    },
    viewAction: {
        marginVertical: 60,
        marginHorizontal: 40
    },
    btnSignIn: {
        width: 50,
        height: 50,
        marginLeft: 'auto'
    },
    btnSignUp: {
        marginRight: 'auto',
    },
    txtSignUp: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
    },
    leftSide: {
        marginHorizontal: 20
    },
    txtLogin: {
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 30
    }
})

const mapStateToProps = state => {
    return {
        propalyer: state.rePlayer.ListPlayer.result
    }
}

export default connect(mapStateToProps)(Login)