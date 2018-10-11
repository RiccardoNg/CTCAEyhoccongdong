import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert, Dimensions, Image,} from 'react-native';
import {firebaseApp} from '../components/FirebaseConfig.js'
import {Svg, Rect, Defs, ClipPath, Circle, Path, G, LinearGradient, Stop, Use, Symbol, Line} from 'react-native-svg';

const fullWidth = Dimensions.get('window').width
const fullHeight = Dimensions.get('window').height
const fullViewBox = '0' + ' 0' + ' '+ fullWidth + ' ' + fullHeight







export default class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
				email:'',
				password:'',
				errorMessage: null
		}
	}

	handleLogin() {
	// TODO: Firebase stuff...
		Alert.alert(this.state.email, this.state.password)
		firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		.then(()=>{
				Alert.alert(
				'Alert Title',
				'Dang nhap thanh cong ' + this.state.email,
				[
					
					{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
					{text: 'Go to TNM', onPress:() => this.props.navigation.push('TNMScreen')},
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
				'Dang nhap thatbai ' + this.state.email,
				[
					{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
					{text: 'Dang nhap lai', onPress: () => console.log('Dang nhap lai')},
				],
				{ cancelable: false }
				) 
		});
		console.log('handleSignUp')
	}
	
	render() {
		return(
			
			<View style={styles.container}>
				<Svg width={fullWidth} height={fullHeight} viewBox={fullViewBox} >
					<Defs>
						<LinearGradient id='gradient1' x1='25%' y1='0' x2='50%' y2='100%'>
							<Stop offset='0' stopColor="#2E88CD" stopOpacity="1" />
							<Stop offset="1" stopColor="#9EEAF7" stopOpacity="1" />
						</LinearGradient>
					</Defs>
					<Rect x='0' y='0' width={fullWidth} height={fullHeight} fill='url(#gradient1)'/>
					
				</Svg>
				<View style={styles.loginContainer}>
					<View style={styles.welcomeContainer}>
						<View style={{width:'50%'}}>
						<Image style={styles.appLogo} source={require('../images/logo.png')} resizeMode='contain'/>
						</View>
						<Text style={styles.appWelcome} >TNM Calculator</Text>
						<Text style={styles.appLogRequest} >Please login or sign-up</Text>

					</View>
					<View style={styles.loginContent}>
						<TextInput style={styles.inputBox} 
							underlineColorAndroid='rgba(0,0,0,0)'
							placeholder='Email'
							placeholderTextColor = '#fff'
							onChangeText={email => this.setState({ email })}
								value={this.state.email}
						/>
						<TextInput style={styles.inputBox} 
							underlineColorAndroid='rgba(0,0,0,0)'
							placeholder='Password'
							secureTextEntry={true}
							placeholderTextColor = '#fff'
							
							onChangeText={password => this.setState({ password })}
							value={this.state.password}
						/>
						<TouchableOpacity style={styles.button} onPress={()=>{this.handleLogin()}} >
							<Text style={styles.buttonText}>LOGIN</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>SIGN UP</Text>
						</TouchableOpacity>
						<Text style={styles.otherText}>or Sign in with your Social account</Text>
						<View style={styles.otherLogin}>
							<TouchableOpacity style={styles.otherLogBtn}>
								<Image style={styles.otherLogLogo} source={require('../icons/facebook.png')}/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.otherLogBtn}>
								<Image style={styles.otherLogLogo} source={require('../icons/google.png')}/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.otherLogBtn}>
								<Image style={styles.otherLogLogo} source={require('../icons/twitter.png')}/>
							</TouchableOpacity>


							
							
						</View>
					</View>
				</View>


				
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		
	},
	loginContainer: {
		position: 'absolute',
		width: fullWidth,
		height: fullHeight,
		top: 0,
		left: 0,
		alignItems: 'center',
	},
	welcomeContainer: {
		flex: 3,
		alignItems: 'center',
		width: '100%',
	},
	appLogo: {
		top: (0.068*fullHeight),
		alignItems: 'center',
	},
	appWelcome: {
		fontFamily: 'Roboto',
		fontSize: 35,
		color: '#fff',
		textAlign: 'center',
		marginTop: (0.096*fullHeight),
	},
	appLogRequest: {
		fontFamily: 'Roboto',
		fontSize: 18,
		color: 'rgba( 255, 255, 255, 0.8)',
		textAlign: 'center',
		marginTop: (0.041*fullHeight),
	},
	loginContent: {
		flex: 5,
		alignItems: 'center',
		paddingTop: (0.034*fullHeight),
	},
	inputBox: {
		width: (0.73*fullWidth),
		height: (0.062*fullHeight),
		backgroundColor:'rgba(255,255,255,0.3)',
		borderRadius: 25,
		paddingHorizontal:(0.039*fullWidth),
		fontSize:16,
		color: '#fff',
		marginVertical:(0.014*fullHeight),
	},
	
	button: {
		width:(0.73*fullWidth),
		backgroundColor:'#fff',
		borderRadius: 25,
		marginVertical: (0.014*fullHeight),
		paddingVertical:(0.016*fullHeight),
		elevation: 3,
	},
	buttonText: {
		fontFamily: 'Roboto',
		fontSize:17,
		fontWeight:'500',
		color:'#69C2FE',
		textAlign:'center'
	},
	otherText: {
		fontFamily: 'Roboto',
		fontSize: 17,
		color: '#fff',
		textAlign: 'center',
		marginTop: 20,
	},
	otherLogin: {
		flexDirection: 'row',
		width: (0.73*fullWidth),
		marginTop: (0.027*fullHeight),
	},
	otherLogBtn: {
		flex: 1,
		alignItems: 'center'
	},
	otherLogLogo: {
		width: (0.122*fullWidth),
		height: (0.122*fullWidth),
	},
	
});

