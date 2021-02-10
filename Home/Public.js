import React,{Component} from 'react';
import {
  StyleSheet,
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
  Textarea,
} from 'native-base';

import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome5';

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
      Login:'',
        item:[
                  {
                      id:1,
                      data:'loading'
                  }
              ]
      }
      this.scrollYAnimatedaValue = new Animated.Value(0);

      // this.array = [];
    }
    // componentWillMount(){
    //   for(var i =1; i<=75; i++ ){
    //     this.array.push(i);
    //   }
    // }
    toggleModal = () => {
      this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    render(){
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

      
    <Modal isVisible={this.state.isModalVisible}>
    
      <View style={{top:10,flexDirection:'column'}}>
      {/* <TouchableOpacity onPress={()=>this.toggleModal()}> */}
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
        // onPress={this.toggleModal}
        onPress={this.addNote.bind(this)}
        
        >

          {/* //  onPress={this.addNote.bind(this)}> */}
          <Text style={styles.addButtonText}>
              +
          </Text>
        </TouchableOpacity>
        </View>
      {/* </TouchableOpacity> */}
      </View>
    </Modal>
    <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>
    

    <View style={{ bottom: 7 }}>
      
          <Card style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '18%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a',width:width,right:2}}>
           
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
         <IconFont name='user-alt' style={{ color: 'white' }} size={60}/>

          <Text style={{color:'#db0e7a',fontSize:20,width:300,color:'white',fontSize:20,right:20}}>Freedom App</Text> 
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
            <Card style={{ width: width/1.05,height:height/1.5,padddingBottom:0 }}>
            <ScrollView style={{height:200,bottom:0}}>
      {/* // style={styles.scrollContainer}> */}
        {/* <Text>hksdk</Text> */}
{/* <ImageBackground source={require('../asset/flower.jpeg')} blurRadius={0} style={{width:width,height:height,top:0,position:'absolute'}} /> */}
       {/* <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/> */}
        {/* <Text>hio{this.state.Login}</Text> */}
            
            {notes}

        </ScrollView>
              {/* <CardItem header>
                <View style={styles.result}> */}
                
              {/* <View> */}
    {/* <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.longitudes} </Text> */}
    {/* <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Longitude </Text> */}
    {/* </View> */}
    {/* <View> */}
    {/* <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.latitudes} </Text> */}
    {/* <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Latitude </Text> */}
    {/* </View> */}
  
           
                  {/* <Text style={{ fontSize: 15,fontWeight:'bold' }}>{JSON.stringify(location, null, 4)}</Text> */}
                  {/* <Text>{this.state.mobile_no}</Text> */}
                {/* </View>
              </CardItem> */}
            </Card>
          </View>
        </View>




      {/* <Animated.View style={{height:headerHeight,bottom:0,backgroundColor:'pink'}}>
       <AnimatedLinearGradient   customColors={presetColors.firefox} speed={1500} start= {0.5, 0} end= {0.5, 1}/>
       <Header style={{borderColor:'gray',borderBottomWidth:5,borderEndWidth:.2,borderStartWidth:.2,borderBottomColor:'gray',height:90,borderBottomLeftRadius:60,borderBottomRightRadius:60,backgroundColor:'white'}}>
          
       <AnimatedLinearGradient   customColors={presetColors.firefox} speed={1500} start= {0.5, 0} end= {0.5, 1}/>
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
      {/* <ImageBackground
        source={Whats}
        style={styles.image}
        imageStyle={{borderBottomLeftRadius:30,borderBottomRightRadius:30}}
      >
        <Text style={styles.Tagline}>Discover </Text>
        <Text style={styles.Placename}>Explore the scenic beauty</Text>
      </ImageBackground> */}
      {/* // </Animated.View> */}
      {/* <Animated.View style={{height:headerHeight,bottom:50}}>
      <ImageBackground
        source={Whats}
        style={styles.image}
        imageStyle={{borderBottomLeftRadius:30,borderBottomRightRadius:30}}
      >
        <Text style={styles.Tagline}>Discover </Text>
        <Text style={styles.Placename}>Explore the scenic beauty</Text>
      </ImageBackground>
      </Animated.View> */}
      {/* <TouchableOpacity
       onPress={goBackCalling}
      style={{position:'absolute',left:20,top:8,
        backgroundColor:'#ff6200',padding:10,borderRadius:40
      }}>
          <Text>Back</Text>
      </TouchableOpacity> */}


      {/* <TouchableOpacity 
        onPress={this.toggleModal}
        // onPress={()=>alert('hu')}
      style={{position:'absolute',right:20,top:8,
        backgroundColor:'#ff6200',padding:10,borderRadius:40
      }}>
          <Text>Add</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={styles.BookTicketBtn}>
        <Text style={styles.bookTicketText}>Contact</Text>
      </TouchableOpacity> */}
      
     
        
        <ScrollView style={styles.footer}>
        {/* <TouchableOpacity style={styles.BookTicketBtn}
        // onPress={this.addNote.bind(this)}
        // onPress={this.toggleModal}
        >
          <Text style={styles.bookTicketText}>Contact</Text>
        </TouchableOpacity> */}
        <Button 
        onPress={this.toggleModal}

                    // onPress={()=>this.all_validate_check()}
                // onPress={()=>this.props.navigation.navigate('MyTabs')}
                
                block danger style={{top:0,justifyContent:'center',borderRadius:10,backgroundColor:'blue'}} >
                    <Text style={{color:'white'}}>Add Message</Text>
                </Button>
          {/* <TextInput
            // style={styles.textinput}
            onChangeText={(noteText)=>this.setState({noteText})}
            value={this.state.noteText}
            placeholder='Enter'
            placeholderTextColor='white'
            underlineCOlorAndroid='transpatent'
            // keyboardType='number-pad'
            // maxLength={11}
            
          /> */}
          {/* //  onPress={this.addNote.bind(this)}> */}

        </ScrollView>
        {/* <TouchableOpacity style={styles.addButton}
        onPress={this.toggleModal}>

          <Text style={styles.addButtonText}>
              +
          </Text>
        </TouchableOpacity> */}
{/* 
      <ScrollView style={{backgroundColor:'pink',top:6}}>
       </ScrollView> */}


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