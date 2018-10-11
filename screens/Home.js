import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableHighlight, TouchableOpacity, ImageBackground, ScrollView,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Stars from 'react-native-stars-rating';
import {SearchBar, ListItem, Avatar, Rating} from 'react-native-elements';
import {Svg, Rect, Defs, ClipPath, Circle, Path, G, LinearGradient, Stop, Use, Symbol} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';

const styles = StyleSheet.create({
	container:{
		backgroundColor: '#fff',
		flex: 1,
		flexDirection: 'column',
	},
	header:{
		height: 230,
		flexDirection: 'column',
		top: 24,
		backgroundColor: 'transparent',
		elevation: 3,
	},
	page: {
		flex: 1,
		marginVertical: 5,
		backgroundColor: '#fffa',
	},
	pageTitle:{
		width: '100%',
		fontSize: 23,
		textAlign: 'center',
		color: '#000',
		marginVertical: 10,
	},
	topIcon: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 12,
	},
	topBar: {
		flex: 1,
		flexDirection: 'row',
	},
	avtCover: {
		flex: 3,
		flexDirection: 'column',
	},
	infoSpace: {
		flex: 1,
	},
	info: {
		flexDirection: 'row',
	},
	nameInfo: {
		marginVertical: 15,
		flexDirection: 'column',
		paddingLeft: 130,
		paddingTop: 5,
		width: '100%',
		backgroundColor: '#000000b0',
		height: 80,
	},
	name: {
		fontSize: 25,
		color: '#fff',
		fontWeight: '600',
		marginBottom: 5,
	},
	job: {
		fontSize: 18,
		color: '#fff',
		fontStyle: 'italic',
	},
	avt: {
		height: 90,
		width: 90,
		borderRadius: 45,
		marginLeft: 20,
		marginVertical: 10,
		position: 'absolute',
	},
	settingBtn: {
		flex: 1,
		top: 12,
		alignItems:'center',
	},
	menu: {
		height: 50,
		flexDirection: 'row',
		borderTopWidth: 0.5,
		borderTopColor: '#3c3c3c',
		backgroundColor: '#fff',
	},
	subMenu: {
		flex: 1,
	},
	subMenuTitle: {
		fontSize: 18,
		textAlign: 'center',
		color: '#A0A0A0',
		lineHeight: 50,
	},
	subMenuTitleActive: {
		color: '#8AB7F5',
	},
	body: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	bodyBgr: {
		flex: 1,
		flexDirection: 'column',
		width: '100%',
		alignItems: 'center',
		marginTop: 30,
	},
	appBtn: {
		flex: 1,
		flexWrap: 'nowrap',
		width: 380,
	},
	subtitleView: {
		marginLeft: 10,
		marginTop: 5, 
	}

});
	
const appList = [
	{
		appId: 'app01',
		name: 'Kiểm tra chỉ số TNM',
		avatar_url: require('../icons/icon-app-1.png'),
		rate: 5,
		description: 'Nhập vào chỉ số T, N, M để kiểm tra tình trạng sức khỏe của bạn',
		appScreen: 'TNMScreen'
	},
	{
		appId: 'app02',
		name: 'Đo chỉ số Contact Lens',
		avatar_url: require('../icons/icon-app-2.png'),
		rate: 5,
		description: 'Nhập vào các chỉ số thị giác để tính kích thước Contact Lens phù hợp',
		appScreen: 'LensScreen'
	},
	{
		appId: 'app03',
		name: 'Theo dõi sức khỏe',
		avatar_url: require('../icons/icon-app-3.png'),
		rate: 4,
		description: 'Nhập vào chỉ số như huyết áp, đường huyết,... để theo dõi sức khỏe của bạn',
		appScreen: 'HealthTrackerScreen'
	},
	{
		appId: 'app04',
		name: 'Rèn luyện trí não',
		avatar_url: require('../icons/icon-app-4.png'),
		rate: 5,
		description: 'Các trò chơi giúp tăng cường trí não, giảm thiểu suy giảm trí nhớ',
		appScreen: 'LoginScreen'
	},
	{
		appId: 'app98',
		name: 'Doctor List',
		avatar_url: require('../icons/icon-app-4.png'),
		rate: 5,
		description: 'Danh sach bac si',
		appScreen: 'DoctorListScreen'
	},
	{
		appId: 'app99',
		name: 'Gym',
		avatar_url: require('../icons/icon-app-4.png'),
		rate: 5,
		description: 'Các bài tập gym tại nhà và theo dõi chế độ dinh dưỡng',
		appScreen: 'FitnessGuideScreen'
	},
]


export default class Home extends Component {
  render() {
	  
    return (
		
			  
      <View style = {styles.container}>
		<View style = {styles.header}>
			
			<Svg height={300} width={420} viewBox='0 0 420 300' >
				<Defs>
					<LinearGradient id='gradient1' x1='25%' y1='0' x2='50%' y2='100%'>
						<Stop offset='0' stopColor="#4A93CB" stopOpacity="1" />
						<Stop offset="1" stopColor="#55D3E9" stopOpacity="1" />
					</LinearGradient>
					<ClipPath id='clip-cover'>
						<Path d="M0,0v207c0,0,188.2,34,311,2c69-18,109-53,109-53V0H0z"/>
					</ClipPath>
					<ClipPath id='clip-avt'>
						<Circle cx='15%' cy='125' r='40' />
					</ClipPath>
				</Defs>
				
				<Rect x='0' y='0' width={420} height={250} fill='url(#gradient1)' clipPath='url(#clip-cover)'
				/>
				<SvgImage 
					x='10' 
					y='80' 
					width='100' 
					height='100' 
					href={require('../images/avt/user-1.jpg')}
					clipPath='url(#clip-avt)'
				/>
				<SvgText fontFamily='Roboto' fill='rgb(255, 255, 255)' fontSize='21' stroke='rgb(255, 255, 255)' strokeWidth='0.5' x='50%' y='45' textAnchor='middle'>
				Trang chủ
				</SvgText>
				<SvgText fontFamily='Roboto' fill='rgb(255, 255, 255, 0.88)' fontSize='23' stroke='rgb(255, 255, 255, 0.88)' strokeWidth='0.7' x='130' y='115' textAnchor='start'>
				Nguyễn An Ninh
				</SvgText>
				<SvgText fontFamily='Roboto' fill='rgb(255, 255, 255, 0.8)' fontSize='19'  x='130' y='145' textAnchor='start'>
				Chủ phòng Gym
				</SvgText>
			</Svg>
			<View style={{position: 'absolute', top: 15, left: 15,}} >
				<Icon name='home' size={35} color='#fff'/>
			</View>
			<TouchableOpacity style={{position: 'absolute', top: 15, right: 15,}} onPress={()=>this.props.navigation.push('SettingScreen')}>
				<Icon name='settings' size={35} color='#fff'/>
			</TouchableOpacity>
			
		</View>
		
		
		<View style = {styles.body}>
			<View style={styles.bodyBgr} >
				<ScrollView showsVerticalScrollIndicator={false}>
					
					<View style ={styles.appBtn} >
						<View >
							{
								appList.map((l,i) => (
									<ListItem
										key={i}
										avatar={<Avatar rounded source={ l.avatar_url } size={80} height={80}/>}
										onPress={() => this.props.navigation.push(l.appScreen)}
										title={l.name}
										titleStyle={{fontSize: 20,}}
										subtitle={
											<View style={styles.subtitleView}>
												<Stars
													isActive={true}
													rateMax={5}
													isHalfStarEnabled={true}
													onStarPress={(rating) => console.log(rating)}
													rate={l.rate}
													size={15}
												/>
												<Text numberOfLines= {1} style={{color: '#848484', marginTop: 5, fontSize: 15,}}>{l.description}</Text>
											</View>
										}
										bottomDivider={false}
										containerStyle={{
											height: 110, 
											borderWidth: 0,
											borderColor: '#fff',
											borderRadius: 20, 
											elevation: 1,
											marginVertical: 10, 
											paddingTop: 15,
											borderBottomColor: '#fff',
										}}
										contentContainerStyle={{height: 100, paddingVertical: 10, borderColor: '#fff'}}
										chevronColor={'#3c3c3c'}
									/>
								))
							}
						</View>
						<View style={styles.chartBoard}>
					
						</View>
					</View>
				</ScrollView>
			</View>
		</View>	
		<View style = {styles.menu}>
			<View style = {styles.subMenu}>
				<Text style = {styles.subMenuTitle} >Theo dõi</Text>
			</View>
			<View style = {styles.subMenu}>
				<Text style = {styles.subMenuTitle}>Test 2</Text>
			</View>
			<View style = {styles.subMenu}>
				<Text style = {styles.subMenuTitle}>Test 3</Text>
			</View>
			<View style = {styles.subMenu}>
				<Text style = {styles.subMenuTitle}>Test 4</Text>
			</View>
		</View>

      </View>
    )
  }
}

