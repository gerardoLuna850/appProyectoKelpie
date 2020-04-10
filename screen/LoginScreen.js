import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Container,  Content, Card, CardItem, Body, Button, Item, Label, Input, Icon } from "native-base";
//import firebase from '@react-native-firebase/app';
import * as firebase from 'firebase';




export default class LoginScreen extends React.Component{
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.massage }))
    };

    



    render(){
        return(
     <View style={misEstilos.container}>
        <Text style={misEstilos.greeting}>{`Hello again.\nWelcome back.`}</Text>
        <View style={misEstilos.errorMessage}>
        {this.state.errorMessage && <Text styles={misEstilos.error}>{this.state.errorMessage}</Text>}
            </View>
            <View style={misEstilos.form}>
                <View>
                    <Text style={misEstilos.inputTitle}>Email Address</Text>
                    <TextInput style={misEstilos.input} 
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    ></TextInput>
                </View>
                <View style={{ marginTop: 32 }}>
                    <Text style={misEstilos.inputTitle}>Password</Text>
                    <TextInput style={misEstilos.input} 
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    ></TextInput>
                </View>
                <TouchableOpacity style={misEstilos.button} onPress={this.handleLogin}>
                    <Text styles={{ color: "#FFF", fontWeight: "500" }}>Sing In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}
                onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        New to SocialApp? <Text styles={{ fontWeight: "500", color: "#E9446A" }}>Sing Up</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </View>

        );
    }
  
}

const misEstilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting:{
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign:"center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    form: {
        marginBottom: 40,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F30"
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});








