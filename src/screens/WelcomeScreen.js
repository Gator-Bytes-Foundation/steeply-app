import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import styled from 'styled-components/native'


const ButtonText=styled.Text`
    font-size:20px;
    text-align:center;
    color:${props=>props.white?"white":"black"};
    fontFamily: "MoonLight";
    fontSize: 20;
`


const WelcomeScreen = ({ navigation }) => {

    //LogBox.ignoreAllLogs(); // reactive-native

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../images/welcome.png")} />
            </View>

            <View style={styles.form}>

                <Text style={styles.header1}>WELCOME</Text>
                <Text style={styles.header2}>to the Steeply App</Text>

                <TouchableOpacity style={styles.authButton1} onPress={() => navigation.navigate("Menu")}>
                    <ButtonText>Steep In</ButtonText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.authButton2} onPress={() => navigation.navigate("Signup")}>
                    <ButtonText white>About Steeply</ButtonText>
                </TouchableOpacity>
            </View>
        </View>
    );

};



const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
    },

    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        height: "60%",
        paddingTop: 40
    },

    image: {
        resizeMode:'contain',
        minWidth: 500,
        minHeight: 400,
        marginTop: 25
    },


    form: {
        width: "88%",
        height: "35%",
        alignItems: "center",
    },

    header1: {
        fontFamily: "TrendaLight",
        fontSize: 50
    },

    header2: {
        fontFamily: "TrendaLight",
        fontSize: 25,
    },

    authButton1: {
        width: 330,
        height: 60,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        marginTop: 12,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
    },

    authButton2: {
        width: 330,
        height: 60,
        backgroundColor: "#1B79D7",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        marginTop: 12,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
    }
});





/* screen navigation options
 -not showing a header at the top
 -making a background color for the default screen white*/
WelcomeScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}




export default WelcomeScreen;