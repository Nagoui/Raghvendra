import * as React from 'react';
import {View,Text,ActivityIndicator,Image,Dimensions} from 'react-native';
// import {NavigationContainer }  from '@react-navigation/native';
// import  {createStackNavigator} from  '@react-navigation/stack';

// import  SplashComponent from './SplashComponent.js';
// import SignInComponent from './SignInComponent.js';
// import SignUpComponent from './SignUpComponent.js';
// import Phone_index from '.././Contacts/Phone_index.js';

// import SignUpComponent from '../assetsplash.jpg';
import Firebase from './Firebase.js';
const {width,height} = Dimensions.get('window');

// import * as firebase from 'firebase';
// import {firebaseConfig} from './Firebase.js';
// firebase.initializeApp(firebaseConfig)
class RootStack extends React.Component{
    
    componentDidMount () {
        Firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                // this.setState({isLoading:true})
                // this.setState({isSignout:false})
                // this.props.navigation.navigate('Anamika')
                this.props.navigation.navigate('Home')
    
            }
            else{
              // this.setState({isLoading:false})
              // this.setState({isSignout:true})
              this.props.navigation.navigate('Splash')
            //   this.props.navigation.navigate('Home')
    
            }
        })
      }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                 <Image
                        // animation="bounceIn"
                        // duration={2500}
                        source={require('../asset/splash.jpg')}
                        style={{height:200,width:150}}
                        // resizeMode={"stretch"}
                        // blurRadius={5}
                    />

<ActivityIndicator size="large" color='#d9534f'  />

<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
                    <Text/>
                    <Text/>
                    <Text/>
                    <Text/>
                    <Text>Version 5.0.9 (5000000)</Text>
            </View>

        )
    }
}
// const Stack = createStackNavigator();

// function RootStack(){
//     return(
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Splash" component={SplashComponent}
//                  options={{headerShown:false}}
//                 />
//                 <Stack.Screen name="SignIn" component={SignInComponent}
//                  options={{headerShown:false}}
//                 />
//                 <Stack.Screen name="SignUp" component={SignUpComponent}
//                     options={{headerShown:false}}
//                 />
//                 <Stack.Screen name="Phone" component={Phone_index}
//                     options={{headerShown:false}}
//                 />

//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }
export default RootStack;