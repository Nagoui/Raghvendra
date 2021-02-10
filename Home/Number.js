import React,{Component} from 'react';
import {
    View,
    Image,
    ScrollView,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
    FlatList,
    SectionList,
    StyleSheet,
    TouchableHighlight,
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
    Tabs,
    Tab
  } from 'native-base';
//   import ImageSlider from 'react-native-image-slider';
//   import KimSoRoute from './KimSoHyun/KimSoRoute.js';
// import { ScrollView } from 'react-native-gesture-handler';
// import Carousel from 'react-native-anchor-carousel';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';

import WhatsApp from '../Contacts/WhatsApp.js';
import SMS from '../Contacts/SMS.js';
const {width,height} = Dimensions.get('window');
const gallery = [
    { image: {uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27'}, title: 'Switzerland',  key: '1' },
    { image:{uri:'https://0.soompi.io/wp-content/uploads/2018/10/21232643/The-Village.jpg'}, title: ' The Village: Achiara’s Secret (2015)',key: '6' },
    { image:{uri:'https://i2.wp.com/www.globalgranary.life/wp-content/uploads/2019/03/My-Poseidon.jpg?resize=300%2C459&ssl=1'}, title: 'New Zeland',key: '2' },
    { image:{uri:'https://kavenyou.com/wp-content/uploads/2018/08/chinese_drama7.png'}, title: 'Rome',key: '3' },
    { image:{uri:'https://lh3.googleusercontent.com/-Zo_V8ifCbeo/WxAdnkb6LNI/AAAAAAABAsU/n-BUPP8ZKV4BQPcHYF9nEbWJIaYacA5WACHMYBhgL/s800/My%2BClassmate%2BFrom%2BFaraway%2BPoster12.jpg'}, title: 'Tahiti', key: '4' },
  ];
  export default class Matched extends React.Component{
      render(){
        const images = [
            // '../assets/IMG-20200610-WA0022.jpg',
            'https://ae01.alicdn.com/kf/HTB12s57KFXXXXcHXVXXq6xXFXXXz/IU-Lee-Ji-Eun-autographed-signed-original-photo-6-inches-new-collection-freeshipping-07-2016-04.jpg',
            'https://kpopping.com/uploads/documents/2-logoR.jpeg',
            'https://vfan-phinf.pstatic.net/20190819_41/1566187125405qpqDq_JPEG/139f41abb14bb555fd5cc61a2bc1cd54.jpg?type=e1280',
            'https://cleo-media.cleo.com.sg/public/2019/08/iu-hotel-del-luna-butterfly-dress.jpg',
            'https://i.pinimg.com/originals/e7/b5/2f/e7b52f660f2cfafe133096d72f177efe.jpg',
           'https://i.pinimg.com/originals/7d/55/90/7d5590eee260f5ca6c0c9d8ff6390024.png',
           'https://lh3.googleusercontent.com/proxy/jLTSsanl8xzWWqQcL842oZZ9Om4zJOzx5cEJCwiTpWiiZ2hziykJOR6GAu84nn_2IHAYvaPq5AC2_hYSUb4UKB9ZTlyrqIbuUuyc42rn1jF8-mTfDKkrjYnFve1mHaCpIqjK6mYT2nO8LbklQo2_d-CDxjCtK5PudWMFmg0gBD_Sl0u8LQ',
           'https://pm1.narvii.com/7281/a52b4e3774bb174a173dcc222d9abe9d0750be4fr1-711-709v2_hq.jpg',
            'https://qph.fs.quoracdn.net/main-qimg-9f6a55a9788be612ed5a4274a063e361',
           'https://66.media.tumblr.com/f617858fa836e9f23a16589b2dc75b36/tumblr_pvhrosMNW81vj9tigo5_r1_540.gifv',
           'https://i.pinimg.com/originals/46/e7/74/46e7740508adf76b52e2cdc525661c73.png',
           'https://lh3.googleusercontent.com/z6Tc5f1xBsHlOfYwJ9_toBjIgHWTHMhXA_085LDQnJeLNZbS0eFK5B_46GPjq6Im4rocFUM3sAdV4NXiMz3UD2Q_u0C3wl2OOrA=w1600-rj-nu-e365',
           
            // 'https://i.pinimg.com/236x/53/99/d4/5399d47fde7b3a2419558e5c960a383f.jpg',
            // 'https://i.pinimg.com/236x/22/d4/fb/22d4fb61fcc2ea43acd37c0d9394d044.jpg',
            // 'https://i.pinimg.com/236x/59/4d/eb/594debac58d028ce7d628326e376e974.jpg',
            // 'https://i.pinimg.com/236x/3e/de/f3/3edef388c25716623d52891e79f84d4b.jpg',
            // 'https://i.pinimg.com/236x/c5/32/06/c53206b001c2f01de13611c40ab43e68.jpg',
            // 'https://i.pinimg.com/236x/74/39/fb/7439fb23a6fc95c2e218b90f50a47c04.jpg',
            // 'https://i.pinimg.com/236x/10/b1/5d/10b15d83cdecb0ed64aa5d46ff89fbde.jpg',
            // 'https://i.pinimg.com/236x/f8/f9/cb/f8f9cb7abc69e20861678e45218c3c33.jpg',
            // 'https://i.pinimg.com/236x/54/8e/19/548e19f9ee746f993865b66510b552f5.jpg',
            // 'https://i.pinimg.com/236x/d0/4c/fc/d04cfcc356d1b727993fda4cbb1c0287.jpg',
            // 'https://bloganchoi.com/hoc-iu-cach-phoi-nhung-item-mua-dong-don-gian-ma-van-chat-vo-cung/#gsc.tab=0',
            // 'https://i.pinimg.com/236x/46/9b/bf/469bbfba999fd70bda335f7c4dfe34b5.jpg',
            // 'https://i.pinimg.com/236x/aa/04/2e/aa042ea9abf9f3ca67662ec8a2e3d349.jpg',
            // 'https://i.pinimg.com/236x/f4/ea/c6/f4eac6f92e1328bac7555c8189352248.jpg',
            // 'https://i.pinimg.com/236x/23/c9/a5/23c9a50762cf2493c28e7710cfc37c01.jpg',

             ];
          return(
         
            <Container style={{padding:0,backgroundColor:'light'}}>
                <Content>
                <View style={{padding:5,backgroundColor:'white'}}>
                    <View style={{alignItems:'center'}}>
                <Content>
                <Card style={{height:150,width:width,alignItem:'center',backgroundColor:'pink'}}>
                        <Image style={{height:150,width:width,paddingEnd:40}} source={require('../asset/smsVScalling.jpg')} resizeModes={'center'}/>
                
                 {/* <ImageSlider
                 resizeMode={'center'}
                 style={{resizeMode:'contain'}}
              loopBothSides
              loop={true}
              autoPlayWithInterval={3000}
              images={images}

            /> */}
                        {/* <Image style={{height:150,width:100,borderRadius:90}} source={require('.././assets/IMG-20200610-WA0097.jpg')} /> */}
                    </Card>
                    </Content>
              {/* <View >
                  <Text>hello</Text>
                </View> */}




          
              
                    </View>
                </View>
                
                <Tabs>
                    <Tab heading ='Calling'>
         {/* <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/> */}

                    <View style={{padding:5,height:height/2+150,paddingTop:30,backgroundColor:'transparent',paddingBottom:85}}>
         <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

                   <WhatsApp/>

                </View>
                    </Tab>
                    
                    <Tab heading ='SMS'>
                    <View style={{padding:5,height:height/2+150,paddingTop:30,backgroundColor:'transparent',paddingBottom:85}}>
         <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

                    {/* <Body style={{padding:0,backgroundColor:'white',alignItems:'center'}}> */}
                   <SMS/>
                </View>
                    </Tab>
                </Tabs>

                {/* <Content>
                    <CardItem>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('KimSoHyun')}>
                    <Card style={{height:150,width:100,borderRadius:100,alignItem:'center'}}>
                        <Text style={{color:'red'}}>Kim So Hyun</Text>
                    </Card>
                    </TouchableOpacity>
                  
                    <TouchableOpacity>
                    <Card style={{height:150,width:100,borderRadius:100,alignItem:'center'}}>
                        <Text style={{color:'red'}}>Kim So Hyun</Text>
                    </Card>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                    <Card style={{height:150,width:100,borderRadius:100,alignItem:'center'}}>
                        <Text style={{color:'red'}}>Kim So Hyun</Text>
                    </Card>
                    </TouchableOpacity>

                    </CardItem>
                </Content>     */}
                </Content>
            </Container>
          )
      }
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
       },
       sectionHeader: {
         paddingTop: 4,
         paddingLeft: 10,
         paddingRight: 10,
         paddingBottom: 0,
         fontSize: 18,
         fontWeight: 'bold',
         backgroundColor: 'lightgray',
       },
       item: {
         padding: 10,
         fontSize: 14,
         height: 54,
       },
  })
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