import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Link, Center, Text } from "native-base";
import styled from 'styled-components/native'

const ButtonText=styled.Text`
    color: ${props=>props.white?"white":"#095997"};
    font-size: 21px;
    fontFamily: 'MoonBold';
    text-align: center;
`

const WelcomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Center style={styles.imageContainer} mb={4}>
                <Image style={styles.image} source={require("../images/welcome.png")} />
            </Center>
            <View style={styles.contentContainer}>
                <Center >
                    <Text style={styles.header} my={2}>A family guide</Text>
                    <Text style={styles.header} my={2}>for battling cancer</Text>
                </Center>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.authButton1} onPress={() => navigation.navigate("Menu")}>
                        <ButtonText >Steep In</ButtonText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.authButton2} onPress={() => navigation.navigate("OnBoard")}>
                        <ButtonText white>About Steeply</ButtonText>
                    </TouchableOpacity>
                </View>
                <Center>
                    <Text mt={10} style={styles.subText}>
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
    },

    imageContainer: {
        maxWidth: "100%",
        flexBasis: 310,
        flexGrow: 0,
        flexShrink: 1,
        paddingTop: 40
    },
    image: {
        resizeMode:'contain',
        maxWidth: "75%",
        margin: 10
    },

    contentContainer: {
        flexBasis: "auto",
        flexGrow: 1,
        flexShrink: 0,
        alignItems: "center",
    },

    buttonGroup: {
    },
    header: {
        fontFamily: "TrendaLight",
        fontSize: 25,
        lineHeight: 25,
    },
    subText: {
        margin: 30,
        fontFamily: "TrendaLight",
        fontSize: 14,
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