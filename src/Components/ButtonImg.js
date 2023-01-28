import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import REACT_LOGO from "../Assets/reactlogo.png"
import MENU_ICON from "../Assets/menuIcon.png"

const ButtonImg = () =>{
    return(
        <View>
            <TouchableOpacity style={styles.buttonWrapper}>
            {/* the below fires twice upon load */}
                <View onPress={console.log("click action")}>
                    <Image source={REACT_LOGO} style={styles.img}/>
                    <Text style={styles.buttonSubtext}>React Workshop</Text>
                    <View style={styles.readWrapper}>
                        <Image source={MENU_ICON} style={styles.menuIcon}/>
                        <Text style={styles.buttonSubtext}>Read</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        padding: 12,
        marginTop: 20,
        borderColor: 'black',
        backgroundColor: '#90DBF4',
        borderWidth: 1,
        borderRadius: 12,
        maxWidth: "50%"
    },
    img: {
        marginLeft: 15
    },
    buttonSubtext: {
        fontFamily: 'Arial',
        paddingTop: 10,
        paddingLeft: 5
    },
    menuIcon: {
        marginTop: 10,
    },
    readWrapper: {
        flexDirection: 'row'
    }
})
export default ButtonImg