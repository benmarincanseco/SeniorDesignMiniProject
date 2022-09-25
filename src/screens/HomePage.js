import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import CustomInput from './components/CustomInput';
import CustonButton from './components/CustomButton';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

// Home page of Twitter Bot checker.
const HomePage = () => {

  const [twitterTag, setEmail] = useState('');

  const onLoginPress = () => {
    console.log(twitterTag);
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Twitter Bot! </Text>
      </View>

      <Text style={styles.text}>
        This is a home page.
      </Text> 

      <CustomInput 
        placeholder = "Twitter Tag"
        value = {twitterTag}
        setValue = {setEmail} 
      />

      <CustonButton text = "Check" onPress = {onLoginPress}/>

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

export default HomePage;