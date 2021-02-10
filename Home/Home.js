
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import IconFeath from 'react-native-vector-icons/Feather';
import Iconmaps from 'react-native-vector-icons/MaterialCommunityIcons';

import React, { Component } from 'react';
import {
  StatusBar,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    AppState,
    // Button,
    Linking,
    ToastAndroid,
    AsyncStorage,
    BackHandler,
  NativeModules,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import {SliderBox} from 'react-native-image-slider-box';

import Ripple from 'react-native-material-ripple';
const {width,height} = Dimensions.get('window');
import BackgroundTimer from 'react-native-background-timer';
var DirectSms = NativeModules.DirectSms;
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Left, Body, Right,  Title,Card,CardItem } from 'native-base';
// import RNRestart from 'react-native-restart';
import ListView  from 'deprecated-react-native-listview';
import SystemSetting from 'react-native-system-setting';
import VolumeControl, {
  VolumeControlEvents
} from "react-native-volume-control";
import User from '../Logintest/User.js';
var callDetector = undefined
var song = null;
// import RNLocalNotifications from 'react-native-local-notifications';
import CallDetectorManager from 'react-native-call-detection'
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
var SoundPlayer = require('react-native-sound');
// var SampleArray=[];
var SampleArray = [0, 0]
var SampleArray2=[];
var SampleArray3=[];
export default class FooterTabsIconTextExample extends Component {
  constructor(props) {
    super(props)
    // this.getLocationUpdates();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.Demo = this.Demo.bind(this);
    this.Timer = this.Timer.bind(this);
    this.TimerFunction= this.TimerFunction.bind(this);
    this.TimerForSecondNumber= this.TimerForSecondNumber.bind(this);
    this.TimerForThirdNumber= this.TimerForThirdNumber.bind(this);
    // this.TimerForFourthNumber= this.TimerForFourthNumber.bind(this);
    // this.TimerForFifthNumber= this.TimerForFifthNumber.bind(this);
    this.state = {callStates : [], ds: ds} //call states
    this.startListenerTapped = this.startListenerTapped.bind(this);
    this.state.one=true;
    this.state.oneTime=true;
    this.state.two=true;
    this.state.twoTime=true;
    this.state.three=true;
    this.state.threeTime=true;

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

      contactsNumberOne:'Enter number',
      contactsNumberTwo:'Enter number',
      contactsNumberThree:'Enter number',
      contactsNameOne:'',
      contactsNameTwo:'',
      contactsNameThree:'',
      
      smscontactsNumberOne:'Enter number',
      smscontactsNumberTwo:'Enter number',
      smscontactsNumberThree:'Enter number',
      smscontactsNameOne:'',
      smscontactsNameTwo:'',
      smscontactsNameThree:'',
      // ds: ds,
    UserInfo:false,
    images:[
      require('../asset/21.jpeg'),
      require('../asset/22.jpeg'),
      require('../asset/23.jpeg'),
      require('../asset/24.jpeg'),
      require('../asset/25.jpeg'),
      // require('../asset/26.jpeg'),
      require('../asset/27.jpeg'),
      // require('../asset/28.jpeg'),
      require('../asset/29.jpeg'),
 
     
  ]
  
    }

    // this.test.bind()
  }
// test(){
//   alert('h')
// }
getLocationUpdates = async () => {
  console.warn('helr')
  // const hasLocationPermission = await this.hasLocationPermission();

  // if (!hasLocationPermission) return;

  // this.setState({ updatesEnabled: true }, () => {
  //   this.watchId = Geolocation.watchPosition(
  //     (position) => {
  //       this.setState({ location: position });
  //       this.setState({ place: position });
  //       this.setState({ latitudes: position.coords.latitude });
  //       this.setState({longitudes: position.coords.longitude });
  //       // alert(position);
  //         // alert(JSON.address_components)


          
  //       console.log(position);
  //     },
  //     (error) => {
  //       this.setState({ location: error });
  //       console.log(error);
  //     },
  //     { enableHighAccuracy: true, distanceFilter: 0, interval: 5000, fastestInterval: 2000 }
  //   );
  // });
}

// componentWillUnmount() {
//   // this.removeLocationUpdates()
//   alert('3')
// }
handleBackButton(){
return true;
}


  componentDidMount = async () => {
  
    User.userInfos = await AsyncStorage.getItem('userInfos')
    if(User.userInfos=='true'){
    this.setState({UserInfo:true})
    }
    // this.setState({data:this.props.route.params.data,});
    // if(this.props.route.params.data=='true')
    // {
    // this.setState({UserInfo:true})
    // }
    // this.props.navigation.navigate(User.loginuser ?  'app':'AStack6' );
    User.whatsappNumberOne = await AsyncStorage.getItem('whatsappNumberOne')
    User.whatsappcontactsNameOne = await AsyncStorage.getItem('whatsappcontactsNameOne')
    this.setState({contactsNumberOne:User.whatsappNumberOne})
    this.setState({contactsNameOne:User.whatsappcontactsNameOne})


    User.whatsappNumberTwo = await AsyncStorage.getItem('whatsappNumberTwo')
    User.whatsappcontactsNameTwo = await AsyncStorage.getItem('whatsappcontactsNameTwo')
    this.setState({contactsNumberTwo:User.whatsappNumberTwo})
    this.setState({contactsNameTwo:User.whatsappcontactsNameTwo})

    User.whatsappNumberThree = await AsyncStorage.getItem('whatsappNumberThree')
    User.whatsappcontactsNameThree = await AsyncStorage.getItem('whatsappcontactsNameThree')
    this.setState({contactsNumberThree:User.whatsappNumberThree})
    this.setState({contactsNameThree:User.whatsappcontactsNameThree})
// sms
    User.smsNumberOne = await AsyncStorage.getItem('smsNumberOne')
    User.smscontactsNameOne = await AsyncStorage.getItem('smscontactsNameOne')
    this.setState({smscontactsNumberOne:User.smsNumberOne})
    this.setState({smscontactsNameOne:User.smscontactsNameOne})


    User.smsNumberTwo = await AsyncStorage.getItem('smsNumberTwo')
    User.smscontactsNameTwo = await AsyncStorage.getItem('smscontactsNameTwo')
    this.setState({smscontactsNumberTwo:User.smsNumberTwo})
    this.setState({smscontactsNameTwo:User.smscontactsNameTwo})

    User.smsNumberThree = await AsyncStorage.getItem('smsNumberThree')
    User.smscontactsNameThree = await AsyncStorage.getItem('smscontactsNameThree')
    this.setState({smscontactsNumberThree:User.smsNumberThree})
    this.setState({smscontactsNameThree:User.smscontactsNameThree})

    // this.getLocationUpdates()
    // this.getLocation()
    this.initEventPushNotification()
    this.setState({
      volume2: await VolumeControl.getVolume(),
  });
  console.log(this.state.volume2);
  // forcereload = true;

  this.volEvent = VolumeControlEvents.addListener(
      "VolumeChanged",
      this.volumeEvent,

  );

  BackHandler.addEventListener('hardwareBackPress',this.handleBackButton);
  // this.handleFingerprintShowed();

  }
  volumeEvent = event => {
    // alert(this.state.call1)
    // console.warn(event.volume)
    this.setState({ volume3: (event.volume) });


    if ((event.volume) == 0) {
      SystemSetting.setVolume(0.1)
        // SystemSetting.setVolume(0.1, { config: 'music' });
        console.log(event.volume)
    
      }
    else if (event.volume == 1) {
        SystemSetting.setVolume(0.9)
        console.log('vol up')
    }
    // console.warn('5')

    SampleArray.push(this.state.volume3);
    this.setState({ volume5: SampleArray.length })
console.warn(this.state.volume5)

    if (this.state.volume5 == 40) {
      // console.warn('event')

        // if(this.state.sms1==!null){
          // alert('hi')
        // }
this.Demo()
        // alert('equal to 80')
      

      // DirectSms.sendDirectSms('8318100577', 'https://www.google.co.in/maps/@25.43722443,81.7814105,15z')
      // NativeModules.RNImmediatePhoneCall.immediatePhoneCall('8318100577')
        // this.setState({ volume6: 'alert generated' })
        // this.setState({ button_press_done: true })
        // this.sendNotification()
        // {
            setTimeout(function () {
                SampleArray.length = 0;
                // this.setState({ volume5: 0 })

            }, (5000))
        // }
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
onPressButtonPlay() {
  console.log('b')
  song = new SoundPlayer('abc.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error)
          ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
      else {
        song.play((success) => {
              if (!success)
              // console.log(';play');
              ToastAndroid.show(' Play Background', ToastAndroid.LONG);
          });
      }
  });
}

onPressButtonPause() {
  // console.log('p')
  if (song != null) {
      if (this.state.pause) // play resume
          song.play((success) => {
              if (!success)
              // console.log(';playpausw');





                  ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
          });
      else song.pause();

      this.setState({ pause: !this.state.pause });
  }
}

initEventPushNotification() {
  AppState.addEventListener('change', (state) => {
      // console.log(state)
      if (state === 'background') {
          this.onPressButtonPlay();
          console.log('background')
          // PushNotification.localNotification({
          //     message: 'app running in background !',
          //     priority: 'high'

          // });
      }
      else if (state === 'active') {
          this.onPressButtonPause();
          console.log('active')
          // PushNotification.localNotification({
          //     message: 'app runing in foreground !',
          //     priority: 'high'

          // });
      }
      else if (state !== active) {
          // PushNotification.localNotification({
          //     message: 'app not active !',
          //     priority: 'high'

          // });
          console.log('not active')
      }


  });

}

  startListenerTapped() {
    callDetector = new CallDetectorManager((event, number) => {
        var updatedCallStates = this.state.callStates
        updatedCallStates.push(event + ' - ' + number)
        var previousDS = this.state.ds
        this.setState({ callStates:  updatedCallStates, ds: previousDS.cloneWithRows(updatedCallStates)});
      },
      false, // if you want to read the phone number of the incoming call [ANDROID], otherwise false
      ()=>{}, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
      {
        title: 'Phone State Permission',
        message: 'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
      } // a custom permission request message to explain to your user, why you need the permission [recommended] - this is the default one
    )
  }

  // componentDidMount(){
  //         this.inteval=setInterval(()=>{
  //           // alert('eee')
  //           this.startListenerTapped()
  //           // if(this.state.status===State.CONNECTING||this.state.status===States.CONNECTING){{
  //           //   if(true){{
  //           //   clearInterval(this.inteval);
  //           //   return;
  //           // }}
  //         },3000)
        

  //   // this.time =setTimeout(()=>{
  //   //   this.Timer()

  //   //   // alert('hee')
  //   // },3000);
  // // alert('hifi')
  // }
  callFriendTapped() {
                RNImmediatePhoneCall.immediatePhoneCall('9696459755')
                // this.callFriendTapped()
                // this.startListenerTapped()
    // Linking.openURL('tel:9305554908')
    //   .catch(err => {
    //     console.log(err)
    //   });
  }

  stopListenerTapped() {
    callDetector && callDetector.dispose();
  }





TimerForSecondNumber(){
  if(this.state.contactsNumberThree=='Enter number'){
    // alert('Please Enter Number Three')
    this.TimerForThirdNumber()

  }
  else{
  this.setState({two:true})
  this.setState({twoTime:true})
  // alert(this.state.two)
  // alert('2')
  setTimeout(()=>{
    RNImmediatePhoneCall.immediatePhoneCall(this.state.contactsNumberThree)
  },800)

  this.inteval2=BackgroundTimer.setInterval(()=>{
      callDetector = new CallDetectorManager((event)=>{
        // alert(event)
        
        if(event==='Disconnected'){
          // alert("disconnecten 2")
          BackgroundTimer.clearInterval(this.inteval2)
          // alert("disconnecten")
          SampleArray2.length = 0;
          if(this.state.two==true){
          this.TimerForThirdNumber()
          }
        }
        
        else if(event==='Connected'){
          alert("Connected")
        }
        else if(event==='Incoming'){
          alert("Incoming")
        }
        else if(event==='Dialing'){
          alert("Dialing")
        } 
        else if(event==='Offhook'){
          console.warn("Offhook")
          if(this.state.twoTime === true){
            // alert(this.state.twoTime)k
            this.setState({twoTime:false})
            BackgroundTimer.setTimeout(()=>{
                // alert('hee')
                this.setState({two:false})
              },43000);
          }
        }
        else if(event==='Missed'){
          alert("Missed")
        }
      })
      },1000)
    }
}

TimerForThirdNumber(){
  if(this.state.contactsNumberTwo=='Enter number'){
    this.TimerFunction()
  // alert('Please Enter Number Two')
  }  
  else{
  this.setState({three:true})
  this.setState({threeTime:true})
  // alert(this.state.three)
  BackgroundTimer.setTimeout(()=>{
    RNImmediatePhoneCall.immediatePhoneCall(this.state.contactsNumberTwo)
  },800)

  this.inteval3= BackgroundTimer.setInterval(()=>{
      callDetector = new CallDetectorManager((event)=>{
        // alert(event)
        
        if(event==='Disconnected'){
          // alert("disconnecten 3")
          BackgroundTimer.clearInterval(this.inteval3)
          SampleArray3.length = 0;
          if(this.state.three==true){
        

            this.TimerFunction()
          }
          // RNImmediatePhoneCall.immediatePhoneCall('9696459755')
          // this.TimerFunction()
        }
        
        else if(event==='Connected'){
          alert("Connected")
        }
        else if(event==='Incoming'){
          alert("Incoming")
        }
        else if(event==='Dialing'){
          alert("Dialing")
        }
        else if(event==='Offhook'){
          console.warn("Offhook")
          if(this.state.threeTime === true){
            // alert(this.state.threeTime)
            this.setState({threeTime:false})
            BackgroundTimer.setTimeout(()=>{
                // alert('hee')
                this.setState({three:false})
              },43000);
          }
        }
        else if(event==='Missed'){
          alert("Missed")
        }
      })
      },1000)
    
    }
}

TimerFunction(){
  if(this.state.contactsNumberOne=='Enter number'){
  
  // alert('Please Enter  Number')
  this.TimerForSecondNumber()

  // alert(this.state.one)
  }
  else{
  this.setState({one:true})
  this.setState({oneTime:true})
  // alert(this.state.one)

  RNImmediatePhoneCall.immediatePhoneCall(this.state.contactsNumberOne)
  this.inteval1= BackgroundTimer.setInterval(()=>{
  callDetector = new CallDetectorManager((event)=>{
    // alert(event)
    
    if(event==='Disconnected'){
      BackgroundTimer.clearInterval(this.inteval1)
      // alert("disconnecten")
      // alert(this.state.one)
      // SampleArray.length = 0;
      if(this.state.one==true){
      this.TimerForSecondNumber()
      }
    }
    
    else if(event==='Connected'){
      alert("Connected")
    }
    else if(event==='Incoming'){
      alert("Incoming")
    }
    else if(event==='Dialing'){
      alert("Dialing")
    }
    else if(event==='Offhook'){
      console.warn("Offhook")
      if(this.state.oneTime === true){
        alert(this.state.oneTime)
        this.setState({oneTime:false})
        BackgroundTimer.setTimeout(()=>{
            // alert('hee')
            this.setState({one:false})
          },43000);
      }
      // SampleArray.push('1')
      // alert(SampleArray.toString())
      // if(SampleArray.length > 41){
      //   this.setState({one:false})
      //   alert(this.state.one)
      //   alert(this.one)
      // clearInterval(this.inteval1)
      // SampleArray.length = 0;
      //   this.Demo()
      // }
    }
    else if(event==='Missed'){
      alert("Missed")
    }
  })
  },1000)
  // this.Time()
  // alert('hi_1')
  // this.Timer;
    // if(true){

    // }else{
    //       this.inteval=setInterval(()=>{
    //         alert('eee')
    //         // if(this.state.status===State.CONNECTING||this.state.status===States.CONNECTING){{
    //           if(true){{
    //           clearInterval(this.inteval);
    //           return;
    //         }}
    //       },3000)
    //     }
  // for(var i=0;i<2;i++)
  // {
// this.state.interval=setInterval(()=>{
//   if(this.state.status===States.

//   this.Timer();},3000)

    // var timeoutHandle=setTimeout(()=>{
    //   alert('hee')
    // },3000);
    //   alert('yo')
    //   this.Timer.bind(this);
  // this.TimerFunction()
// }
}
}
// https://www.google.com/maps/@25.4449002,81.7896274,15z
Demo(){
  // one = this.state.contactsNameThree
  // const variable =   {'https://www.google.co.in/maps'+ this.state.smscontactsNumberOne '+' this.state.smscontactsNumberOne}
  // const variable =   'https://www.google.co.in/maps/ ${one},${one}' ;

  if(true){
    if(this.state.smscontactsNumberThree=='Enter number' && this.state.smscontactsNumberTwo=='Enter number' && this.state.smscontactsNumberOne=='Enter number'){
      alert('Please First select Number')
    }
    else{
      if(this.state.smscontactsNumberThree != 'Enter number') {
        DirectSms.sendDirectSms(this.state.smscontactsNumberThree, 'https://gps-coordinates.org/my-location.php?lat=25.4373337&lng=81.7822906'),
          alert(this.state.smscontactsNumberThree)
      }
       if( this.state.smscontactsNumberTwo != 'Enter number') {
        DirectSms.sendDirectSms(this.state.smscontactsNumberTwo, 'https://gps-coordinates.org/my-location.php?lat=25.4373337&lng=81.7822906'),
      alert(this.state.smscontactsNumberTwo)
      }
      if(  this.state.smscontactsNumberOne != 'Enter number') {
        DirectSms.sendDirectSms(this.state.smscontactsNumberOne, 'https://gps-coordinates.org/my-location.php?lat=25.4373337&lng=81.7822906'),
        alert(this.state.smscontactsNumberOne)
        // alert(variable)
      }
      
    }
  }

  if(true){
      if(this.state.contactsNumberThree=='Enter number' && this.state.contactsNumberTwo=='Enter number' && this.state.contactsNumberOne=='Enter number'){
        alert('Please First select Number')
      }
      else{
        this.TimerFunction()
      // alert('this.state.contactsNumberThree')
      }
}
  // return false
}
Timer(){
  // RNLocalNotifications.createNotification(1, 'Some text', '2017-01-02 12:30', 'default');
  // RNLocalNotifications.setAndroidIcons("ic_launcher", "mipmap", "notification_small", "drawable"); //this are the default values, this function is optional
 
  // //RNLocalNotifications.createNotification(id, text, datetime, sound[, hiddendata]);
  // RNLocalNotifications.createNotification(1, 'Some text', '2017-01-02 12:30', 'default');
   
  // //RNLocalNotifications.updateNotification(id, text, datetime, sound[, hiddendata]);
  // RNLocalNotifications.updateNotification(1, 'Some modifications to text', '2017-01-02 12:35', 'silence');
   
  // //RNLocalNotifications.deleteNotification(id);
  // RNLocalNotifications.deleteNotification(1);
  // RNLocalNotifications.setAndroidIcons("ic_launcher", "mipmap", "notification_small", "drawable");
//   const intervalId = BackgroundTimer.setInterval(() => {
//     // this will be executed every 200 ms
//     // even when app is the the background
//     console.log('tic');
// }, 2000);
  // RNRestart.Restart();
  // alert('hi')
}
// StopFunction(){
//   clearInterval(this.timer);
// }  
  render() {
    console.log(this.state.callStates)
    return (
      <Container>
 <Card style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '16%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a',width:width,bottom:7,right:2 }}>
           
           
           
           <CardItem style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '20%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a',width:width ,top:20}}>

             <Left>
             <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
              <IconFeath name='menu' size={20} style={{color:'white'}}/>
            </Button>
             </Left>

           <Body style={{left:0,width:400,bottom:15}}>
         {/* <Image source={pic} blurRadius={1} style={{width:70,height:70,top:0,borderRadius:100,left:5}} /> */}
         <IconFont name='user-alt' style={{ color: 'white' }} size={50}/>

          <Text style={{color:'#db0e7a',fontSize:20,width:300,color:'white',fontSize:20,right:35}}>Freedom App</Text> 
          {/* <Text style={{color:'#db0e7a',fontSize:20,width:300,color:'white',fontSize:20,right:19}}>{this.state.Login}</Text>  */}
          {/* <Text style={{color:'#db0e7a',fontSize:20,width:300,color:'white',fontSize:12,right:19,alignItem:'center'}}>{this.state.username}</Text>  */}

            {/* <Title style={{color:'#db0e7a',fontSize:20}} >App</Title> */}
           </Body>
             {/* <Body style={{ left: 0,top:10,width:200 }}>
               <Title style={{ color: 'pink', fontSize: 23,width:150  }} >Emergency</Title>
             </Body>

             <Body style={{ left: 50,top:18 }}>
               <Title style={{ color: 'white', fontSize: 23,fontWeight:'bold' }} >App</Title>
             </Body> */}
             <Right>
               <Button transparent style={{flexDirection:'column'}} onPress={()=>this.props.navigation.navigate('Location')}>
              <Iconmaps name='google-maps' size={28} style={{color:'white'}} />
<Text style={{color:'white'}}>maps</Text>
               {/* <IconFont name='user-alt' style={{ color: 'white' }} size={35}/> */}
               </Button>
             </Right>
         
           </CardItem>

           <View style={{justifyContent:'space-between',flexDirection:'row',top:30,padding:20}}>
             <View>
   {/* <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.longitudes} </Text> */}
   {/* <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Longitude </Text> */}
   </View>
   <View>
   {/* <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.latitudes} </Text> */}
   {/* <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Latitude </Text> */}
   </View>
         </View>
         </Card>
        {/* <Header style={{borderColor:'gray',borderBottomWidth:5,borderEndWidth:.2,borderStartWidth:.2,borderBottomColor:'gray',height:90,borderBottomLeftRadius:60,borderBottomRightRadius:60,backgroundColor:'white'}}>
           <Left>
       
            <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
              <Icon name='menu' style={{color:'#db0e7a'}}/>
            </Button>
           
          </Left>
          <Body style={{left:60}}>
            <Title style={{color:'black',fontSize:16}} >Emergency</Title>
          </Body>
          
          <Body style={{left:60}}>
            <Title style={{color:'#db0e7a',fontSize:20}} >App</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>this.props.navigation.navigate('Location')}>
              <Icon name='search' style={{color:'#db0e7a'}} />
            </Button>
            </Right>
        
        </Header> */}
<StatusBar backgroundColor={'#ff0066'} />
        {/* <Content > */}
 
        <View style={styles.container}>
        {/* <Ripple rippleSize={400} rippleColor={'blue'} rippleSequential={false} >

  <View style={{width:width,height:height}}>

  <Text>hhhhkhi</Text>
  </View>
  </Ripple> */}


        {/* <Card style={{  height: '45%', borderRadius:100,backgroundColor: '#05375a',width:width/2}}>
           
           
        <AnimatedLinearGradient   customColors={presetColors.instagram} speed={500} /> 
           
           <CardItem style={{  height: '25%', borderRadius:100, backgroundColor: '#05375a',width:width/2 ,top:20}}>
           <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} /> 



             
         
           </CardItem>

        
         </Card> */}

{/* <AnimatedLinearGradient style={{height:50,width:50}}  customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/> */}
{/* <Card style={{height:150,width:150,borderRadius:100}}>
<View style={{height:150,width:150,borderRadius:100}}>
<AnimatedLinearGradient style={{height:150,width:150,borderRadius:0}}  customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>
</View>
</Card> */}
{/* <View>


<View style={{backgroundColor:'black',height:200,width:200,borderRadius:100}}>
<AnimatedLinearGradient style={{height:150,width:150,borderRadius:100}}  customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

<View style={{backgroundColor:'transparent',height:200,width:200,borderRadius:100}}>
  <Text>jhiih</Text>
</View>
</View>
</View> */}

<Card style={{height:150,width:width,borderRadius:0,borderWidth:27,paddingEnd:10,backgroundColor:'#e5e6e5',justifyContent:'center',alignItems:'center'}}>
                    
                    <SliderBox  
                        images={this.state.images}
                        autoplay
                        
                        circleLoop
                        dotColor='transparent'
                        inactiveDotColor='transparent'
                        sliderBoxHeight={150}
                        // resizeMode={'center'}
                        
                        // resizeMethod={'resize'}
                        // style={{bottom:30,alignItems:'center',right:50}}
                    />
                    </Card>
        {/* <Animatable.Image
                        // animation="bounceIn"
                        // duration={2500}
                        source={require('../asset/Fingure.jpeg')}
                        style={{Top:0,height:height-190,width:width,position:'absolute'}}
                        // resizeMode={"stretch"}
                        // blurRadius={5}
                    /> */}
          {/* <TouchableOpacity onPress={()=>alert('helesdkfj')}>
          <Text>helo hilkdjfgkdfkgfjd</Text>
          </TouchableOpacity> */}
          {/* <Text>{this.state.contactsNumberOne}</Text>
          <Text>{this.state.contactsNumberTwo}</Text>
          <Text>{this.state.contactsNumberThree}</Text>
          <Text>{this.state.smscontactsNumberOne}</Text>
          <Text>{this.state.smscontactsNumberTwo}</Text>
          <Text>{this.state.smscontactsNumberThree}</Text> */}
          {/* <Text>{this.state.UserInfo}</Text> */}
<Text/>
<Text/>
<Text/>
<Text/>
        <TouchableOpacity
          // onPress={this.Timer}
          onPress={this.Demo}
          // onPress={()=>AsyncStorage.clear()}

       
          // style = {styles.bottomMargin}
>      
<Image
            source={{
              // uri: 'https://i.pinimg.com/564x/6c/82/cf/6c82cfd493cc1ae5753b3b26d6255dbf.jpg',

              uri: 'data:image/jpeg;base64,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',
              // height: 60,
              // width: 60,
              // scale: 0.5,
              // borderRadius:50
            }}
            resizeMode="center"
            // style={styles.avatar}
          style={{ height: 100, width: 100, borderRadius: 100, left: 0, top: 0 }}

          />  
 {/* <Text>Start </Text> */}
 {/* <Image
          style = {styles.bottomMargin}

                        // animation="bounceIn"
                        // duration={2500}
                        source={require('../asset/ungli.jpeg')}
                        // style={{Top:0,height:99,width:99,position:'absolute'}}
                        // resizeMode={"stretch"}
                        // blurRadius={15}
                    /> */}
          </TouchableOpacity> 
   

          {/* <TouchableOpacity
          // onPress={this.stopListenerTapped}
          onPress={this.TimerFunction}
  
  
          style = {styles.bottomMargin}
>        
 <Text>Call in loop test </Text>
       
          </TouchableOpacity> */}
         
      </View>
{/* </Ripple> */}

        {/* </Content> */}
        <Footer style={{height:115,borderTopWidth:0,backgroundColor:'#e5e6e5',borderColor:'#c71585',bottom:0}} color='white'>
          <FooterTab style={{borderColor:'gray',borderTopWidth:5,borderEndWidth:.2,borderStartWidth:.2,height:90,borderTopLeftRadius:70,borderTopRightRadius:70, backgroundColor: '#05375a'}} >
          
              {this.state.UserInfo?  
          <Button vertical onPress={()=>this.props.navigation.navigate('InformationUser')}>
              <Icon name="person" style={{color:'white'}}/>
              <Text style={{color:'white'}}>User Info</Text>
            </Button>
            :

          <Button vertical onPress={()=>this.props.navigation.navigate('UserInfo')}>
              <Icon name="person" style={{color:'lightgray'}}/>
              <Text style={{color:'white'}}>Update Info</Text>
            </Button>
  }
            <Button vertical active style={{backgroundColor:'transparent'}} onPress={()=>this.props.navigation.navigate('Public')}>
              <Icon active name="navigate"  style={{color:'white'}}/>
              <Text style={{color:'white'}}>public</Text>
            </Button>
 
            <Button  onPress={()=>this.props.navigation.navigate('Number')}>
            {/* <Button  onPress={()=>this.props.navigation.navigate('Contacts')}> */}
              <Icon name="person" style={{color:'white'}}/>
              <Text style={{color:'white'}}>add Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // paddingTop: 40,
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    backgroundColor:'#e5e6e5'
    // backgroundColor: 'black',
  },
  bottomMargin: {
   height:100,
  //  top:10,
    // marginBottom: 10,
    width:100,
    borderBottomColor:'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:30,
    borderRadius:100,
    bottom:100,
    // right:19,
    position:'absolute'
  },
  text: {
    marginTop: 30,
    textAlign:'center',
    fontSize: 20,
    color: '#341584'
  },
  callLogs: {
    textAlign:'center',
    fontSize: 15,
    color: '#333333',
    marginBottom: 5
  }
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
    'rgb(92, 160, 186)',
    'rgb(106, 166, 186)',
    'rgb(142, 191, 186)',
    'rgb(172, 211, 186)',
    'rgb(239, 235, 186)',
    'rgb(212, 222, 206)',
    'rgb(187, 216, 200)',
    'rgb(152, 197, 190)',
    'rgb(100, 173, 186)',
  ]
};
const DEFAULT_POINTS = {
  start: {x: 0, y: 0.4}, 
  end: {x: 1, y: 0.6}
}