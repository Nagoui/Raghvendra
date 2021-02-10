import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    TouchableNativeFeedback,    
    // Button,
    DatePickerAndroid,
    DatePickerIOS,  
    Dimensions,
    SplitPane,
    SlideView,
    AsyncStorage,
    YellowBox,
    disableYellowBox,
    ImageBackground,
  }
from 'react-native';
import { 
  Icon, 
  Container,
  Card, 
  Header, 
  Left, 
  Body, 
  Right, 
  Button, 
  Title,
  Footer,
  FooterTab,
  Content,
  CardItem,
  Radio,
  Textarea,
} from 'native-base';
// import Firebase from './Firebase.js';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import User from './User.js';

import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome5';

import Firebase from '../Logintest/Firebase.js';
import Ripple from 'react-native-material-ripple';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
const {width,height} = Dimensions.get('window');
// import styles from './styles';
// import {CheckBox} from 'react-native-elements'
// import NumbertButtons from './src/component/NumberButton/index.js';
import * as Animatable from 'react-native-animatable';

export default class PageOne extends Component {
    constructor(){
        super();
        this.state={
          noteArray:[],
          noteAddress:'',
          noteAddress:'',
          noteFirst_Name:[],
          noteLast_Name:'',
          noteUserName:'',
          noteText:'',
          noteDate:'',
          id:0,
          W1:'',
          W2:'',
          W3:'',
          S1:'',
          S2:'',
          S3:'',
          id:'',
        }
        // this.scrollYAnimatedaValue = new Animated.Value(0);
  
        // this.array = [];
      }
 componentDidMount() {
      const userid = Firebase.auth().currentUser.uid
        this.setState({id:userid})

        // Firebase.database().ref('${this.state.id}/u_DOB').on("value", snapshot => {
        //   let allNotes = [];
        //   snapshot.forEach(snap => {
        //     allNotes.push(snap.val());
        //   });
        //   this.setState({ noteFirst_Name: allNotes });
        // });


    const item1 = Firebase.database().ref('username/u_Gender');
    // const item1 = Firebase.database().ref('Public/');
    item1.on("value", datasnap => {
      if (datasnap.val()) {
        this.setState({ noteFirst_Name: Object.values(datasnap.val()) })
      }
    })
    const item0 = Firebase.database().ref('username/u_username');
    item0.on("value", datasnap => {
      if (datasnap.val()) {
        this.setState({ noteUserName: Object.values(datasnap.val()) })
      }
    })
    
    const item2 = Firebase.database().ref('username/u_DOB');
    item2.on("value", datasnap => {
      if (datasnap.val()) {
        this.setState({ noteLast_Name: Object.values(datasnap.val()) })
      }
    })
    
    const item3 = Firebase.database().ref('username/u_Address');
    item3.on("value", datasnap => {
      if (datasnap.val()) {
        this.setState({ noteAddress: Object.values(datasnap.val()) })
      }
    })
    
    const item4 = Firebase.database().ref('username/Time');
    item4.on("value", datasnap => {
      if (datasnap.val()) {
        this.setState({ W1: Object.values(datasnap.val()) })
      }
    })

    const W1 = Firebase.database().ref('username/Calling_Slot_One/Calling_One');
    W1.on("value", datasnap => {
      if (datasnap.val()) {
        this.setState({ W1: Object.values(datasnap.val()) })
      }
    }) 
    
    const W2 = Firebase.database().ref('username/Calling_Slot_Two/Calling_Two');
    W2.on("value", datasnap => {
      if (datasnap.val()) {
        this.setState({ W2: Object.values(datasnap.val()) })
      }
    }) 
    
    const W3 = Firebase.database().ref('username/Calling_Slot_Three/Calling_Three');
    W3.on("value", datasnap => {
      if (datasnap.val()) {
        this.setState({ W3: Object.values(datasnap.val()) })
      }
    }) 
    const S1 = Firebase.database().ref('username/SMS_Slot_One/SMS_one');
    S1.on("value", datasnap => {
      if (datasnap.val()) {
        this.setState({ S1: Object.values(datasnap.val()) })
      }
    }) 
    const S2 = Firebase.database().ref('username/SMS_Slot_Two/SMS_two');
    S2.on("value", datasnap => {
      if (datasnap.val()) {
        this.setState({ S2: Object.values(datasnap.val()) })
      }
    })
    const S3 = Firebase.database().ref('username/SMS_Slot_Three/SMS_three');
    S3.on("value", datasnap => {
      if (datasnap.val()) {
        this.setState({ S3: Object.values(datasnap.val()) })
      }
    })
  }
 
  render() {
    console.disableYellowBox=true;
    let pic = { uri:'https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2016/10/15954629975_795d3c949c_k-700x466.jpg'};
    // let logo = {uri:'data:image/jpeg;base64,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'}
    let logo = {uri:'http://www.pngplay.com/wp-content/uploads/1/Purple-Butterfly-PNG-Transparent-File.png'}
    

    // let pic = {
    //   uri: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'}; 
    return (
      <View >
         <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

        {/* <TouchableOpacity>   */}
        {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserInfo')}>
       <Text style={{top:1,alignSelf:'center',fontSize:17,color:'red',borderBottomWidth:1,borderBottomColor:'red'}}> Update </Text>
       </TouchableOpacity> */}
       {/* <ImageBackground source={require('../asset/14.jpeg')} blurRadius={0} style={{width:width,height:height,top:0}} /> */}
       {/* </TouchableOpacity> */}
        {/* <Text style={{fontSize:32,color:'black',fontStyle:'bold',top:150,height:20}}>Welcome to the jungle</Text>
        // <Text style={{fontSize:32,color:'black',fontStyle:'bold',top:50}}>Welcome to the jungle</Text> */}
        {/* <View style={{backgroundColor:'blue'}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserInfo')}>
       <Text style={{top:1,alignSelf:'center',fontSize:17,color:'red',borderBottomWidth:1,borderBottomColor:'red',position:'relative'}}> Update </Text>
       </TouchableOpacity>
       </View> */}
                {/* <Animatable.Image
                                // animation="bounceIn"
                                // duration={2500}
                                source={require('../asset/bird.png')}
                        // source={require('../')}
style={{height:100,width:100}}
                                // style={styles.logo}
                                resizeMode={"stretch"}
                            /> */}


<View style={{ bottom: 5 }}>
  
          <Card style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '20%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a',width:width,right:2}}>
           
           
           
            <CardItem style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '20%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a',width:width }}>

            <Left>
               <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Ripple rippleSize={200} rippleColor="red">
               <IconAnt name='arrowleft' style={{ color: 'white',top:15 }} size={25}/>
               </Ripple>
               </Button>
             </Left>

           <Body style={{left:0,width:400,bottom:11}}>
         {/* <Image source={pic} blurRadius={1} style={{width:70,height:70,top:0,borderRadius:100,left:5}} /> */}
         <IconFont name='user-alt' style={{ color: 'white' }} size={70}/>

          <Text style={{color:'#db0e7a',fontSize:20,width:300,color:'white',fontSize:20,right:20}}>Freedom App</Text> 
              </Body>
              <Right>
                {/* <Button transparent> */}
                {/* <Icon name='search' style={{ color: 'white' }} /> */}
                {/* </Button> */}
              </Right>
          
            </CardItem>

            {/* <View style={{justifyContent:'space-between',flexDirection:'row',top:30,padding:20}}>
              <View>
    <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.longitudes} </Text>
    <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Longitude </Text>
    </View>
    <View>
    <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.latitudes} </Text>
    <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Latitude </Text>
    </View>
          </View> */}
          </Card>
          {/* <Text />
          <Text /> */}
               <Text style={{color:'darkgray',left:10,fontSize:19}}>*All the detail of the user are there</Text>
               <Text style={{color:'gray',left:10}}>Are you sure yoyr details are correct</Text>
          {/* <Text/> */}
          {/* <Text/> */}
          <View style={{ alignItems: 'center', top: 10,paddingBottom:0 }}>
            <Card style={{ width: width / 1.1,height:height/1.83,padddingBottom:0 }}>
            <View style={Styles.blueS}>
            <View style={{flex:0,bottom:0}}>
<Text/>
   
    <Text style={{fontSize:18,bottom:18,right:30,fontWeight:'bold'}}>UserName : {this.state.noteUserName}</Text>
    <Text style={{fontSize:18,bottom:18,right:30,fontWeight:'bold'}}>Gender : {this.state.noteFirst_Name}</Text>
    <Text style={{fontSize:18,bottom:18,right:30,fontWeight:'bold'}}>D.O.B : {this.state.noteLast_Name}</Text>
    <Text style={{fontSize:18,bottom:18,right:30,fontWeight:'bold'}}>Address : {this.state.noteAddress}</Text>

    {/* <Text style={{fontSize:18,bottom:18}}>Date : {this.state.noteDate}</Text> */}
<Text/>
   
    <View style={{right:0}}>
    <Text style={{fontSize:18,bottom:18,color:'blue',fontWeight:'bold'}}>Calling  : {this.state.W1}</Text>
    <Text style={{fontSize:18,bottom:18,color:'blue',fontWeight:'bold'}}>Calling : {this.state.W2}</Text>
    <Text style={{fontSize:18,bottom:18,color:'blue',fontWeight:'bold'}}>Calling : {this.state.W3}</Text>
    </View>
<Text/>
    <View style={{right:30}}>
    <Text style={{fontSize:18,bottom:18,fontWeight:'bold'}}>SMS : {this.state.S1}</Text>
    <Text style={{fontSize:18,bottom:18,fontWeight:'bold'}}>SMS : {this.state.S2}</Text>
    <Text style={{fontSize:18,bottom:18,fontWeight:'bold'}}>SMS : {this.state.S3}</Text>
       </View>
       </View>
       </View>

            </Card>
          </View>
        </View>



       {/* <View style={Styles.blueS}>
       <View style={{backgroundColor:'blue',bottom:70,height:50,width:150,right:-50,borderRadius:60}}>
       <AnimatedLinearGradient   customColors={presetColors.sunrise} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserInfo')}>

       <Text style={{fontWeight:'bold',top:9,alignSelf:'center',fontSize:17,color:'white',borderBottomWidth:1,borderBottomColor:'red',position:'relative',justifyContent:'center',textAlignVertical:'center'}}> Update </Text>
       </TouchableOpacity>
       </View>
       
       </View> */}
       {/* <View style={{position:'absolute',top:520,width:305,alignSelf:'center'}}>  */}
       {/* <Text style={{top:1,alignSelf:'center',fontSize:17,color:'white'}}>Fill your information correctly for registration</Text> */}
       {/* </View> */}
       {/* <View style={{position:'absolute',width:330}}> */}
         {/* <Image 
            source={logo} style={{width:170,alignSelf:'center',height:200,top:10,borderRadius:15,position:'absolute'}}
         /> */}
       {/* </View> */}
       {/* <View style={{position:'absolute',top:400,width:305,alignSelf:'center'}}> 
       <Text style={{top:1,alignSelf:'center',fontSize:17,color:'white'}}>Update information ? </Text> */}
   {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserInfo')}>
       <Text style={{top:1,alignSelf:'center',fontSize:17,color:'red',borderBottomWidth:1,borderBottomColor:'red'}}> Update </Text>
       </TouchableOpacity> */}
       {/* </View> */}
            {/* <View > */}
              {/* <ScrollView style={{height:height,flexDirection:'row',borderWidth:1,width:width*2}}> */}
                  {/* <View style={{flexDirection:'row',width:width*2,backgroundColor:'green',height:height}}></View> */}
              {/* </ScrollView> */}

            
            {/* <View style={{backgroundColor:'red',top:100,height:height,width:width*2,flexDirection:'row'}}>
                  <View stye={{width:width,backgroundcolor:'green',flex:0}}><Text style={{color:'green'}}>hlzOXcTsiIgIiICIiA</Text></View>
                  <View stye={{width:width+1,flex:1}}><Text>3123414415235552152355</Text></View>

            </View>  */}

       {/* <View style={{flex:1,top:500}}>
         <Text>content</Text>
         <SlideView visible={this.state.slideViewVisible}>
           <Text>number2</Text>
         </SlideView>
         </View> */}
       <View style={{bottom:0,height:70,padding:10}}>
       {/* <View style={{backgroundColor:'blue',bottom:70,height:50,width:150,right:-50,borderRadius:60}}>
       <AnimatedLinearGradient   customColors={presetColors.sunrise} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserInfo')}>

       <Text style={{fontWeight:'bold',top:9,alignSelf:'center',fontSize:17,color:'white',borderBottomWidth:1,borderBottomColor:'red',justifyContent:'center',textAlignVertical:'center'}}> Update </Text>
       </TouchableOpacity>
       </View> */}
       {/* <AnimatedLinearGradient   customColors={presetColors.sunrise} speed={1500} start= {0.5, 0} end= {0.5, 1}/> */}
{/* <View style={{backgroundColor:'blue',bottom:0,height:50,width:150,right:-50,borderRadius:60}}> */}
               {/* <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
       <Text style={{fontWeight:'bold',top:9,alignSelf:'center',fontSize:17,color:'white',borderBottomWidth:1,borderBottomColor:'red',justifyContent:'center',textAlignVertical:'center'}}> Update </Text>

                    
                    </TouchableOpacity> */}
                     <Button 
                     onPress={()=>this.props.navigation.navigate('UserInfo')}
                // onPress={()=>this.props.navigation.navigate('MyTabs')}
                
                block danger style={{top:1,justifyContent:'center',borderRadius:10,backgroundColor:'blue',height:50}} >
                    <Text style={{color:'white'}}>UPDATE INFO </Text>
                </Button>
                    {/* </View> */}
                              {/* </Content> */}
                </View>
       </View>

    );
  }
}
const Styles = StyleSheet.create
({
    
  blueS:{
    // top:70,
    // backgroundColor:'#98989898', 
    width:300,
    height:height/2,
    alignSelf:'center',
    // position:'absolute',
    // justifyContent:'center',
    // alignItems:'center',
    // color:'transparent',
    paddingTop:50,
    right:-58
    // opacity:0.5,
},
emailStyle:{width:200,fontSize:18,borderRadius:14,backgroundColor:'white',top:18,height:45,alignSelf:'center'},
password_Error: {
  // backgroundColor: 'skyblue',
  borderRadius: 14,
  borderColor: 'red',
  borderBottomColor: 'red',
  borderWidth: 3
},
passstyle:{width:270,fontSize:18,borderRadius:14,backgroundColor:'white',top:27,height:45,alignSelf:'center'}
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






// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Geocoder from 'react-native-geocoding';
// import Geolocation from 'react-native-geolocation-service';
 
// export default class LocationDemo extends Component {
 
//     constructor() {
//         super()
//         this.state = {
//             latitude: 0,
//             longitude: 0,
//             error: null,
//             Address: null
//         }
//     }
 
//     async componentDidMount() {
//       Geocoder.init('AIzaSyDvPRVbE0LsYc_2aPvRrJjxw29gxpMAvJQ', {language : 'en'})
//       // Geocoder.init('AIzaSyDvPRVbE0LsYc_2aPvRrJjxw29gxpMAvJQ');
//       Geolocation.getCurrentPosition(
//             (position) => {
//                 this.setState({
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                 });
//                 Geocoder.from(position.coords.latitude, position.coords.longitude)
//                     .then(json => {
//                         console.log(json);
//                         var addressComponent = json.results[0].address_components;
//                         this.setState({
//                             Address: addressComponent
//                         })
//                         console.log(addressComponent);
//                     })
//                     .catch(error => console.warn(error));
//             },
//             (error) => {
//                 // See error code charts below.
//                  this.setState({ error: error.message }),
//                    console.log(error.code, error.message);
//              },
//             { enableHighAccuracy: false, timeout: 10000, maximumAge: 100000 }
//         );
//     }
 
//     render() {
//         return (
//             <View style={styles.MainContainer}>
//                 <Text style={styles.text}> Latitude = {this.state.latitude}</Text>
//                 <Text style={styles.text}> Longitude = {this.state.longitude}</Text>
//                 <Text style={styles.text}>{this.state.Address}</Text>
//                 {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
//             </View>
//         );
//     }
// }
 
// const styles = StyleSheet.create({
//     MainContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: '#f5fcff',
//         padding: 11
//     },
//     text: {
//         fontSize: 22,
//         color: '#000',
//         textAlign: 'center',
//         marginBottom: 10
//     },
// });





