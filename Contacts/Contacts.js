import * as React from 'react';

// import React from 'react';
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
  useState,
Dimensions,
} from 'react-native';
// https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
// https://i.imgur.com/nCGKZuj.png

const {width,height} = Dimensions.get('window');


const image = { uri: "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };
const Whats = { uri: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27" };
function Home({navigation})   {
    
    // const recentImage = { uri: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27" };
    const recentImage= { uri: "https://i1.wp.com/cdramabase.com/wp-content/uploads/2017/09/ac9e1785367f1a67bb7d14.jpg?resize=492%2C326&ssl=1" };

    // const [gallery, setgallery] = useState([
        const gallery = [
        { image: {uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27'}, title: 'Switzerland',  key: '1' },
        { image:{uri:'https://0.soompi.io/wp-content/uploads/2018/10/21232643/The-Village.jpg'}, title: ' The Village: Achiara’s Secret (2015)',key: '6' },
        { image:{uri:'https://i2.wp.com/www.globalgranary.life/wp-content/uploads/2019/03/My-Poseidon.jpg?resize=300%2C459&ssl=1'}, title: 'New Zeland',key: '2' },
        { image:{uri:'https://kavenyou.com/wp-content/uploads/2018/08/chinese_drama7.png'}, title: 'Rome',key: '3' },
        { image:{uri:'https://lh3.googleusercontent.com/-Zo_V8ifCbeo/WxAdnkb6LNI/AAAAAAABAsU/n-BUPP8ZKV4BQPcHYF9nEbWJIaYacA5WACHMYBhgL/s800/My%2BClassmate%2BFrom%2BFaraway%2BPoster12.jpg'}, title: 'Tahiti', key: '4' },
      ];
    const goToWhatsapp=()=>{
        navigation.navigate('Whatsapp');
    }
    const goToCAlling=()=>{
        navigation.navigate('Calling');
    }
    const goToSMS=()=>{
        navigation.navigate('SMS');
    }
  return(
    <View style={{flexGrow:1,height:'100%',backgroundColor:'white'}}>
        {/* <Text>Hello World</Text> */}
        <View style={{bottom:10,backgroundColor:'white'}}>
            <ImageBackground 
                source={image}
                style={{width:'100%',height:270}}
                imageStyle={{borderBottomRightRadius:65}}
            >
                <View style={styles.DarkOverlay}></View>
                <View style={styles.scachContainer}>
                    <Text style={styles.userGreet}>Hi UserName,</Text>
                    <Text style={styles.userText}>Please select phone number that can be used in Applicatoin...</Text>

                </View>
                {/* <View style={styles.scarchBox}>
                    <TextInput style={styles.scarchBox}
                        placeholder='Swipe To Skip'
                        placeholderTextColor='#666'
                        // placeholderTextSize="10"
                    >

                    </TextInput>
                </View> */}

            </ImageBackground>
        </View>
        <View style={{flex:1}}>
        <View style={{backgroundColor:'white',top:10,justifyContent:'space-between',padding:19,flexDirection:'column',height:300}}>
            <TouchableOpacity onPress={goToWhatsapp}>
                
                                    <Image source={Whats}
                                        style={{width:width-40,marginRight:8, height:100,borderRadius:10,borderWidth:2}}
                                    />
                                    <Text style={styles.ImageText}>Calling</Text> 
                                </TouchableOpacity>
                                
                                
                                <TouchableOpacity onPress={goToSMS}>
                                    <Image source={Whats}
                                        style={{width:width-40,marginRight:8, height:100,borderRadius:10,borderWidth:2}}
                                        // style={{width:250,marginRight:8, height:100,borderRadius:10,}}
                                    />
                                    <Text style={styles.ImageText}>SMS</Text> 
                                </TouchableOpacity>

                                {/* <TouchableOpacity onPress={goToCAlling}>
                                    <Image source={Whats}
                                        style={{width:width-40,marginRight:8, height:100,borderRadius:10,borderWidth:2}}

                                        // style={{width:250,marginRight:8, height:100,borderRadius:10,}}
                                    />
                                    <Text style={styles.ImageText}>Calling</Text> 
                                </TouchableOpacity> */}
                                
        </View>
        </View>
        {/* <ScrollView style={{bottom:40,paddingTop:-15,backgroundColor:'pink'}}>
            <View style={{paddingHorizontal:20,paddingLeft:5,flexDirection:'column'}}>
                                <TouchableOpacity onPress={goToPost}>
                                    <Image source={Whats}
                                        style={{width:250,marginRight:8, height:150,borderRadius:10,}}
                                    />
                                    <Text style={styles.ImageText}>title</Text> 
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={goToPost}>
                                    <Image source={Whats}
                                        style={{width:250,marginRight:8, height:150,borderRadius:10,}}
                                    />
                                    <Text style={styles.ImageText}>title</Text> 
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={goToPost}>
                                    <Image source={Whats}
                                        style={{width:250,marginRight:8, height:150,borderRadius:10,}}
                                    />
                                    <Text style={styles.ImageText}>title</Text> 
                                </TouchableOpacity>
                                
                            </View>
           
        </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    // alignItems:'center',
    // justifyContent:'center'
  },
  DarkOverlay:{
      position:'absolute',
      top:0,
      right:0,
      left:0,
      height:270,
      backgroundColor:'#000',
      opacity:0.2,
      borderBottomRightRadius:65
  },
  scachContainer:{
      paddingTop:100,
      paddingLeft:16,
  },
  userGreet:{
      fontSize:38,
    //   fontWidth:'bold',
      color:'white',

  },
  userText:{
      fontSize:16,
    //   fontWidth:'normal',
      color:'white',
  },
  scarchBox:{
      marginTop:16,
      backgroundColor:'#fff',
      paddingLeft:24,
    //   padding:12,
      borderBottomRightRadius:40,
      borderTopRightRadius:40,
      height:35,
      width:'90%',
      fontSize:12
  },
  ImageOverlay:{
      width:150,
      height:250,
      marginRight:8,
      borderRadius:10,
      position:'absolute',
      backgroundColor:'#000',
      opacity:0.2,

  },
  ImageText:{
      position:'absolute',
      color:'red',
      marginTop:4,
      fontSize:34,
      left:30,
      bottom:10,
    //   alignItems:'center'
      
  },
  
})

export default Home;