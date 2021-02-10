







// import React,{Component} from 'react';
// import { ScrollView,SafeAreaView,StyleSheet, Text, View,Image } from 'react-native';
// import Swipe from './src/Component/Test/Swipe.js';
// import jobs from './src/Component/Test/data.js';
// // import React from 'react';
// // import { StyleSheet, Text, View } from 'react-native';
// // import Swipe from './Swipe';
// import { Card, Button} from 'react-native-elements';
// // import jobs from './data';
// class App extends Component {
//     state = {
//         likedJobs: 0,
//         passedJobs: 0
//       };
    
//       handleLikedJob = () => {
//         this.setState(({ likedJobs }) => ({
//           likedJobs: likedJobs + 1
//         }));
//       };
    
//       handlePassedJob = () => {
//         this.setState(({ passedJobs }) => ({
//           passedJobs: passedJobs + 1
//         }));
//       };
    
//       renderCards(job) {
//         return (
//           <Card title={job.jobtitle} titleStyle={{ fontSize: 14 }}>
//               <ScrollView>
//             <View style={{ height: 200 }}>
//               <Image
//                 source={require('./src/Component/asset/bird.png')}
//             style={{ width: 200, height: 200,top:10,alignItems:'center',left:60 }}
//           />
//         </View>
//         <View style={styles.detailWrapper}>
//           <Text>{job.company}</Text>
//           <Text>{job.formattedRelativeTime}</Text>
//         </View>
//         <Text numberOfLines={4}>
//           {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
//         </Text>
//         </ScrollView>
//       </Card>
      
//     );
//   }

//   renderNoMoreCards = () => {
//     return (
//       <Card title="No More cards">
//         <Button
//           title="Do something"
//           large
//           icon={{ name: 'my-location' }}
//           backgroundColor="#03A9F4"
//         />
//       </Card>
//     );
//   };
//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.statusStyle}>
//           <Text style={{ color: 'red' }}>Passed: {this.state.passedJobs}</Text>
//           <Text style={{ color: 'blue' }}>Like: {this.state.likedJobs}</Text>
//         </View>
//         <Swipe
//           onSwipeRight={this.handleLikedJob}
//           onSwipeLeft={this.handlePassedJob}
//           keyProp="jobId"
//           data={jobs}
//           renderCard={this.renderCards}
//           renderNoMoreCards={this.renderNoMoreCards}
//         />
//       </SafeAreaView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     backgroundColor: 'lightgreen',

//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   statusStyle: {
//     padding: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-around'
//   },
//   detailWrapper: {
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 10
//   }
// });
// export default App;




// get contact number reacat native
// // import React, { Component } freact native listview scarchbarrom 'react';
// import SearchableDropdown from 'react-native-searchable-dropdown';
// // import {TouchableOpacity,Platform, StyleSheet, Text, ScrollView,View, FlatList, PermissionsAndroid} from 'react-native';
 
// // var items = [
// //   {
// //     id: 1,
// //     name: 'JavaScript',
// //   },
// //   {
// //     id: 2,
// //     name: 'Java',
// //   },
// //   {
// //     id: 3,
// //     name: 'Ruby',
// //   },
// //   {
// //     id: 4,
// //     name: 'React Native',
// //   },
// //   {
// //     id: 5,
// //     name: 'PHP',
// //   },
// //   {
// //     id: 6,
// //     name: 'Python',
// //   },
// //   {
// //     id: 7,
// //     name: 'Go',
// //   },
// //   {
// //     id: 8,
// //     name: 'Swift',
// //   },
// // ];
// // export default class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       selectedItems: [
// //         {
// //           id: 7,
// //           name: 'Go',
// //         },
// //         {
// //           id: 8,
// //           name: 'Swift',
// //         }
// //       ]
// //     }
// //   }
// //   render() {
// //   return (
// //         <View>
// //           {/* Multi */}
// //           {/* <SearchableDropdown
// //             multi={true}
// //             selectedItems={this.state.selectedItems}
// //             onItemSelect={(item) => {
// //               const items = this.state.selectedItems;
// //               items.push(item)
// //               this.setState({ selectedItems: items });
// //             }}
// //             containerStyle={{ padding: 5 }}
// //             onRemoveItem={(item, index) => {
// //               const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
// //               this.setState({ selectedItems: items });
// //             }}
// //             itemStyle={{
// //               padding: 10,
// //               marginTop: 2,
// //               backgroundColor: '#ddd',
// //               borderColor: '#bbb',
// //               borderWidth: 1,
// //               borderRadius: 5,
// //             }}
// //             itemTextStyle={{ color: '#222' }}
// //             itemsContainerStyle={{ maxHeight: 140 }}
// //             items={items}
// //             defaultIndex={2}
// //             chip={true}
// //             resetValue={false}
// //             textInputProps={
// //               {
// //                 placeholder: "placeholder",
// //                 underlineColorAndroid: "transparent",
// //                 style: {
// //                     padding: 12,
// //                     borderWidth: 1,
// //                     borderColor: '#ccc',
// //                     borderRadius: 5,
// //                 },
// //                 onTextChange: text => alert(text)
// //               }
// //             }
// //             listProps={
// //               {
// //                 nestedScrollEnabled: true,
// //               }
// //             }
// //           />
// //           Single */}
// //           <SearchableDropdown
// //             onItemSelect={(item) => {
// //               const items = this.state.selectedItems;
// //               items.push(item)
// //               this.setState({ selectedItems: items });
// //             }}
// //             containerStyle={{ padding: 5 }}
// //             onRemoveItem={(item, index) => {
// //               const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
// //               this.setState({ selectedItems: items });
// //             }}
// //             itemStyle={{
// //               padding: 10,
// //               marginTop: 2,
// //               backgroundColor: '#ddd',
// //               borderColor: '#bbb',
// //               borderWidth: 1,
// //               borderRadius: 5,
// //             }}
// //             itemTextStyle={{ color: '#222' }}
// //             itemsContainerStyle={{ maxHeight: 140 }}
// //             items={items}
// //             defaultIndex={2}
// //             resetValue={false}
// //             textInputProps={
// //               {
// //                 placeholder: "placeholder",
// //                 underlineColorAndroid: "transparent",
// //                 style: {
// //                     padding: 12,
// //                     borderWidth: 1,
// //                     borderColor: '#ccc',
// //                     borderRadius: 5,
// //                 },
// //                 onTextChange: text => alert(text)
// //               }
// //             }
// //             listProps={
// //               {
// //                 nestedScrollEnabled: true,
// //               }
// //             }
// //         />
// //       </View>
// //   );
// //   }
// // }






import React, {Component} from 'react';
import {TouchableOpacity,Platform, StyleSheet, Text, TextInput,ScrollView,View, FlatList, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

type Props = {};
export default class App extends Component<Props> {
//   state={
//     contacts: null
//   }
constructor(props) {
    super(props);
  this.state = {
    contacts:null,
    Contact:[],
    isLoading: true,
    
    
    text: '' 
  }
}
  componentDidMount(){
  if(Platform.OS === 'ios'){
    Contacts.getAll((err, contacts) => {
      if (err) {
        throw err;
      }
      // contacts returned
    //   alert('ju')

      this.setState({contacts})
    })
  }else if(Platform.OS === 'android'){
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to view your contacts.'
      }
    ).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied'){
          // error
        } else {
            // console.log(contacts)
          // contacts returned in Array
          this.setState({contacts})
        //   alert(this.state.Contact.map(item=>(<Text>    
        //               Name: {`${item.givenName} `} 
        //   </Text>)))
        // alert(JSON.stringify(contacts[0],null,1))

        }
      })
    })
  }
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }

  render () {
    //   var data = this.state.contacts
    var items = [
        {
          id: 1,
          name: 'JavaScript',
        },
        {
          id: 2,
          name: 'Java',
        },
        {
          id: 3,
          name: 'Ruby',
          type:'friend',
          type2:'friend',
          type3:'friend',
          type4:'friend'

        },
        {
          id: 4,
          name: 'React Native',
          type:'friend',
          type2:'friend',
          type3:'friend',
          type4:'friend'

        },
        {
          id: 5,
          name: 'PHP',
          type:'friend',
          type2:'friend',
          type3:'friend',
          type4:'friend'

        },
        {
          id: 6,
          name: 'Python',
          type:'friend',
          type2:'friend',
          type3:'friend',
          type4:'friend'
        },
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
          type:'friend',
          type2:'friend',
          type3:'friend',
          type4:'friend'
        },
      ];
    return (
      <View style={styles.container}>
          {/* <TextInput
          style={styles.textInputStyle}
          // onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        /> */}
      {/* <ScrollView> */} 
          <FlatList
          data={this.state.contacts}
          renderItem={({ item }) => (
            <TouchableOpacity>

            <View style={{flexDirection:'row',borderRadius:90,
            backgroundColor:'lightgreen',
            borderColor:'red'
            
            }}>
              <Text style={styles.contact_details}>
                Name: {`${item.givenName} `} 
              </Text>
              {item.phoneNumbers.map(phone => (
                <Text style={styles.phones}>{phone.label} : {phone.number}</Text>
              ))}
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        

        />

{/* // <SearchableDropdown
//             multi={true}

//             selectedItems={this.state.selectedItems}
//             onItemSelect={(item) => {
//                 // const data=this.state.contacts;

//                 const items = this.state.selectedItems;
//               items.push(item)
//               this.setState({ selectedItems:items });
//             }}
//             containerStyle={{ padding: 5 }}
//             onRemoveItem={(item, index) => {
//               const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
//               this.setState({ selectedItems: items });
//             }}
//             itemStyle={{
//               padding: 10,
//               marginTop: 2,
//               backgroundColor: '#ddd',
//               borderColor: '#bbb',
//               borderWidth: 1,
//               borderRadius: 5,
//             }}
//             itemTextStyle={{ color: '#222' }}
//             itemsContainerStyle={{ minHeight: 100 }}
//             items={items}
//             // defaultIndex={2}
//             // chip={true}
//             // resetValue={false}
//             textInputProps={
//               {
//                 placeholder: "placeholder",
//                 underlineColorAndroid: "transparent",
//                 style: {
//                     padding: 12,
//                     borderWidth: 1,
//                     borderColor: '#ccc',
//                     borderRadius: 5,
//                 },
//                 // onTextChange: text => alert(text)
//               }
//             }
//             listProps={
//               {
//                 nestedScrollEnabled: true,
//               }
//             }
//           />
 */}


        {/* </ScrollView> */}
        {/* <SearchableDropdown
          data={this.state.contacts}
          onItemSelect={(item) => {
            // const items = this.state.selectedItems;
            // items.push(item)
            // this.setState({ selectedItems: items });
          }}
            // onItemSelect={(item) => {
            // //  data=this.state.contacts

            // //   const items = this.state.contacts;
            // //   items.push(item)
            // //   this.setState({ selectedItems:contacts });
            // }}
            // containerStyle={{ padding: 5 }}
            // onRemoveItem={(item, index) => {
            //   const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
            //   this.setState({ selectedItems: items });
            // }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            // items={this.state.contacts}
            items={items}
            defaultIndex={2}
            // resetValue={true}
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: text => alert(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        /> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:30,
  },
  phones: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  contact_details: {
    textAlign: 'center',
    color: 'red',
    margin: 10,
  },
});

// // // // sarchbar with  select options

// // // // import React, { Component } from 'react';
// // // // import { View, Text, FlatList, TextInput, ListItem } from 'react-native';

// // // // class FlatListDropDown extends Component {
// // // //   constructor(props) {
// // // //     super(props);

// // // //     this.state = {
// // // //       data: [],
// // // //       value: '',
// // // //     };

// // // //     this.arrayNew = [
// // // //       { name: 'Robert' },
// // // //       { name: 'Bryan' },
// // // //       { name: 'Vicente' },
// // // //       { name: 'Tristan' },
// // // //       { name: 'Marie' },
// // // //       { name: 'Onni' },
// // // //       { name: 'sophie' },
// // // //       { name: 'Brad' },
// // // //       { name: 'Samual' },
// // // //       { name: 'Omur' },
// // // //       { name: 'Ower' },
// // // //       { name: 'Awery' },
// // // //       { name: 'Ann' },
// // // //       { name: 'Jhone' },
// // // //       { name: 'z' },
// // // //       { name: 'bb' },
// // // //       { name: 'cc' },
// // // //       { name: 'd' },
// // // //       { name: 'e' },
// // // //       { name: 'f' },
// // // //       { name: 'g' },
// // // //       { name: 'h' },
// // // //       { name: 'i' },
// // // //       { name: 'j' },
// // // //       { name: 'k' },
// // // //       { name: 'l' },
// // // //     ];
// // // //   }

// // // //   renderSeparator = () => {
// // // //     return (
// // // //       <View
// // // //         style={{
// // // //           height: 1,
// // // //           width: '100%',
// // // //           backgroundColor: '#CED0CE',
// // // //         }}
// // // //       />
// // // //     );
// // // //   };

// // // //   searchItems = text => {
// // // //     const newData = this.arrayNew.filter(item => {
// // // //       const itemData = `${item.name.toUpperCase()}`;
// // // //       const textData = text.toUpperCase();
// // // //       return itemData.indexOf(textData) > -1;
// // // //     });
// // // //     this.setState({
// // // //       data: newData,
// // // //       value: text,
// // // //     });
// // // //   };

// // // //   renderHeader = () => {
// // // //     return (
// // // //       <TextInput
// // // //         style={{ height: 60, borderColor: '#000', borderWidth: 1 }}
// // // //         placeholder="   Type Here...Key word"
// // // //         onChangeText={text => this.searchItems(text)}
// // // //         value={this.state.value}
// // // //       />
// // // //     );
// // // //   };

// // // //   render() {
// // // //     return (
// // // //       <View
// // // //         style={{
// // // //           flex: 1,
// // // //           padding: 25,
// // // //           width: '98%',
// // // //           alignSelf: 'center',
// // // //           justifyContent: 'center',
// // // //         }}>
// // // //         <FlatList
// // // //           data={this.state.data}
// // // //           renderItem={({ item }) => (
// // // //             <Text style={{ padding: 10 }}>{item.name} </Text>
// // // //           )}
// // // //           keyExtractor={item => item.name}
// // // //           ItemSeparatorComponent={this.renderSeparator}
// // // //           ListHeaderComponent={this.renderHeader}
// // // //         />
// // // //       </View>
// // // //     );
// // // //   }
// // // // }

// // // // export default FlatListDropDown;


// // // // import React, { Component } from "react";
// // // // import {
// // // //   PermissionsAndroid,
// // // //   Platform,
// // // //   SafeAreaView,
// // // //   ScrollView,
// // // //   StyleSheet,
// // // //   Text,
// // // //   View,
// // // //   Image
// // // // } from "react-native";
// // // // import Contacts from "react-native-contacts";

// // // // import ListItem from "./src/Component/Test/ListItem/index.js";
// // // // import Avatar from "./src/Component/Test/Avatar/index.js";
// // // // import SearchBar from "./src/Component/Test/ScarchBar/index.js";

// // // // type Props = {};
// // // // export default class App extends Component<Props> {
// // // //   constructor(props) {
// // // //     super(props);

// // // //     this.search = this.search.bind(this);

// // // //     this.state = {
// // // //       contacts: [],
// // // //       searchPlaceholder: "Search"
// // // //     };

// // // //     // if you want to read/write the contact note field on iOS, this method has to be called
// // // //     // WARNING: by enabling notes on iOS, a valid entitlement file containing the note entitlement as well as a separate
// // // //     //          permission has to be granted in order to release your app to the AppStore. Please check the README.md
// // // //     //          for further information.
// // // //     Contacts.iosEnableNotesUsage(true);
// // // //   }

// // // //   async componentDidMount() {
// // // //     if (Platform.OS === "android") {
// // // //       PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
// // // //         title: "Contacts",
// // // //         message: "This app would like to view your contacts."
// // // //       }).then(() => {
// // // //         this.loadContacts();
// // // //       });
// // // //     } else {
// // // //       this.loadContacts();
// // // //     }
// // // //   }

// // // //   loadContacts() {
// // // //     Contacts.getAll((err, contacts) => {
// // // //       if (err === "denied") {
// // // //         console.warn("Permission to access contacts was denied");
// // // //       } else {
// // // //         this.setState({ contacts });
// // // //       }
// // // //     });

// // // //     Contacts.getCount(count => {
// // // //       this.setState({ searchPlaceholder: `Search ${count} contacts` });
// // // //     });
// // // //   }

// // // //   search(text) {
// // // //     const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
// // // //     const emailAddressRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
// // // //     if (text === "" || text === null) {
// // // //       this.loadContacts();
// // // //     } else if (phoneNumberRegex.test(text)) {
// // // //       Contacts.getContactsByPhoneNumber(text, (err, contacts) => {
// // // //         this.setState({ contacts });
// // // //       });
// // // //     } else if (emailAddressRegex.test(text)) {
// // // //       Contacts.getContactsByEmailAddress(text, (err, contacts) => {
// // // //         this.setState({ contacts });
// // // //       });
// // // //     } else {
// // // //       Contacts.getContactsMatchingString(text, (err, contacts) => {
// // // //         this.setState({ contacts });
// // // //       });
// // // //     }
// // // //   }

// // // //   render() {
// // // //     return (
// // // //       <SafeAreaView style={styles.container}>
// // // //         <View
// // // //           style={{
// // // //             paddingLeft: 100,
// // // //             paddingRight: 100,
// // // //             justifyContent: "center",
// // // //             alignItems: "center"
// // // //           }}
// // // //         >
// // // //           {/* <Image
// // // //             source={require("./src/Component/asset/Bird.jpg")}
// // // //             style={{
// // // //               aspectRatio: 6,
// // // //               resizeMode: "contain"
// // // //             }}
// // // //           /> */}
// // // //         </View>
// // // //         <SearchBar
// // // //           searchPlaceholder={this.state.searchPlaceholder}
// // // //           onChangeText={this.search}
// // // //         />
// // // //         <ScrollView style={{ flex: 1 }}>
// // // //           {this.state.contacts.map(contact => {
// // // //             return (
// // // //               <ListItem
// // // //                 leftElement={
// // // //                   <Avatar
// // // //                     img={
// // // //                       contact.hasThumbnail
// // // //                         ? { uri: contact.thumbnailPath }
// // // //                         : undefined
// // // //                     }
// // // //                     placeholder={getAvatarInitials(
// // // //                       `${contact.givenName} ${contact.familyName}`
// // // //                     )}
// // // //                     width={40}
// // // //                     height={40}
// // // //                   />
// // // //                 }
// // // //                 key={contact.recordID}
// // // //                 title={`${contact.givenName} ${contact.familyName}`}
// // // //                 description={`${contact.company}`}
// // // //                 onPress={() => Contacts.openExistingContact(contact, () => { })}
// // // //                 onDelete={() =>
// // // //                   Contacts.deleteContact(contact, () => {
// // // //                     this.loadContacts();
// // // //                   })
// // // //                 }
// // // //               />
// // // //             );
// // // //           })}
// // // //         </ScrollView>
// // // //       </SafeAreaView>
// // // //     );
// // // //   }
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1
// // // //   }
// // // // });

// // // // const getAvatarInitials = textString => {
// // // //   if (!textString) return "";

// // // //   const text = textString.trim();

// // // //   const textSplit = text.split(" ");

// // // //   if (textSplit.length <= 1) return text.charAt(0);

// // // //   const initials =
// // // //     textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);

// // // //   return initials;
// // // // };