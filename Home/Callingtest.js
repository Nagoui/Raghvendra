// import React from 'react';
// import { BackHandler,AsyncStorage,StatusBar,Image,NativeModules, View, Text,ScrollView, Button,AppState,StyleSheet,TouchableOpacity,Alert,Dimensions } from 'react-native';
// const {width,height} = Dimensions.get('window');
// import SystemSetting from 'react-native-system-setting';
// // import Geolocation from 'react-native-geolocation-service';
// var DirectSms = NativeModules.DirectSms;
// import VolumeControl, {
//   VolumeControlEvents
// } from "react-native-volume-control";
// // import Geocoder from 'react-native-geocoding';
// import Geocode  from 'react-geocode';
// // Geocode.setApiKey("AIzaSyBi24k-D9Jk0G-5d9tt6lGcRQZWuwSQDM8");
// var song = null;
// // import CustomSidebarMenu from './CustomSidebarMenu.js';
// // import PushNotification from 'react-native-push-notification';
//  var SampleArray = [0, 0]
// //  import PushController from './PushNotification.js';
//  var SoundPlayer = require('react-native-sound');
// //  import LocationScreen from './src/Component/DrawerNavigations/LocationScreen.js';
// // import SundPlayer from 'react-native-sound';
//     // import ListView from 'deprecated-react-native-listview';
// var callDetector = undefined

// // import CallDetectorManager from 'react-native-call-detection'
// import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
// export default class HomeScreen extends React.Component {
//     // static navigationOptions={
//     //   header:null
//     // }
//     //   constructor(props) {
// //     super(props)
// //  
  
//     constructor(props) {
//       super(props)
//       // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

//           // this.state = {callStates : [], ds: ds} //call states
//           // this.startListenerTapped = this.startListenerTapped.bind(this);
       
//       this.state = {
//         phone: '',
//         name: '',
//         username: '',
//         password: '',
//         loginuser: '',
//         loginpass: '',
//         sms1: '',
//         call1: null,
//         whatsapp1: null,
//         volume: 0,
//         volume2: 0,
//         volume3: 0,
//         volume4: 0,
//         volume5: 0,
//         pause: false,
//         volume6: 'press volume button for 4 second ',
//         button_press_done: false,
//         appState: AppState.currentState,
//         loading: false,
//         updatesEnabled: false,
//         location: {},
//         place:{},
//         mobile_no: '',
//         latitude: 0,
//         longitude: 0,
//         error: null,
//         Address: null,
//         speed:0,
//         callStates : [],
//         // ds: ds,
      
    
//       }
      
//       this.first_function_run();
//       // this.sendNotification = this.sendNotification.bind(this);
//     }
//     componentDidMount = async () => {
//       // User.loginuser = await AsyncStorage.getItem('loginuser')
//       // this.props.navigation.navigate(User.loginuser ?  'app':'AStack6' );


//       // this.getLocationUpdates()
//       // this.getLocation()
//       // this.initEventPushNotification()
//       this.setState({
//         volume2: await VolumeControl.getVolume(),
//     });
//     forcereload = true;
  
//     this.volEvent = VolumeControlEvents.addListener(
//         "VolumeChanged",
//         this.volumeEvent,
  
//     );

//     }

    
//     // componentWillUnmount() {
//     //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
//     // }
//       // User.sms = await AsyncStorage.getItem('sms')
//       // this.setState({ sms: val })
  
//       // User.call = await AsyncStorage.getItem('call')
//       // this.setState({ call: val })
  
//       // User.whatsapp = await AsyncStorage.getItem('whatsapp')
//       // this.setState({ whatsapp: val })
//       // this.initEventPushNotification()
  
          
//       // this.props.navigation.navigate(User.loginuser ? 'App' : 'Auth');
  
//     // }


//     handleBackButton = () => {               
//       Alert.alert(
//           'Exit App',
//           'Exiting the application?', [{
//               text: 'Cancel',
//               onPress: () => console.log('Cancel Pressed'),
//               style: 'cancel'
//           }, {
//               text: 'OK',
//               onPress: () => BackHandler.exitApp()
//           }, ], {
//               cancelable: false
//           }
//        )
//        return true;
//      }

//     componentWillUnmount(){
//       // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
//       //  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton());
//       // this.getLocationUpdates()
//       this.getLocation()
     
//     }

  
  
 
  
  
//     volumeEvent = event => {
//       // alert(this.state.call1)
//       // alert('1')
     
//       this.setState({ volume3: (event.volume) });
  
  
//       if ((event.volume) == 0) {
//           SystemSetting.setVolume(0.1, { config: 'music' });
//       }
//       else if (event.volume == 1) {
//           SystemSetting.setVolume(0.9)
//       }
  
//       SampleArray.push(this.state.volume3);
//       this.setState({ volume5: SampleArray.length })
  
//       // alert('this.state.call1')
  
//       if ((this.state.volume5) > 80) {
//         // alert('this.state.call1')

//           // if(this.state.sms1==!null){
//           //   alert('hi')
//           // }

        

//         DirectSms.sendDirectSms('9696459755', 'https://www.google.co.in/maps/@25.43722443,81.7814105,15z')
//         NativeModules.RNImmediatePhoneCall.immediatePhoneCall('9696459755')
//           this.setState({ volume6: 'alert generated' })
//           this.setState({ button_press_done: true })
//           // this.sendNotification()
//           {
//               setTimeout(function () {
//                   SampleArray.length = 0;
//               }, (4000))
//           }
//       }
//       else {
//           setTimeout(function () {
//               // PushNotification.localNotification({
//               //   message: 'message send !',
//               //   priority: 'high'
  
//               // });
//               SampleArray.length = 0;
//           }, (5000))
//       }
//       this.setState({ volume: event.volume });
//   };
  
//   statechange() {
//       this.setState({ volume6: 'press and hold volume button ' })
//       this.setState({ button_press_done: false })
  
  
//   }
  
//   // sendNotification() {
//   //     PushNotification.localNotification({
//   //         message: 'You pushed the notification button!',
//   //         priority: 'high',
//   //         // autoCancel: true,
//   //         // largeIcon: "ic_launcher",
  
//   //     });
//   // };
  
//   initEventPushNotification() {
//       AppState.addEventListener('change', (state) => {
//           console.log(state)
//           if (state === 'background') {
//               this.onPressButtonPlay();
//               // PushNotification.localNotification({
//               //     message: 'app running in background !',
//               //     priority: 'high'
  
//               // });
//           }
//           else if (state === 'active') {
//               this.onPressButtonPause();
//               // PushNotification.localNotification({
//               //     message: 'app runing in foreground !',
//               //     priority: 'high'
  
//               // });
//           }
//           // else if (state !== active) {
//           //     PushNotification.localNotification({
//           //         message: 'app not active !',
//           //         priority: 'high'
  
//           //     });
//           // }
  
  
//       });
  
//   }
//   onPressButtonPlay() {
//       song = new SoundPlayer('abc.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
//           if (error)
//               ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
//           else {
//               song.play((success) => {
//                   if (!success)
//                       ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
//               });
//           }
//       });
//   }
  
//   onPressButtonPause() {
//       if (song != null) {
//           if (this.state.pause) // play resume
//               song.play((success) => {
//                   if (!success)
//                       ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
//               });
//           else song.pause();
  
//           this.setState({ pause: !this.state.pause });
//       }
//   }
  
  
  
//     first_function_run() {
//       // alert('test')
//       AsyncStorage.getItem('sms').then(val => {
//         this.setState({ sms1: val })
//       })
  
//       AsyncStorage.getItem('call').then(val => {
//         this.setState({ call1: val })
//       })
  
//       AsyncStorage.getItem('whatsapp').then(val => {
//         this.setState({ whatsapp1: val })
//       })
//       // AsyncStorage.getItem('password').then(val => {
//       //     this.setState({ password: val })
  
//       // })
//     }
   
//     SendAlertFunction(){
      
//       // alert(this.state.sms1)
//       Alert.alert(
//         'Alert',
//         'Are You Sure',
//         [
            
//             {text:'OK',onPress :  async()=>{ 
           
                
//                 // await AsyncStorage.clear()
//                 // this.props.navigation.navigate('Auth')
//                 // RNImmediatePhoneCall.immediatePhoneCall('9696459755'),
//                 DirectSms.sendDirectSms('9696459755', 'https://www.google.co.in/maps/@25.43722443,81.7814105,15z'),
//                 RNImmediatePhoneCall.immediatePhoneCall('9696459755')

//                 // NativeModules.RNImmediatePhoneCall.immediatePhoneCall('9696459755')
//                 // this.setState({ volume6: 'alert generated' })
        
//              } },
//             {text:'Cancel',onPress:()=>false }
//         ]
//     )
   
      
//       // alert('hus')
//     }
//   watchId = null;
//     test(){
//       // alert('this.latitude')
//       Geocode.setApiKey("AIzaSyBi24k-D9Jk0G-5d9tt6lGcRQZWuwSQDM8");
//       // alert('1')   
//       Geocode.fromLatLng('41.89', '12.49')
         
//          .then(response=>{
//               // .then(json => {
//                            const address_Component = response.results[0].formatted_addess;
//                      alert(address_Component)
//                    })
//         // alert('2')
//             error =>{
//               alert(error);
//             }
//             // alert('dfsfdfs')
//           // );
//         //  Geocoder.init("AIzaSyBSV18PG6q8S9tUzjTYOyhWM_0tHWI_YEM");
//         //    Geocoder.from(41.89, 12.49)
//         //    .then(json => {
//         //            var addressComponent = json.results[0].address_components[0];
//         //      alert(addressComponent)
//         //    })
//         //    .catch(error => console.warn(error));#C71585
//     }


// // export default class HomeComponent extends Component {
 



//     render() {
//       // alert(this.state.callStates)
//       // console.log(this.state.callStates)
//       let pic ={uri:'https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/a3/c5/b4/a3c5b404-a7e8-0c96-ed5d-3942d55b0004/AppIcon-0-1x_U007emarketing-85-220-5.png/246x0w.png'}
//       let setting ={uri:'https://www.searchpng.com/wp-content/uploads/2019/03/Setting-Icon-PNG-Image-1-715x715.png'}
//       let drawer ={uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'}
      
//       const { loading, location,latitude, updatesEnabled,longitude,speed } = this.state;
//       return (
//         <View style={{backgroundColor:'black', top: 0, width: width,height:height, alignItems: 'center', justifyContent: 'center' }}>
//          {/* <Text></Text> */}
//           <StatusBar  
//                     backgroundColor='black'  
//                     barStyle='light-content'  
//                 />
//          <Text style={{color:'red',fontSize:40,top:-130,fontFamily:'bold'}}>PANIC BUTTON</Text>
//           <View style={{top:-200,alignItems:'flex-start'}}>
//          </View>
//          <View style={{
//         // flex: 1,
//         width:'90%',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         top:-100,
//       }}>
//          {/* <Text style={{color:'white'}}>hi {JSON.stringify(location)}</Text> */}
//                 <Text style={{color:'white'}}> Latitude = {this.state.latitude}</Text>
//                 <Text style={{color:'white'}}> Longitude = {this.state.longitude}</Text>
//                  </View>
//                  <Text style={{color:'white',width:'70%',top:-80}}>Address = {this.state.Address}</Text>
//                 {this.state.error ? <Text style={{color:'white'}}>Error: {this.state.error}</Text> : null}
//                 {/* <Text style={{color:'white',top:-20}}> speed = {this.state.speed}</Text> */}
//                 <Text style={{color:'white',top:-20}}></Text>

//           <View style={{flexDirection:"column-reverse",position:'relative'}}> 
         
//             <View style={{
//         // flex: 1,
//         width:width,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//       }}>
//         <TouchableOpacity style={{backgroundColor:'white'}} onPress={() => this.props.navigation.openDrawer()}>
//                     <Image source={drawer}style={{width: 45, height: 45}}/>
//         </TouchableOpacity>
//         {/* <View style={{width: 15, height: 15, backgroundColor: 'powderblue'}} > */}
//            {/* <Button
//            style={{width: 15, height: 15, backgroundColor: 'powderblue'}}
//            title='draw' onPress={() => this.props.navigation.openDrawer()}
//           /> */}
//         {/* <Button
//         style={{width: 45, height: 25, backgroundColor: 'steelblue'}}
//             title="set"
//             onPress={() => this.props.navigation.navigate('SMS')}
//           /> */}
//               <TouchableOpacity  onPress={() => this.props.navigation.navigate('SMS')}>
//                     <Image source={setting}style={{width: 45, height: 45}}/>
//               </TouchableOpacity>
       
//       </View>




//       {/* <Button title='Start Observing' onPress={this.getLocationUpdates} disabled={updatesEnabled} /> */}
//           </View>
   
//                  <Text style={[styles.volumes, (this.state.button_press_done ? styles.inputHighlight : null)]}>{this.state.volume6}</Text>
                 
//                   <Text></Text>
                
//                   <TouchableOpacity  onPress={this.SendAlertFunction}>
//                     {/* <Text style={{fontSize:38,color:'white',top:22,alignSelf:'center',fontFamily:'bold'}}>    Send   Alert</Text> */}
//                     <Image source={pic}style={styles.AlertButton}/>
//                   </TouchableOpacity>
                  
//                   {/* <PushController /> */}


//       {/* <Button  title='test'   onPress={this.test}/> */}
//       {/* <Button
//           onPress={this.startListenerTapped}
//           title="Start Listener"
//           color="#841584"
//           // style = {styles.bottomMargin}
//         /> */}
//         {/* <ListView
//           dataSource={this.state.ds}
//           renderRow={(rowData) => <Text>{rowData}</Text>}
//         /> */}

//         </View>

      
//       );
//     }
//   }

// const styles = StyleSheet.create({
//   volumes: {
//       // color:'#ddd'
//       color: 'blue',
//       fontSize: 20,
//       top:50,
//   },
//   inputHighlight: {
//       color: 'red',
//       fontSize: 20,
//   },
//   AlertButton:{
//     top:60,
//     backgroundColor:'red',
//     height:160,
//     width:160,
//     borderRadius:80,
//     alignItems:'center',
//   }
// })
