import * as React from 'react';
import { ImageBackground,View, Text,StyleSheet,Button,Image,TouchableOpacity,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from "react-native-vector-icons/Feather";
const {width,height} =  Dimensions.get('window');

function Dashboard() {
  return (
    <View style={{ flex:1,backgroundColor:'skyblue', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard</Text>
    </View>
  );
}

function Messages() {
  return (
    <View style={{ backgroundColor:'green',flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Message</Text>
    </View>
  );
}


function Contact() {
  return (
    <View style={{ flex: 1,backgroundColor:'pink', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  return (
    // <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
    <Animated.View style={[{flex:1,overflow:'hidden'},style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
    }}>
        <Stack.Screen name="Home">{props => <Dashboard {...props} />}</Stack.Screen>
        <Stack.Screen name="Messages">{props => <Messages {...props} />}</Stack.Screen>
        <Stack.Screen name="Contact">{props => <Contact {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};
const CustomDrawerContent = props => {


  return (
 
    <DrawerContentScrollView {...props} scrollEnabled={false} >

    
     <Animated.View>

     
        <Image
            source={{
              uri: 'https://img1.ak.crunchyroll.com/i/spire2/4c140a2f461c56bfbef3894f7eab7c701361079581_full.jpg',
              height: 60,
              width: 60,
              scale: 0.5,
            }}
            resizeMode="center"
            // style={styles.avatar}
          style={{ height: 100, width: 100, borderRadius: 770, left: 70, top: 0 }}

          />
          <Text white title>
            React UI Kit
          </Text>
          <Text style={{color:'red'}}>
            contact@react-ui-kit.com
          </Text>
          <DrawerItem
            label="Dashboard"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Home')}
            
            icon={() =>  <Image
              style={{ height: 30, width: 30, borderRadius: 770 }}
              source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2/4c140a2f461c56bfbef3894f7eab7c701361079581_full.jpg' }}
            />}
          />
          
          <DrawerItem
            label="Messages"
            labelStyle={{ color: 'blue', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Messages')}
            
            icon={() =>  <Image
              style={{ height: 30, width: 30, borderRadius: 770 }}
              source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2/4c140a2f461c56bfbef3894f7eab7c701361079581_full.jpg' }}
            />}
            // icon={() => <AntDesign name="message1" color="white" size={16} />}
          />
          <DrawerItem
            label="Contact us"
            labelStyle={{ color: 'red', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Contact')}
            
            icon={() =>  <Image
              style={{ height: 30, width: 30, borderRadius: 770 }}
              source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2/4c140a2f461c56bfbef3894f7eab7c701361079581_full.jpg' }}
            />}
            // icon={() => <AntDesign name="phone" color="white" size={16} />}
          />
      </Animated.View>
    </DrawerContentScrollView>
  );
}


function MyDrawer() {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });
 

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    // <Animated.View style={{flex:1,backgroundColor:'skyblue'}}>
      <ImageBackground
      blurRadius={0}
      style={{width:width,height:height,position:'absolute'}}
          // style={{ height: 100, width: 100, borderRadius: 770, left: 70, top: 0 }}
          source={{ uri: 'https://flashwallpapers.com/ws/1/51216.jpg' }}
        >
    <Drawer.Navigator
    drawerType="back"
    overlayColor="transparent"
    drawerStyle={styles.drawerStyles}
    initialRouteName="Dashboard"
    drawerStyle={{width:'50%',backgroundColor:'transparent'}}
    contentContainerStyle={{ flex: 1 }}
    drawerContentOptions={{
      activeBackgroundColor: 'red',
      activeTintColor: 'green',
      inactiveTintColor: 'green',
    }}
    // drawerType={isLargeScreen ? 'slide' : 'back'}
              // drawerStyle={isLargeScreen ? null : { width: '570%',top:-5 }}
              sceneContainerStyle={{
                backgroundColor:"transparent",
                
              }}
              
// drawerPosition="right"
    // sceneContainerStyle={{ backgroundColor: 'yellow' }}

     drawerContent={props =>  {
      setProgress(props.progress);
      return    <CustomDrawerContent {...props} />}}>

      <Drawer.Screen name="Screens">
      {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
    </Drawer.Navigator>
     {/* </Animated.View> */}
     </ImageBackground>
  );
}

export default function SwipeAbleDrawer() {
  return (
    // <View style={{position:'absolute'}}>
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    // </View>
  );
}


const styles = StyleSheet.create({
  stack: {
    flex: 1,
    overflow:'hidden',
    // width:300,
    
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
  // drawerStyles: { top:-5,backgroundColor: 'transparent' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'green', marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'transparent',
    borderWidth: StyleSheet.hairlineWidth,
  },
});





// const Drawer = createDrawerNavigator();

// import * as React from 'react';
// import { Button, View,Text,StyleSheet,Dimensions } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Temp1 from './Temp1.js';
// import Temp2 from './Temp2.js';
// // import {Button} from 'react-native-uikit';
// import CustomDrawer from './CustomDrawer.js';
// import Animated from 'react-native-reanimated';
// // const dimensions = useWindowDimensions();

const isLargeScreen = Dimensions.width >= 768;
// // function DrawerNavigation(){
//     const DrawerNavigation = () => {
//       const [progress,setProgress] = React.useState(new Animated.Value(0));
//       const scaleX = Animated.interpolate(progress,{
//         inputRange:[0,1],
//         outputRange:[-111,0.8]
//       });
//       const borderRadius = Animated.interpolate(progress, {
//         inputRange: [0, 1],
//         outputRange: [0, 16],
//       });
//       // const borderStyle = {borderRadius,transform:[{scale}]};

//     return (
//       <NavigationContainer 
//     //   independent={true}
//       >
//         <Drawer.Navigator
//         // statusBarAnimation="fade"
//           drawerType="back"
//           overlayColor="transparent"
//           contentContainerStyle={{flex:1}}
//           drawerContentOptions={{
//             activeBackgroundColor:"green",
//             activeTintColor:'green'
//           }}
//           // openByDefault
//           drawerType={isLargeScreen ? 'slide' : 'back'}
//           drawerStyle={isLargeScreen ? null : { width: '70%' }}
//           sceneContainerStyle={{
//             baackgroundColor:"transparent",
            
//           }}
//           // drawerType="front"
//         //   initialRouteName="Main"
//         drawerContent={(props) =>{ 
//           setProgress(props.progress);
//         return<CustomDrawer {...props} />}}>

//            {/* drawerContent={() => <CustomDrawer />}> */}
//           {/* <Drawer.Screen name="Main" component={HomeScreen} /> */}
//           <Drawer.Screen name="p1" component={Temp1} />
//           <Drawer.Screen name="p2" component={Temp2} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     );
//   }

 
//   export default DrawerNavigation;

//   const styles = StyleSheet.create({
//     stack: {
//       flex: 1,
//       shadowColor: '#FFF',
//       shadowOffset: {
//         width: 0,
//         height: 8,
//       },
//       shadowOpacity: 0.44,
//       shadowRadius: 10.32,
//       elevation: 5,
//       // overflow: 'scroll',
//       // borderWidth: 1,
//     },
//     drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
//     drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
//     drawerLabel: { color: 'white', marginLeft: -16 },
//     avatar: {
//       borderRadius: 60,
//       marginBottom: 16,
//       borderColor: 'white',
//       borderWidth: StyleSheet.hairlineWidth,
//     },
//   });
  



// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
//       <Text>Notification screen</Text>
//     </View>
//   );
// }
// import { createStackNavigator,
//     DrawerContentScrollView
//     ,DrawerItem
// } from '@react-navigation/stack';



// const Stack = createStackNavigator();

// const DrawerNavigation = () => {
//     return (
//      <NavigationNativeContainer independent={true}>
//      <Drawer.Navigator
//        drawerType="front"
//        initialRouteName="Main"
//        drawerContent={props => CustomDrawer(props)}
//        drawerContentOptions={{
//          inactiveTintColor: 'skyblue',
//          activeTintColor: 'red',
//         //  labelStyle: '',
//         //  itemStyle: {},
//        }}>
//        <Drawer.Screen
//          name="Main"
//          component={HomeScreen}
//          options={{
//            drawerIcon: () => <Svg />,
//          }}
//        />
//        <Drawer.Screen
//          name="p1"
//          component={p1}
//          options={{
//            drawerIcon: () => <Svg />,
//          }}
//        />
//        <Drawer.Screen
//          name="p2"
//          component={p2}
//          options={{
//            drawerIcon: () => <Svg />,
//          }}
//        />
//         </Drawer.Navigator>
//       </NavigationNativeContainer>
//       );
//    };
   
   
// export default function Home_index() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator 
//     //    initialRouteName="DashBoard"
//         dawerContent={props => <CustomDrawerContent {...props} />}>
      
      
//         {/* <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Temp1" component={Temp1} /> */}
//         <Drawer.Screen name="DashBoard" component={HomeScreen} />

//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// //    export default function (){
// //        return(
// // {/* <NavigationNativeContainer independent={true}> */}
// //   <Drawer.Navigator
// //     // drawerType="front"
// //     // initialRouteName="Main"
// //     // drawerContent={(props) => <CustomDrawer {...props} />}
// //     >
// //     <Drawer.Screen name="Main" component={HomeScreen} />
// //     <Drawer.Screen name="p1" component={NotificationsScreen} />
// //     {/* <Drawer.Screen name="p2" component={p2} /> */}
// //   </Drawer.Navigator>
// // // </NavigationNativeContainer>   
// //        )}
// // function Screens() {
// //     // const Screen =({navigation})=>{
// //          return (
// //     <Stack.Navigator 
// //         screenOptions={{
// //             // headerTransparent:true,
// //             // headerTitle:null,
// //             // headerLeft: () =>{
// //             //     <Button style={{left:20,backkgroundColor:'blue'}}
// //             //     //  onPress={alert('hi')}
// //             //      title='hiuyf'
// //             //      />
// //             // }           
// //         }}
// //     >
// //       {/* <Stack.Screen name="Home" component={Home} /> */}
// //        <Stack.Screen name="DashBoard" component={HomeScreen} />
// //         <Stack.Screen name="T1" component={Temp1} />
// //         <Stack.Screen name="T2" component={Temp2} />
// //         <Stack.Screen name="T3" component={CustomDrawerContent} />

// //     </Stack.Navigator>
// //   );
// // }

// // const Drawer = createDrawerNavigator();

// // function CustomDrawerContent(props) {
// // // const DrawerContent = props=>{
// // return (
// //       <DrawerContentScrollView {...props}> 
// //         {/* <DrawerItemList {...props} /> */}
// //         <DrawerItem
// //           label="DashBoard"
// //           onPress={() =>props.navigation.navigate('DashBoard')}
// //         />
// //         <DrawerItem
// //           label="Message"
// //           onPress={() =>props.navigation.navigate('T1')}
// //         />
// //         <DrawerItem
// //           label="Content"
// //           onPress={() =>props.navigation.navigate('T2')}
// //         />
// //       </DrawerContentScrollView>
// //     );
// //   }

// // export default function Home_index() {
// //   return (
// //     <NavigationContainer>
// //       <Drawer.Navigator 
// //     //    initialRouteName="DashBoard"
// //         dawerContent={props => <CustomDrawerContent {...props} />}>
      
      
// //         {/* <Drawer.Screen name="Home" component={HomeScreen} />
// //         <Drawer.Screen name="Temp1" component={Temp1} /> */}
// //         <Drawer.Screen name="DashBoard" component={Screens} />

// //       </Drawer.Navigator>
// //     </NavigationContainer>
// //   );
// // }


// AlertMessage, ArticleText, Avatar, AvatarHeader, Button, Card, Carousel, Close, DateItem, Divider, FieldError, Grid, GalleryOffset, Heading, ImageCustom, InputField, LikeBtn, ListBasic, LoginFb, LoginForm, MapSection, Message, MessageList, ProfileHeader, RatingBox, ReviewCell, Search, ThumbSwiper, Time





// import * as React from 'react';
// import { Button, View,Text } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Temp1 from './Temp1.js';
// import Temp2 from './Temp2.js';
// // import {Button} from 'react-native-uikit';


//  function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to "
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }
// import { createStackNavigator,
//     DrawerContentScrollView
//     ,DrawerItem
// } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function Screen() {
//     // const Screen =({navigation})=>{
//          return (
//     <Stack.Navigator 
//         screenOptions={{
//             // headerTransparent:true,
//             // headerTitle:null,
//             // headerLeft: () =>{
//             //     <Button style={{left:20,backkgroundColor:'blue'}}
//             //     //  onPress={alert('hi')}
//             //      title='hiuyf'
//             //      />
//             // }           
//         }}
//     >
//       {/* <Stack.Screen name="Home" component={Home} /> */}
//        <Stack.Screen name="DashBoard" component={HomeScreen} />
//         <Stack.Screen name="T1" component={Temp1} />
//         <Stack.Screen name="T2" component={Temp2} />
//         <Stack.Screen name="T3" component={CustomDrawerContent} />

//     </Stack.Navigator>
//   );
// }

// const Drawer = createDrawerNavigator();

// function CustomDrawerContent(props) {
// // const DrawerContent = props=>{
// return (
//       <DrawerContentScrollView {...props}> 
//         {/* <DrawerItemList {...props} /> */}
//         <DrawerItem
//           label="DashBoard"
//           onPress={() =>props.navigation.navigate('DashBoard')}
//         />
//         <DrawerItem
//           label="Message"
//           onPress={() =>props.navigation.navigate('T1')}
//         />
//         <DrawerItem
//           label="Content"
//           onPress={() =>props.navigation.navigate('T2')}
//         />
//       </DrawerContentScrollView>
//     );
//   }

// export default function Home_index() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator 
//     //    initialRouteName="DashBoard"
//         dawerContent={props => <CustomDrawerContent {...props} />}>
      
      
//         {/* <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Temp1" component={Temp1} /> */}
//         <Drawer.Screen name="DashBoard" component={Screen} />

//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

