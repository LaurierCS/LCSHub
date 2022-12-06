import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CustomButton = (props) => {
    return(
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={onClick} style={styles.button}>
                    <Text style={styles.buttonText}>{props.title}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const onClick = () => {
    //what to do on button click
}

export default CustomButton;
const styles = StyleSheet.create({
    container :{
        padding : 15
    },

    button :{
        borderRadius : 10,
        padding : 10,
        backgroundColor : '#00D1FF',
    },

    buttonText :{
        color : '#0A0908',
        fontFamily : 'Arial', //couldn't find the Lato font we agreed, so just left it standard for now
        alignItems : 'center',
    }
})