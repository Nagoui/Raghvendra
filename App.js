// import HeaderShow from './src/Component/Home.js';
import UserInfo from './src/Component/Home/UserInfo.js';


import React , { useState  ,useEffect} from 'react';
import { ImageBackground,View, 
  HeaderBackButton,
  Text,
  BlurView,
  StyleSheet,Button,Image,TouchableOpacity,Dimensions, Alert,BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from "react-native-vector-icons/Feather";
const {width,height} =  Dimensions.get('window');

import RootStack from './src/Component/Logintest/RootStack.js';
import SplashComponent from './src/Component/Logintest/SplashComponent.js';
import SignInComponent from './src/Component/Logintest/SignInComponent.js';
import SignUpComponent from './src/Component/Logintest/SignUpComponent.js';
import InformationUser from './src/Component/Home/InformationUser.js';
import Developer from './src/Component/Home/Developer.js';
import SaftyVideo from './src/Component/Home/SaftyVideo.js';
import Anamika from './src/Component/Home/Anamikaki.js';
// import firebase from 'firebase';
import Firebase from './src/Component/Logintest/Firebase.js';
import Public from './src/Component/Home/Public.js';
import App_Contacts from './src/Component/Contacts/App_Contacts.js';
import SaftyImage from './src/Component/Home/SaftyImages.js';
// import Dashboard from './src/Component/Home/Home.js';
// import { firebaseConfig } from './src/Component/Logintest/Firebase.js';
// firebase.initializeApp(firebaseConfig)
import Home from './src/Component/Home/Home.js'
import LocationScreen from './src/Component/Home/LocationDetail.js';
import Number from './src/Component/Home/Number.js';
import SMS from './src/Component/Contacts/SMS.js';
const AuthContext = React.createContext();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




const Screens = ({ navigation, style }) => {

  return (
    // <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
    <Animated.View style={[{flex:1,overflow:'hidden'},style]}>
      <Stack.Navigator
    //     screenOptions={{
    //       headerTransparent: true,
    //       headerTitle: null,
    //       headerShown:false
    // }}
    >
        <Stack.Screen options={{
          // drawerLockMode: 'locked-close',
          // disableGestures: true,
                //  headerTransparent: true,
          // headerTitle:null,
          headerShown:false
        }} name="Root">{props => <RootStack {...props} />}</Stack.Screen>
        <Stack.Screen
        options={{
          drawerLockMode: 'locked-close',
          disableGestures: true,
                 headerTransparent: true,
          headerTitle: null,
          headerShown:false
        }}
        name="Splash">{props => <SplashComponent {...props} />}</Stack.Screen>
        <Stack.Screen

            options={{
              headerTransparent: true,
            headerTitle: null,
          headerTintColor:'white'

            // headerShown:false
            }}

        name="SignIn">{props => <SignInComponent {...props} />}</Stack.Screen>
        <Stack.Screen 
          
          options={{
            headerTransparent: true,
          headerTitle: null,
          // headerShown:false
          headerTintColor:'white',

          }}
        name="SignUp">{props => <SignUpComponent {...props} />}</Stack.Screen>
        
        <Stack.Screen 
          
          options={{
            headerTransparent: true,
          headerTitle: null,
          // headerShown:false
          }}
        name="Number">{props => <Number {...props} />}</Stack.Screen>
        <Stack.Screen
         name="Home" component={Home}
         
         options={{
          // drawerLockMode: 'locked-close',
          // disableGestures: true,
                //  headerTransparent: true,
          // headerTitle: null,
          headerShown:false
        }}
         
         />
         <Stack.Screen 
          
          options={{
            // drawerLockMode:'locked-closed',
            // disableGestures:true,
            headerTransparent: true,
          headerTitle: null,
          headerTintColor:'white'
          // headerShown:false
          }}
        name="Location">{props => <LocationScreen {...props} />}</Stack.Screen>
        <Stack.Screen 
          
          options={{
            // drawerLockMode:'locked-closed',
            // disableGestures:true,
            headerTransparent: true,
          headerTitle: null,
          headerTintColor:'white'
          // headerShown:false
          }}
        name="UserInfo">{props => <UserInfo {...props} />}</Stack.Screen>
          <Stack.Screen 
          // atyle={{backgroundColor:'pink'}}
          options={{
            // drawerLockMode:'locked-closed',
            // disableGestures:true,
            // headerRight:true,
            headerTransparent: true,
          headerTitle: null,
          headerTintColor:'white'
          // headerShown:false
          }}
        name="InformationUser">{props => <InformationUser {...props} />}</Stack.Screen>
        <Stack.Screen 
          // atyle={{backgroundColor:'pink'}}
          options={{
            // drawerLockMode:'locked-closed',
            // disableGestures:true,
            // headerRight:true,
            headerTransparent: true,
          headerTitle: null,
          headerTintColor:'white',
          // headerShown:false
          }}
        name="SaftyVideo">{props => <SaftyVideo {...props} />}</Stack.Screen>
         <Stack.Screen 
          // atyle={{backgroundColor:'pink'}}
          options={{
            // drawerLockMode:'locked-closed',
            // disableGestures:true,
            // headerRight:true,
            headerTransparent: true,
          headerTitle: null,
          headerTintColor:'white',
          // headerShown:false
          }}
        name="SaftyImage">{props => <SaftyImage {...props} />}</Stack.Screen>
        <Stack.Screen 
          
          options={{
            // drawerLockMode:'locked-closed',
            // disableGestures:true,
            headerTransparent: true,
          headerTitle: null,
          headerTintColor:'white'
          // headerShown:false
          }}
        name="Public">{props => <Public {...props} />}</Stack.Screen>
         <Stack.Screen 
          
          options={{
            // drawerLockMode:'locked-closed',
            // disableGestures:true,
            headerTransparent: true,
          headerTitle: null,
          headerTintColor:'black'
          // headerShown:false
          }}
        name="Developer">{props => <Developer {...props} />}</Stack.Screen>
          <Stack.Screen
         name="Contacts" component={App_Contacts}
         
         options={{
          // drawerLockMode: 'locked-close',
          // disableGestures: true,
                 headerTransparent: true,
          headerTitle: null,
          headerTintColor:'white'
          // headerShown:false
        }}
         
         />
          <Stack.Screen
         name="Anamika" component={Anamika}
         
         options={{
          // drawerLockMode: 'locked-close',
          // disableGestures: true,
                 headerTransparent: true,
          headerTitle: null,
          headerTintColor:'white'
          // headerShown:false
        }}
         
         />
         <Stack.Screen
         name="SMS" component={SMS}
         
         options={{
          // drawerLockMode: 'locked-close',
          // disableGestures: true,
                 headerTransparent: true,
          headerTitle: null,
          headerTintColor:'white'
          // headerShown:false
        }}
         
         />
         
          {/* <Stack.Screen
         name="Location" component={LocationScreen}
         
         options={{
          // drawerLockMode: 'locked-close',
          // disableGestures: true,
                 headerTransparent: true,
          headerTitle: null,
          headerShown:false
        }}
         
         /> */}
          {/* <Stack.Screen
         name="Header" component={HeaderShow}
         
         options={{
          // drawerLockMode: 'locked-close',
          // disableGestures: true,
                 headerTransparent: true,
          headerTitle: null,
          headerShown:false
        }}
         
         /> */}
          {/* <Stack.Screen
         name="Contacts" component={headerShown}
         
         options={{
          // drawerLockMode: 'locked-close',
          // disableGestures: true,
                 headerTransparent: true,
          headerTitle: null,
          headerShown:false
        }}
         
         /> */}
       
       {/* <Stack.Screen
         name="Contacts" component={UserInfo}
         
         options={{
          // drawerLockMode: 'locked-close',
          // disableGestures: true,
                 headerTransparent: true,
          headerTitle: null,
          headerShown:false
        }}
         
         /> */}
       
        {/* <Stack.Screen 
          options={{  
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => {
                  // Do something
                }}
              />
            ),
          }}
        name="Home">{props => <Dashboard {...props} />}</Stack.Screen> */}
        {/* <Stack.Screen name="Contact">{props => <SignInComponent {...props} />}</Stack.Screen> */}
      </Stack.Navigator>
    </Animated.View>
  );
};
const CustomDrawerContent = props => {


  return (
 
    <DrawerContentScrollView {...props} scrollEnabled={false} >

    
     <Animated.View>

     
        <Image
            source={{
              // uri: 'https://i.pinimg.com/564x/6c/82/cf/6c82cfd493cc1ae5753b3b26d6255dbf.jpg',

              uri: 'https://img1.ak.crunchyroll.com/i/spire2/4c140a2f461c56bfbef3894f7eab7c701361079581_full.jpg',
              height: 60,
              width: 60,
              scale: 0.5,
              borderRadius:50
            }}
            resizeMode="center"
            // style={styles.avatar}
          style={{ height: 100, width: 100, borderRadius: 770, left: 70, top: 0 }}

          />
          <View style={{paddingStart:10,}}>
            <Text style={{color:'pink',fontSize:18}}>
            Username
          </Text>
          <Text style={{color:'red',fontSize:18}}>
            username@react.com
          </Text>
          </View>
          <Text/>
          <DrawerItem
            label="User Info"
            labelStyle={styles.drawerLabel}
            // style={styles.drawerItem}
            style={{ alignItems: 'flex-start', marginVertical: 0 ,backgroundColor:'white'}}
            onPress={() => props.navigation.navigate('InformationUser')}
            
            icon={() =>  <Image
              style={{ height: 30, width: 30, borderRadius: 770 }}
              source={{ uri: 'https://cdn3.iconfinder.com/data/icons/flat-rounded-7/50/617-512.png' }}
            />}
          />
          <Text/>
          <DrawerItem
            label="Safety Image"
            labelStyle={{ color: 'blue', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 ,backgroundColor:'white'}}
            onPress={() => props.navigation.navigate('SaftyImage')}
            
            icon={() =>  <Image
              style={{ height: 30, width: 30, borderRadius: 770 }}
              source={{ uri: 'https://s3.amazonaws.com/ionic-marketplace/ionic-gallery/icon.png' }}
            />}
            // icon={() => <AntDesign name="message1" color="white" size={16} />}
          />
          <Text/>
          <DrawerItem
            label="Safety Videos"
            labelStyle={{ color: 'red', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 ,backgroundColor:'white'}}
            onPress={() => props.navigation.navigate('SaftyVideo')}
            
            icon={() =>  <Image
              style={{ height: 30, width: 30, borderRadius: 770 }}
              source={{ uri: 'https://1000logos.net/wp-content/uploads/2019/05/Logo-TikTok.jpg' }}
            />}
            // icon={() => <AntDesign name="phone" color="white" size={16} />}
          />
          <Text/>
           <DrawerItem
            label="Developer"
            labelStyle={{ color: 'red', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 ,backgroundColor:'white'}}
            onPress={() => props.navigation.navigate('Developer')}
            
            icon={() =>  <Image
              style={{ height: 30, width: 30, borderRadius: 770 }}
              source={{ uri: 'https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg' }}
            />}
            // icon={() => <AntDesign name="phone" color="white" size={16} />}
          />
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          
          <DrawerItem
            label="Log Out"
            labelStyle={{ color: 'red', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0,top:0,backgroundColor:'white' }}
            onPress={() => Alert.alert(
              "Log Out",
              "Are you sure want to Logout",
              [
                {
                  text:'OK', onPress:()=>{Firebase.auth().signOut(),BackHandler.exitApp()}
                },
                {
                  text:'Cancel', 
                }
              ],{cancelable:false}
            )}
            
            icon={() =>  <Image
              style={{ height: 30, width: 30, borderRadius: 770 }}
              source={{ uri: 'https://image.flaticon.com/icons/png/512/1053/1053210.png' }}
            />}
            // icon={() => <AntDesign name="phone" color="white" size={16} />}
          />
      </Animated.View>
    </DrawerContentScrollView>
  );
}


function MyDrawer() {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });
 

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    // <Animated.View style={{flex:1,backgroundColor:'skyblue'}}>
      <ImageBackground
      blurRadius={0}
      style={{width:width,height:height,position:'absolute'}}
          // style={{ height: 100, width: 100, borderRadius: 770, left: 70, top: 0 }}
          source={{ uri: 'https://www.itl.cat/pngfile/big/109-1097645_beautiful-scenery-wallpapers-free-download-beautiful-images-of.jpg' }}
        >
         <AnimatedLinearGradient   customColors={presetColors.sunrise} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

          {/* https://www.itl.cat/pngfile/big/23-237076_free-scenery-wallpaper-beautiful-scenery-wallpapers-beautiful-images.jpg */}
    <Drawer.Navigator
    drawerType="back"
    overlayColor="transparent"
    drawerStyle={styles.drawerStyles}
    initialRouteName="Dashboard"
    drawerStyle={{width:'50%',backgroundColor:'transparent'}}
    contentContainerStyle={{ flex: 1 }}
    drawerContentOptions={{
      activeBackgroundColor: 'red',
      activeTintColor: 'green',
      inactiveTintColor: 'green',
    }}
    // drawerType={isLargeScreen ? 'slide' : 'back'}
              // drawerStyle={isLargeScreen ? null : { width: '570%',top:-5 }}
              sceneContainerStyle={{
                backgroundColor:"transparent",
                
              }}
              
// drawerPosition="right"
    // sceneContainerStyle={{ backgroundColor: 'yellow' }}

     drawerContent={props =>  {
      setProgress(props.progress);
      return    <CustomDrawerContent {...props} />}}>

      <Drawer.Screen name="Screens">
      {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>                                                                      
    </Drawer.Navigator>
     {/* </Animated.View> */}     
     </ImageBackground>
  );
}

export default function SwipeAbleDrawer() {
  return (
    // <View style={{position:'absolute'}}>
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    // </View>
  );
}


const styles = StyleSheet.create({
  stack: {
    flex: 1,
    overflow:'hidden',
    // width:300,
    
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
  // drawerStyles: { top:-5,backgroundColor: 'transparent' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'green', marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'transparent',
    borderWidth: StyleSheet.hairlineWidth,
  },
});

const presetColors = {
  instagram: [
    'rgb(106, 57, 171)',
    'rgb(151, 52, 160)',
    'rgb(197, 57, 92)',
    'rgb(231, 166, 73)',
    'rgb(181, 70, 92)'
  ],
  firefox: [
    'rgb(236, 190, 55)',
    'rgb(215, 110, 51)',
    'rgb(181, 63, 49)',
    'rgb(192, 71, 45)',
  ],
  sunrise: [
    'rgb(0, 0, 128)',
    'rgb(0, 0, 139)',
    'rgb(0, 0, 205)',
    'rgb(0, 0, 255)',
    'rgb(65, 105, 225)',
    
  ],
  sunriseOld: [
    'rgb(0, 0, 128)',
    'rgb(135, 206, 250)',
    'rgb(30, 144, 255)',
    'rgb(0, 191, 255)',
    'rgb(127, 255, 212)',
    'rgb(72, 209, 204)',
    'rgb(0, 206, 209)',
    'rgb(152, 197, 190)',
    'rgb(100, 173, 186)',
  ]
};
const DEFAULT_POINTS = {
  start: {x: 0, y: 0.4}, 
  end: {x: 1, y: 0.6}
}



// // import React,{Component} from 'react';
// import LocationScreen from './src/Component/LocationDetail.js';
// import HeaderShow from './src/Component/Home.js';
// import UserInfo from './src/Component/UserInfo.js';
// import CallDetect from './src/Component/CallDetect.js';
// // export default class extends React.Component{
// //   render(){
// //     return(
// //       <HeaderShow/>
// //     )
// //   }
// // }
// // In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // function HomeScreen() {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Home Screen</Text>
// //     </View>
// //   );
// // }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//       // screenOptions={{headerShown:false}}
//       >
//       <Stack.Screen 
//         options={{headerShown:false}}
//       name="Home" component={HeaderShow} />
        
//       <Stack.Screen options={{headerShown:false}}  name="Location" component={LocationScreen} />
//       <Stack.Screen options={{headerShown:false}}  name="CallDetect" component={CallDetect} />
//       <Stack.Screen name="UserInfo" component={UserInfo} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
// // import React from 'react';
// // import { BackHandler,AsyncStorage,StatusBar,Image,NativeModules, View, Text,ScrollView, Button,AppState,StyleSheet,TouchableOpacity,Alert,Dimensions } from 'react-native';
// // const {width,height} = Dimensions.get('window');
// // import SystemSetting from 'react-native-system-setting';
// // // import Geolocation from 'react-native-geolocation-service';
// // var DirectSms = NativeModules.DirectSms;
// // import VolumeControl, {
// //   VolumeControlEvents
// // } from "react-native-volume-control";
// // // import Geocoder from 'react-native-geocoding';
// // import Geocode  from 'react-geocode';
// // // Geocode.setApiKey("AIzaSyBi24k-D9Jk0G-5d9tt6lGcRQZWuwSQDM8");
// // var song = null;
// // // import CustomSidebarMenu from './CustomSidebarMenu.js';
// // // import PushNotification from 'react-native-push-notification';
// //  var SampleArray = [0, 0]
// // //  import PushController from './PushNotification.js';
// //  var SoundPlayer = require('react-native-sound');
// // //  import LocationScreen from './src/Component/DrawerNavigations/LocationScreen.js';
// // // import SundPlayer from 'react-native-sound';
// //     // import ListView from 'deprecated-react-native-listview';
// // var callDetector = undefined

// // // import CallDetectorManager from 'react-native-call-detection'
// // import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
// // export default class HomeScreen extends React.Component {
// //     // static navigationOptions={
// //     //   header:null
// //     // }
// //     //   constructor(props) {
// // //     super(props)
// // //  
  
// //     constructor(props) {
// //       super(props)
// //       // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

// //           // this.state = {callStates : [], ds: ds} //call states
// //           // this.startListenerTapped = this.startListenerTapped.bind(this);
       
// //       this.state = {
// //         phone: '',
// //         name: '',
// //         username: '',
// //         password: '',
// //         loginuser: '',
// //         loginpass: '',
// //         sms1: '',
// //         call1: null,
// //         whatsapp1: null,
// //         volume: 0,
// //         volume2: 0,
// //         volume3: 0,
// //         volume4: 0,
// //         volume5: 0,
// //         pause: false,
// //         volume6: 'press volume button for 4 second ',
// //         button_press_done: false,
// //         appState: AppState.currentState,
// //         loading: false,
// //         updatesEnabled: false,
// //         location: {},
// //         place:{},
// //         mobile_no: '',
// //         latitude: 0,
// //         longitude: 0,
// //         error: null,
// //         Address: null,
// //         speed:0,
// //         callStates : [],
// //         // ds: ds,
      
    
// //       }
      
// //       this.first_function_run();
// //       // this.sendNotification = this.sendNotification.bind(this);
// //     }
// //     componentDidMount = async () => {
// //       // User.loginuser = await AsyncStorage.getItem('loginuser')
// //       // this.props.navigation.navigate(User.loginuser ?  'app':'AStack6' );


// //       // this.getLocationUpdates()
// //       // this.getLocation()
// //       // this.initEventPushNotification()
// //       this.setState({
// //         volume2: await VolumeControl.getVolume(),
// //     });
// //     forcereload = true;
  
// //     this.volEvent = VolumeControlEvents.addListener(
// //         "VolumeChanged",
// //         this.volumeEvent,
  
// //     );

// //     }

    
// //     // componentWillUnmount() {
// //     //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
// //     // }
// //       // User.sms = await AsyncStorage.getItem('sms')
// //       // this.setState({ sms: val })
  
// //       // User.call = await AsyncStorage.getItem('call')
// //       // this.setState({ call: val })
  
// //       // User.whatsapp = await AsyncStorage.getItem('whatsapp')
// //       // this.setState({ whatsapp: val })
// //       // this.initEventPushNotification()
  
          
// //       // this.props.navigation.navigate(User.loginuser ? 'App' : 'Auth');
  
// //     // }


// //     handleBackButton = () => {               
// //       Alert.alert(
// //           'Exit App',
// //           'Exiting the application?', [{
// //               text: 'Cancel',
// //               onPress: () => console.log('Cancel Pressed'),
// //               style: 'cancel'
// //           }, {
// //               text: 'OK',
// //               onPress: () => BackHandler.exitApp()
// //           }, ], {
// //               cancelable: false
// //           }
// //        )
// //        return true;
// //      }

// //     componentWillUnmount(){
// //       // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
// //       //  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton());
// //       // this.getLocationUpdates()
// //       this.getLocation()
     
// //     }

  
  
 
  
  
// //     volumeEvent = event => {
// //       // alert(this.state.call1)
// //       // alert('1')
     
// //       this.setState({ volume3: (event.volume) });
  
  
// //       if ((event.volume) == 0) {
// //           SystemSetting.setVolume(0.1, { config: 'music' });
// //       }
// //       else if (event.volume == 1) {
// //           SystemSetting.setVolume(0.9)
// //       }
  
// //       SampleArray.push(this.state.volume3);
// //       this.setState({ volume5: SampleArray.length })
  
// //       // alert('this.state.call1')
  
// //       if ((this.state.volume5) > 80) {
// //         // alert('this.state.call1')

// //           // if(this.state.sms1==!null){
// //           //   alert('hi')
// //           // }

        

// //         DirectSms.sendDirectSms('9696459755', 'https://www.google.co.in/maps/@25.43722443,81.7814105,15z')
// //         NativeModules.RNImmediatePhoneCall.immediatePhoneCall('9696459755')
// //           this.setState({ volume6: 'alert generated' })
// //           this.setState({ button_press_done: true })
// //           // this.sendNotification()
// //           {
// //               setTimeout(function () {
// //                   SampleArray.length = 0;
// //               }, (4000))
// //           }
// //       }
// //       else {
// //           setTimeout(function () {
// //               // PushNotification.localNotification({
// //               //   message: 'message send !',
// //               //   priority: 'high'
  
// //               // });
// //               SampleArray.length = 0;
// //           }, (5000))
// //       }
// //       this.setState({ volume: event.volume });
// //   };
  
// //   statechange() {
// //       this.setState({ volume6: 'press and hold volume button ' })
// //       this.setState({ button_press_done: false })
  
  
// //   }
  
// //   // sendNotification() {
// //   //     PushNotification.localNotification({
// //   //         message: 'You pushed the notification button!',
// //   //         priority: 'high',
// //   //         // autoCancel: true,
// //   //         // largeIcon: "ic_launcher",
  
// //   //     });
// //   // };
  
// //   initEventPushNotification() {
// //       AppState.addEventListener('change', (state) => {
// //           console.log(state)
// //           if (state === 'background') {
// //               this.onPressButtonPlay();
// //               // PushNotification.localNotification({
// //               //     message: 'app running in background !',
// //               //     priority: 'high'
  
// //               // });
// //           }
// //           else if (state === 'active') {
// //               this.onPressButtonPause();
// //               // PushNotification.localNotification({
// //               //     message: 'app runing in foreground !',
// //               //     priority: 'high'
  
// //               // });
// //           }
// //           // else if (state !== active) {
// //           //     PushNotification.localNotification({
// //           //         message: 'app not active !',
// //           //         priority: 'high'
  
// //           //     });
// //           // }
  
  
// //       });
  
// //   }
// //   onPressButtonPlay() {
// //       song = new SoundPlayer('abc.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
// //           if (error)
// //               ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
// //           else {
// //               song.play((success) => {
// //                   if (!success)
// //                       ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
// //               });
// //           }
// //       });
// //   }
  
// //   onPressButtonPause() {
// //       if (song != null) {
// //           if (this.state.pause) // play resume
// //               song.play((success) => {
// //                   if (!success)
// //                       ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
// //               });
// //           else song.pause();
  
// //           this.setState({ pause: !this.state.pause });
// //       }
// //   }
  
  
  
// //     first_function_run() {
// //       // alert('test')
// //       AsyncStorage.getItem('sms').then(val => {
// //         this.setState({ sms1: val })
// //       })
  
// //       AsyncStorage.getItem('call').then(val => {
// //         this.setState({ call1: val })
// //       })
  
// //       AsyncStorage.getItem('whatsapp').then(val => {
// //         this.setState({ whatsapp1: val })
// //       })
// //       // AsyncStorage.getItem('password').then(val => {
// //       //     this.setState({ password: val })
  
// //       // })
// //     }
   
// //     SendAlertFunction(){
      
// //       // alert(this.state.sms1)
// //       Alert.alert(
// //         'Alert',
// //         'Are You Sure',
// //         [
            
// //             {text:'OK',onPress :  async()=>{ 
           
                
// //                 // await AsyncStorage.clear()
// //                 // this.props.navigation.navigate('Auth')
// //                 // RNImmediatePhoneCall.immediatePhoneCall('9696459755'),
// //                 DirectSms.sendDirectSms('9696459755', 'https://www.google.co.in/maps/@25.43722443,81.7814105,15z'),
// //                 RNImmediatePhoneCall.immediatePhoneCall('9696459755')

// //                 // NativeModules.RNImmediatePhoneCall.immediatePhoneCall('9696459755')
// //                 // this.setState({ volume6: 'alert generated' })
        
// //              } },
// //             {text:'Cancel',onPress:()=>false }
// //         ]
// //     )
   
      
// //       // alert('hus')
// //     }
// //   watchId = null;
// //     test(){
// //       // alert('this.latitude')
// //       Geocode.setApiKey("AIzaSyBi24k-D9Jk0G-5d9tt6lGcRQZWuwSQDM8");
// //       // alert('1')   
// //       Geocode.fromLatLng('41.89', '12.49')
         
// //          .then(response=>{
// //               // .then(json => {
// //                            const address_Component = response.results[0].formatted_addess;
// //                      alert(address_Component)
// //                    })
// //         // alert('2')
// //             error =>{
// //               alert(error);
// //             }
// //             // alert('dfsfdfs')
// //           // );
// //         //  Geocoder.init("AIzaSyBSV18PG6q8S9tUzjTYOyhWM_0tHWI_YEM");
// //         //    Geocoder.from(41.89, 12.49)
// //         //    .then(json => {
// //         //            var addressComponent = json.results[0].address_components[0];
// //         //      alert(addressComponent)
// //         //    })
// //         //    .catch(error => console.warn(error));#C71585
// //     }


// // // export default class HomeComponent extends Component {
 



// //     render() {
// //       // alert(this.state.callStates)
// //       // console.log(this.state.callStates)
// //       let pic ={uri:'https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/a3/c5/b4/a3c5b404-a7e8-0c96-ed5d-3942d55b0004/AppIcon-0-1x_U007emarketing-85-220-5.png/246x0w.png'}
// //       let setting ={uri:'https://www.searchpng.com/wp-content/uploads/2019/03/Setting-Icon-PNG-Image-1-715x715.png'}
// //       let drawer ={uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'}
      
// //       const { loading, location,latitude, updatesEnabled,longitude,speed } = this.state;
// //       return (
// //         <View style={{backgroundColor:'black', top: 0, width: width,height:height, alignItems: 'center', justifyContent: 'center' }}>
// //          {/* <Text></Text> */}
// //           <StatusBar  
// //                     backgroundColor='black'  
// //                     barStyle='light-content'  
// //                 />
// //          <Text style={{color:'red',fontSize:40,top:-130,fontFamily:'bold'}}>PANIC BUTTON</Text>
// //           <View style={{top:-200,alignItems:'flex-start'}}>
// //          </View>
// //          <View style={{
// //         // flex: 1,
// //         width:'90%',
// //         flexDirection: 'row',
// //         justifyContent: 'space-between',
// //         top:-100,
// //       }}>
// //          {/* <Text style={{color:'white'}}>hi {JSON.stringify(location)}</Text> */}
// //                 <Text style={{color:'white'}}> Latitude = {this.state.latitude}</Text>
// //                 <Text style={{color:'white'}}> Longitude = {this.state.longitude}</Text>
// //                  </View>
// //                  <Text style={{color:'white',width:'70%',top:-80}}>Address = {this.state.Address}</Text>
// //                 {this.state.error ? <Text style={{color:'white'}}>Error: {this.state.error}</Text> : null}
// //                 {/* <Text style={{color:'white',top:-20}}> speed = {this.state.speed}</Text> */}
// //                 <Text style={{color:'white',top:-20}}></Text>

// //           <View style={{flexDirection:"column-reverse",position:'relative'}}> 
         
// //             <View style={{
// //         // flex: 1,
// //         width:width,
// //         flexDirection: 'row',
// //         justifyContent: 'space-between',
// //       }}>
// //         <TouchableOpacity style={{backgroundColor:'white'}} onPress={() => this.props.navigation.openDrawer()}>
// //                     <Image source={drawer}style={{width: 45, height: 45}}/>
// //         </TouchableOpacity>
// //         {/* <View style={{width: 15, height: 15, backgroundColor: 'powderblue'}} > */}
// //            {/* <Button
// //            style={{width: 15, height: 15, backgroundColor: 'powderblue'}}
// //            title='draw' onPress={() => this.props.navigation.openDrawer()}
// //           /> */}
// //         {/* <Button
// //         style={{width: 45, height: 25, backgroundColor: 'steelblue'}}
// //             title="set"
// //             onPress={() => this.props.navigation.navigate('SMS')}
// //           /> */}
// //               <TouchableOpacity  onPress={() => this.props.navigation.navigate('SMS')}>
// //                     <Image source={setting}style={{width: 45, height: 45}}/>
// //               </TouchableOpacity>
       
// //       </View>




// //       {/* <Button title='Start Observing' onPress={this.getLocationUpdates} disabled={updatesEnabled} /> */}
// //           </View>
   
// //                  <Text style={[styles.volumes, (this.state.button_press_done ? styles.inputHighlight : null)]}>{this.state.volume6}</Text>
                 
// //                   <Text></Text>
                
// //                   <TouchableOpacity  onPress={this.SendAlertFunction}>
// //                     {/* <Text style={{fontSize:38,color:'white',top:22,alignSelf:'center',fontFamily:'bold'}}>    Send   Alert</Text> */}
// //                     <Image source={pic}style={styles.AlertButton}/>
// //                   </TouchableOpacity>
                  
// //                   {/* <PushController /> */}

                                         