import React, { Component } from 'react';
import {AppRegistry,Picker, SectionList, Alert, View, Text, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, SearchBar, ListItem, Avatar, Rating } from 'react-native-elements';
import Popover from 'react-native-popover-view';
import {Rect as RectPop} from 'react-native-popover-view';
import {Svg, Rect, Defs, ClipPath, Circle, Path, G, LinearGradient, Stop, Use, Symbol, Line} from 'react-native-svg';

import Icon from 'react-native-vector-icons/MaterialIcons';
//import TextField from 'material-ui/TextField';

const tumorFromExcel = 			["Tis"		, "T1"		, "T1"		, "T2"		, "T1"			, "T3"			, "T1"			, "T2"			, "T3"			, "T4a"			, "T2"			, "T3"			, "T4a"			, "T4b"			, "T4b"			, "T1"			, "T2"			, "T2"			, "T3"			, "T4a"			, "T4b"			, "T4b"			, "T3"			, "T4a"			, "T4b"			, "T4b"						];
const nodeFromExcel = 			["N0"			, "N0"		, "N1"		, "N0"		, "N2"			, "N0"			, "N3a"			, "N2"			, "N1"			, "N1"			, "N3a"			, "N2"			, "N1"			, "N2"			, "N0"			, "N3b"			, "N3b"			, "N3b"			, "N3a"			, "N3a"			, "N1"			, "N2"			, "N3b"			, "N3b"			, "N3a"			, "N3b"						];
const metastasisFromExcel = ["M0"			, "M0"		, "M0"		, "M0"		, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M0"			, "M1"			];
const resultFromExcel = 		["Stage 0", "Stage IA", "Stage IB", "Stage IB", "Stage IIA"	, "Stage IIA"	, "Stage IIB"	, "Stage IIA"	, "Stage IIA"	, "Stage IIA"	, "Stage IIIA"	, "Stage IIIA"	, "Stage IIIA"	, "Stage IIIA"	, "Stage IIIA"	, "Stage IIIB"	, "Stage IIIB"	, "Stage IIIB"	, "Stage IIIB"	, "Stage IIIB"	, "Stage IIIB"	, "Stage IIIB"	, "Stage IIIC"	, "Stage IIIC"	, "Stage IIIC"	, "Stage IIIC"	, "Stage IV"	];

const fullWidth = Dimensions.get('window').width
const fullHeight = Dimensions.get('window').height
const fullViewBox = '0' + ' 0' + ' '+ fullWidth + ' ' + fullHeight

const tumorOpt= [
	{
		name: 'Grade 0',
		description: '<38 do',
		value: 'Tis',
	},
	{
		name: 'Grade 1',
		description: '>38do, <39do',
		value: 'T1',
	},
	{
		name: 'Grade 2',
		description: '>39 do, < 40 do',
		value: 'T2',
	},
	{
		name: 'T3 - Level 3',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
		value: 'T3',
	},
	{
		name: 'T4a - Level 4a',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
		value: 'T4a',
	},
]
const nodeOpt= [
	{
		name: 'N0 - Level 0',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
		value: 'N0',
	},
	{
		name: 'N1 - Level 1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
		value: 'N1',
	},
	{
		name: 'N2 - Level 2',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
		value: 'N2',
	},
	{
		name: 'N3a - Level 3a',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
		value: 'N3a',
	},
	{
		name: 'N3b - Level 3b',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
		value: 'N3b',
	},
]
const metastasisOpt= [
	{
		name: 'M0 - Level 0',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
		value: 'M0',
	},
	{
		name: 'M1 - Level 1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
		value: 'M1',
	}
]
export class Myhealthnote extends Component {
  constructor(props) {
    super(props);
    this.state = { 
		username: 'Nhat',
		tumor: tumorFromExcel[0],
		node: nodeFromExcel[0],
		metastasis: metastasisFromExcel[0],
		result: '-abc' ,
		dataSource: [],
		tumorData: [],
		testText:'',
		resultTitle: '',
		};
	
  }
	
  
  _onPressButton2(t,n,m) {
	//Dang sua de truyen bien vao
	var tumor = t
	var node = n
	var metastasis = m
	var result = "-"
	var resultTitle=''
	

	var i;
	result = "Missing !";
	for ( i=0; i < tumorFromExcel.length; i++) {
		if ((tumor == tumorFromExcel[i]) && (node == nodeFromExcel[i]) && (metastasis == "M0")) {
			result = resultFromExcel[i];
			this.setState({result : result});
			resultTitle= ( 'Result' + i + tumor + node + metastasis + result);
			this.setState({resultTitle : resultTitle});
		
		} else if (metastasis == "M1") {
			result = "Stage IV";
			this.setState({result: result}) ;
		}
	}	
  }
  
  _onPressButton() {
	var a = 1
	var b = 2
	var c = a + b
    Alert.alert('You tapped the button! c: ' + c);
  }
  
    componentDidMount(){
	  
      return fetch('https://api.myjson.com/bins/884q6')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson.tnm,
          tumorData: responseJson.tnm.caseid,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
	state = {
	isVisible1: false,
	isVisible2: false,
	isVisible3: false,
  }
 
  showPopover1() {
    this.setState({isVisible1: true});
  }
  showPopover2() {
    this.setState({isVisible2: true});
  }
  showPopover3() {
    this.setState({isVisible3: true});
  }
 
  closePopover1() {
    this.setState({isVisible1: false});
  }
  closePopover2() {
    this.setState({isVisible2: false});
  }
  closePopover3() {
    this.setState({isVisible3: false});
  }
	
	
  render() {
	const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const tumorId = navigation.getParam('tumorId', 'NO-TumorID');
    
    const otherParam = navigation.getParam('otherParam', 'some default value');
    
    

    return (
      <View style={styles.container}>
	  	<Svg width={fullWidth} height={fullHeight} viewBox={fullViewBox}>
		  	<Defs>
				<LinearGradient id='gradient1' x1='20%' y1='0' x2='70%' y2='100%'>
					<Stop offset='0' stopColor="#2E88CD" stopOpacity="1" />
					<Stop offset="1" stopColor="#60FDF9" stopOpacity="1" />
				</LinearGradient>
				<Rect id='rect1' x='0' y={fullHeight} width='0' height='0'/>
			</Defs>
			<Rect x='0' y='0' width={fullWidth} height={fullHeight} fill='url(#gradient1)'/>
		</Svg>
		<View style={styles.content}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>
						My Health Note
					</Text>
				</View>
        	<View style={styles.body}>
					<View style={styles.personalInfo} >
						<View style={styles.avatarBlock}>
							<Image style={styles.avatarImage} source={require('../icons/facebook.png')} />
						</View>
						<View style={styles.nameBlock}>
							<View style={styles.nameTextBlock}>
								<Text style={styles.nameText}>
									Kami-sama
								</Text>
							</View>
							<View style={styles.tipsBlock}>
								<Text style={styles.tipsText}>
									This is tips
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.resultTable}>
						<Text style={styles.resultText}>
							Result Table
						</Text>
					</View>
					<View style={styles.doctorTable}>
						<Text style={styles.doctorText}>
							Doctor's note
						</Text>
					</View>
				</View>
				<View style={styles.footer} >
								
					<TouchableOpacity style={styles.buttonRow} onPress={() => this._onPressButton2(this.state.tumor, this.state.node, this.state.metastasis)}>
						<View style={styles.calBtn}>
							<Text style={styles.calBtnText}>
								Send to Doctor
							</Text>
						</View>
					</TouchableOpacity>
					
					<TouchableOpacity style={styles.buttonRow} onPress={() => this._onPressButton2(this.state.tumor, this.state.node, this.state.metastasis)}>
						<View style={styles.calBtn}>
							<Text style={styles.calBtnText}>
								Save to my Health note
							</Text>
						</View>
					</TouchableOpacity>
					
					<TouchableOpacity style={styles.buttonRow} onPress={() => this._onPressButton2(this.state.tumor, this.state.node, this.state.metastasis)}>
						<View style={styles.calBtn}>
							<Text style={styles.calBtnText}>
								Return to CTCAE
							</Text>
						</View>
					</TouchableOpacity>
					
				</View>
					<TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
						<Icon name='keyboard-backspace' size={30} color='#fff'/>
					</TouchableOpacity>
			</View>
		</View>
    )
  }
};

export default Myhealthnote;

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	content: {
		position: 'absolute',
		width: fullWidth,
		height: fullHeight,
		top: 0,
		left: 0,
	},
	header: {
		width: '100%',
		height: (0.222*fullWidth),
		alignItems: 'center',
	},
	headerTitle: {
		fontSize: (0.061*fullWidth),
		color: '#fff',
		marginTop: (0.092*fullWidth),
		fontFamily: 'Roboto',
	},
	body: {
		flex: 1,
	},
	personalInfo: {
		flex: 2,
		flexDirection: "row"
	},
	resultTable: {
		flex: 4,
		backgroundColor: 'rgba(255, 255, 255, 0.36)',
		borderRadius: 5,
		marginHorizontal: 15,
		marginVertical: 10,
	},

	resultText: {
		color: '#fff',
		fontSize: 16,
		textAlign: 'left',
		marginTop: 10,
		marginLeft: 10,
	},
	doctorTable: {
		flex: 3,
		backgroundColor: 'rgba(255, 255, 255, 0.36)',
		borderRadius: 5,
		marginHorizontal: 15,
		marginVertical: 10,
	},
	doctorText: {
		color: '#fff',
		fontSize: 16,
		textAlign: 'left',
		marginTop: 10,
		marginLeft: 10,
	},
	avatarBlock: {
		flex: 1,
		alignItems: "center"
	},
	avatarImage: {
		width: (0.2*fullWidth),
		height: (0.2*fullWidth),
	},
	nameBlock: {
		flex: 2,
		flexDirection: "column",
	},
	nameTextBlock: {
		flex: 1
	},
	tipsBlock: {
		flex: 2
	},
	tipsText: {
		color: "#fff",
		fontSize: 17,
	},
	nameText: {
		fontSize: 19,
		color: "#fff",
		fontWeight: "bold",
	},
	footer: {
		height: (0.3*fullWidth),
		backgroundColor: '#fff',
		flexDirection: 'row',
		width: '100%',
		paddingVertical: 12,
	},
	buttonRow: {
		flex: 1,
		flexDirection: 'row',
		marginHorizontal: 10,
		marginVertical: 7,
		borderRadius: 5,
		backgroundColor: '#71D6E6'
	},	
	calBtn: {
		position: 'absolute',
		width: '100%',
		top: 0,
		left: 0,
	},
	calBtnText: {
		fontFamily: 'Roboto',
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 17,
	},
	backBtn: {
		position: 'absolute',
		top: 32,
		left: 15,
	},
});
