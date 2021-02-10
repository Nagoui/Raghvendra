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
    Animated,
    ScrollView,
    AsyncStorage,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import User from './User.js';
// import * as firebase from 'firebase';
// import {firebaseConfig} from './Firebase.js';
// firebase.initializeApp(firebaseConfig)
import Firebase from './Firebase.js';
export default class SignInComponent extends React.Component {
    function() { alert("You are now registered") };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordValidate: true,
            usernameValidate: true,
            phoneValidate: true,
            Transfer_username: '',
            Transfer_password: '',
            warning: '',
            name: '',
            email: '',
            password: '',
            securTextEntry: true,
            securTextEntry_confirm: true
                
        }
        //  {chosenDate: new Date()};

        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    handleSignUp = () => {
        const { email, password } = this.state
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            // .then(() => this.props.navigation.navigate('Profile'))
            // alert('ho gaya')
            .catch(error => console.warn(error))
    }
    validate() {

        const { username, password } = this.state
        if (username == '') {
            alert('please enter correct email')
            return false
        } else if (password == '') {
            alert('please enter correct passeord')
            return false
        }

        return true
    }

    passwordCheck(text, type) {
        // const{password} = this.state

        id = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 

       const pass = /^[0-9a-zA-Z]+$/
        if (type == 'username') {
            if (id.test(text)) {
                // console.error("worng")
                this.setState({
                    username: text,
                    usernameValidate: true,
                    warning: ''
                })
            } else {
                this.setState({
                    usernameValidate: false,
                    warning: 'Email type not correct'
                })
            }

        }
        // 
        else if (type == 'password') {
            if (text.length < null) {
                this.setState({
                    passwordValidate: false,
                    warning: 'password is too small'
                })
            }
            //  else if (pass.test(text)) {
                else  {
                this.setState({
                    password: text,
                    passwordValidate: true,
                    warning: ''
                })
            }
            // else {
            //     this.setState({
            //         passwordValidate: false,
            //         warning: 'password is too small'

            //     })
            // }

        } else if (type == 'phone') {

            if (text.length < 10) {

                this.setState({
                    phoneValidate: false,
                    warning: 'Enter correct phone number'
                })
            }
            else {
                this.setState({

                    phoneValidate: true,
                    warning: ''

                    // warning:''
                })
            }


        }
        else if (text.length < 6) {
            console.warn('password length is too small')
        }
        else {
            return true
        }
    }
    // test(){
    //   alert('1')
    //   Firebase.auth()
    //           .signInWithPhoneNumber('+919554166619',true)
    //         // .createUserWithEmailAndPassword(username, password)
    //         // .then(() => this.props.navigation.navigate('Profile'))
    //         // alert('ho gaya')
    //         .catch(error => console.warn(error))
    //         alert('4')
    //         // this.props.navigation.navigate('Home')
    // }

    all_validate_check= async () =>{
        if (this.validate()) {

            // alert('2')
            // await AsyncStorage.setItem('username', this.state.username)
            // await AsyncStorage.setItem('password', this.state.password)
            // alert(this.state.phone +'\n' + this.state.name)
            // alert('3')
            // User.username = this.state.username;
            // User.password = this.state.password;
            const { username, password } = this.state

            await AsyncStorage.setItem('LoginTime',username)       
            User.LoginTime = this.state.username;
            
            Firebase.auth()
                .createUserWithEmailAndPassword(username, password)
                // .then(() => this.props.navigation.navigate('Profile'))
                // alert('ho gaya')
                .catch(error => console.warn(error))
            // alert('4')
            this.props.navigation.navigate('Home')
                // this.props.navigation.navigate('Anamika')

        }
    }
    // constructor(props)
    // {
    //   super(props);

    // this.state={slideViewVisible:false}
    // }



    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         check_textInputChange: false,
    //         password: '',
    //         password_confirm: '',
    //         securTextEntry: true,
    //         securTextEntry_confirm: true
    //     }
    // }
    // // componentDidMount(){
    // //     BackHandler.addEventListener("hardwareBackPress",this.handleBackButton)
    // //   }
    // //   handleBackButton(){
    // //     return false
    // //   }
    // textInputChange(value) {
    //     if (value.length !== 0) {
    //         this.setState({
    //             check_textInputChange: true
    //         });
    //     }
    //     else {
    //         this.setState({
    //             check_textInputChange: false
    //         });
    //     }
    // }

    securTextEntry() {
        // alert('hi')
        this.setState({
            securTextEntry: !this.state.securTextEntry
        })
        // alert('2')
    }
    // securTextEntry_confirm() {
    //     // alert('hi')
    //     this.setState({
    //         securTextEntry_confirm: !this.state.securTextEntry_confirm
    //     })
    //     // alert('2')
    // }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome</Text>
                </View>
                {/* <ScrollView></ScrollView> */}
                <Animatable.View style={styles.footer}
                    animation="fadeInUpBig"
                >
{/* <ScrollView style={{height:height,backgroundColor:}}> */}


                    <Text style={styles.text_footer}>E-MAIL</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="@05375a"
                            size={25}
                            top={5}
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
                            style={[styles.textInput, !this.state.usernameValidate ? styles.password_Error : null]}
                            onChangeText={(val) => this.passwordCheck(val, 'username')}
                        // onChangeText={(text) => this.textInputChange(text)}
                            keyboardType='email-address'
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
                                    size={20}
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
                            size={20}
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
                                // keyboardType='visible-password'

                                style={[styles.textInput, !this.state.passwordValidate ? styles.password_Error : null]}
                                value={this.state.password}
                                onChangeText={(val) => this.passwordCheck(val, 'password')}
                            // onChangeText={(text) => this.setState({
                            //     password: text
                            // })}
                            />
                            :
                            <TextInput
                                placeholder="Your password..."
                                // securTextEntry={true}
                                style={[styles.textInput, !this.state.passwordValidate ? styles.password_Error : null]}
                                // style={styles.textInput}
                                value={this.state.password}
                                onChangeText={(val) => this.passwordCheck(val, 'password')}
                            // onChangeText={(text) => this.setState({
                            //     password: text
                            // })}
                            />
                        }
                        <TouchableOpacity
                            onPress={() => this.securTextEntry()}>
                            {this.state.securTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="gray"
                                    size={20}
                                />
                                // <Animatable.Image
                                //     animation="bounceIn"
                                //     duration={2500}
                                //     source={require('../asset/bird.png')}
                                //     style={styles.logo}
                                //     resizeMode={"stretch"}
                                // />
                                :
                                <Feather
                                    name="eye"
                                    color="gray"
                                    size={20}
                                />
                                // <Animatable.Image
                                //     animation="bounceIn"
                                //     duration={2500}
                                //     // source={require('../asset/bird.png')}
                                //     source={require('../asset/splash.jpg')}

                                //     style={styles.logo}
                                //     resizeMode={"stretch"}
                                // />
                            }
                        </TouchableOpacity>

                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 25
                    },
                    ]}>Confrim Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        {/* <Animatable.Image
                            animation="bounceIn"
                            duration={2500}
                            source={require('../asset/bird.png')}
                            style={styles.logo}
                            resizeMode={"stretch"}
                        /> */}
                        {this.state.securTextEntry_confirm ?
                            <TextInput
                                placeholder="Your password..."
                                // securTextEntry={true}
                                secureTextEntry={true}

                                style={styles.textInput}
                                value={this.state.password_confirm}
                                onChangeText={(text) => this.setState({
                                    password_confirm: text
                                })}
                            />
                            :
                            <TextInput
                                placeholder="Your password..."
                                // securTextEntry={true}
                                style={styles.textInput}
                                value={this.state.password_confirm}
                                onChangeText={(text) => this.setState({
                                    password_confirm: text
                                })}
                            />
                        }
                        {/* <TouchableOpacity
                            onPress={() => this.securTextEntry_confirm()}>
                            {this.state.securTextEntry_confirm ?
                                <Feather
                                    name="eye-off"
                                    color="gray"
                                    size={20}
                                />
                                // <Animatable.Image
                                //     animation="bounceIn"
                                //     duration={2500}
                                //     source={require('../asset/bird.png')}
                                //     style={styles.logo}
                                //     resizeMode={"stretch"}
                                // />
                                :
                                <Feather
                                    name="eye"
                                    color="gray"
                                    size={20}
                                />
                                // <Animatable.Image
                                //     animation="bounceIn"
                                //     duration={2500}
                                //     // source={require('../asset/bird.png')}
                                //     source={require('../asset/splash.jpg')}

                                //     style={styles.logo}
                                //     resizeMode={"stretch"}
                                // />
                            }
                        </TouchableOpacity> */}

                    </View>
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By signing up you argree to our
                            </Text>
                        <Text style={[styles.color_textPrivate], { fontWeight: 'bold' }}>
                            {" "}
                                Terms of
                            </Text>
                        <Text style={[styles.color_textPrivate], { fontWeight: 'bold' }}>
                            {" "}
                                 Service
                            </Text>
                        <Text style={styles.color_textPrivate}>
                            {" "}
                                and
                            </Text>
                        <Text style={[styles.color_textPrivate], { fontWeight: 'bold' }}>
                            {" "}
                                Privacy Policy
                            </Text>
                    </View>

                    {/* <Text style={{ color: '#009bd1', marginTop: 15 }}>Forgot Passowrd</Text> */}
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.all_validate_check()}
                            // onPress={()=>this.props.navigation.navigate('SignUp')}
                            // onPress={() => this.props.navigation.navigate('Home')}

                            // colors={}
                            style={styles.signIn}>
                            <Text style={[styles.teaxtSign, {
                                color: 'white'
                            }]}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                    {/* </ScrollView> */}
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
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 6.5,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    text_header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        // color:'red',

        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },

    button: {
        alignItems: 'center',
        marginTop: 30
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
    logo: {
        // width:height_logo,
        width: 30,
        height: 30,
        // height:height_logo,
        borderRadius: 50,
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
    teaxtSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    color_textPrivate: {
        color: 'gray',
    },

    blueS: {
        top: 150,
        backgroundColor: '#98989898',
        width: 300,
        height: 320,
        alignSelf: 'center',
        position: 'absolute',
        // color:'transparent',
        // opacity:0.5,
    },
    emailStyle: { width: 270,
         fontSize: 18,
          borderRadius: 14, 
          backgroundColor: 'white', 
          top: 18, 
          height: 45, 
          alignSelf: 'center' 
        },
    password_Error: {
        
        // backgroundColor: 'skyblue',
        borderRadius: 5,
        borderColor: 'transparent',
        borderBottomColor: 'red',
        borderWidth: 3
    },
    passstyle: { 
        width: 270, 
        fontSize: 18, 
        // borderRadius: 14, 
        backgroundColor: 'white', 
        top: 27, 
        height: 45, 
        alignSelf: 'center' 
    }

})