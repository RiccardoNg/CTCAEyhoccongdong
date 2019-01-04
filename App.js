import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import TNM from './screens/TNMCalculator';
import CTCAE from './screens/CTCAECalculator';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Myhealthnote from './screens/Myhealthnote';
import RealtimeDB from './screens/RealtimeDB';


import { createStackNavigator, NavigationActions } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
  
  TNMScreen: { screen: TNM, navigationOptions: {header: null}} , 
  CTCAEScreen: { screen: CTCAE, navigationOptions: {header: null}} , 
  LoginScreen: {screen:Login, navigationOptions: {header: null}} ,
  SignupScreen: {screen:Signup, navigationOptions: {header: null}} ,
  MyhealthnoteScreen: {screen:Myhealthnote, navigationOptions: {header: null}} ,
  RealtimeDBScreen: {screen:RealtimeDB, navigationOptions: {header: null}} ,
  },
  {
    initialRouteName: 'MyhealthnoteScreen',
    
  },
  
  
 );


export default class App extends React.Component {
	
  
  
  render() {
    return (
    
      <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
