import React, { Component } from "react";
import { Platform, StyleSheet, Text, View ,Dimensions} from "react-native";
import I18n from '../I18n';
export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize:30}}>{I18n.t("lang")}</Text>
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