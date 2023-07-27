import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Link, Center } from "native-base";
import styled from 'styled-components/native'


const ButtonText=styled.Text`
    font-size:20px;
    text-align:center;
    color:${props=>props.white?"white":"black"};
    fontSize: 20px;
`


const WelcomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../images/welcome.png")} />
            </View>
            <Text style={styles.header2}>A family guide</Text>
            <Text style={[styles.header2,styles.mb1]}>for battling cancer</Text>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.authButton1} onPress={() => navigation.navigate("Menu")}>
                    <ButtonText style={{ fontFamily: 'MoonLight', fontSize: 20 }}>Steep In</ButtonText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.authButton2} onPress={() => navigation.navigate("OnBoard")}>
                    <ButtonText white>About Steeply</ButtonText>
                </TouchableOpacity>
                <Center>
                    <Text marginTop={30} style={styles.subText}>
                        for Jacquilne, Chris, Marlene, & Cameron, Thank you 
                    </Text>
                    <Link href="https://steeply.org/references.html">References</Link>
                </Center>
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
        height: "50%",
        paddingTop: 40
    },
    image: {
        resizeMode:'contain',
        maxWidth:"90%",
        minWidth: 300,
        minHeight: 400,
        marginTop: 25
    },

    mb1: {
        marginBottom: 10
    },
    buttonGroup: {
        width: "88%",
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
    subText: {
        margin: 30,
        fontFamily: "TrendaLight",
        fontSize: 12,
        textAlign: "center",
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
 -making a background color for the default screen white
WelcomeScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}*/

export default WelcomeScreen;