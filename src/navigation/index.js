import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../screens/LoginPage';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <View style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Signin" component={LoginPage} />
                    <Stack.Screen name="HomeScreen" component={HomePage} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>

    )
}

export default Navigation