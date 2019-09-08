import React, { Component } from 'react';
import {  View, StyleSheet,Dimensions,Text} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geclocation from '@react-native-community/geolocation';
import Spinner from 'react-native-spinkit';
export default class Map extends Component {
  static tt =null;
 constructor(props){
   super(props);
   this.state ={
      location :{
      latitude:0,
      longitude:0,
      latitudeDelta:0,
      longitudeDelta:0
     },
     errormsg :null,
     loading : false
   }
 }
 
 
 componentDidMount() {
  
     Geclocation.getCurrentPosition(
      position=>{
        let currentlocation ={
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta:0.01,
          longitudeDelta:0.01
        }
         this.setState({
            location: currentlocation,
            loading : true
         });
        
      },
      error => this.setState({errormsg:error.message}),
     { timeout :20000, maximumAge:20000 });
   
     
    
  }

  
  render() {
    
   if(this.state.loading){
    return (
      
        <View style={styles.container} >
         <MapView.Animated
         style={styles.map}
         provider = {PROVIDER_GOOGLE}
         region ={this.state.location}
         showsUserLocation={true}>
           <MapView.Marker
             coordinate={this.state.location}
             
           />
          
         </MapView.Animated>
         
         </View>
     );
   }
    return (
      
        <View style={styles.spinner} >
          <Spinner color={'#9e0b0d'}  size={150} type={'ChasingDots'} />
          <Text style={{fontSize:20,color:'#9e0b0d'}}> Wating...</Text>
         </View>
     );
   
    
   
  }
}

const styles = StyleSheet.create({
    spinner:{
        flex: 1,
        width:Dimensions.get("window").width,
        justifyContent:'center',
        alignItems:'center'
       
    },
  container: {
    flex: 1,
    width:Dimensions.get("window").width,
    justifyContent:'flex-end',
   
    backgroundColor: '#ecf0f1',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    
  },
 
});
