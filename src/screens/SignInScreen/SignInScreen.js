import React,{useState} from 'react';
import { View, Text, Image, StyleSheet,useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import Logo1 from '../../../assets/images/LOGO_B_1.png';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} =useWindowDimensions();

    const onPressSigninEvent = () =>{
        console.warn('sign in ')
    }
    const onPressForgotEvent = () =>{
        console.warn('Forget Password')
    }
    const onPressGoogleEvent = () =>{
        console.warn('google')
    }
    const onPressFacebookEvent = () =>{
        console.warn('Facebook')
    }
    const onPressAppleEvent = () =>{
        console.warn('Apple')
    }
    const onPressSignUpEvent = () =>{
        console.warn('Sign Up ')
    }
    
  return (
    <View style={Styles.root}>
      
      <Image source={Logo1} style={[Styles.logo, {height : height * 0.3}]} resizeMode="contain" />
      <CustomInput placeholder="Username" value={username} setValue={setUsername}  />
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
      <CustomButton text="Sign In" onPress={onPressSigninEvent} type="PRIMARY" />
      <CustomButton text="Forgot Password" onPress={onPressForgotEvent} type="SECONDARY" />
      <CustomButton text="Sign In with Google" onPress={onPressGoogleEvent} type="PRIMARY" bgColor="#E7EAF4" fgColor="#4765A9" />
      <CustomButton text="Sign In with Facebook" onPress={onPressFacebookEvent} type="PRIMARY" bgColor="#FAE9EA" fgColor="#DD4D44" />
      <CustomButton text="Sign In with Apple" onPress={onPressAppleEvent} type="PRIMARY" bgColor="#e3e3e3" fgColor="#363636" />
      <CustomButton text="Don't have an account? Create one" onPress={onPressSignUpEvent} type="SECONDARY" />
     
      


    </View>
  )
}
const Styles = StyleSheet.create({
    root:{
        alignItems:"center",
        padding:40,
    },
    logo:{
        width:"100%",
        height:100,
        maxHeight:300,
        maxWidth:200
    }
})

export default SignInScreen