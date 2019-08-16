import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
        </View>
    )
} 

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3},
        shadowColor: '#171717',
    },
    input: {

    },
})


export default InputBar;