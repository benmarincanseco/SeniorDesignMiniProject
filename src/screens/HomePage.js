import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import CustomInput from './components/CustomInput';
import CustonButton from './components/CustomButton';
import { TwitterApi } from 'twitter-api-v2';
let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

// Home page of Twitter Bot checker.
const HomePage = () => {

  const [twitterTag, setEmail] = useState('');
// Did not work Cause Twitter API would have to use cors
  async function getUserDetails(username) {
    try {
      let url = "https://api.twitter.com/2/users/by/username/" + username
      let response = await fetch(
        url , {
          method: "GET",
          headers: {"accepts":"*/*","mode": 'no-cors',"Authorization": `Bearer AAAAAAAAAAAAAAAAAAAAANuigwEAAAAAFOIOIg%2Fr2QJLpDw8HjEwjneGwxA%3DiYBHL1O7tX5csabWyebcT7W9t6PJ3CLaeStFRtXKaqeHe7h7V7`}
        }
      );
      let json = await response.json();
      return json;
    } catch (error) {
       console.error(error);
    }
  }
  const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAANuigwEAAAAAFOIOIg%2Fr2QJLpDw8HjEwjneGwxA%3DiYBHL1O7tX5csabWyebcT7W9t6PJ3CLaeStFRtXKaqeHe7h7V7');
  const readOnlyClient = twitterClient.readOnly;
  async function getUserDetail(username) {
    const user = await readOnlyClient.v1.userByUsername(username);
    return user
  }
  const onLoginPress = () => {
    
    console.log(twitterTag);
    let resp1 = getUserDetail(twitterTag);
    console.log(JSON.stringify(resp1));
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