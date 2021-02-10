import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  Dimensions
} from 'react-native';

// import Main from './src/Component/Todo/Main.js';
const {width,height} = Dimensions.get('screen')

export default class Public_notes extends React.Component{
  render(){
    return(
        <View key={this.props.keyval}
            style={styles.note}
        >
{/* <ImageBackground source={require('../asset/flower.jpeg')} blurRadius={20} style={{width:width,height:height,top:0,position:'absolute'}} /> */}

            <Text style={[styles.noteText],{fontWeight:'bold'}}>{this.props.val.user}</Text>
            <Text style={styles.noteText}>{this.props.val.message}</Text>

            <TouchableOpacity onPress={this.props.deleteMethod}
                style={styles.notesDelete}
            >
                <Text style={styles.notesDeleteText}>D</Text>
            </TouchableOpacity>
        </View>
      )
  }
}

const styles = StyleSheet.create({
    note:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#ededed'
    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:'#E91E63',

    },
    notesDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2980b9',
        padding:10,
        top:10,
        // botom:10,
        right:10,
    },
    notesDeleteText:{
        color:'white',
    }
})