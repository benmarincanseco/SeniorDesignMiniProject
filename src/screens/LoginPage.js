import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { signInWithGoogle } from '../Firebase';

import CustomInput from './components/CustomInput';
import CustonButton from './components/CustomButton';
import { useNavigation } from '@react-navigation/native';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onLoginPress = () => {
    console.log("Login");

    navigation.navigate('HomeScreen');
    // Authentication below
    //{signInWithGoogle()};
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Twitter Bot Checker! </Text>
      </View>

      <Text style={styles.text}>
        This is a login page.
      </Text> 

      <CustomInput 
        placeholder = "Email"
        value = {email}
        setValue = {setEmail} 
      />
      <CustomInput
        placeholder = "Password"
        value = {password}
        setValue = {setPassword}
        secureTextEntry = {true}
      />
      <CustonButton text = "Login" onPress = {onLoginPress}/>
      <CustonButton text = "Sign in with Google" onPress = {onLoginPress}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BDE1B9',
    position: 'absolute'
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center',
    fontFamily: 'Futura, Futura'
  },
  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center',
    fontFamily: 'Futura, Futura'
  },
  code: {
    fontFamily: 'monospace, monospace'
  }
});

export default LoginPage;