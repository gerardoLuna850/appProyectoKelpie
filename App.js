import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './screen/LoadingScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import HomeScreen from './screen/HomeScreen';
import 'react-native-gesture-handler';



//import firebase from '@react-native-firebase/app';
import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyClLrEKFaf3v5rMzwzZphJaReYy4uEArfI",
    authDomain: "proyecto-729c9.firebaseapp.com",
    databaseURL: "https://proyecto-729c9.firebaseio.com",
    projectId: "proyecto-729c9",
    storageBucket: "proyecto-729c9.appspot.com",
    messagingSenderId: "879554199623",
    appId: "1:879554199623:web:788ea0252df3ef16c1b162",
  };
  firebase.initializeApp(firebaseConfig);


  /*
  // Initialize Firebase
  
  if (!firebase.apps.length) {
    firebase.initializeApp();
}
*/



  const AppStack = createStackNavigator({
      Home: HomeScreen
  });

  const AuthStack = createStackNavigator({
      Login: LoginScreen,
      Register: RegisterScreen
  });

  export default createAppContainer(
      createSwitchNavigator(
          {
              Loading: LoadingScreen,
              App: AppStack,
              Auth: AuthStack
          },
          {
              initialRouteName: "Loading"
          }
      )
  );

