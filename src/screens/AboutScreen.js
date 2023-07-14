import React, { useRef, useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TeamSection from "../components/TeamSection";
import { ScrollView } from "native-base";

const { width, height } = Dimensions.get("screen");

const AboutScreen = (props) => {


    return (
        <LinearGradient start={[-0.6, -0.3]} end={[0.8, 0.5]} colors={["#408BC0", "#0F2F6A"]} style={styles.container1} >
        <ScrollView>
            {/*HEADER CONTAINER*/}
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Meet The Team!</Text>
                <Text style={styles.subHeader}></Text>
            </View>
            <TeamSection/>
          </ScrollView>   
        </LinearGradient>
    );

};


const styles = StyleSheet.create({

    description: {
        fontFamily: "TrendaLight"
    },
    /*Containers */
    container1: {
        backgroundColor: "white",
        width: width,
        height: height,
        alignItems: "flex-end"
    },
    headerContainer: {
        width: width,
        height: height * 0.20,
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

    gradient: {
        width: "100%",
        height: "100%",
        borderRadius: 25,
        paddingLeft: 15,
        position:"relative",
        backgroundColor:"white"
    }
});

export default AboutScreen;