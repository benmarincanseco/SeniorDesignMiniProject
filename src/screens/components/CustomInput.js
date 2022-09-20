import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style = {styles.container}>
            <TextInput 
            value = {value}
            onChangeText = {setValue}
            placeholder = {placeholder} 
            style = {styles.input} 
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '20',
        borderColor: '#E2E2E2',
        borderWidth: 1,
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
    },
    input: {},
});

export default CustomInput