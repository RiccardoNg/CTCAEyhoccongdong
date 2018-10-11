import React, { Component } from 'react';
import {AppRegistry,Picker, SectionList, Alert, View, Text, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
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
		name: 'Tis - Level TIS',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
		value: 'Tis',
	},
	{
		name: 'T1 - Level 1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
		value: 'T1',
	},
	{
		name: 'T2 - Level 2',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vehicula tellus. Phasellus nec interdum massa',
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
export class TNMCalculator extends Component {
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
						TNM Test
					</Text>
				</View>
        	<View style={styles.body}>
					<View style={styles.result} >
						<View style={styles.resultHeader}>
							<Text style={styles.resultTitle}>
							Result: {this.state.result}
							</Text>
						</View>
						<ScrollView showsVerticalScrollIndicator={false}>
							<Text style={styles.resultDesc}>
								Select each stage for T, N, M then press 'Calculate' button to get the result!
							</Text>
						</ScrollView>
					</View>
				</View>
				<View style={styles.footer} >
					<View style={styles.buttonRow} >
						<View style={styles.btnLabel}>
							<Text style={styles.btnLabelText}>
							Tumor
							</Text>
						</View>
						<TouchableOpacity ref={ref => this.touchable = ref} style={styles.button} onPress={() => this.showPopover1()}>
							<Text style={styles.btnText}>
							{this.state.tumor}
							</Text>
						</TouchableOpacity>
						<Popover
							isVisible={this.state.isVisible1}
							onClose={() => this.closePopover1()}
							popoverStyle={{width: fullWidth, height: (0.72*fullWidth), backgroundColor: '#fff'}}
							>
							<Text style={styles.popoverTitle}>Choose your stage</Text>
							<ScrollView showsVerticalScrollIndicator={false}>
								{
									tumorOpt.map((l,i) => (
										<ListItem
											key={i}
											avatar={<Avatar rounded title={l.value} size={70} height={70}/>}
											onPress={() => this.setState({tumor: l.value}) + this.closePopover1()}
											title={l.name}
											titleStyle={{fontSize: (0.056*fullWidth),}}
											subtitle={
												<View style={styles.subtitleView}>
													<Text style={{color: '#848484', marginLeft: 15, fontSize: 13,}}>{l.description}</Text>
												</View>
											}
											
											chevronColor={'#3c3c3c'}
										/>
									))
								}
							</ScrollView>
						</Popover>
					</View>
					<View style={styles.buttonRow} >
						<View style={styles.btnLabel}>
							<Text style={styles.btnLabelText}>
							Node
							</Text>
						</View>
						<TouchableOpacity ref={ref => this.touchable = ref} style={styles.button} onPress={() => this.showPopover2()}>
							<Text style={styles.btnText}>
							{this.state.node}
							</Text>
						</TouchableOpacity>
						<Popover
							isVisible={this.state.isVisible2}
							onClose={() => this.closePopover2()}
							popoverStyle={{width:  fullWidth, height: (0.72*fullWidth), backgroundColor: '#fff'}}
							>
							<Text style={styles.popoverTitle}>Choose your stage</Text>
							<ScrollView showsVerticalScrollIndicator={false}>
								{
									nodeOpt.map((l,i) => (
										<ListItem
											key={i}
											avatar={<Avatar rounded title={l.value} size={70} height={70}/>}
											onPress={() => this.setState({node: l.value}) + this.closePopover2()}
											title={l.name}
											titleStyle={{fontSize: (0.056*fullWidth),}}
											subtitle={
												<View style={styles.subtitleView}>
													<Text style={{color: '#848484', marginTop: 5, marginLeft: 15, fontSize: 15,}}>{l.description}</Text>
												</View>
											}
											
											chevronColor={'#3c3c3c'}
										/>
									))
								}
							</ScrollView>
						</Popover>
					</View>
					<View style={styles.buttonRow} >
						<View style={styles.btnLabel}>
							<Text style={styles.btnLabelText}>
							Metastasis
							</Text>
						</View>
						<TouchableOpacity ref={ref => this.touchable = ref} style={styles.button} onPress={() => this.showPopover3()}>
							<Text style={styles.btnText}>
							{this.state.metastasis}
							</Text>
						</TouchableOpacity>
						<Popover
							isVisible={this.state.isVisible3}
							onClose={() => this.closePopover3()}
							popoverStyle={{width: fullWidth, height: (0.72*fullWidth), backgroundColor: '#fff'}}
							>
							<Text style={styles.popoverTitle}>Choose your stage</Text>
							<ScrollView showsVerticalScrollIndicator={false}>
								{
									metastasisOpt.map((l,i) => (
										<ListItem
											key={i}
											avatar={<Avatar rounded title={l.value} size={(0.195*fullWidth)} height={(0.195*fullWidth)}/>}
											onPress={() => this.setState({metastasis: l.value}) + this.closePopover3()}
											title={l.name}
											titleStyle={{fontSize: (0.056*fullWidth),}}
											subtitle={
												<View style={styles.subtitleView}>
													<Text style={{color: '#848484', marginTop: (0.014*fullWidth), marginLeft: (0.042*fullWidth), fontSize: (0.042*fullWidth),}}>{l.description}</Text>
												</View>
											}
											
											chevronColor={'#3c3c3c'}
										/>
									))
								}
							</ScrollView>
						</Popover>
					</View>
					<TouchableOpacity style={styles.buttonRow} onPress={() => this._onPressButton2(this.state.tumor, this.state.node, this.state.metastasis)}>
						<Svg width={0.89*fullWidth} height={0.153*fullWidth} viewBox='0 0 320 55'>
						<Defs>
							<LinearGradient id='gradient2' x1='0' y1='0' x2='100%' y2='100%'>
								<Stop offset='0' stopColor="#71D6E6" stopOpacity="1" />
								<Stop offset="1" stopColor="#328ACE" stopOpacity="1" />
							</LinearGradient>
						</Defs>
						<Rect x='0' y='0' rx='5' ry='5' width={0.89*fullWidth} height={0.153*fullWidth} fill='url(#gradient2)'/>
						</Svg>
						<View style={styles.calBtn}>
							<Text style={styles.calBtnText}>
								Calculate
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

export default TNMCalculator;

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
	result: {
		flex: 1,
		alignItems: 'center',
	},
	resultHeader: {
		width: (0.89*fullWidth),
		height: (0.153*fullWidth),
		backgroundColor: 'rgba(255, 255, 255, 0.36)',
		borderRadius: 5,
	},
	resultTitle: {
		fontSize: (0.056*fullWidth),
		color: '#fff',
		marginLeft: 19,
		marginVertical: 15,
	},
	resultDesc: {
		fontFamily: 'Roboto',
		fontSize: 17,
		marginHorizontal: 25,
		color: 'rgba(255, 255, 255, 0.78)',
		marginTop: 20,
	},
	footer: {
		height: (0.83*fullWidth),
		backgroundColor: '#fff',
		width: '100%',
		paddingVertical: 12,
	},
	buttonRow: {
		flex: 1,
		flexDirection: 'row',
		marginHorizontal: 20,
		marginVertical: 7,
		borderRadius: 5,
		backgroundColor: '#F5F4F4'
	},
	
	button: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#E7E7E7',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnText: {
		fontFamily: 'Roboto',
		fontSize: 16,
		color: '#383838',
		textAlign: 'center',
		marginVertical: 17,
	},
	btnLabel: {
		flex: 1,
	},
	btnLabelText: {
		fontFamily: 'Roboto',
		fontSize: 16,
		color: '#383838',
		marginLeft: 24,
		marginVertical: 17,
	},
	popoverTitle: {
		marginVertical: (0.027*fullWidth),
		fontSize: (0.056*fullWidth),
		color: '#000',
		textAlign: 'center',
	},
	calBtn: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
	},
	calBtnText: {
		fontFamily: 'Roboto',
		fontSize: 19,
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 15,
	},
	backBtn: {
		position: 'absolute',
		top: 32,
		left: 15,
	},
});
