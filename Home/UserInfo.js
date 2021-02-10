




import RNRestart from 'react-native-restart';

import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome5';

import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    ToastAndroid,
    AsyncStorage,
} from 'react-native';
import Firebase from '../Logintest/Firebase.js';
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
const {width,height} = Dimensions.get('window');
import Ripple from 'react-native-material-ripple';

import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
// import User from '../Logintest/User.js';
   import User from '../Logintest/User.js';

  export default class Location extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstname:'',
            lastname:'',
            address:'',                
            Info:true,
            Login:[],
            id:'',
        }
        //  {chosenDate: new Date()};

        this.setDate = this.setDate.bind(this);
    }
    componentDidMount = async () => {
        const userid = Firebase.auth().currentUser.uid
        this.setState({id:userid})

        User.LoginTime = await AsyncStorage.getItem('LoginTime')
        // if(User.userInfos=='true'){
        this.setState({Login:User.LoginTime})
        // }
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
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

        const { username, firstname,lastname,address,Login } = this.state
        // const { username, password } = this.state
        if (username == '') {
            alert('Please enter your Full Name')
            return false
        } else if (firstname == '') {
            alert('Please enter correct Gende Type')
            return false
        }
        else if (lastname == '') {
            alert('please enter Date of Birth in (DD/MM/YYYY) format')
            return false
        }
        else if (address == '') {
            alert('please enter Address')
            return false
        }

        return true
    }

    passwordCheck(text, type) {
        // const{password} = this.state

        // id = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        // pass = /^[0-9a-zA-Z]+$/
        if (type == 'username') {
                // console.error("worng")
                // if(this.state.Login)
                this.setState({
                    username: text,
                    // usernameValidate: true,
                    // warning: ''
                })
            

        }
        else if (type == 'firstname') {
            // console.error("worng")
            this.setState({
                firstname: text,
                // usernameValidate: true,
                // warning: ''
            })
        

    }
    else if (type == 'lastname') {
        // console.error("worng")
        this.setState({
            lastname: text,
            // usernameValidate: true,
            // warning: ''
        })
    

}
else if (type == 'address') {
    // console.error("worng")
    this.setState({
        address: text,
        // usernameValidate: true,
        // warning: ''
    })


}
        // 
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

    all_validate_check =async()=> {
        if (this.validate()) {
            var d = new Date();

            // alert('2')
            // await AsyncStorage.setItem('password', this.state.password)
            // alert(this.state.phone +'\n' + this.state.name)
            // alert('3')
            // User.userInfo = true;
            // User.password = this.state.password;
            const { username, firstname,lastname,address,Info,Login } = this.state
            // await AsyncStorage.setItem('userInfo', this.state.Info)
            // User.userInfo = this.state.Info;
            await AsyncStorage.setItem('userInfos', 'true')
            // alert(this.state.phone +'\n' + this.state.name)
            // alert('3')
            User.userInfos = 'true';
            // alert({firstnameastname,firstname,address})
            // alert('firstname')
            // alert(lastname)
            // alert(username)
            // alert(address)
            User.LoginTime = await AsyncStorage.getItem('LoginTime')
            // const variable = this.state.Login;
            // const mywhatsapp = Firebase.database().ref(this.state.id);
            const mywhatsapp = Firebase.database().ref('username/');
                // mywhatsapp.push.set({  //for add more info
                    mywhatsapp.set({   //for update infor
                    u_username: username,
                    u_Gender:firstname,
                    u_DOB:lastname,
                    u_email:Login,
                    u_Address:address,
                    u_Time:d.getFullYear()+
                    "/" + (d.getMonth() +1)+
                    "/" +d.getDate(),
                })
                // alert('done')
            // Firebase.auth()
            //     .createUserWithEmailAndPassword(username, password)
            //     // .then(() => this.props.navigation.navigate('Profile'))
            //     // alert('ho gaya')
            //     .catch(error => console.warn(error))
            // // alert('4')
          ToastAndroid.show('Your Profile Has Been Updated', ToastAndroid.LONG);
// alert('t ')
// {this.props.navigation.navigate('Home'),{userInfo:'false',}}
          RNRestart.Restart()
        }
    }

    securTextEntry() {
        // alert('hi')
        this.setState({
            securTextEntry: !this.state.securTextEntry
        })
        // alert('2')
    }
    // securTextEntry_confirm() {
    //     // alert('hi')
    //     this.setState({
    //         securTextEntry_confirm: !this.state.securTextEntry_confirm
    //     })
    //     // alert('2')
    // }
    
    usernameFunction=(text)=>{
        // alert('hi')
        this.setState({username:text})
// alert(this.state.username)
    }
      render(){
    let pic = { uri:'https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2016/10/15954629975_795d3c949c_k-700x466.jpg'};

          return(
            <Container style={{padding:0,backgroundColor:'light',height:height}}>
        {/* <SCrollView> */}
         {/* <ScrollView> */}
         <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>
        
         <Card style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '20%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a',width:width,bottom:7,right:2 }}>
           
           
           
           <CardItem style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '20%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a',width:width ,top:20}}>

             <Left>
               <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Ripple rippleSize={200} rippleColor="red">
               <IconAnt name='arrowleft' style={{ color: 'white' }} size={25}/>
               </Ripple>
               </Button>
             </Left>

           <Body style={{left:0,width:400,bottom:15}}>
         {/* <Image source={pic} blurRadius={1} style={{width:70,height:70,top:0,borderRadius:100,left:5}} /> */}
         <IconFont name='user-alt' style={{ color: 'white' }} size={70}/>

          <Text style={{color:'#db0e7a',fontSize:20,width:300,color:'white',fontSize:20,right:20}}>Freedom App</Text> 
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
               <Button transparent>
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
            <Button transparent 
            onPress={()=>this.props.navigation.goBack()}>
              <Icon name='back' style={{color:'#db0e7a'}}/>
            </Button>
          </Left> */}
          {/* <Body style={{left:60}}>
            <Title style={{color:'black',fontSize:16}} >Emergency</Title>
          </Body> */}
          
          {/* <Body style={{left:40,width:400}}>
          <Text style={{color:'#db0e7a',fontSize:20,width:300}}>{this.state.Login}</Text> */}

            {/* <Title style={{color:'#db0e7a',fontSize:20}} >App</Title> */}
          {/* </Body>
          <Right>
            <Button transparent onPress={()=>this.props.navigation.navigate('Location')}>
              <Icon name='user' style={{color:'#db0e7a'}} />
            </Button>
            </Right>
        
        </Header> */}
        <Container style={{padding:10,backgroundColor:'light',height:height}}>
         <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

        {/* <Header style={{backgroundColor:'#9897898',bottom:5,height:150}} >

        <AnimatedLinearGradient   customColors={presetColors.sunrise} speed={4000} start= {0.5, 0} end= {0.5, 1}/>
        <View>
        <Image source={pic} blurRadius={0} style={{width:100,height:100,top:0,borderRadius:100,justifyContent:'center',alignItems:'center'}} />

        <Text style={{justifyContent:'center',fontSize:16,color:'white'}}>Welcome</Text>
        <Text style={{justifyContent:'center',textAlignVertical:'center',fontSize:20,fontWeight:'bold',color:'blue'}}>{this.state.Login}</Text>
        </View>
        </Header> */}
         {/* <Image source={pic} blurRadius={15} style={{width:width,height:height,top:0,position:'absolute'}} /> */}
         <StatusBar backgroundColor={'gray'}  />
      <Text></Text>
                {/* <Content style={{}}> */}
                {/* <Header/> */}
       <ScrollView style={{padding:5}}>
                <Text style={{fontWeight:'bold',fontSize:20,alignItems:'center',justifyContent:'center',color:'darkgray'}}>Please Complete Your Profile</Text>
                {/* <View style={{flexDirection:'column',justifyContent:'space-around'}}> */}
                <TextInput
                                onChangeText={(val) => this.passwordCheck(val, 'username')}

                    // onChangeText={(val) => this.usernameFunction(val, 'password')}
                    // onChangeText={(val) => this.setState({username:val})}
                style={{backgroundColor:'white',borderRadius:10,fontSize:16,bottom:0,borderWidth:.5}} 
                 placeholder={'Enter Full Name'}
                />
                <Text></Text>
                <TextInput 
                                onChangeText={(val) => this.passwordCheck(val, 'firstname')}
                
                style={{backgroundColor:'white',borderRadius:10,fontSize:16,bottom:0,borderWidth:.5}} keyboardType='email-address' placeholder='Gender'/>
                {/* <Text>{this.state.firstname}</Text> */}
                <Text></Text>
                <TextInput
                
                onChangeText={(val) => this.passwordCheck(val, 'lastname')}
                style={{backgroundColor:'white',borderRadius:10,fontSize:16,bottom:0,borderWidth:.5}} keyboardType='number-pad' placeholder='D.O.B: (DD/MM/YYYY)'/>
                <Text></Text>
                {/* <Text>{this.state.lastname}</Text> */}
                <Textarea
                                onChangeText={(val) => this.passwordCheck(val, 'address')}
                style={{backgroundColor:'white',borderRadius:10,fontSize:16,bottom:0,borderWidth:.5}} keyboardType='email-address' placeholder='Address'/>
                {/* </View> */}
{/* <Text/> */}
{/* <Text/> */}
     
               {/* <Content> */}
               <Text style={{color:'gray',left:10,fontSize:16}}>*Any change can be further done later</Text>
                {/* <Text></Text> */}
<Text/>
      
                {/* <Body> */}
                {/* <Text style={{fontWeight:'bold'}}>By createing your account you agree to our </Text> */}
                {/* <TouchableOpacity>
                <Text style={{color:'white',borderBottomWidth:1}}>Terms and Condition</Text>
                </TouchableOpacity>
                </Body> */}

{/* <Text/> */}
{/* <Text/> */}
{/* <Text/> */}
{/* <Text/> */}
{/* <Text/> */}
{/* <Text/> */}


               {/* <Content style={{}}> */}
                <Button 
                    onPress={()=>this.all_validate_check()}
                // onPress={()=>this.props.navigation.navigate('MyTabs')}
                
                block danger style={{top:0,justifyContent:'center',borderRadius:10,backgroundColor:'blue'}} >
                    <Text style={{color:'white'}}>SAVE</Text>
                </Button>
                </ScrollView>

                {/* </Content> */}
                <Text></Text>
                {/* <Body>
                <Text style={{fontWeight:'bold'}}>By createing your account you agree to our </Text>
                <TouchableOpacity>
                <Text style={{color:'red',borderBottomWidth:1}}>Terms and Condition</Text>
                </TouchableOpacity>
                </Body> */}
               {/* </Content> */}
               <Text/>
               <View style={{bottom:30}}>
               <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Text style={{fontWeight:'bold',alignSelf:'center'}}>Already fillup all details ?</Text>
                    <Text style={{fontWeight:'bold',alignSelf:'center',color:'blue',borderBottomWidth:1}}>Go Back</Text>
                    </TouchableOpacity>
                {/* </Content> */}
                </View>
                {/* </ScrollView> */}
             </Container>
             </Container>

          )
      }
  }
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