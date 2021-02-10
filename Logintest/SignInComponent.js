import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    TextInput,
    BackHandler,
    AsyncStorage,
    ScrollView,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Firebase from './Firebase.js';
import User from './User.js';
export default class SignInComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check_textInputChange: false,
            // password: '',
            securTextEntry: true,
            email: '',
            password: '',
            phone: '',
            name: '',
            username: '',
            password: '',
            loginuser: '',
            loginpass: '',
        
        }
    }
    // componentDidMount = async () => {
    //     // User.loginuser = await AsyncStorage.getItem('username5')
    //     User.loginuser = await AsyncStorage.getItem('loginuser')
    //     this.props.navigation.navigate(User.loginuser ?  'app':'AStack6' );

    // }

    
    handleLogin = async () => {
        // alert('login')
        const { email, password } = this.state
        await AsyncStorage.setItem('LoginTime',email)
        

        User.LoginTime = this.state.email;
        // alert('2')
        Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            // alert('3')
            // .then(this.LoginCorrect)

            .then(() => this.props.navigation.navigate('Home'))
            .catch(error => console.warn(error))
            // .catch(error => console.warn(error))
            
            // .catch(this.LoginError)

    }
    // componentDidMount(){
    //     BackHandler.addEventListener("hardwareBackPress",this.handleBackButton)
    //   }
    //   handleBackButton(){
    //     return false
    //   }
    textInputChange(value) {
        if (value.length !== 0) {
            this.setState({
                check_textInputChange: true
            });
        }
        else {
            this.setState({
                check_textInputChange: false
            });
        }
    }

    securTextEntry() {
        // alert('hi')
        this.setState({
            securTextEntry: !this.state.securTextEntry
        })
        // alert('2')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome</Text>
                </View>
                <Animatable.View style={styles.footer}
                    animation="fadeInUpBig"
                >

                    <Text style={styles.text_footer}>E-MAIL</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="@05375a"
                            size={25}
                        style={{top:5}}
                            
                        />
                        <TouchableOpacity>
                        {/* <Animatable.Image
                        animation="bounceIn"
                        duration={2500}
                        source={require('../asset/splash.jpg')}
                        style={styles.logo}
                        resizeMode={"stretch"}
                    /> */}
                    </TouchableOpacity>
                        {/* </View> */}
                        <TextInput
                            placeholder="Your email..."
                            style={styles.textInput}
                    // value={this.state.password}
                            keyboardType="email-address"
                            onChangeText={email => this.setState({ email })}

                            // onChangeText={(text) => this.textInputChange(text)}
                        />
                        {this.state.check_textInputChange ?
                            <Animatable.View
                                Animatable="bounceIn"
                            >
                          {/* <Animatable.Image
                        animation="bounceIn"
                        duration={2500}
                        source={require('../asset/bird.png')}
                        style={styles.logo}
                        resizeMode={"stretch"}
                    /> */}
                              <Feather
                                    name="check-circle"
                                    color="green"
                                    size={25}
                        // style={{top:5}}

                                />
                            </Animatable.View>

                            : null}

                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 25
                    },
                    ]}>Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={25}
                        />
                          {/* <Animatable.Image
                        animation="bounceIn"
                        duration={2500}
                        source={require('../asset/bird.png')}
                        style={styles.logo}
                        resizeMode={"stretch"}
                    /> */}
                        {this.state.securTextEntry ?
                            <TextInput
                                placeholder="Your password..."
                                // securTextEntry={true}
                                   secureTextEntry={true}
                                   
  
                                style={styles.textInput}
                                value={this.state.password}
                                // value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                               
                                // onChangeText={(text) => this.setState({
                                //     password: text
                                // })}
                            />
                            :
                            <TextInput
                                placeholder="Your password..."
                                // securTextEntry={true}
                                style={styles.textInput}
                                value={this.state.password}
                                onChangeText={(text) => this.setState({
                                    password: text
                                })}
                            />
                        }
                        <TouchableOpacity
                        //  onPress={this.handleLogin}
                            onPress={() => this.securTextEntry()}
                            >
                            {this.state.securTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="gray"
                                    size={20}
                                />
                                
                                :
                                <Feather
                                    name="eye"
                                    color="gray"
                                    size={20}
                                />
                        //         <Animatable.Image
                        //         animation="bounceIn"
                        //         duration={2500}
                        //         // source={require('../asset/bird.png')}
                        // source={require('../asset/splash.jpg')}

                        //         style={styles.logo}
                        //         resizeMode={"stretch"}
                        //     />
                            }
                        </TouchableOpacity>

                    </View>

                    <Text style={{ color: '#009bd1', marginTop: 15 }}>Forgot Passowrd</Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                         onPress={this.handleLogin}
                            // onPress={()=>this.props.navigation.navigate('SignUp')}
                            // onPress={()=>this.props.navigation.navigate('SignUp')}

                            // colors={}
                            style={styles.signIn}>
                            <Text style={[styles.teaxtSign, {
                                color: 'white'
                            }]}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={()=>this.props.navigation.navigate('SignUp')}
                            onPress={()=>this.props.navigation.navigate('Anamika')}
                // this.props.navigation.navigate('Anamika')
                            // onPress={() => this.prop.navigation.navigate('SignUp')}
                            // onPress={()=>this.props.navigation.navigate('SignUp')}
                            // onPress={()=>this.props.navigation.navigate('SignUp')}
                            // onPress={alert('hyi')}
                           
                          style={[styles.signUn, {
                                borderColor: '#4dc2f8',
                                borderWidth: 1,
                                marginTop: 15
                            }]}>
                            <Text style={[styles.textSign],
                            {
                                color: '#4dc2f8'
                            }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        )
    }
}
const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05375a',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        // alignItems:'center'
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    text_header:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'#05375a',
        // color:'red',

        fontSize:18
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    textInput:{
        flex:1,
        paddingLeft:10,
        color:'#05375a',
    },
 
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // flexDirection: 'row',
        backgroundColor: '#009bd1'
        //'#5db8fe','#39cff2'
    },
    logo:{
        // width:height_logo,
        width:30,
        height:30,
        // height:height_logo,
        borderRadius:50,
    },
    signUn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // flexDirection: 'row',
        // backgroundColor: '#05375a'
        //'#5db8fe','#39cff2'
    },
    teaxtSign:{
        fontSize:18,
        fontWeight:'bold'
    }
})