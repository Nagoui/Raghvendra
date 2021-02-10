import React, { Component } from 'react';
import { StyleSheet,Animated,Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


class CustomDrawer extends React.Component {
  navigateToScreen = (route,style) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  // const translateX = this.props.drawerOpenProgress.interpolate({
  //   inputRange:[0,1],
  //   outPutRange:[-100,0],
  // });
  render() {
    // const [progress,setProgress] = React.useState(new Animated.Value(0));
    // const scale = Animated.interpolate(progress,{
    //   inputRange:[0,1],
    //   outputRange:[1,0.8]
    // });
    // const borderRadius = Animated.interpolate(progress, {
    //   inputRange: [0, 1],
    //   outputRange: [0, 16],
    // });
    // const borderStyle = {borderRadius,transform:[{scale}]};
        // const  CustomDrawerContentComponent 
        
    return (
      <Animated.View 
        style={[styles.stack]}
      >
        <Image
          style={{ height: 100, width: 100, borderRadius: 770, left: 70, top: 20 }}
          source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2/4c140a2f461c56bfbef3894f7eab7c701361079581_full.jpg' }}
        />
        <Text></Text>
        <TouchableOpacity onPress={() => alert('hi')}>
          <Text>First Button</Text>
        </TouchableOpacity>

        <Text>First Button</Text>
        <Button
          title="p1"
          onPress={() => this.props.navigation.navigate('p1')}
        />

        <Button
          title="p2"
          onPress={() => this.props.navigation.navigate('p2')}
        />

      </Animated.View>
    );
  }
}


export default CustomDrawer;

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'white', marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});
