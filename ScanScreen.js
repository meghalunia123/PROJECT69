import React from "react";
import {View,Text, TouchableOpacity, StyleSheet, Image,  } from 'react-native';
import * as Permissions from 'expo-permissions';


export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions : null,
            scanned : false,
            scannedData : '',
            buttonState : 'normal'
        }
    }


getCameraPermissions=async(id)=>{

    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
        hasCameraPermissions:status==="granted",
        buttonState:id,
        scanned:false
    })
}

handleBarCodeScanned=async({type,data})=>{
    this.setState({
            scanned:true,
            scannedData:data,
            buttonState:'normal'

        })
      }
   
    
render(){
    return(
        <View>
         <Image
         source={require('../assets/barcodeScannerIMG.jpg')}
         style  = {{width:200 , height:200}}
         />
       <View>
            <TouchableOpacity
           onPress = {this.getCameraPermissions}
           style = {styles.scanButton}
           title = "Bar Code Scanner">
           <Text style={styles.buttonText}>Scan QR Code</Text>
         </TouchableOpacity>
        </View>
        </View>
    )
}
}
const styles = StyleSheet.create({
    scanButton:{
        backgroundColor:'#2196F3',
        padding:10,
        margin:10,
       },
       buttonText:{
           fontSize:15,
           textAlign :'center',
           marginTop:10,
       }
})