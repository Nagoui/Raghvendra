import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import Home from './src/Component/home';
// import Home from './src/Component/home.js';
// import Post from './src/Component/postDetails.js';
import Contacts from './Contacts.js';
import WhatsApp from './WhatsApp.js';
import Calling from './Calling.js';
import SMS from './SMS.js';
const Stack = createStackNavigator();

export default function App_Contacts()  {
  return(

    // <NavigationContainer>
      <Stack.Navigator 
          initialRoute ="Home"
          screenOptions={{
            headerShown:false
          }}
          >
            <Stack.Screen name='Home' component={Contacts} />
            <Stack.Screen name='Whatsapp' component={WhatsApp} />
            <Stack.Screen name='Calling' component={Calling} />
            <Stack.Screen name='SMS' component={SMS} />
      </Stack.Navigator>
    // </NavigationContainer>

    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
})




