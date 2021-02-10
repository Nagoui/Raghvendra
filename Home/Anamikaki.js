import React,{Component} from 'react';
import {
  StyleSheet,
  PixelRatio,
    Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Platform,
  Animated,
  AsyncStorage,
  Dimensions,
  StatusBar,
  YellowBox,
} from 'react-native';

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
} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import Dialog from "react-native-dialog";
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome5';
// import Firebase from '../Logintest/Firebase.js';
import WhatsApp_Notes  from './Public_Notes.js';
import Modal from 'react-native-modal';
import Ripple from 'react-native-material-ripple';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import User from '../Logintest/User.js';

// const image= {uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27'};
const image= {uri: 'https://i2.wp.com/atkmagazine.com/wp-content/uploads/2016/06/Title-2.jpg?resize=800%2C435'};
const Whats = { uri: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27" };
const {width,height} = Dimensions.get('screen')
const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 290;

import Firebase from '../Logintest/Firebase.js';
// function Post({naviagation}){
  class Public extends React.Component{
    // arr=[]
    // id=0
    // state={
    //     text:'',
    //     item:[
    //         {
    //             id:1,
    //             datas:'loading'
    //         }
    //     ]
    // };
    constructor(){
      super();
      this.state={
        noteArray:[],
        noteText:'',
        id:0,
      isModalVisibleTwo: false,
      isModalVisibleThree: false,
      isModalVisible: false,
      dialogVisible: false,
      username: '',
      password: '',
      passwordValidate: true,
      usernameValidate: true,
      phoneValidate: true,
      Transfer_username: '',
      Transfer_password: '',
      avatarSource: null,
      avatarSource_Adahar: null,
      avatarSource_Driving: null,
      avatarSource_Pan: null,
      avatarSource_Passport: null,
      videoSource: null,
      Adhar:null,
      Pan:null,
      Passoprt:null,
      Driving:null,

      warning_Adagar: '',
      warning_Driving: '',
      warning_Pan: '',
      warning_Passport: '',
      name: '',
          email: '',
          password: '',
      Login:'',
        item:[
                  {
                      id:1,
                      data:'loading'
                  }
              ]
      } 
      this.selectPhotoTapped_Adahar = this.selectPhotoTapped_Adahar.bind(this);
      this.selectPhotoTapped_Driving = this.selectPhotoTapped_Driving.bind(this);
      this.selectPhotoTapped_Pan = this.selectPhotoTapped_Pan.bind(this);
      this.selectPhotoTapped_Passport = this.selectPhotoTapped_Passport.bind(this);
      this.scrollYAnimatedaValue = new Animated.Value(0);
      this.setDate = this.setDate.bind(this);
      // this.array = [];
    }

    selectPhotoTapped_Adahar() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true,
        },
      };
      ImagePicker.showImagePicker(options, response => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = {uri: response.uri};
          // Firebase.storage().ref(source)//.child("dp.jpg")
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
          this.setState({
            avatarSource_Adahar: source,
          });
        }
      });
    }

    selectPhotoTapped_Driving() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true,
        },
      };
      ImagePicker.showImagePicker(options, response => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = {uri: response.uri};
          // Firebase.storage().ref(source)//.child("dp.jpg")
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
          this.setState({
            avatarSource_Driving: source,
          });
        }
      });
    }
    
    selectPhotoTapped_Pan() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true,
        },
      };
      ImagePicker.showImagePicker(options, response => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = {uri: response.uri};
          // Firebase.storage().ref(source)//.child("dp.jpg")
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
          this.setState({
            avatarSource_Pan: source,
          });
        }
      });
    }
    selectPhotoTapped_Passport() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true,
        },
      };
      ImagePicker.showImagePicker(options, response => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = {uri: response.uri};
          // Firebase.storage().ref(source)//.child("dp.jpg")
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
          this.setState({
            avatarSource_Passport: source,
          });
        }
      });
    }
    setDate(newDate) {
      this.setState({chosenDate: newDate});
    }
  
    handleSignUp = () => {
      const { email, password } = this.state
      Firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          // .then(() => this.props.navigation.navigate('Profile'))
          // alert('ho gaya')
          .catch(error => console.warn(error))
  }
  validate() {
  
    const { Adhar,Pan,Driving,Passoprt } = this.state
    if(Adhar == null && Pan==null &&Driving==null && Passoprt == null){
      alert('Select atleast One')
      return false
    }
    // if (username == '') {
    //     alert('please Select atleast One ')
    //     return false
    // } else if (password == '') {
    //   alert('please Select atleast One ')
    //     return false
    // }
    // else if (password == '') {
    //   alert('please Select atleast One ')
    //     return false
    // }
    // else if (password == '') {
    //   alert('please Select atleast One ')
    //     return false
    // }
  
    return true
  }
  
  passwordCheck(text, type) {
    // const{password} = this.state
    const ad = /^\d{12}$/  
    const pan = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    const passpo = /[a-zA-Z]{2}[0-9]{7}/
    // const dr = new RegExp(^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}([A-D]|\s)$")
    // const de = ^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}([A-D]|\s)$")
    id = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // id = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/
    // pass = /^[0-9a-zA-Z]+$/
    if (type == 'Adahar') {
        if (ad.test(text)) {
            // console.error("worng")
            this.setState({
                Adhar: text,
                usernameValidate: true,
                warning_Adagar: ''
            })
        } else {
            this.setState({
                usernameValidate: false,
                warning_Adagar: 'Please Select Valid Adhar Number'
            })
        }
  
    }
    // 
    else  if (type == 'Driving') {
      if (text.length > 5) {
          // console.error("worng")
          this.setState({
              Driving: text,
              usernameValidate: true,
              warning_Driving: ''
          })
      } else {
          this.setState({
              usernameValidate: false,
              warning_Driving: 'Please Select Valid Driving Number'
          })
      }

  }
  
  else  if (type == 'Pan') {
    if (pan.test(text)) {
        // console.error("worng")
        this.setState({
          Pan: text,
            usernameValidate: true,
            warning_Pan: ''
        })
    } else {
        this.setState({
            usernameValidate: false,
            warning_Pan: 'Please Select Valid Pan Number'
        })
    }

}

else  if (type == 'Passport') {
  if (passpo.test(text)) {
      // console.error("worng")
      this.setState({
          Passport: text,
          usernameValidate: true,
          warning_Passport: ''
      })
  } else {
      this.setState({
          usernameValidate: false,
          warning_Passport: 'Please Select Valid Passoprt Number'
      })
  }

}

  else if (type == 'phone') {
  
        if (text.length < 10) {
  
            this.setState({
                phoneValidate: false,
                warning: 'Enter correct phone number'
            })
        }
        else {
            this.setState({
  
                phoneValidate: true,
                warning: ''
  
                // warning:''
            })
        }
  
  
    }
    else if (text.length < 6) {
        console.warn('password length is too small')
    }
    else {
        return true
    }
  }
  // test(){
  //   alert('1')
  //   Firebase.auth()
  //           .signInWithPhoneNumber('+919554166619',true)
  //         // .createUserWithEmailAndPassword(username, password)
  //         // .then(() => this.props.navigation.navigate('Profile'))
  //         // alert('ho gaya')
  //         .catch(error => console.warn(error))
  //         alert('4')
  //         // this.props.navigation.navigate('Home')
  // }
  
   all_validate_check= async () =>   {
      if (this.validate()) {
  
          // await AsyncStorage.setItem('username', this.state.username)
          // await AsyncStorage.setItem('password', this.state.password)
          // User.username = this.state.username;
          // User.password = this.state.password;
          // const { username, password } = this.state
          // // alert(this.state.username +'\n' + this.state.name)
          // this.props.navigation.navigate('Home')
          this.props.navigation.navigate('SignUp')
          // Firebase.auth()
          // .createUserWithEmailAndPassword(username, password)
          // .then(() => this.props.navigation.navigate('Home'))
          // .catch(error => console.warn(error))
  // alert('ok')
      }
  }
  showDialog_Adhar = () => {
    this.setState({ dialogVisible_Adahar: true });
  };
  handleCancel_Adhar = () => {
    this.setState({ dialogVisible_Adahar: false });
  };

  showDialog_Driving = () => {
    this.setState({ dialogVisible_Driving: true });
  };
  handleCancel_Driving = () => {
    this.setState({ dialogVisible_Driving: false });
  };

  showDialog_Pan = () => {
    this.setState({ dialogVisible_Pan: true });
  };
  handleCancel_Pan = () => {
    this.setState({ dialogVisible_Pan: false });
  };

  showDialog_Passport = () => {
    this.setState({ dialogVisible_Passport: true });
  };
  handleCancel_Passport = () => {
    this.setState({ dialogVisible_Passport: false });
  };


  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
    render(){
      console.disableYellowBox=true;
      // let pic2 = { uri:'https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2016/10/15954629975_795d3c949c_k-700x466.jpg'};
      // let logo = {uri:'data:image/jpeg;base64,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'}
      let logo = {uri:'http://www.pngplay.com/wp-content/uploads/1/Purple-Butterfly-PNG-Transparent-File.png'}
      
  
    let pic = { uri:'https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2016/10/15954629975_795d3c949c_k-700x466.jpg'};
      // const 
      const headerHeight = this.scrollYAnimatedaValue.interpolate(
        {
          inputRange:[0,(HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT)],
          outputRange:[HEADER_MAX_HEIGHT,HEADER_MIN_HEIGHT],
          extrapolate:'clamp'
        }
      );
      let notes = this.state.noteArray.map((val,key)=> {
        return <WhatsApp_Notes key={key} keyval={key} val={val}
        deleteMethod={ () => this.deleteNotes(key)} />
    });
    const goBackCalling=()=>{
      this.props.navigation.goBack();
  }
  return(
    <View style={{backgroundColor:'white',height:height,width:width,backgroundColor:'white'}}>
{/* <ImageBackground source={require('../asset/flower.jpeg')} blurRadius={0} style={{width:width,height:height,top:0,position:'absolute'}} /> */}
<StatusBar backgroundColor={'skyblue'} />



<View>
          <Dialog.Container visible={this.state.dialogVisible_Adahar}>
              {/* <Dialog.Title>Account delete</Dialog.Title> */}
  <Dialog.Title>Aadhaar Card</Dialog.Title>
      {/* <Dialog.Image style={{height:150,width:100,borderRadius:10}} source={require('.././assets/IMG-20200813-WA0189.jpg')} /> */}
      <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            {this.state.avatarSource_Adahar === null ? (
              <Text>Select a Aadhaar Card Photo</Text>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource_Adahar} />
            )}
          </View>
             
              <Dialog.Description>

              Please upload your Aadhaar image and enter Aadhaar Number
          </Dialog.Description>
          <Dialog.Title style={{color:'red',top:3}}>{this.state.warning_Adagar}</Dialog.Title>

              {/* <Dialog.Input placeholder={'Enter Name'}  onChangeText={(val) => this.passwordCheck(val, 'nameOne')} style={{ backgroundColor: 'lightgray' }} keyboardType='name-phone-pad'/> */}
              <Dialog.Input placeholder={'Enter Number'} maxLength={12}  onChangeText={(val) => this.passwordCheck(val, 'Adahar')} style={{ backgroundColor: 'lightgray' }} keyboardType='number-pad'/>
            <Dialog.Button label="Upload" onPress={this.selectPhotoTapped_Adahar.bind(this)}/>
            {/* // onPress={() => this._selectContact()} style={{ right: 0, color: 'red' }} /> */}

              <Dialog.Button label="Cancel" onPress={this.handleCancel_Adhar} />
              <Dialog.Button label="OK" onPress={this.handleCancel_Adhar} />
              {/* <Dialog.Button label="OK" onPress={this.validateOne_Adhar} /> */}
            </Dialog.Container>
          </View>


{/* Driving Licence */}

<View>
          <Dialog.Container visible={this.state.dialogVisible_Driving}>
              {/* <Dialog.Title>Account delete</Dialog.Title> */}
  <Dialog.Title>Driving License</Dialog.Title>
      {/* <Dialog.Image style={{height:150,width:100,borderRadius:10}} source={require('.././assets/IMG-20200813-WA0189.jpg')} /> */}
      <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            {this.state.avatarSource_Driving === null ? (
              <Text>Upload Your License image</Text>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource_Driving} />
            )}
          </View>
             
              <Dialog.Description>

              Please upload your _Driving image and enter _Driving Number
          </Dialog.Description>
          <Dialog.Title style={{color:'red',top:3}}>{this.state.warning_Driving}</Dialog.Title>

              {/* <Dialog.Input placeholder={'Enter Name'}  onChangeText={(val) => this.passwordCheck(val, 'nameOne')} style={{ backgroundColor: 'lightgray' }} keyboardType='name-phone-pad'/> */}
              <Dialog.Input placeholder={'Enter Number'}  onChangeText={(val) => this.passwordCheck(val, 'Driving')} style={{ backgroundColor: 'lightgray' }} />
            <Dialog.Button label="Upload" onPress={this.selectPhotoTapped_Driving.bind(this)}/>
            {/* // onPress={() => this._selectContact()} style={{ right: 0, color: 'red' }} /> */}

              <Dialog.Button label="Cancel" onPress={this.handleCancel_Driving} />
              <Dialog.Button label="OK" onPress={this.handleCancel_Driving} />
              {/* <Dialog.Button label="OK" onPress={this.validateOne_Driving} /> */}
            </Dialog.Container>
          </View>

          <View>
          <Dialog.Container visible={this.state.dialogVisible_Pan}>
              {/* <Dialog.Title>Account delete</Dialog.Title> */}
  <Dialog.Title>_Pan Card</Dialog.Title>
      {/* <Dialog.Image style={{height:150,width:100,borderRadius:10}} source={require('.././assets/IMG-20200813-WA0189.jpg')} /> */}
      <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            {this.state.avatarSource_Pan === null ? (
              <Text>Select a _Pan Card Photo</Text>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource_Pan} />
            )}
          </View>
             
              <Dialog.Description>

              Please upload your _Pan Card image and enter _Pan Number
          </Dialog.Description>
          <Dialog.Title style={{color:'red',top:3}}>{this.state.warning_Pan}</Dialog.Title>

              {/* <Dialog.Input placeholder={'Enter Name'}  onChangeText={(val) => this.passwordCheck(val, 'nameOne')} style={{ backgroundColor: 'lightgray' }} keyboardType='name-phone-pad'/> */}
              <Dialog.Input placeholder={'Enter Number'}   onChangeText={(val) => this.passwordCheck(val, 'Pan')} style={{ backgroundColor: 'lightgray' }} />
            <Dialog.Button label="Upload" onPress={this.selectPhotoTapped_Pan.bind(this)}/>
            {/* // onPress={() => this._selectContact()} style={{ right: 0, color: 'red' }} /> */}

              <Dialog.Button label="Cancel" onPress={this.handleCancel_Pan} />
              <Dialog.Button label="OK" onPress={this.handleCancel_Pan} />
              {/* <Dialog.Button label="OK" onPress={this.validateOne_Pan} /> */}
            </Dialog.Container>
          </View>

          <View>
          <Dialog.Container visible={this.state.dialogVisible_Passport}>
              {/* <Dialog.Title>Account delete</Dialog.Title> */}
  <Dialog.Title>Passport</Dialog.Title>
      {/* <Dialog.Image style={{height:150,width:100,borderRadius:10}} source={require('.././assets/IMG-20200813-WA0189.jpg')} /> */}
      <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            {this.state.avatarSource_Passport === null ? (
              <Text>Select a _Passport Photo</Text>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource_Passport} />
            )}
          </View>
             
              <Dialog.Description>

              Please upload your Passport image and enter Passport Number
          </Dialog.Description>
          <Dialog.Title style={{color:'red',top:3}}>{this.state.warning_Passport}</Dialog.Title>

              {/* <Dialog.Input placeholder={'Enter Name'}  onChangeText={(val) => this.passwordCheck(val, 'nameOne')} style={{ backgroundColor: 'lightgray' }} keyboardType='name-phone-pad'/> */}
              <Dialog.Input placeholder={'Enter Number'}   onChangeText={(val) => this.passwordCheck(val, 'Passport')} style={{ backgroundColor: 'lightgray' }} />
            <Dialog.Button label="Upload" onPress={this.selectPhotoTapped_Passport.bind(this)}/>
            {/* // onPress={() => this._selectContact()} style={{ right: 0, color: 'red' }} /> */}

              <Dialog.Button label="Cancel" onPress={this.handleCancel_Passport} />
              <Dialog.Button label="OK" onPress={this.handleCancel_Passport} />
              {/* <Dialog.Button label="OK" onPress={this.validateOne_Passport} /> */}
            </Dialog.Container>
          </View>
      
    {/* <Modal isVisible={this.state.isModalVisible}>
    
      <View style={{top:10,flexDirection:'column'}}>
    
      <View>
      <TextInput
            style={styles.textinput}
            onChangeText={(noteText)=>this.setState({noteText})}
            value={this.state.noteText}
            placeholder='Enter your problem'
            placeholderTextColor='black'
            underlineCOlorAndroid='transpatent'
            // keyboardType='number-pad'
            // maxLength={11}
            
          />
          </View>
          <View>
          <TouchableOpacity style={styles.addButton}
     
        onPress={this.addNote.bind(this)}
        
        >
          <Text style={styles.addButtonText}>
              +
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal> */}
    <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>
    

    <View style={{ bottom: 7 }}>
      
          <Card style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '13%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a',width:width,right:2}}>
           
    {/* <AnimatedLinearGradient   customColors={presetColors.firefox} speed={1500} start= {0.5, 0} end= {0.5, 1}/> */}
          
           
            <CardItem style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '20%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a',width:width }}>

            <Left>
               <Button transparent onPress={()=>this.props.navigation.goBack()}>
                {/* <Ripple rippleSize={200} rippleColor="red">
               <IconAnt name='arrowleft' style={{ color: 'white' }} size={25}/>
               </Ripple> */}
               </Button>
             </Left>

           <Body style={{left:0,width:400,bottom:10}}>
         {/* <Image source={pic} blurRadius={1} style={{width:70,height:70,top:0,borderRadius:100,left:5}} /> */}
         {/* <IconFont name='user-alt' style={{ color: 'white' }} size={60}/> */}

          <Text style={{color:'#db0e7a',fontSize:20,width:300,color:'white',fontSize:20,right:20,top:5}}>Freedom App</Text> 
              </Body>
              <Right>
                {/* <Button transparent> */}
                {/* <Icon name='search' style={{ color: 'white' }} /> */}
                {/* </Button> */}
              </Right>
          
            </CardItem>

         
          </Card>
          {/* <Text />
          <Text /> */}
          
          <View style={{ alignItems: 'center', top: 0,paddingBottom:0 }}>
            <Card style={{ width: width/1.05,height:height/1.4,padddingBottom:0 }}>
            <ScrollView style={{height:200,bottom:0,pddingend:5,right:0}}>
          {/* {notes} */}


          <Content >
    <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

                    <CardItem >
    <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

                        <TouchableOpacity  onPress={this.showDialog_Adhar}>
                    <Card style={{height:200,width:160,borderRadius:10,alignItem:'center',right:10}}>
                    
                    <View
                        style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        {this.state.avatarSource_Adahar === null ? (
                          <Text>Select a Aadhaar Card</Text>
                        ) : (
                          <Image style={styles.avatar} source={this.state.avatarSource_Adahar} />
                        )}
                      </View>
                        <Text style={{color:'blue',fontSize:20,top:-5}}>Aadhaar Card</Text>
                    </Card>
                    </TouchableOpacity>
                  
                    <TouchableOpacity  onPress={this.showDialog_Driving}>
                    <Card style={{height:200,width:160,borderRadius:10,alignItem:'center',right:10}}>
                    
                    <View
                        style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        {this.state.avatarSource_Driving === null ? (
                          <Text>Select a Driving License </Text>
                        ) : (
                          <Image style={styles.avatar} source={this.state.avatarSource_Driving} />
                        )}
                      </View>
                        <Text style={{color:'blue',fontSize:20,top:-5}}>Driving License</Text>
                    </Card>
                    </TouchableOpacity>
                    
                    </CardItem>
                    <CardItem >
                    <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

                        <TouchableOpacity  onPress={this.showDialog_Pan}>
                    <Card style={{height:200,width:160,borderRadius:10,alignItem:'center',right:10}}>
                    
                    <View
                        style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        {this.state.avatarSource_Pan === null ? (
                          <Text>Select Pan Card</Text>
                        ) : (
                          <Image style={styles.avatar} source={this.state.avatarSource_Pan} />
                        )}
                      </View>
                        <Text style={{color:'blue',fontSize:24,top:-5}}>Pan Card</Text>
                    </Card>
                    </TouchableOpacity>
                  
                    <TouchableOpacity  onPress={this.showDialog_Passport}>
                    <Card style={{height:200,width:160,borderRadius:10,alignItem:'center',right:10}}>
                    
                    <View
                        style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        {this.state.avatarSource_Passport === null ? (
                          <Text>Select </Text>
                        ) : (
                          <Image style={styles.avatar} source={this.state.avatarSource_Passport} />
                        )}
                      </View>
                        <Text style={{color:'blue',fontSize:24,top:-5}}>Passport</Text>
                    </Card>
                    </TouchableOpacity>
                    
                    
                    </CardItem>
                    {/* <CardItem style={{padding:0}}>
                    <TouchableOpacity  onPress={this.showDialog}>
                    <Card style={{height:200,width:160,borderRadius:10,alignItem:'center'}}>
                    
                    <View
                        style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        {this.state.avatarSource === null ? (
                          <Text>Select </Text>
                        ) : (
                          <Image style={styles.avatar} source={this.state.avatarSource} />
                        )}
                      </View>
                        <Text style={{color:'blue',fontSize:24,top:-5}}>Water Bill</Text>
                    </Card>
                    </TouchableOpacity>
                    
                  
                    <TouchableOpacity  onPress={this.showDialog}>
                    <Card style={{height:200,width:160,borderRadius:10,alignItem:'center'}}>
                    
                    <View
                        style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        {this.state.avatarSource === null ? (
                          <Text>Select </Text>
                        ) : (
                          <Image style={styles.avatar} source={this.state.avatarSource} />
                        )}
                      </View>
                        <Text style={{color:'blue',fontSize:20,top:-5}}>Electricity Bill</Text>
                    </Card>
                    </TouchableOpacity>
                    
                    
                    
                    </CardItem > */}

                    {/* <CardItem style={{padding:0}}>
                    <TouchableOpacity  onPress={this.showDialog}>
                    <Card style={{height:200,width:160,borderRadius:10,alignItem:'center'}}>
                    
                    <View
                        style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        {this.state.avatarSource === null ? (
                          <Text>Select </Text>
                        ) : (
                          <Image style={styles.avatar} source={this.state.avatarSource} />
                        )}
                      </View>
                        <Text style={{color:'blue',fontSize:24,top:-5}}>Proprty Tax</Text>
                    </Card>
                    </TouchableOpacity>
                    
                    <TouchableOpacity  onPress={this.showDialog}>
                    <Card style={{height:200,width:160,borderRadius:10,alignItem:'center'}}>
                    
                    <View
                        style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        {this.state.avatarSource === null ? (
                          <Text>Select </Text>
                        ) : (
                          <Image style={styles.avatar} source={this.state.avatarSource} />
                        )}
                      </View>
                        <Text style={{color:'blue',fontSize:24,top:-5}}>Voter Id</Text>
                    </Card>
                    </TouchableOpacity>
                    
                    
                    
                    </CardItem > */}
                    {/* <CardItem style={{padding:0}}>
                    <TouchableOpacity  onPress={this.showDialog}>
                    <Card style={{height:200,width:160,borderRadius:10,alignItem:'center'}}>
                    
                    <View
                        style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        {this.state.avatarSource === null ? (
                          <Text>Select a Passport</Text>
                        ) : (
                          <Image style={styles.avatar} source={this.state.avatarSource} />
                        )}
                      </View>
                        <Text style={{color:'blue',fontSize:24,top:-5}}>Rashan Card</Text>
                    </Card>
                    </TouchableOpacity>
                    
                    <TouchableOpacity  onPress={this.showDialog}>
                    <Card style={{height:200,width:160,borderRadius:10,alignItem:'center'}}>
                    
                    <View
                        style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        {this.state.avatarSource === null ? (
                          <Text>Select a Passport</Text>
                        ) : (
                          <Image style={styles.avatar} source={this.state.avatarSource} />
                        )}
                      </View>
                        <Text style={{color:'blue',fontSize:24,top:-5}}>RC Number</Text>
                    </Card>
                    </TouchableOpacity>
                    
                         
                    
                    
                    </CardItem> */}
                    

                    


                </Content>
           

          {/* <Text style={{fontSize:20,color:'red',top:5,width:250,alignSelf:'center'}}>{this.state.warning}</Text>
<TextInput
    style={{width:270,fontSize:18,borderRadius:14,backgroundColor:'white',top:9,height:45,alignSelf:'center'}}       
    placeholder='Enter your Name'
    onChangeText={name => this.setState({ name })}
/>
<TextInput
      style={[styles.emailStyle,
        !this.state.usernameValidate ? styles.password_Error : null]}
      placeholder='username@gmail.com'
      keyboardType='email-address'
      // onChangeText={(text)=>this.setState({input:Text})}
      onChangeText={(val) => this.passwordCheck(val, 'username')}
      />
<TextInput
      style={[styles.passstyle,!this.state.passwordValidate ? styles.password_Error : null]}
       placeholder='Enter your password'
      secureTextEntry={true}
      onChangeText={(val) => this.passwordCheck(val, 'password')}
/>
{/* <Text style={{top:46,fontSize:16,alignSelf:'center',width:255,color:'white'}}>Use CheckBox here for terms and condition</Text> */}

<TouchableOpacity  onPress={() => this.all_validate_check()} style={{width:50,backgroundColor:'green',width:100,alignSelf:'center',height:40,borderWidth:1,top:60,positiion:'absolute'}}>
        <Text style={{color:'white',fontSize:18,top:6,alignSelf:'center'}}>SignUp</Text>
</TouchableOpacity> 






        </ScrollView>
         </Card>
          </View>
        </View>


        
        <ScrollView style={styles.footer}>
       <Button 
        // onPress={this.toggleModal}
        onPress={() => this.all_validate_check()} 
                    // onPress={()=>this.all_validate_check()}
                // onPress={()=>this.props.navigation.navigate('Home')}
                
                block danger style={{top:0,justifyContent:'center',borderRadius:10,backgroundColor:'blue'}} >
                    <Text style={{color:'white'}}>Save</Text>
                </Button>
  
        </ScrollView>
  
    </View>
  );
}
// componentDidMount(){
componentDidMount = async () => {

  const item = Firebase.database().ref("Public");
item.on("value",datasnap=>{
  if(datasnap.val()){
  this.setState({noteArray:Object.values(datasnap.val())})
}})

  
  User.LoginTime = await AsyncStorage.getItem('LoginTime')
  // if(User.userInfos=='true'){
  this.setState({Login:User.LoginTime})
  // }

}
//  componentDidMount=async()=>{
//   // this.setState({
//   //     item:JSON.parse(await AsyncStorage.getItem('mylist'))||""
//   // })

//   this.state.noteArray=JSON.parse(await AsyncStorage.getItem('mylist'))||""
//   this.state.id = this.state.noteArray[this.state.noteArray.length-1].id+1
//   this.addNote()
// }

addNote = async()=>{
  if(this.state.noteText){
      var d = new Date();

      this.state.noteArray.push({
          // 'date':d.getFullYear()+
          // "/" + (d.getMonth() +1)+
          // "/" +d.getDate(),
          // 'id':this.state.id,
          'id':'latitudes,longitudes',
          'message':this.state.noteText
      });
      this.state.id++
      await AsyncStorage.setItem("mylist",JSON.stringify(this.state.noteArray))
      this.setState({noteArray:this.state.noteArray})
      
      // const myCalling = Firebase.database().ref("Calling");
      const myCalling = Firebase.database().ref("Public");
      myCalling.push().set({
        // id: this.state.id,
        'id':'latitudes,longitudes',
        'message':this.state.noteText,
            
           'user':this.state.Login,
        // Time:d.getFullYear()+
        // "/" + (d.getMonth() +1)+
        // "/" +d.getDate(),
      })

        this.setState({
          item:JSON.parse( await AsyncStorage.getItem('mylist'))
      })

      this.setState({noteText:''});
  }
        this.toggleModal()

}

deleteNotes(key){
  // alert('1')

  this.state.noteArray.splice(key,1);
  this.setState({noteArray:this.state.noteArray})
  // let userRef= 
  Firebase.database().ref('Whatsapp').remove();
  // userRef.remove()
  // alert('2')
}
  }
const styles = StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor:'#fff',
    // alignItems:'center',
    // justifyContent:'center'
  },
  image:{
    height:190,
    justifyContent:'flex-end'
  },
  Tagline:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    paddingHorizontal:14,
    marginBottom:6
  },
  Placename:{
    color:'white',
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:14,
    marginBottom:30
  },
  BookTicketBtn:{
    position:'absolute',
    right:12,
    top:160,
    backgroundColor:'#ff6200',
    padding:16,
    borderRadius:40,
    elevation:5
  },
  bookTicketText:{
    color:'white',
    fontSize:14
  },
  DarkOverlay:{
    width:150,
    height:150,
    position:'absolute',
    backgroundColor:'#000',
    opacity:0.5,
    top:0,
    left:0,
    right:0,
    bottom:0,
    borderRadius:10,
    marginHorizontal:10
  },
  header:{
    backgroundColor:'#E91E63',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd'
  },
  headerText:{
    color:'white',
    fontSize:18,
    padding:26,

  },
  scrollContainer:{
    // flex:1,
    marginBottom:0,
    backgroundColor:'white',
    bottom:140,
    height:height,
    // height:400,
    padding:30

  },
  footer:{
    // position:'absolute',
    bottom:20,
    left:0,
    right:0,
    zIndex:10,
    padding:10,
    // paddingBottom:80,
    // height:height,
    // top:200
    // yIndex:40
  },
  textinput:{
    // alignSelf:'stretch',
    color:'black',
    padding:20,
    // paddingEnd:60,
    backgroundColor:'#252525',
    borderTopWidth:2,
    borderTopColor:'#ededed',
    backgroundColor:'white',
    fontSize:18,
    width:260,
  },
  addButton:{
    // position:'absolute',
    // zIndex:11,
    left:250,
    bottom:80,
    backgroundColor:'#ff6200',
    // backgroundColor:'#E91E63',
    width:90,
    height:90,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    // elevation:8,
  },
  addButtonText:{
    color:'#fff',
    fontSize:34,
    // position:'absolute'
  },
  bookTicketText: {
    color: 'white',
    fontSize: 14
  },
  blueS:{
    top:170,
    backgroundColor:'#98989898', 
    width:300,
    height:300,
    alignSelf:'center',
    position:'absolute',
    paddingTop:20
    // color:'transparent',
    // opacity:0.5,
},
emailStyle:{width:270,fontSize:18,borderRadius:14,backgroundColor:'white',top:18,height:45,alignSelf:'center'},
password_Error: {
  // backgroundColor: 'skyblue',
  borderRadius: 14,
  borderColor: 'red',
  borderBottomColor: 'red',
  borderWidth: 3
},
passstyle:{width:270,fontSize:18,borderRadius:14,backgroundColor:'white',top:27,height:45,alignSelf:'center'}
,  
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    // borderRadius: 75,
    width: 150,
    height: 150,
    // position:'absolute'
  },

})
export default Public;
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






// import React from 'react';
// import {
//   Image,
//   PixelRatio,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

// export default class App extends React.Component {
//   state = {
//     avatarSource: null,
//     videoSource: null,
//   };

//   constructor(props) {
//     super(props);

//     this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
//     this.selectVideoTapped = this.selectVideoTapped.bind(this);
//   }

//   selectPhotoTapped() {
//     const options = {
//       quality: 1.0,
//       maxWidth: 500,
//       maxHeight: 500,
//       storageOptions: {
//         skipBackup: true,
//       },
//     };

//     ImagePicker.showImagePicker(options, response => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = {uri: response.uri};

//         // You can also display the image using data:
//         // let source = { uri: 'data:image/jpeg;base64,' + response.data };

//         this.setState({
//           avatarSource: source,
//         });
//       }
//     });
//   }

//   selectVideoTapped() {
//     const options = {
//       title: 'Video Picker',
//       takePhotoButtonTitle: 'Take Video...',
//       mediaType: 'video',
//       videoQuality: 'medium',
//     };

//     ImagePicker.showImagePicker(options, response => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled video picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         this.setState({
//           videoSource: response.uri,
//         });
//       }
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
//           <View
//             style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
//             {this.state.avatarSource === null ? (
//               <Text>Select a Photo</Text>
//             ) : (
//               <Image style={styles.avatar} source={this.state.avatarSource} />
//             )}
//           </View>
//         </TouchableOpacity>

   

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   avatarContainer: {
//     borderColor: '#9B9B9B',
//     borderWidth: 1 / PixelRatio.get(),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   avatar: {
//     // borderRadius: 75,
//     width: 150,
//     height: 100,
//   },
// });




// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   PixelRatio,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Animated,
//   AsyncStorage,
//   Dimensions,
//   StatusBar,
// } from 'react-native';
// import {
//   Card,
//   Left,
//   Body,
//   Right,
//   Button,
//   Content,
//   CardItem,
// } from 'native-base';
// import ImagePicker from 'react-native-image-picker';
// import Dialog from "react-native-dialog";
// import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
// import User from '../Logintest/User.js';
// const { width, height } = Dimensions.get('screen')
// const HEADER_MIN_HEIGHT = 50;
// const HEADER_MAX_HEIGHT = 290;
// import Firebase from '../Logintest/Firebase.js';

// class Public extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isModalVisibleTwo: false,
//       isModalVisibleThree: false,
//       isModalVisible: false,
//       dialogVisible: false,
//       avatarSource: null,
//       avatarSource_Adahar: null,
//       avatarSource_Driving: null,
//       avatarSource_Pan: null,
//       avatarSource_Passport: null,
//       videoSource: null,
//       Adhar: null,
//       Pan: null,
//       Passoprt: null,
//       Driving: null,

//       warning_Adagar: '',
//       warning_Driving: '',
//       warning_Pan: '',
//       warning_Passport: '',
//       name: '',
//     }
//     this.selectPhotoTapped_Adahar = this.selectPhotoTapped_Adahar.bind(this);
//     this.selectPhotoTapped_Driving = this.selectPhotoTapped_Driving.bind(this);
//     this.selectPhotoTapped_Pan = this.selectPhotoTapped_Pan.bind(this);
//     this.selectPhotoTapped_Passport = this.selectPhotoTapped_Passport.bind(this);
//     this.scrollYAnimatedaValue = new Animated.Value(0);
//     this.setDate = this.setDate.bind(this);
//   }

//   selectPhotoTapped_Adahar() {
//     const options = {
//       quality: 1.0,
//       maxWidth: 500,
//       maxHeight: 500,
//       storageOptions: {
//         skipBackup: true,
//       },
//     };
//     ImagePicker.showImagePicker(options, response => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = { uri: response.uri };
//         this.setState({
//           avatarSource_Adahar: source,
//         });
//       }
//     });
//   }

//   selectPhotoTapped_Driving() {
//     const options = {
//       quality: 1.0,
//       maxWidth: 500,
//       maxHeight: 500,
//       storageOptions: {
//         skipBackup: true,
//       },
//     };
//     ImagePicker.showImagePicker(options, response => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = { uri: response.uri };
//         this.setState({
//           avatarSource_Driving: source,
//         });
//       }
//     });
//   }

//   selectPhotoTapped_Pan() {
//     const options = {
//       quality: 1.0,
//       maxWidth: 500,
//       maxHeight: 500,
//       storageOptions: {
//         skipBackup: true,
//       },
//     };
//     ImagePicker.showImagePicker(options, response => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = { uri: response.uri };
//         this.setState({
//           avatarSource_Pan: source,
//         });
//       }
//     });
//   }

//   selectPhotoTapped_Passport() {
//     const options = {
//       quality: 1.0,
//       maxWidth: 500,
//       maxHeight: 500,
//       storageOptions: {
//         skipBackup: true,
//       },
//     };
//     ImagePicker.showImagePicker(options, response => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = { uri: response.uri };
//         this.setState({
//           avatarSource_Passport: source,
//         });
//       }
//     });
//   }

//   validate() {
//     const { Adhar, Pan, Driving, Passoprt } = this.state
//     if (Adhar == null && Pan == null && Driving == null && Passoprt == null) {
//       alert('Select atleast One')
//       return false
//     }
//     return true
//   }

//   passwordCheck(text, type) {
//     const ad = /^\d{12}$/
//     const pan = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/
//     const passpo = /[a-zA-Z]{2}[0-9]{7}/
//     id = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     if (type == 'Adahar') {
//       if (ad.test(text)) {
//         this.setState({
//           Adhar: text,
//           warning_Adagar: ''
//         })
//       } else {
//         this.setState({
//           usernameValidate: false,
//           warning_Adagar: 'Please Select Valid Adhar Number'
//         })
//       }

//     }
//     // 
//     else if (type == 'Driving') {
//       if (text.length > 5) {
//         this.setState({
//           Driving: text,
//           warning_Driving: ''
//         })
//       } else {
//         this.setState({
//           usernameValidate: false,
//           warning_Driving: 'Please Select Valid Driving Number'
//         })
//       }

//     }

//     else if (type == 'Pan') {
//       if (pan.test(text)) {
//         this.setState({
//           Pan: text,
//           warning_Pan: ''
//         })
//       } else {
//         this.setState({
//           usernameValidate: false,
//           warning_Pan: 'Please Select Valid Pan Number'
//         })
//       }
//     }

//     else if (type == 'Passport') {
//       if (passpo.test(text)) {
//         this.setState({
//           Passport: text,
//           warning_Passport: ''
//         })
//       } else {
//         this.setState({
//           usernameValidate: false,
//           warning_Passport: 'Please Select Valid Passoprt Number'
//         })
//       }
//     }
//     else {
//       return true
//     }
//   }

//   all_validate_check = async () => {
//     if (this.validate()) {
//       this.props.navigation.navigate('SignUp')
//     }
//   }

//   showDialog_Adhar = () => {
//     this.setState({ dialogVisible_Adahar: true });
//   };

//   handleCancel_Adhar = () => {
//     this.setState({ dialogVisible_Adahar: false });
//   };

//   showDialog_Driving = () => {
//     this.setState({ dialogVisible_Driving: true });
//   };

//   handleCancel_Driving = () => {
//     this.setState({ dialogVisible_Driving: false });
//   };

//   showDialog_Pan = () => {
//     this.setState({ dialogVisible_Pan: true });
//   };

//   handleCancel_Pan = () => {
//     this.setState({ dialogVisible_Pan: false });
//   };

//   showDialog_Passport = () => {
//     this.setState({ dialogVisible_Passport: true });
//   };
//   handleCancel_Passport = () => {
//     this.setState({ dialogVisible_Passport: false });
//   };

//   render() {
//     console.disableYellowBox = true;
//     const headerHeight = this.scrollYAnimatedaValue.interpolate(
//       {
//         inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
//         outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
//         extrapolate: 'clamp'
//       }
//     );

//     return (
//       <View style={{ backgroundColor: 'white', height: height, width: width, backgroundColor: 'white' }}>
//         <StatusBar backgroundColor={'skyblue'} />
//         <View>
//           <Dialog.Container visible={this.state.dialogVisible_Adahar}>
//             <Dialog.Title>Aadhaar Card</Dialog.Title>
//             <View
//               style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
//               {this.state.avatarSource_Adahar === null ? (
//                 <Text>Select a Aadhaar Card Photo</Text>
//               ) : (
//                   <Image style={styles.avatar} source={this.state.avatarSource_Adahar} />
//                 )}
//             </View>
//             <Dialog.Description>
//               Please upload your Aadhaar image and enter Aadhaar Number
//           </Dialog.Description>
//             <Dialog.Title style={{ color: 'red', top: 3 }}>{this.state.warning_Adagar}</Dialog.Title>
//             <Dialog.Input placeholder={'Enter Number'} maxLength={12} onChangeText={(val) => this.passwordCheck(val, 'Adahar')} style={{ backgroundColor: 'lightgray' }} keyboardType='number-pad' />
//             <Dialog.Button label="Upload" onPress={this.selectPhotoTapped_Adahar.bind(this)} />
//             <Dialog.Button label="Cancel" onPress={this.handleCancel_Adhar} />
//             <Dialog.Button label="OK" onPress={this.handleCancel_Adhar} />
//           </Dialog.Container>
//         </View>

//         {/* Driving Licence */}
//         <View>
//           <Dialog.Container visible={this.state.dialogVisible_Driving}>
//             <Dialog.Title>Driving License</Dialog.Title>
//             <View
//               style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
//               {this.state.avatarSource_Driving === null ? (
//                 <Text>Upload Your License image</Text>
//               ) : (
//                   <Image style={styles.avatar} source={this.state.avatarSource_Driving} />
//                 )}
//             </View>
//             <Dialog.Description>
//               Please upload your _Driving image and enter _Driving Number
//           </Dialog.Description>
//             <Dialog.Title style={{ color: 'red', top: 3 }}>{this.state.warning_Driving}</Dialog.Title>
//             <Dialog.Input placeholder={'Enter Number'} onChangeText={(val) => this.passwordCheck(val, 'Driving')} style={{ backgroundColor: 'lightgray' }} />
//             <Dialog.Button label="Upload" onPress={this.selectPhotoTapped_Driving.bind(this)} />
//             <Dialog.Button label="Cancel" onPress={this.handleCancel_Driving} />
//             <Dialog.Button label="OK" onPress={this.handleCancel_Driving} />
//           </Dialog.Container>
//         </View>

//         {/* Pan card  */}
//         <View>
//           <Dialog.Container visible={this.state.dialogVisible_Pan}>
//             <Dialog.Title>_Pan Card</Dialog.Title>
//             <View
//               style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
//               {this.state.avatarSource_Pan === null ? (
//                 <Text>Select a _Pan Card Photo</Text>
//               ) : (
//                   <Image style={styles.avatar} source={this.state.avatarSource_Pan} />
//                 )}
//             </View>
//             <Dialog.Description>
//               Please upload your _Pan Card image and enter _Pan Number
//           </Dialog.Description>
//             <Dialog.Title style={{ color: 'red', top: 3 }}>{this.state.warning_Pan}</Dialog.Title>
//             <Dialog.Input placeholder={'Enter Number'} onChangeText={(val) => this.passwordCheck(val, 'Pan')} style={{ backgroundColor: 'lightgray' }} />
//             <Dialog.Button label="Upload" onPress={this.selectPhotoTapped_Pan.bind(this)} />
//             <Dialog.Button label="Cancel" onPress={this.handleCancel_Pan} />
//             <Dialog.Button label="OK" onPress={this.handleCancel_Pan} />
//           </Dialog.Container>
//         </View>

//         {/* Passport  */}
//         <View>
//           <Dialog.Container visible={this.state.dialogVisible_Passport}>
//             <Dialog.Title>Account delete</Dialog.Title>
//             <Dialog.Title>Passport</Dialog.Title>
//             {/* <Dialog.Image style={{ height: 150, width: 100, borderRadius: 10 }} source={require('.././assets/IMG-20200813-WA0189.jpg')} /> */}
//             <View
//               style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
//               {this.state.avatarSource_Passport === null ? (
//                 <Text>Select a _Passport Photo</Text>
//               ) : (
//                   <Image style={styles.avatar} source={this.state.avatarSource_Passport} />
//                 )}
//             </View>

//             <Dialog.Description>

//               Please upload your Passport image and enter Passport Number
//           </Dialog.Description>
//             <Dialog.Title style={{ color: 'red', top: 3 }}>{this.state.warning_Passport}</Dialog.Title>
//             <Dialog.Input placeholder={'Enter Number'} onChangeText={(val) => this.passwordCheck(val, 'Passport')} style={{ backgroundColor: 'lightgray' }} />
//             <Dialog.Button label="Upload" onPress={this.selectPhotoTapped_Passport.bind(this)} />
//             <Dialog.Button label="Cancel" onPress={this.handleCancel_Passport} />
//             <Dialog.Button label="OK" onPress={this.handleCancel_Passport} />
//           </Dialog.Container>
//         </View>

//         <AnimatedLinearGradient customColors={presetColors.instagram} speed={1500} start={0.5, 0} end={0.5, 1} />


//         <View style={{ bottom: 7 }}>

//           <Card style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '13%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a', width: width, right: 2 }}>
//             <CardItem style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '20%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a', width: width }}>
//               <Left>
//                 <Button transparent onPress={() => this.props.navigation.goBack()}>
//                 </Button>
//               </Left>
//               <Body style={{ left: 0, width: 400, bottom: 10 }}>
//                 <Text style={{ color: '#db0e7a', fontSize: 20, width: 300, color: 'white', fontSize: 20, right: 20, top: 5 }}>Freedom App</Text>
//               </Body>
//               <Right>
//               </Right>
//             </CardItem>
//           </Card>
//           <View style={{ alignItems: 'center', top: 0, paddingBottom: 0 }}>
//             <Card style={{ width: width / 1.05, height: height / 1.4, padddingBottom: 0 }}>
//               <ScrollView style={{ height: 200, bottom: 0, pddingend: 5, right: 0 }}>
//                 <Content >
//                   <AnimatedLinearGradient customColors={presetColors.instagram} speed={1500} start={0.5, 0} end={0.5, 1} />
//                   <CardItem >
//                     <AnimatedLinearGradient customColors={presetColors.instagram} speed={1500} start={0.5, 0} end={0.5, 1} />
//                     <TouchableOpacity onPress={this.showDialog_Adhar}>
//                       <Card style={{ height: 200, width: 160, borderRadius: 10, alignItem: 'center' }}>
//                         <View
//                           style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
//                           {this.state.avatarSource_Adahar === null ? (
//                             <Text>Select a Aadhaar Card</Text>
//                           ) : (
//                               <Image style={styles.avatar} source={this.state.avatarSource_Adahar} />
//                             )}
//                         </View>
//                         <Text style={{ color: 'blue', fontSize: 20, top: -5 }}>Aadhaar Card</Text>
//                       </Card>
//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={this.showDialog_Driving}>
//                       <Card style={{ height: 200, width: 160, borderRadius: 10, alignItem: 'center' }}>

//                         <View
//                           style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
//                           {this.state.avatarSource_Driving === null ? (
//                             <Text>Select a Driving License </Text>
//                           ) : (
//                               <Image style={styles.avatar} source={this.state.avatarSource_Driving} />
//                             )}
//                         </View>
//                         <Text style={{ color: 'blue', fontSize: 20, top: -5 }}>Driving License</Text>
//                       </Card>
//                     </TouchableOpacity>

//                   </CardItem>
//                   <CardItem >
//                     <AnimatedLinearGradient customColors={presetColors.instagram} speed={1500} start={0.5, 0} end={0.5, 1} />

//                     <TouchableOpacity onPress={this.showDialog_Pan}>
//                       <Card style={{ height: 200, width: 160, borderRadius: 10, alignItem: 'center' }}>

//                         <View
//                           style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
//                           {this.state.avatarSource_Pan === null ? (
//                             <Text>Select Pan Card</Text>
//                           ) : (
//                               <Image style={styles.avatar} source={this.state.avatarSource_Pan} />
//                             )}
//                         </View>
//                         <Text style={{ color: 'blue', fontSize: 24, top: -5 }}>Pan Card</Text>
//                       </Card>
//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={this.showDialog_Passport}>
//                       <Card style={{ height: 200, width: 160, borderRadius: 10, alignItem: 'center' }}>

//                         <View
//                           style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
//                           {this.state.avatarSource_Passport === null ? (
//                             <Text>Select </Text>
//                           ) : (
//                               <Image style={styles.avatar} source={this.state.avatarSource_Passport} />
//                             )}
//                         </View>
//                         <Text style={{ color: 'blue', fontSize: 24, top: -5 }}>Passport</Text>
//                       </Card>
//                     </TouchableOpacity>
//                   </CardItem>
//                 </Content>

//                 <TouchableOpacity onPress={() => this.all_validate_check()} style={{ width: 50, backgroundColor: 'green', width: 100, alignSelf: 'center', height: 40, borderWidth: 1, top: 60, positiion: 'absolute' }}>
//                   <Text style={{ color: 'white', fontSize: 18, top: 6, alignSelf: 'center' }}>SignUp</Text>
//                 </TouchableOpacity>
//               </ScrollView>
//             </Card>
//           </View>
//         </View>
//         <ScrollView style={styles.footer}>
//           <Button
//             onPress={() => this.all_validate_check()}
//             block danger style={{ top: 0, justifyContent: 'center', borderRadius: 10, backgroundColor: 'blue' }} >
//             <Text style={{ color: 'white' }}>Save</Text>
//           </Button>
//         </ScrollView>
//       </View>
//     );
//   }

// }
// const styles = StyleSheet.create({

//   footer: {
//     bottom: 20,
//     left: 0,
//     right: 0,
//     zIndex: 10,
//     padding: 10,
//   },
//   avatarContainer: {
//     borderColor: '#9B9B9B',
//     borderWidth: 1 / PixelRatio.get(),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 150,
//     height: 150,
//   },
// })
// export default Public;
// const presetColors = {
//   instagram: [
//     'rgb(106, 57, 171)',
//     'rgb(151, 52, 160)',
//     'rgb(197, 57, 92)',
//     'rgb(231, 166, 73)',
//     'rgb(181, 70, 92)'
//   ],
// };
// const DEFAULT_POINTS = {
//   start: { x: 0, y: 0.4 },
//   end: { x: 1, y: 0.6 }
// }






// // import React from 'react';
// // import {
// //   Image,
// //   PixelRatio,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// //   View,
// // } from 'react-native';
// // import ImagePicker from 'react-native-image-picker';

// // export default class App extends React.Component {
// //   state = {
// //     avatarSource: null,
// //     videoSource: null,
// //   };

// //   constructor(props) {
// //     super(props);

// //     this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
// //     this.selectVideoTapped = this.selectVideoTapped.bind(this);
// //   }

// //   selectPhotoTapped() {
// //     const options = {
// //       quality: 1.0,
// //       maxWidth: 500,
// //       maxHeight: 500,
// //       storageOptions: {
// //         skipBackup: true,
// //       },
// //     };

// //     ImagePicker.showImagePicker(options, response => {
// //       console.log('Response = ', response);

// //       if (response.didCancel) {
// //         console.log('User cancelled photo picker');
// //       } else if (response.error) {
// //         console.log('ImagePicker Error: ', response.error);
// //       } else if (response.customButton) {
// //         console.log('User tapped custom button: ', response.customButton);
// //       } else {
// //         let source = {uri: response.uri};

// //         // You can also display the image using data:
// //         // let source = { uri: 'data:image/jpeg;base64,' + response.data };

// //         this.setState({
// //           avatarSource: source,
// //         });
// //       }
// //     });
// //   }

// //   selectVideoTapped() {
// //     const options = {
// //       title: 'Video Picker',
// //       takePhotoButtonTitle: 'Take Video...',
// //       mediaType: 'video',
// //       videoQuality: 'medium',
// //     };

// //     ImagePicker.showImagePicker(options, response => {
// //       console.log('Response = ', response);

// //       if (response.didCancel) {
// //         console.log('User cancelled video picker');
// //       } else if (response.error) {
// //         console.log('ImagePicker Error: ', response.error);
// //       } else if (response.customButton) {
// //         console.log('User tapped custom button: ', response.customButton);
// //       } else {
// //         this.setState({
// //           videoSource: response.uri,
// //         });
// //       }
// //     });
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
// //           <View
// //             style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
// //             {this.state.avatarSource === null ? (
// //               <Text>Select a Photo</Text>
// //             ) : (
// //               <Image style={styles.avatar} source={this.state.avatarSource} />
// //             )}
// //           </View>
// //         </TouchableOpacity>



// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   avatarContainer: {
// //     borderColor: '#9B9B9B',
// //     borderWidth: 1 / PixelRatio.get(),
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   avatar: {
// //     // borderRadius: 75,
// //     width: 150,
// //     height: 100,
// //   },
// // });
