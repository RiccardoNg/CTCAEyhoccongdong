// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import {firebaseApp} from '../components/FirebaseConfig.js'

export default class SignUp extends React.Component {
	constructor(props){
			super(props);
			this.state = {
					email:'',
					password:'',
					errorMessage: null
			}
	}
	
  //state = { email: '', password: '', errorMessage: null }
handleSignUp() {
  // TODO: Firebase stuff...
  Alert.alert(this.state.email, this.state.password)
  firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then(()=>{
		Alert.alert(
		  'Alert Title',
		  'Dang ky thanh cong' + this.state.email,
		  [
			{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
			{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'Go to Login', onPress:() => this.props.navigation.push('LoginScreen')},
		  ],
		  { cancelable: false }
		)  
		this.setState({
			email:'',
			password:''
		})
	})
  .catch(function(error) {
	  Alert.alert(
		  'Alert Title',
		  'Dang ky thatbai' + this.state.email,
		  [
			{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
			{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'OK', onPress: () => console.log('OK Pressed')},
		  ],
		  { cancelable: false }
		) 
  });
  console.log('handleSignUp')
}
render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" 
		  onPress={()=>{this.handleSignUp()}} 
        />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Text>{'user input: ' + this.state.email 
			+ ' - ' + this.state.password}
		</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
