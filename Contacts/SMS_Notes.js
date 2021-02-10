import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

// import Main from './src/Component/Todo/Main.js';

export default class WhatsApp_notes extends React.Component{
  render(){
    return(
        <View key={this.props.keyval}
            style={styles.note}
        >
            <Text style={[styles.noteText],{fontWeight:'bold'}}>{this.props.val.Time}</Text>
            <Text style={styles.noteText}>{this.props.val.note}</Text>

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