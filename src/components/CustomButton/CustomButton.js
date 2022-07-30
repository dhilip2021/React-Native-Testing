import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    const {onPress, text, type, bgColor, fgColor} = props
  return (
    <Pressable onPress={onPress} style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor : bgColor} : {}
        ]}>
      <Text style={[
        styles.text, 
        styles[`text_${type}`],
        fgColor ? {color : fgColor} : {}
        ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container : {

width:"100%",
padding:15,
marginVertical:5,
alignItems:"center",
borderRadius:5
    },
    container_PRIMARY:{
        backgroundColor:"#3b71f3",
    },
    container_SECONDARY:{
        // backgroundColor:"#3b71f3",
    },
    text:{
        fontWeight:'bold',
       
    },
    text_PRIMARY:{
        color:'white'
    },
    text_SECONDARY:{
        // backgroundColor:"#3b71f3",
    },
})
export default CustomButton