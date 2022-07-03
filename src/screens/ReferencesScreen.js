import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { navigate } from "../helpers/navigation";
import { Ionicons } from '@expo/vector-icons';
import References from "../components/References";
import { Box, Center, Container, Flex, HStack, Column, ScrollView } from "native-base";
//import brain from "../images/brain.png"; 

const { width, height } = Dimensions.get("screen");

const ReferencesScreen = (props) => {

    return (
        <LinearGradient start={[-0.6, -0.3]} end={[0.8, 0.5]} colors={["#408BC0", "#0F2F6A"]} style={styles.container1} >
        <ScrollView>
            {/*HEADER CONTAINER*/}
            <View style={styles.headerContainer}>
                <Text style={styles.header}>References</Text>
                <Text style={styles.subHeader}>
                    All information sources used for lesson materials
                </Text>
            </View>
            <Center>
                <References/>
            </Center>
          </ScrollView>   
        </LinearGradient>
    );
};



const styles = StyleSheet.create({
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
    }
});

export default ReferencesScreen;