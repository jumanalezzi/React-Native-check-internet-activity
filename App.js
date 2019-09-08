/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View ,Button} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import Home from './src/screen/Home';
import NoConction from './src/screen/NoConction';


 

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isConnected: true,
      
    }
    
  }
  
 
  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected : isConnected });
    } else {
      this.setState({isConnected : isConnected });
    }
  };

 
  render() {
    if (!this.state.isConnected) {
      return <NoConction />;
    }
    return <Home />;
  }
  
}
const styles = StyleSheet.create({ 
   container: {  
       flex: 1,
      
       alignItems: 'center',
       backgroundColor: '#F5FCFF'},
       noConction:{
         width:'100%',
         alignItems: 'center',
         color:'#fff',
         paddingEnd:30,
         paddingStart:30,
         paddingTop:30,
         paddingBottom:10,
         backgroundColor:'#9e0b0d'
       },
       noConctiontext:{
         fontSize:25,
         color:'#fff',
         textAlign:'center',
         marginBottom:10
       },
       buttontranslate:{
        fontSize:20,
        color:'#fff',
        textAlign:'center',
        marginEnd:30,
        marginStart:30,
        paddingBottom:5,
        paddingTop:5
       }

      });


