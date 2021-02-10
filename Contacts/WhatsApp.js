import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Platform,
  Animated,
  AsyncStorage,
  // Button,
  Dimensions,
  Alert
  // FlatList,
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
  Textarea,
} from 'native-base';
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/FontAwesome5";
import { selectContactPhone } from 'react-native-select-contact';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import Dialog from "react-native-dialog";
import User from '../Logintest/User.js';
// import WhatsApp_Notes from './WhatsApp_Notes.js';
// import Contacts from 'react-native-unified-contacts';
// const image= {uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27'};
const image = { uri: 'https://i2.wp.com/atkmagazine.com/wp-content/uploads/2016/06/Title-2.jpg?resize=800%2C435' };
const Whats = { uri: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27" };
import Modal from 'react-native-modal';
const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 290;
const { width, height } = Dimensions.get('screen')
// import Contacts from 'react-native-unified-contacts';
import Firebase from '../Logintest/Firebase.js';
// function Post({naviagation}){
class WhatsApp extends React.Component {
  constructor() {
    super();
    // this.state.toggleModal=this.state.toggleModal.bind(this)
    this.state = {
      canUserAccessContact: null,

      contactsNameOne: 'Name',
      contactsNameOneTest: '',
      contactsNumberOne: '',
      contactsNumberOneTest: '',
      isModalVisible: false,
      dialogVisible: false,

      contactsNameTwo: 'Name',
      contactsNameTwoTest: '',
      contactsNumberTwo: '',
      contactsNumberTwoTest: '',
      isModalVisibleTwo: false,
      dialogVisibleTwo: false,

      contactsNamThree: 'Name',
      contactsNameThreeTest: '',
      contactsNumberThree: '',
      contactsNumberThreeTest: '',
      isModalVisibleThree: false,
      dialogVisibleThree: false,

    }
    this.scrollYAnimatedaValue = new Animated.Value(0);

    // this.array = [];
  }
  _selectContact() {
    // this.toggleModal()
    this.handleCancel()
    return selectContactPhone()
      .then(selection => {
        if (!selection) {
          return null;
        }

        let { contact, selectedPhone } = selection;
        console.log(`Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`);
        alert(` phone number ${selectedPhone.number} from ${contact.name}`);
        this.setState({ contactsNameOneTest: contact.name })
        this.setState({ contactsNumberOneTest: selectedPhone.number })
        // alert('do')
        this.validateOne()
        return selectedPhone.number;
      });
  }
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  handleDelete = () => {
    this.setState({ dialogVisible: false });
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  passwordCheck(text, type) {
    id = /^[0]?[789]\d{9}$/;
    if (type == 'numberOne') {
            this.setState({
                contactsNumberOneTest: text,
            })

          }
      else if (type == 'nameOne') {
              this.setState({
                  contactsNameOneTest: text,
              })
    }   
}
 validateOne=async()=> {
    // alert('validate')
    const { contactsNumberOne,contactsNumberOneTest ,contactsNameOneTest} = this.state;
    // alert(this.state.contactsNumberOne)
    if (contactsNumberOneTest === '') {
        alert('please enter correct Number')
        // return false
    }
    else{
      var d = new Date();
      this.setState({
        contactsNumberOne: contactsNumberOneTest,
        contactsNameOne:contactsNameOneTest,
    })
      // alert('2')
      await AsyncStorage.setItem('whatsappNumberOne', contactsNumberOneTest)
      await AsyncStorage.setItem('whatsappcontactsNameOne', contactsNameOneTest)
      // alert(this.state.phone +'\n' + this.state.name)
      // alert('3')
      User.whatsappNumberOne = contactsNumberOneTest;
      User.whatsappcontactsNameOne = contactsNameOneTest;
      // alert('4')
      const mywhatsappcontact = Firebase.database().ref('username/Calling_Slot_One');
          // mywhatsappcontact.push.set({  //for add more info
              mywhatsappcontact.set({   //for update infor
              'Calling_One': contactsNumberOneTest,
              'Name_One':contactsNameOneTest,
              Time:d.getFullYear()+
              "/" + (d.getMonth() +1)+
              "/" +d.getDate(),
          })
      this.handleCancel()
          // alert('done')
          this.setState({
             contactsNumberOneTest:'',
             contactsNameOneTest:'',
        })
    }
}

// Second contact
_selectContactTwo() {
  // this.toggleModal()
  this.handleCancelTwo()
  return selectContactPhone()
    .then(selection => {
      if (!selection) {
        return null;
      }

      let { contact, selectedPhone } = selection;
      console.log(`Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`);
      alert(` phone number ${selectedPhone.number} from ${contact.name}`);
      this.setState({ contactsNameTwoTest: contact.name })
      this.setState({ contactsNumberTwoTest: selectedPhone.number })
      // alert('do')
      this.validateTwo()
      return selectedPhone.number;
    });
}
showDialogTwo = () => {
  this.setState({ dialogVisibleTwo: true });
};

handleCancelTwo = () => {
  this.setState({ dialogVisibleTwo: false });
};

handleDeleteTwo = () => {
  this.setState({ dialogVisibleTwo: false });
};
toggleModal = () => {
  this.setState({ isModalVisible: !this.state.isModalVisible });
}
passwordCheckTwo(text, type) {
  id = /^[0]?[789]\d{9}$/;
  if (type == 'numberTwo') {
          this.setState({
              contactsNumberTwoTest: text,
          })

        }
    else if (type == 'nameTwo') {
            this.setState({
                contactsNameTwoTest: text,
            })
  }   
}
validateTwo=async()=> {
  // alert('validate Two')
  const { contactsNumberOne,contactsNumberTwoTest ,contactsNameTwoTest} = this.state;
  // alert(this.state.contactsNumberOne)
  if (contactsNumberTwoTest === '') {
      alert('please enter correct Number')
      // return false
  }
  else{
    var d = new Date();
    this.setState({
      contactsNumberTwo: contactsNumberTwoTest,
      contactsNameTwo:contactsNameTwoTest,
  })
    // alert('2')
    await AsyncStorage.setItem('whatsappNumberTwo', contactsNumberTwoTest)
    await AsyncStorage.setItem('whatsappcontactsNameTwo', contactsNameTwoTest)
    // alert(this.state.phone +'\n' + this.state.name)
    // alert('3')
    User.whatsappNumberTwo = contactsNumberTwoTest;
    User.whatsappcontactsNameTwo = contactsNameTwoTest;
    // alert('4')
    const mywhatsappcontactTwo = Firebase.database().ref('username/Calling_Slot_Two');
        // mywhatsappcontact.push.set({  //for add more info
            mywhatsappcontactTwo.set({   //for update infor
            'Calling_Two': contactsNumberTwoTest,
            'Name_Two':contactsNameTwoTest,
            Time:d.getFullYear()+
            "/" + (d.getMonth() +1)+
            "/" +d.getDate(),
        })
    this.handleCancelTwo()
        // alert('done')
        this.setState({
           contactsNumberTwoTest:'',
           contactsNameTwoTest:'',
      })
  }
}


  _selectContactThree() {
    // this.toggleModal()
    this.handleCancelThree()
    return selectContactPhone()
      .then(selection => {
        if (!selection) {
          return null;
        }

        let { contact, selectedPhone } = selection;
        console.log(`Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`);
        alert(` phone number ${selectedPhone.number} from ${contact.name}`);
        this.setState({ contactsNameThreeTest: contact.name })
        this.setState({ contactsNumberThreeTest: selectedPhone.number })
        // alert('do')
        this.validateThree()
        return selectedPhone.number;
      });
  }
  showDialogThree = () => {
    this.setState({ dialogVisibleThree: true });
  };

  handleCancelThree = () => {
    this.setState({ dialogVisibleThree: false });
  };

  handleDeleteThree = () => {
    this.setState({ dialogVisibleThree: false });
  };
  toggleModalThree = () => {
    this.setState({ isModalVisibleThree: !this.state.isModalVisibleThree });
  }
  passwordCheckThree(text, type) {
    id = /^[0]?[789]\d{9}$/;
    if (type == 'numberThree') {
            this.setState({
                contactsNumberThreeTest: text,
            })

          }
      else if (type == 'nameThree') {
              this.setState({
                  contactsNameThreeTest: text,
              })
    }   
}
 validateThree=async()=> {
    // alert('validate Three')
    const { contactsNumberThree,contactsNumberThreeTest ,contactsNameThreeTest} = this.state;
    // alert(this.state.contactsNumberOne)
    if (contactsNumberThreeTest === '') {
        alert('please enter Number')
        // return false
    }
    else{
      var d = new Date();
      this.setState({
        contactsNumberThree:contactsNumberThreeTest,
        contactsNameThree:contactsNameThreeTest,
    })
      // alert('2')
      await AsyncStorage.setItem('whatsappNumberThree', contactsNumberThreeTest)
      await AsyncStorage.setItem('whatsappcontactsNameThree', contactsNameThreeTest)
      // alert(this.state.phone +'\n' + this.state.name)
      // alert('3')
      User.whatsappNumberThree = contactsNumberThreeTest;
      User.whatsappcontactsNameThree = contactsNameThreeTest;
      // alert('4')
      const mywhatsappcontactThree = Firebase.database().ref('username/Calling_Slot_Three');
          // mywhatsappcontact.push.set({  //for add more info
              mywhatsappcontactThree.set({   //for update infor
              'Calling_Three': contactsNumberThreeTest,
              'Name_Three':contactsNameThreeTest,
              Time:d.getFullYear()+
              "/" + (d.getMonth() +1)+
              "/" +d.getDate(),
          })
      this.handleCancelThree()
          // alert('done')
          this.setState({
             contactsNumberThreeTest:'',
             contactsNameThreeTest:'',
        })
    }
}
deleteMethodThree=()=>{
  Alert.alert(
    'Delete',
    'Are you sour want to delete number',
    [
      {
        text:'Cancel',
        style:'cancel'
      },
      {
        text:'OK', onPress:()=>this.deleteMethodThreeTest() ,style:'default'
      }
    ]
  )
  // alert('c')
}
deleteMethodThreeTest=()=>{
  this.setState({ contactsNameThreeTest:'Enter name' })
  this.setState({ contactsNumberThreeTest:'Enter number' })
  
  this.setState({ contactsNameThree:'Enter name' })
  this.setState({ contactsNumberThree:'Enter number' })
  this.validateThree()
  // alert('c')
}


deleteMethodTwo=()=>{
  Alert.alert(
    'Delete',
    'Are you sour want to delete Second number',
    [
      {
        text:'Cancel',
        style:'cancel'
      },
      {
        text:'OK', onPress:()=>this.deleteMethodTwoTest() ,style:'default'
      }
    ]
  )
  // alert('c')
}
deleteMethodTwoTest=()=>{
  
  this.setState({ contactsNameTwoTest:'Enter name' })
  this.setState({ contactsNumberTwoTest:'Enter number' })
  
  this.setState({ contactsNameTwo:'Enter name' })
  this.setState({ contactsNumberTwo:'Enter number' })
  this.validateTwo()
  // alert('b')
}


deleteMethodOne=()=>{
  Alert.alert(
    'Delete',
    'Are you sour want to delete First number',
    [
      {
        text:'Cancel',
        style:'cancel'
      },
      {
        text:'OK', onPress:()=>this.deleteMethodOneTest() ,style:'default'
      }
    ]
  )
  // alert('c')
}
deleteMethodOneTest=()=>{
  
  this.setState({ contactsNameOneTest:'Enter name' })
  this.setState({ contactsNumberOneTest:'Enter number' })
  
  this.setState({ contactsNameOne:'Enter name' })
  this.setState({ contactsNumberOne:'Enter number' })
  this.validateOne()
  // alert('a')
}


  render() {
    const headerHeight = this.scrollYAnimatedaValue.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
      }
    );
    const goToWhatsapp = () => {
      this.props.navigation.goBack();
    }
    return (
      <View style={{ backgroundColor: 'transparent', flex: 1, }}>
         <AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

        {/* <Animated.View style={{ height: headerHeight }}>
          <ImageBackground
            source={Whats}
            style={styles.image}
            imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
          >
            <Text style={styles.Tagline}>Discover </Text>
            <Text style={styles.Placename}>Explore the scenic beauty</Text>
          </ImageBackground>
        </Animated.View> */}
        {/* <TouchableOpacity
          onPress={goToWhatsapp}
          style={{
            position: 'absolute', left: 20, top: 8,
            backgroundColor: '#ff6200', padding: 10, borderRadius: 40
          }}>
          <Text>Back</Text>
        </TouchableOpacity>


       <TouchableOpacity style={styles.BookTicketBtn}
        // onPress={this.addNote.bind(this)}
        // onPress={this.toggleModal}
        >
          <Text style={styles.bookTicketText}>Contact</Text>
        </TouchableOpacity> */}


          <View>
          <Dialog.Container visible={this.state.dialogVisible}>
              {/* <Dialog.Title>Account delete</Dialog.Title> */}
      <Dialog.Title>Contact First</Dialog.Title>
              <Dialog.Description>
                Select First Contact for Calling in Freedom App
          </Dialog.Description>
              <Dialog.Input placeholder={'Enter Name'}  onChangeText={(val) => this.passwordCheck(val, 'nameOne')} style={{ backgroundColor: 'lightgray' }} keyboardType='name-phone-pad'/>
              <Dialog.Input placeholder={'Enter Number'} maxLength={15} onChangeText={(val) => this.passwordCheck(val, 'numberOne')} style={{ backgroundColor: 'lightgray' }} keyboardType='number-pad'/>
            <Dialog.Button label="Contacts" onPress={() => this._selectContact()} style={{ right: 0, color: 'red' }} />

              <Dialog.Button label="Cancel" onPress={this.handleCancel} />
              <Dialog.Button label="OK" onPress={this.validateOne} />
            </Dialog.Container>
          </View>

{/* Number Two */}
<View>
          <Dialog.Container visible={this.state.dialogVisibleTwo}>
              {/* <Dialog.Title>Account delete</Dialog.Title> */}
      <Dialog.Title>Contact Second</Dialog.Title>
              <Dialog.Description>
              Select Second Contact for Calling in Freedom App
          </Dialog.Description>
              <Dialog.Input placeholder={'Enter Name'}  onChangeText={(val) => this.passwordCheckTwo(val, 'nameTwo')} style={{ backgroundColor: 'lightgray' }} keyboardType='name-phone-pad'/>
              <Dialog.Input placeholder={'Enter Number'} maxLength={15} onChangeText={(val) => this.passwordCheckTwo(val, 'numberTwo')} style={{ backgroundColor: 'lightgray' }} keyboardType='number-pad'/>
            <Dialog.Button label="Contacts" onPress={() => this._selectContactTwo()} style={{ right: 0, color: 'red' }} />

              <Dialog.Button label="Cancel" onPress={this.handleCancelTwo} />
              <Dialog.Button label="OK" onPress={this.validateTwo} />
            </Dialog.Container>
          </View>

          {/* Three Number */}
          <View>
          <Dialog.Container visible={this.state.dialogVisibleThree}>
              {/* <Dialog.Title>Account delete</Dialog.Title> */}
      <Dialog.Title>Contact Third</Dialog.Title>
              <Dialog.Description>
              Select Third Contact for Calling in Freedom App
          </Dialog.Description>
              <Dialog.Input placeholder={'Enter Name'}  onChangeText={(val) => this.passwordCheckThree(val, 'nameThree')} style={{ backgroundColor: 'lightgray' }} keyboardType='name-phone-pad'/>
              <Dialog.Input placeholder={'Enter Number'} maxLength={15} onChangeText={(val) => this.passwordCheckThree(val, 'numberThree')} style={{ backgroundColor: 'lightgray' }} keyboardType='number-pad'/>
            <Dialog.Button label="Contacts" onPress={() => this._selectContactThree()} style={{ right: 0, color: 'red' }} />

              <Dialog.Button label="Cancel" onPress={this.handleCancelThree} />
              <Dialog.Button label="OK" onPress={this.validateThree} />
            </Dialog.Container>
          </View>


          <ScrollView style={styles.scrollContainer}>
          <View
            style={styles.note}
          >
            <Text style={[styles.noteText], { fontWeight: 'bold' }}>{this.state.contactsNameOne}</Text>
            <Text style={styles.noteText}>{this.state.contactsNumberOne}</Text>

            <TouchableOpacity onPress={this.showDialog}
              style={styles.notesWrite}
            >
              <EvilIcons
                name="pencil-alt"
                color="white"
                size={18}
              />
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>this.deleteMethodOne()}
            // onPress={this.props.deleteMethod}
              style={styles.notesDelete}
            >
              <AntDesign
                name="delete"
                color="white"
                size={18}
              />
            </TouchableOpacity>
          </View>
{/* Two view */}
{/* <Text/> */}
<Text/>
{/* <Text style={{backgroundColor:'reansparent'}}/> */}
          <View
            style={styles.note}
          >
            <Text style={[styles.noteText], { fontWeight: 'bold' }}>{this.state.contactsNameTwo}</Text>
            <Text style={styles.noteText}>{this.state.contactsNumberTwo}</Text>

            <TouchableOpacity onPress={this.showDialogTwo}
              style={styles.notesWrite}
            >
              <EvilIcons
                name="pencil-alt"
                color="white"
                size={18}
              />
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>this.deleteMethodTwo()}

            // onPress={this.props.deleteMethod}
              style={styles.notesDelete}
            >
              <AntDesign
                name="delete"
                color="white"
                size={18}
              />
            </TouchableOpacity>
          </View>
<View>
<AnimatedLinearGradient   customColors={presetColors.instagram} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

  {/* <Text/> */}
</View>
          <Text/>
{/* Three */}
    <View
            style={styles.note}
          >
            <Text style={[styles.noteText], { fontWeight: 'bold' }}>{this.state.contactsNameThree}</Text>
            <Text style={styles.noteText}>{this.state.contactsNumberThree}</Text>

            <TouchableOpacity onPress={this.showDialogThree}
              style={styles.notesWrite}
            >
              <EvilIcons
                name="pencil-alt"
                color="white"
                size={18}
              />
            </TouchableOpacity>

            <TouchableOpacity 

            onPress={()=>this.deleteMethodThree()}
              style={styles.notesDelete}
            >
              <AntDesign
                name="delete"
                color="white"
                size={18}
              />
            </TouchableOpacity>
          </View>

          {/* <View></View> */}
      </ScrollView>


      <View style={{bottom:0,height:70,padding:10}}>
       {/* <View style={{backgroundColor:'blue',bottom:70,height:50,width:150,right:-50,borderRadius:60}}>
       <AnimatedLinearGradient   customColors={presetColors.sunrise} speed={1500} start= {0.5, 0} end= {0.5, 1}/>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserInfo')}>

       <Text style={{fontWeight:'bold',top:9,alignSelf:'center',fontSize:17,color:'white',borderBottomWidth:1,borderBottomColor:'red',justifyContent:'center',textAlignVertical:'center'}}> Update </Text>
       </TouchableOpacity>
       </View> */}
       {/* <AnimatedLinearGradient   customColors={presetColors.sunrise} speed={1500} start= {0.5, 0} end= {0.5, 1}/> */}
{/* <View style={{backgroundColor:'blue',bottom:0,height:50,width:150,right:-50,borderRadius:60}}> */}
               {/* <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
       <Text style={{fontWeight:'bold',top:9,alignSelf:'center',fontSize:17,color:'white',borderBottomWidth:1,borderBottomColor:'red',justifyContent:'center',textAlignVertical:'center'}}> Update </Text>

                    
                    </TouchableOpacity> */}
                     <Button 
                    //  onPress={()=>this.props.navigation.navigate('SMS')}
                // onPress={()=>this.props.navigation.navigate('MyTabs')}
                
                block danger style={{top:1,justifyContent:'center',borderRadius:10,backgroundColor:'blue',height:50}} >
                    <Text style={{color:'white'}}>SLIDE RIGHT </Text>
                </Button>
                    {/* </View> */}
                              {/* </Content> */}
                </View>

      </View>
    );
  }
  // componentDidMount() {
  //   const item = Firebase.database().ref("Whatsapp");
  //   item.on("value", datasnap => {
  //     if (datasnap.val()) {
  //       this.setState({ noteArray: Object.values(datasnap.val()) })
  //     }
  //   })
  // }

    componentDidMount = async () => {
        User.whatsappNumberOne = await AsyncStorage.getItem('whatsappNumberOne')
        User.whatsappcontactsNameOne = await AsyncStorage.getItem('whatsappcontactsNameOne')
        this.setState({contactsNumberOne:User.whatsappNumberOne})
        this.setState({contactsNameOne:User.whatsappcontactsNameOne})
    
    
        User.whatsappNumberTwo = await AsyncStorage.getItem('whatsappNumberTwo')
        User.whatsappcontactsNameTwo = await AsyncStorage.getItem('whatsappcontactsNameTwo')
        this.setState({contactsNumberTwo:User.whatsappNumberTwo})
        this.setState({contactsNameTwo:User.whatsappcontactsNameTwo})
    
        User.whatsappNumberThree = await AsyncStorage.getItem('whatsappNumberThree')
        User.whatsappcontactsNameThree = await AsyncStorage.getItem('whatsappcontactsNameThree')
        this.setState({contactsNumberThree:User.whatsappNumberThree})
        this.setState({contactsNameThree:User.whatsappcontactsNameThree})
    
      }



  deleteNotes(key) {
    // alert('1')

    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray })
    // let userRef= 
    Firebase.database().ref('Whatsapp').remove();
    // userRef.remove()
    // alert('2')
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 190,
    justifyContent: 'flex-end'
  },
  Tagline: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginBottom: 6
  },
  Placename: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginBottom: 30
  },
  BookTicketBtn: {
    position: 'absolute',
    right: 12,
    top: 160,
    backgroundColor: '#ff6200',
    padding: 16,
    borderRadius: 40,
    elevation: 5
  },
  bookTicketText: {
    color: 'white',
    fontSize: 14
  },
  DarkOverlay: {
    width: 150,
    height: 150,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.5,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    marginHorizontal: 10
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,

  },
  scrollContainer: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: 'white',
    // top: 70
    // height:400,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textinput: {
    alignSelf: 'stretch',
    color: 'black',
    padding: 20,
    // backgroundColor:'#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
    fontSize: 18
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#ff6200',
    // backgroundColor:'#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  contacts: {
    flex: 1,
    marginTop: 20,
  },
  contact: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    margin: 5,
    marginVertical: 5,
    flex: 1,
    borderTopColor: '#A8E5FF',
    borderTopWidth: 5,
    elevation: 2,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 24,
  },
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
    // borderBottomColor: 'black',
    borderWidth:2,
    // borderBottomWidth:2,
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
    fontSize: 18

  },
  notesDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    // botom:10,
    right: 10,
  },

  notesWrite: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    // bottom:17,
    right: 65,
  },
  notesDeleteText: {
    color: 'white',
  }
})
export default WhatsApp;

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