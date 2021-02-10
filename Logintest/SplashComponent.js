import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    BackHandler
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { DrawerGestureContext } from '@react-navigation/drawer';
// import from './';
export default class SplashComponent extends React.Component{
    // static navigationOptions={
    //     drawerLockMode:'locked-open',
    //     screenOptions={{DrawerGestureContext:false}}
    // }
    
    componentDidMount(){
        BackHandler.addEventListener("hardwareBackPress",this.handleBackButton)
      }
 
  handleBackButton(){
    return true
  }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duration={2500}
                        source={require('../asset/splash.jpg')}
                        style={styles.logo}
                        resizeMode={"stretch"}
                    />
                </View>
                <Animatable.View style={styles.footer}
                    animation="fadeInUpBig"
                >

                    <Text style={styles.title}>Stay connect with everyone</Text>
                    <Text style={styles.text}>Sign in with account</Text>
                    <View style={styles.button}>
                        <TouchableOpacity 
                        // colors={['#5db8fe','#39cff2']}
                            style={styles.signIn}
                            onPress={()=>this.props.navigation.navigate('SignIn')}
                        >
                            <Text style={{color:'white'}}>Get start ></Text>
                            <MaterialIcons
                            name="navigate-next"
                            color="red"
                            size={20}
                            />
                        </TouchableOpacity>   
                    </View>   
                </Animatable.View>
               {/* <Text>hi</Text> */}
            </View>

        )
    }
}
const {height} = Dimensions.get("screen");
const height_logo = height *0.7 *0.4;

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#05375a',
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{ 
        flex:1,
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingVertical:90,
        paddingHorizontal:30,
    },
    logo:{
        width:height_logo,
        height:height_logo,
        borderRadius:50,
    },
    title:{
        color:'#05375a',
        fontWeight:'bold',
        fontSize:30,

    },
    text:{
        color:'gray',
        marginTop:5,
    },
    button:{
        alignItems:'flex-end',
        marginTop:30
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row',
        backgroundColor:'#5db8fe'
//'#5db8fe','#39cff2'
    }
})