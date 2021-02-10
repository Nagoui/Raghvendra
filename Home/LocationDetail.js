
import React, { Component } from 'react';
import { Container, Header, Content, Footer, Card, CardItem, FooterTab, Icon, Left, Body, headerItem, Right, Title } from 'native-base';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';

import {
  Button,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  NativeModules,
  Dimensions,
  StatusBar,
  ImageBackground,
  disableYellowBox
} from 'react-native';
import User from '../Logintest/User.js';
console.disableYellowBox=true;
const { width, height } = Dimensions.get('window');
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps'; 
var DirectSms = NativeModules.DirectSms;
export default class LocationScreen extends Component {
  watchId = null;
  constructor(props) {
    super(props);
    this.getLocationUpdates();
    // this.state.longitudes='',
    // this.state={Login:[]}
    // this.state={
    // Login:['hi'],
      
    // }
  }
  state = {
    loading: false,
    updatesEnabled: false,
    location: {},
    place: {},
    mobile_no: '',
    longitudes:81.7814622,
    latitudes:25.4373751,
  };

  // componentDidMount = async () => {

  
    
  //   User.LoginTime = await AsyncStorage.getItem('LoginTime')
  //   // if(User.userInfos=='true'){
  //   this.setState({Login:User.LoginTime})
  //   // }
  
  // }


  componentWillUnmount() {
    this.removeLocationUpdates()
  }
  hasLocationPermission = async () => {
    if (Platform.OS === 'ios' ||
      (Platform.OS === 'android' && Platform.Version < 23)) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  }
  //9696459755
  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        (position) => {
          this.setState({ location: position, loading: false });
          alert(JSON.stringify(position, null, 4))
          console.log(position);
        },
        (error) => {
          this.setState({ location: error, loading: false });
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50, forceRequestLocation: true }
      );
    });
  }
  getLocationUpdates = async () => {
    const hasLocationPermission = await this.hasLocationPermission();


    if (!hasLocationPermission) return;

    this.setState({ updatesEnabled: true }, () => {
      this.watchId = Geolocation.watchPosition(
        (position) => {
          this.setState({ location: position });
          this.setState({ place: position });
          this.setState({ latitudes: position.coords.latitude });
          this.setState({longitudes: position.coords.longitude });
          // alert(position);
            // alert(JSON.address_components)
            
            
          console.log(position);
        },
        (error) => {
          this.setState({ location: error });
          console.log(error);
        },
        { enableHighAccuracy: true, distanceFilter: 0, interval: 5000, fastestInterval: 2000 }
      );
    });

    // Geocoder.init("AIzaSyDvPRVbE0LsYc_2aPvRrJjxw29gxpMAvJQ");
    //         alert('1')
    //         Geocoder.from(41.89, 12.49)
    //         .then(json => {
    //             var addressComponent = json.results[0].address_components[0];
    //             console.log(addressComponent);
    //             alert(addressComponent)
    //         })
    //         .catch(error => alert('error'));

  }

  removeLocationUpdates = () => {
    if (this.watchId !== null) {
      Geolocation.clearWatch(this.watchId);
      this.setState({ updatesEnabled: false })
    }
  }

  render() {
    const { loading, location, updatesEnabled } = this.state;
    return (
      // <ScrollView>
      // <View style={{ backgroundColor: '#eb0771', flex: 1 }}>
      <View style={{ backgroundColor: '#4dc2f8', flex: 1 }}>
<StatusBar backgroundColor={'#05375a'} />
<AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>
 
{/* <Text>yo</Text> */}
{/* <ImageBackground source={require('../asset/flower.jpeg')} blurRadius={0} style={{width:width,height:height,top:0,position:'absolute'}} /> */}

        <View style={{ bottom: 7 }}>
          <Card style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '13%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a',width:width}}>
           
           
           
            <CardItem style={{ borderBottomWidth: 0, borderEndWidth: 0, borderStartWidth: 0, height: '13%', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, backgroundColor: '#05375a',width:width }}>

              <Left>
                {/* <Button transparent > */}
                {/* <Icon name='menu' style={{ color: 'white' }} /> */}
                {/* </Button> */}
              </Left>

              <Body style={{ left: 0,top:10,width:200 }}>
                <Title style={{ color: 'pink', fontSize: 23,width:150  }} >Freedom</Title>
              </Body>

              <Body style={{ left: 20,top:15 }}>
                <Title style={{ color: 'white', fontSize: 23,fontWeight:'bold' }} >App</Title>
              </Body>
              <Right>
                {/* <Button transparent> */}
                {/* <Icon name='search' style={{ color: 'white' }} /> */}
                {/* </Button> */}
              </Right>
          
            </CardItem>

            {/* <View style={{justifyContent:'space-between',flexDirection:'row',top:30,padding:20}}>
              <View>
    <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.longitudes} </Text>
    <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Longitude </Text>
    </View>
    <View>
    <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.latitudes} </Text>
    <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Latitude </Text>
    </View>
          </View> */}
          </Card>
          {/* <Text />
          <Text /> */}
          <ScrollView>
          {/* <Text/> */}
          <View style={{justifyContent:'space-between',flexDirection:'row',top:10,padding:0}}>
              <View>
    {/* <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.longitudes} </Text> */}
    <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>Add: Jhalwa Prayagraj</Text>
    </View>
    <View> 
    {/* <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.latitudes} </Text> */}
    <Text style={{fontSize:15,color:'white',fontWeight:'bold',paddingEnd:5}}>Pin: 211015 </Text>
    <Text/>
    </View>
    
          </View>

          <View style={{ alignItems: 'center', top: 0,paddingBottom:0 }}>
            <Card style={{ width: width / 1.1,height:height/1.6,padddingBottom:0 }}>
              {/* <CardItem header>
                <View style={styles.result}> */}
                <MapView  
          style={styles.mapStyle}  
          showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude: this.state.latitudes,   
            longitude: this.state.longitudes,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}>  
              {/* <View> */}
    {/* <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.longitudes} </Text> */}
    {/* <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Longitude </Text> */}
    {/* </View> */}
    {/* <View> */}
    {/* <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.latitudes} </Text> */}
    {/* <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Latitude </Text> */}
    {/* </View> */}
  
          <Marker  
            coordinate={{ latitude: this.state.latitudes, longitude: this.state.longitudes }}  
            title={'Hello Mr/Mrs'}  
            description={"You are here"}  
          />  
        </MapView>  
                  {/* <Text style={{ fontSize: 15,fontWeight:'bold' }}>{JSON.stringify(location, null, 4)}</Text> */}
                  {/* <Text>{this.state.mobile_no}</Text> */}
                {/* </View>
              </CardItem> */}
            </Card>
          </View>

 <View style={{justifyContent:'space-between',flexDirection:'row',top:0,padding:20}}>
              <View>
    <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.longitudes} </Text>
    <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Longitude </Text>
    </View>
    <View>
    <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{this.state.latitudes} </Text>
    <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}> Latitude </Text>
    </View>
    
          </View>
          <Text/>
        

          </ScrollView>
        </View>
        {/* <View style={{paddingEnd:10,paddingStart:10}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Card style={{borderRadius:1000,height:90,width:90}}>
              <CardItem header style={{borderRadius:1000,height:90,width:90}}>
              <Icon name="heart" style={{color:'red'}} size={20}/>
                
                <Text>Nat </Text>
              </CardItem>
            </Card>
            <Card style={{borderRadius:100,top:40,backgroundColor:'#ff0066',height:90,width:90}}>
              <CardItem header style={{borderRadius:100,backgroundColor:'##ff0066',height:90,width:90}}>
              <Icon name="person" style={{color:'white'}}/>
                
              </CardItem>
            </Card>
            <Card style={{borderRadius:100,backgroundColor:'#ff0066',height:90,width:90}}>
              <CardItem header style={{borderRadius:100,backgroundColor:'##ff0066',height:90,width:90}}>
              <Icon name="person" style={{color:'white'}}/>
                
              </CardItem>
            </Card>
          </View>
        </View> */}
        {/* <Button title='Get Location' onPress={this.getLocation} disabled={loading || updatesEnabled} /> */}
        {/* <View style={styles.buttons}>
            <Button title='Start Observing' onPress={this.getLocationUpdates} disabled={updatesEnabled} />
            <Button title='Stop Observing' onPress={this.removeLocationUpdates} disabled={!updatesEnabled} />
        </View> */}



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 12
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    margin: 20,
    backgroundColor: '#D3D3D3',
  },
  result: {
    borderWidth: 1,
    borderColor: '#666',
    width: '100%',
    paddingHorizontal: 16
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 12,
    width: '100%'
  },
  MainContainer: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },  
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  }, 
});

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