import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Container,  Content, Card, CardItem, Body, Button, Item, Label, Input, Icon } from "native-base";


import * as firebase from 'firebase';
//import firestore from '@react-native-firebase/firestore';
//import firebase from '@react-native-firebase/app';



export default class RegisterScreen extends React.Component{
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSingUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({errorMessage: error.message}));


    }
    



    render(){
        return(
            <View style={misEstilos.container}>
        <Text style={misEstilos.greeting}>{`Hello:\nSing up to get started`}</Text>
        <View style={misEstilos.errorMessage}>
        {this.state.errorMessage && <Text style={misEstilos.error}>{this.state.errorMessage}</Text>}
            </View>
            <View style={misEstilos.form}>
            <View>
                    <Text style={misEstilos.inputTitle}>Full Name</Text>
                    <TextInput style={misEstilos.input} 
                    autoCapitalize="none"
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                    ></TextInput>
                </View>

                <View style={{ marginTop: 32 }}>
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
                <TouchableOpacity styles={misEstilos.button} onPress={this.handleSingUp}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Register me!</Text>
                </TouchableOpacity>

                <Button styles={misEstilos.button} onPress={this.handleSingUp}><Text style={{ color: "#FFF", fontWeight: "500" }}>Register me!</Text></Button>

                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} 
                onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                       Loggin <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sing Up</Text>
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
        justifyContent: "center",
        alignItems: "center"
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
    content: {
        flex: 1,
        justifyContent: 'center',
      
      },
    
      textCenter: {
        textAlign: 'center',
        width: '100%'
      },
    
      pie: {
        justifyContent: 'center'
      },
    
      centrar: {
        flex: 1,
        
        justifyContent: 'center'
      },
    
      body: {
        paddingVertical: 35,
      },
      tc: {
        textAlign: 'center',
        width: '100%',
        justifyContent: 'center'
    
      }
});








