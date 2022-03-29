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
//import * as firebase from "firebase";
//import "firebase/firestore";
import { Ionicons } from '@expo/vector-icons';
import TeamSection from "../components/TeamSection";
import { Box, Center, Container, Flex, HStack, Column, ScrollView } from "native-base";
import { blue, navy, agua, teal, yellow, purple, lightPurple, orange, darkOrange, coral, lightBlue, green } from "../helpers/colors"
//import brain from "../images/brain.png"; 

const { width, height } = Dimensions.get("screen");



const PHOBIA_IMAGE_HEIGHT = 135;
const ITEM_SIZE = height * 0.20 + 50;

const MenuScreen = (props) => {
    console.log(props.route.params)
    const educationLesson = {
        name:"Navigating School",
        description:"Keeping up with your academics.",
        img: require('../images/education.png'),
        infoTitle:"social title",
        info:"info",
        startGradient: purple,
        endGradient:lightPurple
    };
    const dietLesson = {
        name:"Diet & Nutrition",
        description:"Get strong through the food you eat!",
        img: require('../images/diet.png'),
        infoTitle:"diet title",
        info:"info",
        startGradient:green,
        endGradient:agua
    };
    const exerciseLesson = {
        name:"Exercise",
        description:"Stretches, tips, and fun facts about staying fit!",
        img: require('../images/exercise.png'),
        infoTitle:"exercise title",
        info:"info",
        startGradient:blue,
        endGradient:teal,
        key: props.route.params//.state.key
    };
    const symptomLesson = {
        name:"Side Effect Management",
        description:"Managing your symptoms.",
        img: require('../images/symptom.png'),
        infoTitle:"social title",
        info:"info",
        startGradient:navy,
        endGradient:lightBlue
    };
    const socialLesson = {
        name:"Stay Connected",
        description:"Connecting with friends, family, and others along your journey.",
        img: require('../images/social.png'),
        infoTitle:"social title",
        info:"info",
        startGradient:coral,
        endGradient:darkOrange
    };
    const medLesson = {
        name:"Med Management",
        description:"Managing your medications.",
        img: require('../images/med.png'),
        infoTitle:"social title",
        info:"info",
        startGradient:darkOrange,
        endGradient:yellow
    };
    //animation managing
    const scrollY = useRef(new Animated.Value(0)).current;
    let initLessons = [exerciseLesson,dietLesson,educationLesson,socialLesson,symptomLesson,medLesson]
    //all data from lessons collection is stored here on first component render
    const [lessons, setLessons] = useState(initLessons);
    const [user, setUser] = useState(null);

    //calls once on first component render
    useEffect(() => {
        var newArray = [];
        //setLessons([]);
        /*var db = firebase.firestore();
        var storage = firebase.storage();
        db.collection("lessons").get().then((querySnapshot) => {
            querySnapshot.forEach((document) => {

                //helper
                // storage.ref('FearSpaces.png').getDownloadURL()
                //     .then((url) => {
                //         console.log(url);
                //     })
                newArray.push({ id: document.id, data: document.data() });
            });
            });*/

        async function getUserInfo() {
            setUser({ id: "testId", userData: "testData" });
            /*
            var userID = firebase.auth().currentUser.uid;
            await firebase.firestore().collection("users").doc(userID).get().then((doc) => {
                var userData = doc.data();
                setUser({ id: userID, userData: userData });
            });*/
        }
        getUserInfo();
    }, []);




    //method for fetching a phobia and navigating to home 
    const getLesson = (lesson) => {
        props.navigation.navigate(lesson.name,lesson);
        /*firebase.firestore().collection("lessons").doc(phobiaID).get().then((doc) => {
            navigate("Home", { phobia: doc.data(), user: user });
        });*/
    }


    return (
        <LinearGradient start={[0.2, 0.5]} end={[1.6, 0.5]} colors={["#408BC0", "#0F2F6A"]} style={styles.container1} >
            {/*HEADER CONTAINER*/}
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Steeply</Text>
                <Text style={styles.subHeader}>
                    Choose a category to start learning!
                </Text>
            </View>

            {/*LIST CONTAINER*/}
            <View style={styles.container2}>
                <Animated.FlatList
                    data={lessons}
                    onScroll={Animated.event(
                        [{ nativeEvent: { 
                            contentOffset: { y: scrollY } } 
                        }],
                        { useNativeDriver: true }
                    )}
                    
                    showsVerticalScrollIndicator={true}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) => {

                        /*  FlatList Animation Reference code */
                        const inputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index,
                            ITEM_SIZE * (index + 1.4)
                        ]
                        const opacityInputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index,
                            ITEM_SIZE * (index + 0.9)
                        ]
                        const scale = scrollY.interpolate({
                            inputRange,
                            outputRange: [1, 1, 1, 0]
                        })
                        const opacity = scrollY.interpolate({
                            inputRange: opacityInputRange,
                            outputRange: [1, 1, 1, 0]
                        })
                        /*  FlatList Animation Reference code */
                        return (    
                            <Animated.View style={{ width: width * 0.85, height: height * 0.20, flexDirection:'row', marginBottom:20, marginTop: 25, borderRadius: 25, transform: [{ scale }], opacity }}>
                                <LinearGradient start={[0.2, 0.5]} end={[1.4, 0.5]} colors={[String(item.startGradient), String(item.endGradient)]} style={styles.gradient} >
                                    <Column w="75%" h="100%" justifyContent="flex-start">
                                        <Text style={styles.title}>{item.name}</Text>
                                        <Text style={styles.description}>{item.description}</Text>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => getLesson(item)}
                                        >
                                            <Text style={styles.buttonText}>Start</Text>
                                            <Ionicons name="ios-play" style={styles.icon} />
                                        </TouchableOpacity>    
                                    </Column>
                                    <Column w="25%" h="100%">
                                        <Image source={item.img} style={styles.lessonImg} />
                                    </Column>
                                </LinearGradient>
                            </Animated.View>
                        );
                    }}
                />
            </View>

        </LinearGradient>
    );

};





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
        height: height * 0.20,
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    container2: {
        backgroundColor: "#FFF0f3",
        width: width,
        flex:1,
        position:"relative",
        maxHeight: height * 0.60,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10
    },

    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height:"1000px",
        paddingBottom: 50
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
        height:"100%",
        borderRadius: 25,
        position:"relative",
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"flex-start"
    },
    title: {
        marginTop: 35,
        fontSize: 30,
        fontFamily: "TrendaSemibold",
        paddingLeft: 15,
        color: "#eeeeee"
    },
    description: {
        fontSize: 20,
        fontFamily: "TrendaRegular",
        color: "#eeeeee",
        paddingLeft: 15
    },
    lessonImg: {
        alignSelf: "flex-end",
        width:"100%",
        marginTop:0,
        minHeight: PHOBIA_IMAGE_HEIGHT,
        height:"100%",
        resizeMode: "contain",
        margin:20,
    },
    button: {
        width: 100,
        height: 40,
        marginTop:"auto",
        backgroundColor: "#14284D",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
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



//navigationOptions of screen used to modify header style
MenuScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}



export default MenuScreen;