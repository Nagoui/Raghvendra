import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
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
  import {SliderBox} from 'react-native-image-slider-box';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
const {width,height} = Dimensions.get('window');
  export default class Matched extends React.Component{
      constructor(props){
          super(props);
          this.state={
            images:[
                require('../asset/1.jpeg'),
                require('../asset/2.jpeg'),
                require('../asset/3.jpeg'),
                require('../asset/4.jpeg'),
                require('../asset/5.jpeg'),
           
               
            ]
            //   images:[
            //       require('../assets/IMG-20200729-WA0137.jpg'),
            //       require('../assets/IMG-20200729-WA0138.jpg'),
            //       require('../assets/IMG-20200729-WA0139.jpg'),
            //       require('../assets/IMG-20200729-WA0140.jpg'),
            //       require('../assets/IMG-20200729-WA0141.jpg'),
            //       require('../assets/IMG-20200729-WA0142.jpg'),
            //       require('../assets/IMG-20200729-WA0143.jpg'),
            //       require('../assets/IMG-20200729-WA0144.jpg'),
                 
            //   ]
          }
      }
      render(){
        //   const {navigate} = this.props.navigation;
          return(
         
            <Container style={{padding:0,backgroundColor:'gray'}}>
                <Content >
<AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

                <View style={{backgroundColor:'transparent'}}>
<AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

                {/* <Card > */}
                <Card style={{height:height/2+70,width:width,borderRadius:0,paddingEnd:10,backgroundColor:'#e5e6e5'}}>
                    
                    <SliderBox  
                        images={this.state.images}
                        autoplay
                        circleLoop
                        // dotColor='transparent'
                        // inactiveDotColor='transparent'
                        sliderBoxHeight={400}
                        // resizeMode={'center'}
                        // resizeMethod={'resize'}
                    />
                    </Card>
                    {/* <View style={{alignItems:'center'}}>
               
                    <Text style={{fontWeight:'bold'}}>About</Text>
                    <Text style={{fontWeight:'bold'}}>About</Text>
                    <Text style={{fontWeight:'bold'}}>About</Text>
                    <Text style={{fontWeight:'bold'}}>About</Text>

                    </View> */}
                </View>
                <Content >
                <CardItem >
<AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>


                        {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('common',{data:'1003',})}> */}
                    <Card style={{height:250,width:160,borderRadius:100,alignItem:'center'}}>
                    <Image style={{height:250,width:160,borderRadius:10}} source={require('../asset/8.jpg')} />

                        {/* <Text style={{color:'red'}}>1003</Text> */}
                    </Card>
                    {/* </TouchableOpacity> */}
                  
                    {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('common',{data:'1004',})}> */}
                    <Card style={{height:250,width:160,borderRadius:100,alignItem:'center'}}>
                        <Image style={{height:250,width:160,borderRadius:10}} source={require('../asset/9.jpeg')} />
                        {/* <Text style={{color:'red'}}>1004</Text> */}
                    </Card>
                    {/* </TouchableOpacity> */}
                    
                    
                    </CardItem>
                    <CardItem >
<AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

                        {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('common',{data:'101',})}> */}
                        <Card style={{height:250,width:160,borderRadius:10,alignItem:'center',backgroundColor:'gray'}}>
                        
                    <Image style={{height:250,width:160,borderRadius:10}} source={require('../asset/6.jpg')} resizeMode={'center'}/>

                        {/* <Text style={{color:'red'}}>101</Text> */}
                    </Card>
                    {/* </TouchableOpacity> */}
                  
                    {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('common',{data:'1002',})}> */}
                    <Card style={{height:250,width:160,borderRadius:10,alignItem:'center',backgroundColor:'gray'}}>
                        
                    <Image style={{height:250,width:160,borderRadius:10}} source={require('../asset/7.jpg')} resizeMode={'center'} />

                        {/* <Image style={{height:250,width:160,borderRadius:10}} source={{uri:'https://i.mydramalist.com/wKZDJc.jpg'}} /> */}
                        {/* <Text style={{color:'red'}}>1002</Text> */}
                    </Card>
                    {/* </TouchableOpacity> */}
                    
                    </CardItem>
                   
                    <CardItem style={{padding:0}}>
<AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

                        {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('common',{data:'1005',})}> */}
                        <Card style={{height:250,width:160,borderRadius:10,alignItem:'center',backgroundColor:'gray'}}>
                    <Image style={{height:250,width:160,borderRadius:10}} source={require('../asset/10.jpeg')} resizeMode={'center'}/>

                        {/* <Text style={{color:'red'}}>1005</Text> */}
                    </Card>
                    {/* </TouchableOpacity> */}
                  
                    {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('common',{data:'1006',})}> */}
                    <Card style={{height:250,width:160,borderRadius:10,alignItem:'center',backgroundColor:'gray'}}>
                        <Image style={{height:250,width:160,borderRadius:10}} source={require('../asset/11.jpeg')} resizeMode={'center'}/>
                        {/* <Text style={{color:'red'}}>Kim So Hyun 1006</Text> */}
                    </Card>
                    {/* </TouchableOpacity> */}
                    
                    
                    </CardItem >
                    <CardItem style={{padding:0}}>
                    <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

                    {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('common',{data:'1007',})}> */}
                    <Card style={{height:250,width:160,borderRadius:10,alignItem:'center',backgroundColor:'gray'}}>
                    <Image style={{height:250,width:160,borderRadius:10}} source={require('../asset/12.jpeg')} />

                        {/* <Text style={{color:'red'}}>1007</Text> */}
                    </Card>
                    {/* </TouchableOpacity> */}

                    {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('common',{data:'1008',})}> */}
                    <Card style={{height:250,width:160,borderRadius:10,alignItem:'center',backgroundColor:'gray'}}>
                        <Image style={{height:250,width:160,borderRadius:10}} source={require('../asset/13.jpeg')} />
                        {/* <Text style={{color:'red'}}>1008</Text> */}
                    </Card>
                    {/* </TouchableOpacity>  */}
                         
                    {/* <TouchableOpacity>
                    <Card style={{height:150,width:100,borderRadius:100,alignItem:'center'}}>
                        // <Image style={{height:150,width:100,borderRadius:10}} source={require('.././assets/IMG-20200610-WA0023.jpg')} />
                        <Text style={{color:'red'}}>Kim So Hyun</Text>
                    </Card>
                    </TouchableOpacity> */}
                    
                    </CardItem>
                    
<Text/>
                    


                </Content>
           

         


                </Content>
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