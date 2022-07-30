/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {
   SafeAreaView,
   StyleSheet,
   Text,
   useColorScheme,
   ScrollView
 } from 'react-native';
 import SignInScreen from './src/screens/SignInScreen';
 
 
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
 
   return (
     <SafeAreaView style={styles.root}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SignInScreen />
      </ScrollView>
         
       
       
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   root:{
     flex: 1,
     backgroundColor:"#f9fbfc"
   }
 });
 
 export default App;
 