import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore';
import * as fire from 'firebase';



YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};





export default class HomeScreen extends React.Component{
    state ={
        email: "",
        displayname: "",
        name: ""
    } 

    
    documento(){
        const ref = firebase.firestore().collection('cities').doc('DAmaTmiy4Co9HDDDWnLQ');
        async function addTodo() {
            await ref.update({name: "abrir"});
          }
        addTodo()
        Alert.alert(
            'Alimentado',
            'El servomotor fue abierto',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
        }




  /* METODO PARA SUBIR A REALTIME
    writeAdd(name){
        firebase.database().ref('proyecto-729c9/cities').set({
            name: 'alimentado'
        }).then((data) => {
            console.log('data', data)
        
        }).catch((error) => {
            console.log('error', error)
        })
    }
*/
    componentDidMount(){
        const {email, displayname} = fire.auth().currentUser;
        this.setState({email, displayname});
    }

    singOutUser = () => {
        fire
        .auth()
        .signOut();
    }





    render(){
        return(
            <View style={misEstilos.container}>
            
            <View style={misEstilos.container}>
                <Text style={misEstilos.texto}>Hola {this.state.email}</Text>
             </View>

             <View style={misEstilos.container}>
                <Text style={misEstilos.texto}>Aqui podras alimentar a tu mascota</Text>
                <Text style={misEstilos.texto}>Solo da clack en el boton de abajo</Text>
             </View>
            
             <View style={misEstilos.container}>
                <Button onPress={() => this.documento()} style={misEstilos.button} title="ALIMENTAR"></Button>
            </View>
        
        
        <View style={misEstilos.container1}>
        <Button
            style={{fontSize: 20, color: 'green', marginTop: 30}}
            styleDisabled={{color: 'red'}}
            onPress={() => this.singOutUser()}
            title="Salir"
            >
             Salir
            </Button>
            </View>

        </View>
        );
    }
  
}

const misEstilos = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    texto: {
        marginHorizontal: 40,
        fontWeight: 'bold',
        fontSize: 20,
    },
    boton: {
        marginTop: 30,
        paddingVertical: 35,
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
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
