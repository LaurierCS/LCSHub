import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Linking} from 'react-native';
// import FetchData from './Display_Resource';

const CustomButton = (props) => {
    return(
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => Linking.openURL(props.URL)} style={styles.button}>
                    <Text style={styles.buttonText}>{props.Text}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function onClick(URL) {
    //what to do on button click
    Linking.openURL(URL);
}

export default CustomButton;

const styles = StyleSheet.create({
    container :{
        paddingTop : 10
    },

    button :{
        width : 160,
        height: 40,
        borderRadius : 10,
        padding : 10,
        backgroundColor : 'black',
    },

    buttonText :{
        color : '#00D1FF',
        alignItems : 'center',
        textAlign : 'center'
    }
})