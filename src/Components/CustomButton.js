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

export default CustomButton;

const styles = StyleSheet.create({
    container :{
        paddingTop : 10
    },

    button :{
        width : 230,
        height: 45,
        borderRadius : 10,
        padding : 10,
        backgroundColor : 'black',
    },

    buttonText :{
        color : '#90DBF4',
        alignItems : 'center',
        textAlign : 'center'
    }
})