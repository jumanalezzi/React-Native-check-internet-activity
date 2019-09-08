import React, { Component } from "react";
import { Platform, StyleSheet, Text, View ,Button} from "react-native";
import Spinner from 'react-native-spinkit';
import I18n from '../I18n';

const language = [
    {lang : "English" , code : "en" },
    {lang : "عربـي" , code : "ar" }
  ]; 
export default class NoConction extends Component{
    constructor(props){
        super(props);
        this.state = {
          
          Languages : [],
          Masseg : I18n.t("conctinError"),
         
        }
        
        
      }
      onSelectLanguage(langCode){
        I18n.locale = langCode;
        this.setState({
            Masseg : I18n.t("conctinError")
        });
        
        
      }
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.noConction}>
              <Text style={styles.noConctiontext} >
                {this.state.Masseg}
              </Text>
              <View style={{flexDirection:'row'}}>
                 <Text style={styles.buttontranslate}
                 onPress={() => this.onSelectLanguage("en")}>
                 {language[0].lang}
                 </Text>
                 <Text style={styles.buttontranslate}
                 onPress={() => this.onSelectLanguage("ar")}>
                 {language[1].lang}
                 </Text>
              </View>
             
              
            </View>
          
            <View style={{height:'50%',justifyContent:'center'}}>
              <Spinner color={'#9e0b0d'}  size={150} type={'ChasingDots'} />
            </View>
            
          </View>
        );
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
         paddingTop:5,
         width :100,
         borderRadius:5,
         borderWidth:1,
         borderStyle:'solid',
         borderColor:'#fff'
        }
 
       });
 