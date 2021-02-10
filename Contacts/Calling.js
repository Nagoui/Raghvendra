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
  AsyncStorage
} from 'react-native';
import WhatsApp_Notes  from './Calling_Notes.js';
// const image= {uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27'};
const image= {uri: 'https://i2.wp.com/atkmagazine.com/wp-content/uploads/2016/06/Title-2.jpg?resize=800%2C435'};
const Whats = { uri: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27" };

const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 290;

import Firebase from '../Logintest/Firebase.js';
// function Post({naviagation}){
  class WhatsApp extends React.Component{
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
    render(){
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
    <View style={{backgroundColor:'white',flex:1,}}>
      <Animated.View style={{height:headerHeight}}>
      <ImageBackground
        source={Whats}
        style={styles.image}
        imageStyle={{borderBottomLeftRadius:30,borderBottomRightRadius:30}}
      >
        <Text style={styles.Tagline}>Discover </Text>
        <Text style={styles.Placename}>Explore the scenic beauty</Text>
      </ImageBackground>
      </Animated.View>
      <TouchableOpacity
       onPress={goBackCalling}
      style={{position:'absolute',left:20,top:8,
        backgroundColor:'#ff6200',padding:10,borderRadius:40
      }}>
          <Text>Back</Text>
      </TouchableOpacity>


      {/* <TouchableOpacity 
     
      style={{position:'absolute',right:20,top:8,
        backgroundColor:'#ff6200',padding:10,borderRadius:40
      }}>
          <Text>Back</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.BookTicketBtn}>
        <Text style={styles.bookTicketText}>Contact</Text>
      </TouchableOpacity>
      
      <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>
        
        <View style={styles.footer}>
          <TextInput
            style={styles.textinput}
            onChangeText={(noteText)=>this.setState({noteText})}
            value={this.state.noteText}
            placeholder='Enter Phone Numbre'
            placeholderTextColor='white'
            underlineCOlorAndroid='transpatent'
            keyboardType='number-pad'
            maxLength={11}
            
          />
        </View>
        <TouchableOpacity style={styles.addButton}
           onPress={this.addNote.bind(this)}>
          <Text style={styles.addButtonText}>
              +
          </Text>
        </TouchableOpacity>
{/* 
      <ScrollView style={{backgroundColor:'pink',top:6}}>
       </ScrollView> */}
    </View>
  );
}
componentDidMount(){
  const item = Firebase.database().ref("Calling");
item.on("value",datasnap=>{
  if(datasnap.val()){
  this.setState({noteArray:Object.values(datasnap.val())})
}})
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
          'id':this.state.id,
          'note':this.state.noteText
      });
      this.state.id++
      await AsyncStorage.setItem("mylist",JSON.stringify(this.state.noteArray))
      this.setState({noteArray:this.state.noteArray})
      
      const myCalling = Firebase.database().ref("Calling");
      myCalling.push().set({
        id: this.state.id,
        note:this.state.noteText,
        Time:d.getFullYear()+
        "/" + (d.getMonth() +1)+
        "/" +d.getDate(),
      })

        this.setState({
          item:JSON.parse( await AsyncStorage.getItem('mylist'))
      })

      this.setState({noteText:''});
  }
}

deleteNotes(key){
  // alert('1')

  this.state.noteArray.splice(key,1);
  this.setState({noteArray:this.state.noteArray})
  // let userRef= 
  Firebase.database().ref('Whatsapp').remove();
  // userRef.remove()
  alert('2')
}
  }
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
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
    flex:1,
    marginBottom:0,
    backgroundColor:'white',
    top:-70
    // height:400,
  },
  footer:{
    position:'absolute',
    bottom:20,
    left:0,
    right:0,
    zIndex:10,
  },
  textinput:{
    alignSelf:'stretch',
    color:'#fff',
    padding:20,
    backgroundColor:'#252525',
    borderTopWidth:2,
    borderTopColor:'#ededed',
    fontSize:18
  },
  addButton:{
    position:'absolute',
    zIndex:11,
    right:20,
    bottom:90,
    backgroundColor:'#ff6200',
    // backgroundColor:'#E91E63',
    width:90,
    height:90,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
  },
  addButtonText:{
    color:'#fff',
    fontSize:24,
  },

})
export default WhatsApp;