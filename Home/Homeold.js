
import React from 'react';
import { BackHandler,AsyncStorage,StatusBar,Image,NativeModules, View, Text,ScrollView, Button,AppState,StyleSheet,TouchableOpacity,Alert,Dimensions } from 'react-native';
const {width,height} = Dimensions.get('window');
import SystemSetting from 'react-native-system-setting';
import Geolocation from 'react-native-geolocation-service';
var DirectSms = NativeModules.DirectSms;
import VolumeControl, {
  VolumeControlEvents
} from "react-native-volume-control";
// import Geocoder from 'react-native-geocoding';
import Geocode  from 'react-geocode';
// Geocode.setApiKey("AIzaSyBi24k-D9Jk0G-5d9tt6lGcRQZWuwSQDM8");
var song = null;
// import CustomSidebarMenu from './CustomSidebarMenu.js';
// import PushNotification from 'react-native-push-notification';
 var SampleArray = [0, 0]
//  import PushController from './PushNotification.js';
 var SoundPlayer = require('react-native-sound');
//  import LocationScreen from './src/Component/DrawerNavigations/LocationScreen.js';
// import SundPlayer from 'react-native-sound';
    // import ListView from 'deprecated-react-native-listview';
var callDetector = undefined

import CallDetectorManager from 'react-native-call-detection'

export default class HomeScreen extends React.Component {
    // static navigationOptions={
    //   header:null
    // }
    //   constructor(props) {
//     super(props)
//  
  
    constructor(props) {
      super(props)
      // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

          // this.state = {callStates : [], ds: ds} //call states
          // this.startListenerTapped = this.startListenerTapped.bind(this);
       
      this.state = {
        phone: '',
        name: '',
        username: '',
        password: '',
        loginuser: '',
        loginpass: '',
        sms1: '',
        call1: null,
        whatsapp1: null,
        volume: 0,
        volume2: 0,
        volume3: 0,
        volume4: 0,
        volume5: 0,
        pause: false,
        volume6: 'press volume button for 4 second ',
        button_press_done: false,
        appState: AppState.currentState,
        loading: false,
        updatesEnabled: false,
        location: {},
        place:{},
        mobile_no: '',
        latitude: 0,
        longitude: 0,
        error: null,
        Address: null,
        speed:0,
        callStates : [],
        // ds: ds,
      
    
      }
      
      this.first_function_run();
      // this.sendNotification = this.sendNotification.bind(this);
    }
    componentDidMount = async () => {
      // User.loginuser = await AsyncStorage.getItem('loginuser')
      // this.props.navigation.navigate(User.loginuser ?  'app':'AStack6' );


      this.getLocationUpdates()
      this.getLocation()
      // this.initEventPushNotification()
      this.setState({
        volume2: await VolumeControl.getVolume(),
    });
    forcereload = true;
  
    this.volEvent = VolumeControlEvents.addListener(
        "VolumeChanged",
        this.volumeEvent,
  
    );

    }

    
    // componentWillUnmount() {
    //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // }
      // User.sms = await AsyncStorage.getItem('sms')
      // this.setState({ sms: val })
  
      // User.call = await AsyncStorage.getItem('call')
      // this.setState({ call: val })
  
      // User.whatsapp = await AsyncStorage.getItem('whatsapp')
      // this.setState({ whatsapp: val })
      // this.initEventPushNotification()
  
          
      // this.props.navigation.navigate(User.loginuser ? 'App' : 'Auth');
  
    // }


    handleBackButton = () => {               
      Alert.alert(
          'Exit App',
          'Exiting the application?', [{
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
          }, {
              text: 'OK',
              onPress: () => BackHandler.exitApp()
          }, ], {
              cancelable: false
          }
       )
       return true;
     }

    componentWillUnmount(){
      // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      //  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton());
      // this.getLocationUpdates()
      this.getLocation()
     
    }

  
  
 
  
  
    volumeEvent = event => {
      // alert(this.state.call1)
      alert('1')
     
      this.setState({ volume3: (event.volume) });
  
  
      if ((event.volume) == 0) {
          SystemSetting.setVolume(0.1, { config: 'music' });
      }
      else if (event.volume == 1) {
          SystemSetting.setVolume(0.9)
      }
  
      SampleArray.push(this.state.volume3);
      this.setState({ volume5: SampleArray.length })
  
      // alert('this.state.call1')
  
      if ((this.state.volume5) > 80) {
        alert('this.state.call1')

          // if(this.state.sms1==!null){
          //   alert('hi')
          // }

        

        DirectSms.sendDirectSms('9696459755', 'https://www.google.co.in/maps/@25.43722443,81.7814105,15z')
        NativeModules.RNImmediatePhoneCall.immediatePhoneCall('9696459755')
          this.setState({ volume6: 'alert generated' })
          this.setState({ button_press_done: true })
          // this.sendNotification()
          {
              setTimeout(function () {
                  SampleArray.length = 0;
              }, (4000))
          }
      }
      else {
          setTimeout(function () {
              // PushNotification.localNotification({
              //   message: 'message send !',
              //   priority: 'high'
  
              // });
              SampleArray.length = 0;
          }, (5000))
      }
      this.setState({ volume: event.volume });
  };
  
  statechange() {
      this.setState({ volume6: 'press and hold volume button ' })
      this.setState({ button_press_done: false })
  
  
  }
  
  // sendNotification() {
  //     PushNotification.localNotification({
  //         message: 'You pushed the notification button!',
  //         priority: 'high',
  //         // autoCancel: true,
  //         // largeIcon: "ic_launcher",
  
  //     });
  // };
  
  initEventPushNotification() {
      AppState.addEventListener('change', (state) => {
          console.log(state)
          if (state === 'background') {
              this.onPressButtonPlay();
              // PushNotification.localNotification({
              //     message: 'app running in background !',
              //     priority: 'high'
  
              // });
          }
          else if (state === 'active') {
              this.onPressButtonPause();
              // PushNotification.localNotification({
              //     message: 'app runing in foreground !',
              //     priority: 'high'
  
              // });
          }
          // else if (state !== active) {
          //     PushNotification.localNotification({
          //         message: 'app not active !',
          //         priority: 'high'
  
          //     });
          // }
  
  
      });
  
  }
  onPressButtonPlay() {
      song = new SoundPlayer('abc.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
          if (error)
              ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
          else {
              song.play((success) => {
                  if (!success)
                      ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
              });
          }
      });
  }
  
  onPressButtonPause() {
      if (song != null) {
          if (this.state.pause) // play resume
              song.play((success) => {
                  if (!success)
                      ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
              });
          else song.pause();
  
          this.setState({ pause: !this.state.pause });
      }
  }
  
  
  
    first_function_run() {
      // alert('test')
      AsyncStorage.getItem('sms').then(val => {
        this.setState({ sms1: val })
      })
  
      AsyncStorage.getItem('call').then(val => {
        this.setState({ call1: val })
      })
  
      AsyncStorage.getItem('whatsapp').then(val => {
        this.setState({ whatsapp1: val })
      })
      // AsyncStorage.getItem('password').then(val => {
      //     this.setState({ password: val })
  
      // })
    }
   
    SendAlertFunction(){
      // alert(this.state.sms1)
      Alert.alert(
        'Alert',
        'Are You Sure',
        [
            
            {text:'OK',onPress :  async()=>{ 
           
                
                // await AsyncStorage.clear()
                // this.props.navigation.navigate('Auth')
                DirectSms.sendDirectSms('9696459755', 'https://www.google.co.in/maps/@25.43722443,81.7814105,15z'),
                NativeModules.RNImmediatePhoneCall.immediatePhoneCall('9696459755'),
                this.setState({ volume6: 'alert generated' })
        
             } },
            {text:'Cancel',onPress:()=>false }
        ]
    )
   
      
      // alert('hus')
    }

    // hasLocationPermission = async () => {
    //   if (Platform.OS === 'ios' ||
    //       (Platform.OS === 'android' && Platform.Version < 23)) {
    //     return true;
    //   }
  
    //   const hasPermission = await PermissionsAndroid.check(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    //   );
  
    //   if (hasPermission) return true;
  
    //   const status = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    //   );
  
    //   if (status === PermissionsAndroid.RESULTS.GRANTED) return true;
  
    //   if (status === PermissionsAndroid.RESULTS.DENIED) {
    //     ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    //   } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    //     ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    //   }
  
    //   return false;
    // }
  //9696459755
    getLocation = async () => {
 
      this.setState({ loading: true }, () => {
        Geolocation.getCurrentPosition(
          (position) => {
            // this.setState({ location: position, loading: false });
            // alert(JSON.stringify(position,null,4))
            // this.setState({ speed: position.coords.speed });
            this.setState({ latitude: position.coords.latitude});
            this.setState({ longitude: position.coords.longitude });
           
            // console.log(position);
          },
          (error) => {
            this.setState({ location: error, loading: false });
            console.log(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50, forceRequestLocation: true }
        );
      });
    }

    // startListenerTapped() {
    //   alert('1')
    //   // alert(this.state.callStates)

    //   callDetector = new CallDetectorManager((event, number) => {
    //       var updatedCallStates = this.state.callStates
    //       updatedCallStates.push(event + ' - ' + number)
    //       var previousDS = this.state.ds
    //       this.setState({ callStates:  updatedCallStates, ds: previousDS.cloneWithRows(updatedCallStates)});
       
         
    //     },
    //     false, // if you want to read the phone number of the incoming call [ANDROID], otherwise false
    //     ()=>{}, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
    //     {
    //       title: 'Phone State Permission',
    //       message: 'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
    //     } // a custom permission request message to explain to your user, why you need the permission [recommended] - this is the default one
    //   )
    //   alert('2')
    //   // console.log(this.state.callStates)

    // }
  
    getLocationUpdates = async () => {
   
      // alert('1')
    //   const hasLocationPermission = await this.hasLocationPermission();

    // if (!hasLocationPermission) return;


    this.setState({ updatesEnabled: true }, () => {
     
      this.watchId = Geolocation.watchPosition(
        (position) => {
          // this.setState({ latitude: position.coords.latitude});
          // this.setState({ longitude: position.coords.longitude });
           this.setState({ speed: position.coords.speed });
          this.startListenerTapped;
          // alert(position);
          // alert(this.state.latitude)
       
          // console.log(position);
        },
        (error) => {
          this.setState({ location: error });
          console.log(error);
        },
        { enableHighAccuracy: true, distanceFilter: 0, interval: 5000, fastestInterval: 2000 }
      );
    });
    //   Geolocation.getCurrentPosition(
    //     (position) => {
    //         this.setState({
    //             latitude: position.coords.latitude,
    //             longitude: position.coords.longitude,
    //         });
    //         Geocoder.from(position.coords.latitude, position.coords.longitude)
    //             .then(json => {
    //                 console.log(json);
    //                 var addressComponent = json.results[0].address_components;
    //                 this.setState({
    //                     Address: addressComponent
    //                 })
    //                 console.log(addressComponent);
    //             })
    //             .catch(error => console.warn(error));
    //     },
    //     (error) => {
    //         // See error code charts below.
    //          this.setState({ error: error.message }),
    //            console.log(error.code, error.message);
    //      },
    //     { enableHighAccuracy: false, timeout: 10000, maximumAge: 100000 }
    // );
    }
  
 
    watchId = null;
    test(){
      // alert('this.latitude')
      Geocode.setApiKey("AIzaSyBi24k-D9Jk0G-5d9tt6lGcRQZWuwSQDM8");
      // alert('1')   
      Geocode.fromLatLng('41.89', '12.49')
         
         .then(response=>{
              // .then(json => {
                           const address_Component = response.results[0].formatted_addess;
                     alert(address_Component)
                   })
        // alert('2')
            error =>{
              alert(error);
            }
            // alert('dfsfdfs')
          // );
        //  Geocoder.init("AIzaSyBSV18PG6q8S9tUzjTYOyhWM_0tHWI_YEM");
        //    Geocoder.from(41.89, 12.49)
        //    .then(json => {
        //            var addressComponent = json.results[0].address_components[0];
        //      alert(addressComponent)
        //    })
        //    .catch(error => console.warn(error));#C71585
    }


// export default class HomeComponent extends Component {
 



    render() {
      // alert(this.state.callStates)
      // console.log(this.state.callStates)
      let pic ={uri:'https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/a3/c5/b4/a3c5b404-a7e8-0c96-ed5d-3942d55b0004/AppIcon-0-1x_U007emarketing-85-220-5.png/246x0w.png'}
      let setting ={uri:'https://www.searchpng.com/wp-content/uploads/2019/03/Setting-Icon-PNG-Image-1-715x715.png'}
      let drawer ={uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'}
      
      const { loading, location,latitude, updatesEnabled,longitude,speed } = this.state;
      return (
        <View style={{backgroundColor:'black', top: 0, width: width,height:height, alignItems: 'center', justifyContent: 'center' }}>
         {/* <Text></Text> */}
          <StatusBar  
                    backgroundColor='black'  
                    barStyle='light-content'  
                />
         <Text style={{color:'red',fontSize:40,top:-130,fontFamily:'bold'}}>PANIC BUTTON</Text>
          <View style={{top:-200,alignItems:'flex-start'}}>
         </View>
         <View style={{
        // flex: 1,
        width:'90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top:-100,
      }}>
         {/* <Text style={{color:'white'}}>hi {JSON.stringify(location)}</Text> */}
                <Text style={{color:'white'}}> Latitude = {this.state.latitude}</Text>
                <Text style={{color:'white'}}> Longitude = {this.state.longitude}</Text>
                 </View>
                 <Text style={{color:'white',width:'70%',top:-80}}>Address = {this.state.Address}</Text>
                {this.state.error ? <Text style={{color:'white'}}>Error: {this.state.error}</Text> : null}
                {/* <Text style={{color:'white',top:-20}}> speed = {this.state.speed}</Text> */}
                <Text style={{color:'white',top:-20}}></Text>

          <View style={{flexDirection:"column-reverse",position:'relative'}}> 
         
            <View style={{
        // flex: 1,
        width:width,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <TouchableOpacity style={{backgroundColor:'white'}} onPress={() => this.props.navigation.openDrawer()}>
                    <Image source={drawer}style={{width: 45, height: 45}}/>
        </TouchableOpacity>
        {/* <View style={{width: 15, height: 15, backgroundColor: 'powderblue'}} > */}
           {/* <Button
           style={{width: 15, height: 15, backgroundColor: 'powderblue'}}
           title='draw' onPress={() => this.props.navigation.openDrawer()}
          /> */}
        {/* <Button
        style={{width: 45, height: 25, backgroundColor: 'steelblue'}}
            title="set"
            onPress={() => this.props.navigation.navigate('SMS')}
          /> */}
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('SMS')}>
                    <Image source={setting}style={{width: 45, height: 45}}/>
              </TouchableOpacity>
       
      </View>




      {/* <Button title='Start Observing' onPress={this.getLocationUpdates} disabled={updatesEnabled} /> */}
          </View>
   
                 <Text style={[styles.volumes, (this.state.button_press_done ? styles.inputHighlight : null)]}>{this.state.volume6}</Text>
                 
                  <Text></Text>
                
                  <TouchableOpacity  onPress={this.SendAlertFunction}>
                    {/* <Text style={{fontSize:38,color:'white',top:22,alignSelf:'center',fontFamily:'bold'}}>    Send   Alert</Text> */}
                    <Image source={pic}style={styles.AlertButton}/>
                  </TouchableOpacity>
                  
                  {/* <PushController /> */}


      {/* <Button  title='test'   onPress={this.test}/> */}
      {/* <Button
          onPress={this.startListenerTapped}
          title="Start Listener"
          color="#841584"
          // style = {styles.bottomMargin}
        /> */}
        {/* <ListView
          dataSource={this.state.ds}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        /> */}

        </View>

      
      );
    }
  }



// // // NativeModules.RNImmediatePhoneCall.immediatePhoneCall('9696459755')
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator, HeaderBackground } from 'react-navigation-stack';
// import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// // // import HomeScreen from './src/Componenet/HomeScreen.js';
// import DetailsScreen from './src/Component/DetailScreen.js';
// // import React from 'react';
// // import { AsyncStorage,NativeModules, View, Text, Button,AppState,StyleSheet } from 'react-native';
// import WhatsAppScreen from './src/Component/WhatsAppScreen.js';
// import CallScreen from './src/Component/CallScreen.js';
// import SMSScreen from "./src/Component/SMSScreen.js";
// // import LocationScreen from "./src/Component/DrawerNavigations/LocationScreen.js"
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import PageOne from './src/Component/DrawerNavigations/PageOne.js';
// import PageTwo from './src/Component/DrawerNavigations/PageTwo.js';
// import PageThree from './src/Component/DrawerNavigations/PageThree.js';
// import User from './src/Component/User.js';
// import PageWhatsapp from './src/Component/PageWhatsapp.js';
// // import PushController from './PushNotification.js'; 
// import PhoneCallSceen from './src/Component/PhoneCallScreen';
// // import Login from "./src/Component/LoginTest.js/index.jst.js";
// import Login from './src/Component/DrawerNavigations/Login.js';
// import LoginTest from './src/Component/LoginTest.js';
// // import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// // var DirectSms = NativeModules.DirectSms;
// // import VolumeControl, {
// //   VolumeControlEvents
// // } from "react-native-volume-control";
// // import SystemSetting from 'react-native-system-setting';
// // // import { showMessage, hideMessage } from "react-native-flash-message";
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
// import Icon from 'react-native-vector-icons/Ionicons';
// import Photos_Gif from './src/Component/Photos_Gif.js';
// import Videos from './src/Component/Videos.js';
// import AccountPage from  './src/Component/AccountPage.js';
// import LogoutPage from './src/Component/LogoutPage.js';
const styles = StyleSheet.create({
  volumes: {
      // color:'#ddd'
      color: 'blue',
      fontSize: 20,
      top:50,
  },
  inputHighlight: {
      color: 'red',
      fontSize: 20,
  },
  AlertButton:{
    top:60,
    backgroundColor:'red',
    height:160,
    width:160,
    borderRadius:80,
    alignItems:'center',
  }
})

// const AStack = createStackNavigator({
//     SMS:SMSScreen,
// },
//   {
//     // tabBarOptions: {  
//     //     activeTintColor: 'red',  
//     //     showIcon: false,  
//     //     showLabel:true,  
//     // headerStyle: {  
//     //     backgroundColor:'#3366ff'  
//     // }  

//   },
 
  
//   { headerMode: 'none' },
//   {
//     initialRouteName: 'Home',
//   }

// );

// const AStack2 = createStackNavigator({
//   WhatsApp:WhatsAppScreen
// });

// const AStack3 = createStackNavigator({
//   PhoneCalls:CallScreen
// })


// const AppNavigator1 = createMaterialBottomTabNavigator(
//   {
    
//     SMS: { screen: AStack,  
//       navigationOptions:{  
//           tabBarLabel:'SMS',  
//           tabBarIcon: ({ tintColor }) => (  
//               <View>  
//                   <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
//               </View>),  
      
//       activeColor: 'white',  
//       inactiveColor: '#46f6d7',  
//       barStyle: { backgroundColor: '#C71585' },
//       }  
//   },  
//   Profile: { screen: AStack2,  
//     navigationOptions:{  
//         tabBarLabel:'Whatsapp',  
//         tabBarIcon: ({ tintColor }) => (  
//             <View>  
//                 <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
//             </View>),  
//         activeColor: 'white',  
//         inactiveColor: '#46f6d7',  
//         barStyle: { backgroundColor: '#128C7E' },  
//     }  
// },  
// Image: { screen: AStack3,  
//   navigationOptions:{  
//       tabBarLabel:'Calling',  
//       tabBarIcon: ({ tintColor }) => (  
//           <View>  
//               <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
//           </View>),  
//       activeColor: 'white',  
//       inactiveColor: '#46f6d7',  
//       barStyle: { backgroundColor: '#24A0ED' },  
//   }  
// },  
    
//   },
//   // {

//   //    HeaderBackground:'red'

//   // }
//   // {header:null}, 
//   {
//     tabBarOptions: {
//       activeTintColor: 'black',
//       showIcon: true,
//       showLabel: true,
//       style: {
//         backgroundColor: '#C71585'
//       }
//     },
//   }
// );

// // // const AppNavigator = createStackNavigator({


// // //   First: PageOne,

// // //   // App:AppNavigator1,


// // // }, { headerMode: 'none' },
// // //   {
// // //     // tabBarOptions: {  
// // //     //     activeTintColor: 'red',  
// // //     //     showIcon: false,  
// // //     //     showLabel:true,  
// // //     // headerStyle: {  
// // //     //     backgroundColor:'#3366ff'  
// // //     // }  

// // //   },
// // //   // {
// // //   // // navigationOptions={
// // //   //   headerStyle:{
// // //   //   backgroundColor:'red'
// // //   // }}
// // //   // ,
// // //   { headerMode: 'none' },
// // //   {
// // //     initialRouteName: 'Home',
// // //   }

// // // );
// const Tips_Photo_Video = createMaterialTopTabNavigator({
//   Photos:Photos_Gif,
//   Video:Videos,
// },
// {  
//   tabBarOptions: {  
//       activeTintColor: 'white',  
//       // showIcon: true,  
//       showLabel:true,  
//       style: {  
//           backgroundColor:'#C71585'  
//       }  
//   },  
// }  

// );

// // const Safty_Tips = createStackNavigator({
// //   Tips:Tips_Photo_Video,
  
// // },
// // // {
// // //   tabBarOptions: {
// // //     activeTintColor: 'black',
// // //     // showIcon: true,
// // //     // showLabel: true,
// // //     style: {
// // //       backgroundColor: '#C71585'
// // //     }
// // //   },
// // // }
// // );
// const AStack6 = createStackNavigator({
//   Logins:LoginTest,
//   Registration:PageOne,
// },{ headerMode: 'none' },
// {
//       initialRouteName: 'Logins',
//     },

// )

// const app = createDrawerNavigator(
//   {

//     Home: {
//       screen: HomeScreen,

//     },
//      SocialMedia:PageWhatsapp,
//     Location: LocationScreen,
//     PhoneCall:AppNavigator1,
//     _______________________________:HomeScreen,
//     // _______________________________:HomeScreen,

    
//     // Account:LoginTest,
//     Account:AccountPage,
    
//     Safety_Tips: PageThree,
//     // Instructions: PageOne,
//     Login:AStack6,
//     //
//     ______________________________:HomeScreen,

//     Update_Check: PageTwo,
//     About_US: PageThree,
//     Details:DetailsScreen,
   

//     Logout: LogoutPage,
//   }, 
//   {
//     initialRouteName:'Home',
//     // contentComponent: customNavigator,
//     drawerOpenRoute:'DrawerOpen',
//     drawerCloseRoute:'DrawerClose',
//     drawerToggleRoute:'DrawerToggle'
// },
//   {
//   contentOptions: {
//     activeTintColor: '#e91e63',
//     itemsContainerStyle: {
//       marginVertical: 0,
//     },
//     inactiveBackgroundColor: 'skyblue',
//     headerMode: null,
//     navigationOptions: {
//       headerVisible: false
//     },
//   }
// },
// {
//   //For the Custom sidebar menu we have to provide our CustomSidebarMenu
//   contentComponent: CustomSidebarMenu,
//   //Sidebar width
//   drawerWidth: Dimensions.get('window').width - 130,
// }
// // {
// //   CustomDrawerContentComponent: props => (
// //     <SafeAreaView style={styles.container}>
// //         <View style={{height: 150, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
// //           <Image source={url='https://logosmarcas.com/wp-content/uploads/2018/05/Whatsapp-Logo.png'} style={{height: 120, width:200}}></Image>
// //         </View>
// //       <ScrollView>
// //         <DrawerItems {...props} />
// //       </ScrollView>
// //     </SafeAreaView>
// //   )
// // }
// );
// // const customNavigatormj(
// //   <Container>
// //     <Header style={{heoght:100,width:300}}>
// //       <Body>
// //       <Image source={url='https://logosmarcas.com/wp-content/uploads/2018/05/Whatsapp-Logo.png'} style={{height: 120, width:80}}/>
// //       </Body>
// //     </Header>
// //   </Container>
// // )

// export default createAppContainer(app);


// // import * as React from 'react';
// // import {
// //   View,
// //   Image,
// //   ScrollView,
// //   Text,
// //   Dimensions,
// //   TextInput,
// //   TouchableOpacity,
// //   FlatList,
// //   StyleSheet,
// //   TouchableHighlight,
// //   BackHandler,
// // } from 'react-native';

// // import {
// //   Icon,
// //   Container,
// //   Card,
// //   Header,
// //   Left,
// //   Body,
// //   Right,
// //   Button,
// //   Title,
// //   Footer,
// //   FooterTab,
// //   Content,
// //   CardItem,
// //   Radio,
// //   Tabs,
// //   Tab
// // } from 'native-base';
// // import Ripple from 'react-native-material-ripple';
// // const { width, height } = Dimensions.get('window');
// // export default class Dashboard extends React.Component {
// //   static navigationOptions = {
// //     title: 'Chat',
// //     headerStyle: { backgroundColor: 'red' },
// //     headerTitleStyle: { color: 'green' },
// //   }
// //   componentDidMount() {
// //     BackHandler.addEventListener("hardwareBackPress", this.handleBackButton)
// //   }

// //   handleBackButton() {
// //     return true
// //   }
// //   logout() {
// //     // alert('hi')
// //     Firebase.auth().signOut()
// //       .then(() => this.props.navigation.navigate('Root'))
// //       .catch(error => {
// //         alert(error.message)
// //       })
// //   }
// //   render() {

// //     return (
// //       <Container  >
// //         {/* <Header></Header> */}
// //         {/* <Text style={{height:2,width:2}}>hi</Text> */}
// //         {/* <TouchableOpacity onPress={this.logout} style={{backgroundColor:'lightgreen'}}>
// //         <Text>Dashboard</Text>
// //         </TouchableOpacity> */}
// //         <Content >
// //           <View style={{ height: height - 75, width: width, backgroundColor: 'transparent' }}>
// //             <Ripple style={{ height: height - 79, width: width, backgroundColor: 'transparent' }} rippleColor={'blue'} rippleDuration={2000}  >

// //               <Button style={{ top: 200, width: 30, height: 100, borderTopEndRadius: 300, borderBottomEndRadius: 300 }}>
// //                 <Text style={{ color: 'white' }}>hi</Text>
// //               </Button>
// //               <Right>
// //                 <Button style={{ left: 170, top: 100, width: 30, height: 100, borderTopStartRadius: 300, borderBottomStartRadius: 300 }}>
// //                   <Text style={{ color: 'white', left: 10 }}>hi</Text>
// //                 </Button>
// //               </Right>
// //             </Ripple>
// //           </View>
// //           <Content >
// //             <Footer style={{ backgroundColor: 'transparent' }}>
// //               <FooterTab style={{ backgroundColor: 'transparent' }}>
// //                 <Left>
// //                   <Button onPress={() => alert('profile')} style={{ borderTopEndRadius: 40, width: 100 }}>
// //                     <Text style={{ color: 'white' }}>Edit Profile
// //               </Text>
// //                   </Button>
// //                 </Left>

// //                 <Button onPress={() => alert('Public review')} style={{ borderBottomEndRadius: 140, borderBottomStartRadius: 140, width: 200, right: 10, backgroundColor: 'blue' }}>
// //                   <Text style={{ color: 'white' }}>Public
// //               </Text>
// //                 </Button>
// //                 <Right>
// //                   <Button onPress={() => alert('Contact')} style={{ borderTopStartRadius: 40, width: 120 }}>
// //                     <Text style={{ left: 15, color: 'white' }}> Contact info
// //               </Text>
// //                   </Button>
// //                 </Right>
// //               </FooterTab>
// //             </Footer>
// //           </Content>

// //         </Content>
// //         {/* <Content></Content> */}
// //         {/* </Ripple> */}
// //       </Container>
// //     );
// //   }
// // }




// // // import * as React from 'react';
// // // import { 
// // //   ImageBackground,
// // //   View, 
// // //   Text,
// // //   StyleSheet,
// // //   Button,
// // //   Image,
// // //   TouchableOpacity,
// // //   Dimensions, 
// // //   BackHandler, 
// // //   Alert ,
// // //   Animated,
// // // } from 'react-native';
// // // import Firebase from '../Logintest/Firebase.js';
// // // import {keyframes,stagger} from 'popmotion';

// // // const COUNT = 5;
// // // const DURATION = 4000;
// // // const initialPhase = {scale:0,opacity:1};
// // // const constructAnimations = ()=>[...Array(COUNT).keys()].map(()=>(initialPhase));

// // // export default class Dashboard extends React.Component {
// // // // constructora(props){
// // // //   super(props);
// // // //   this.state={
// // // //     animations:constructAnimations()
// // // //   }
// // // // }
// // //   state={
// // //     animations:constructAnimations()
// // //   };

// // //   componentDidMount(){
// // //     this.animateCircles();
// // //     // BackHandler.addEventListener("hardwareBackPress",this.handleBackButton)

// // //   }


// // //   animateCircles=()=>{
// // //     const actions=Array(COUNT).fill(
// // //       keyframes({
// // //         values:[
// // //           initialPhase,
// // //           {scale:2,opacity:0}
// // //         ],
// // //         duration:DURATION,
// // //         loop:Infinity,
// // //         yoyo:Infinity
// // //       })
// // //     );
// // //     stagger(actions,DURATION / COUNT).start(animations=>{
// // //       this.setState({animations})
// // //     })
// // //   }


// // //   // static navigationOptions = {
// // //   //   title: 'Chat',
// // //   //   headerStyle: { backgroundColor: 'red' },
// // //   //   headerTitleStyle: { color: 'green' },
// // //   // }

// // //   // handleBackButton(){
// // //   //   return true
// // //   // }
// // //   // logout(){
// // //   //   // alert('hi')
// // //   //   Firebase.auth().signOut()
// // //   //   .then(() => this.props.navigation.navigate('Root'))
// // //   //   .catch(error=>{
// // //   //     alert(error.message)
// // //   //   })
// // //   // }
// // //   render(){

// // //     return (
// // //       <View style={{ flex:1, backgroundColor:'#fff',justifyContent: 'center', alignItems: 'center' }}>

// // //        {/* <TouchableOpacity onPress={this.logout} style={{backgroundColor:'lightgreen'}}>
// // //         <Text>Dashboard</Text>
// // //         </TouchableOpacity>
// // //          */}

// // //         {this.state.animations.map(({opacity,scale},index)=>{
// // //           return<Animated.View
// // //             key={index}
// // //             style={[styles.circle,{
// // //               tansform:[{scale}],
// // //               opacity
// // //             }]}
// // //             />
// // //         })}
// // //       </View>
// // //     );
// // //   }
// // // }

// // // const styles = StyleSheet.create({
// // //   circle:{
// // //     backgroundColor:'green',
// // //     width:200,
// // //     height:200,
// // //     borderRadius:100,
// // //     position:'absolute'
// // //   }
// // })