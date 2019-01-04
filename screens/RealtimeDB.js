import React, { Component } from 'react';
import {AppRegistry,Picker, SectionList, Alert, View, Text, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, FlatList, ListView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, SearchBar, ListItem, Avatar, Rating } from 'react-native-elements';
import Popover from 'react-native-popover-view';
import {Rect as RectPop} from 'react-native-popover-view';
import {Svg, Rect, Defs, ClipPath, Circle, Path, G, LinearGradient, Stop, Use, Symbol, Line} from 'react-native-svg';

import {firebaseApp} from '../components/FirebaseConfig.js'

export class RealtimeDB extends Component {
	constructor(props){
		super(props);
		this.itemRef = firebaseApp.database();
		this.state ={
			text:'',
			dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !==r2}),
		}
	}

	setDB(){
		this.itemRef.ref('KhoaHoc').set({
			ReactNative:'khaigiang20/3',
			IOS:'khaigiang15/2',
			Android:'khaigiang10/1'
		})
	}

	pushDB(){
		this.itemRef.ref('KhoaHoc').child('TrungTamDaoTaoLapTrinh').push({
			ReactNative:'khaigiang20/3',
			IOS:'khaigiang15/2',
			Android:'khaigiang10/2'
		})
	}

	addDB(){
		this.itemRef.ref('KhoaHoc').child('Android').on('value', function(snapshot){
			alert(snapshot.val())
		});
	}

	nhapdulieu(){
		this.itemRef.ref('TrungTam2').child('NgonNguLapTrinh').push({
			LapTrinh: this.state.text
		});
		this.setState({
			text:''
		})
	}

	listenForItems(itemRef){
		var items = [];
		this.itemRef.ref('KhoaHoc/TrungTamDaoTaoLapTrinh').on('child_added', (dataSnapshot)=>{
			items.push({
				name:dataSnapshot.val().Android,
				key:dataSnapshot.key
			});
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(items)
			});
		});
	}

	componentDidMount(){
		this.listenForItems(this.itemRef);
	}

  	render (){
	  return(
		<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
			<TouchableOpacity onPress={()=>{this.setDB()}}>
				<Text>
					setDB
				</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={()=>{this.pushDB()}}>
				<Text>
					pushDB
				</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={()=>{this.addDB()}}>
				<Text>
					addDB
				</Text>
			</TouchableOpacity>
			<TextInput
					onChangeText={(text) => this.setState({text})}
					value={this.state.text}
			/>
			<TouchableOpacity onPress={()=>{this.nhapdulieu()}}>
				<Text>
					nhap du lieu
				</Text>
			</TouchableOpacity>
			<ListView
				dataSource={this.state.dataSource}
				renderRow = {(rowData)=>
					<View style={{borderWidth:1, borderColor:'gray', margin:15}}>
						<Text style={{color:'red'}}>
							{rowData.name}
							{rowData.key}
						</Text>
					</View>
				}
			/>
		</View>
	  );
  	}
};

export default RealtimeDB;

