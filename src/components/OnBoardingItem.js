import React, { useState,useEffect } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View,useWindowDimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

function OnBoardingItem({ item }) {
    const navigation = useNavigation(); 
    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let [width, setWidth] = useState(dimenWidth);
    let [height, setHeight] = useState(dimenHeight);
    let styles = onBoardingStyles(width,height);
    useEffect(() => {

    }, []);

    const renderHelper = (object) => {

        if (object.id == "1")
            return (
                <View style={[styles.container]}>
                    <Image source={object.image2} style={styles.cloud}></Image>
                    <Text style={styles.description1}>{object.description}</Text>
                    <Image source={object.image1} style={styles.image1} />
                </View>
            );
        else if (object.id == "2")
            return (
                <View style={[styles.container]}>
                    <Image source={object.image2} style={styles.image2} />
                    <Text style={styles.description2}>{object.description}</Text>
                </View>
            );
        else if (object.id == '3')
            return (
                <View style={[styles.container]}>
                    <Text style={styles.description3}>{object.description}</Text>
                    <Image source={object.image3} style={styles.image1} />
                </View>
            );
        else if (object.id == '4')
            return (
                <View style={[styles.container]}>
                    <Image source={object.image4} style={styles.image4} />
                    <Text style={styles.description4}>{object.description}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Menu")}>
                        <Text style={styles.buttonText}>Get Started</Text>
                        <AntDesign name="arrowright" size={24} color="white" style={{ marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>
            );
    }

    return (
        renderHelper(item)
    );

};


const onBoardingStyles = (w,h) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        maxWidth:w
    },

    //ITEM 1 STYLES
    cloud: {
        width: w * 0.95,
        height: h * 0.38,
        alignSelf: "flex-end",
        resizeMode: "stretch",
        marginTop: 35
    },
    image1: {
        width: w * 0.6,
        height: h * 0.45,
        alignSelf: "flex-start",
        resizeMode: "contain",
        marginLeft: 20,
        marginTop:-30,
        marginBottom: 30
    },
    description1: {
        position: "absolute",
        marginTop: 60,
        top: 0,
        marginHorizontal: 50,
        textAlign: "center",
        fontFamily: "TrendaRegular",
        fontSize: 25,
        color: "#14284D"
    },
    //ITEM 2 STYLES
    image2: {
        width: w,
        resizeMode: "contain"
    },
    description2: {
        marginHorizontal: 5,
        textAlign: "center",
        fontFamily: "TrendaRegular",
        fontSize: 25,
        color: "#14284D",
        marginBottom: 10
    },



    //ITEM 3 STYLES
    image3: {
        alignSelf: "flex-start",
        width: w * 0.9,
        height: h * 0.4
    },

    description3: {
        marginHorizontal: 10,
        textAlign: "center",
        fontFamily: "TrendaRegular",
        fontSize: 20,
        color: "#14284D",
        marginTop: h * 0.05
    },




    //ITEM 4 STYLES
    image4: {
        width: w * 0.9,
        height: h * 0.4,
        resizeMode: "contain"
    },

    description4: {
        marginHorizontal: 5,
        textAlign: "center",
        fontFamily: "TrendaRegular",
        fontSize: 23,
        color: "#14284D",
        marginTop: 15
    },


    button: {
        width: w * 0.4,
        height: h * 0.07,
        backgroundColor: "#EC206A",
        borderRadius: 20,
        position: "absolute",
        bottom: 0,
        right: w / 3.5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },


    buttonText: {
        color: "white",
        fontFamily: "TrendaRegular",
        fontSize: 17
    }
});



export default OnBoardingItem;