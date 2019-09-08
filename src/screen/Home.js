import React, { Component } from "react";
import { Platform, StyleSheet, Text, View ,Dimensions} from "react-native";
import Map from './Map';
export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Map />
            </View>
        );
    }
}
const styles = StyleSheet.create({ 
    container: {  
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'}
});