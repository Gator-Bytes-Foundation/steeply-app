import React, { useRef, useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    TouchableOpacity,
    Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { navigate } from "../helpers/navigation";
import { Ionicons } from '@expo/vector-icons';
import { Box, Center, Container, Flex, HStack, Column, ScrollView } from "native-base";

const { width, height } = Dimensions.get("window");


function Header(props) {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Steeply</Text>
        <Text style={styles.subHeader}>
            Please fill out quiz below
        </Text>
      </View>
    );
}
const styles = StyleSheet.create({

    /*Containers */
    container1: {
        backgroundColor: "white",
        width: width,
        height: height,
        alignItems: "flex-end"
    },
    headerContainer: {
        width: width,
        height: height * 0.25,
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    container2: {
        backgroundColor: "white",
        width: width,
        position:"relative",
        //height: height * 0.65,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 5
    },


    /*Header */
    header: {
        fontFamily: "MoonBold",
        fontSize: 28,
        color: "white"
    },
    subHeader: {
        fontFamily: "TrendaLight",
        fontSize: 17,
        color: "white",
        textAlign: "center",
        marginTop: 20
    },

    /*MENU CARDS STYLES */
    gradient: {
        width: "100%",
        height: "100%",
        borderRadius: 25,
        paddingLeft: 15,
        position:"relative",
        backgroundColor:"white"
    },
    title: {
        alignSelf: "flex-start",
        marginTop: 35,
        fontSize: 30,
        fontFamily: "TrendaSemibold",
        color: "#0E0E0E"
    },
    description: {
        fontSize: 20,
        fontFamily: "TrendaRegular",
        color: "#0E0E0E"
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: "#14284D",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25
    },
    buttonText: {
        fontFamily: "MoonBold",
        fontSize: 13,
        color: "#FFFF"
    },
    icon: {
        fontSize: 17,
        color: "#FFFF",
        marginLeft: 3
    }
});
export default Header;