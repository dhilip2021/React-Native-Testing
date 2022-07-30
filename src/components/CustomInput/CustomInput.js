import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = (props) => {
    const {value,setValue, placeholder, secureTextEntry} = props;
  return (
    <View style={Styles.container}>
      <TextInput placeholder={placeholder} value={value} onChange={setValue} secureTextEntry={secureTextEntry} />
    </View>
  )
}

const Styles = StyleSheet.create({
    container : {
        backgroundColor:"#ffffff",
        width:"100%",
        borderColor:"#e8e8e8",
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal : 5,
        marginVertical: 5
    },
    input:{

    }
})

export default CustomInput