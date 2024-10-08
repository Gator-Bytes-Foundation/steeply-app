import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList, Dimensions, Alert, TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import TaskCard from "../components/TaskCard";
import DailyTasks from "../components/DailyTasks";

const { width, height } = Dimensions.get("screen");


function HomeScreen(props) {

    const testPhobia = {
        name:"scary",
        imageURL:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png",
        infoTitle:"scary title",
        info:"info"
    };

    const message = props.navigation.state?.params.message;

    
    const phobia = props.navigation?.state?.params?.phobia || testPhobia;

    const [user, setUser] = useState();


    //method to fetch user's data from firebase
    const getUserData = () => {
        setUser({ id: "testId", userData: "testData" });
        /*var userID = firebase.auth().currentUser.uid;
        firebase.firestore().collection("users").doc(userID).get().then((doc) => {
            var userData = doc.data();
            setUser({ id: userID, userData: userData });
        });*/
    };


    useEffect(() => {

        //first time screen gets rendered we get the user's data
        getUserData();
        //any other time screen got focus we call this didFocus listener to catch the newest user data
        const listener = props.navigation.addListener("didFocus", () => {
            getUserData();
        });

        if (message)
            Alert.alert("Congratulations", message);

        return () => {
            listener.remove();
        };
    }, [message]);


    return (
        <View style={styles.container}>

            {/*Header section*/}
            <View style={styles.header}>
                {user ? <Text style={styles.headerText}>Hello {user.userData.fullName}</Text> : null}
                <TouchableOpacity style={styles.touchable}>
                    {user ? <Image style={styles.image} source={!user.userData.profileImageURL ? require("../images/noProfile.png") : require("../images/noProfile.png")} /> : null}
                </TouchableOpacity>
            </View>

            {/*Daily tasks section*/}
            <View style={styles.tasksContainer} >
                <Text style={styles.title}>Your daily tasks</Text>

                <FlatList
                    bounces={false}
                    scrollEventThrottle={16}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={DailyTasks}
                    keyExtractor={(item) => `${item.id}`}

                    renderItem={({ item }) => {
                        return <TaskCard
                            phobiaName={phobia.name}
                            description={item.description}
                            imageURL={phobia.url}
                            type={item.type}
                            navigation={props.navigation}
                            infoTitle={phobia.infoTitle}
                            info={phobia.info}
                        />
                    }}
                />
            </View>

        </View>
    );

};






const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center"
    },


    //header styles
    header: {
        height: height * 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        paddingTop: 10,
        marginTop: 30,
        marginBottom: 20
    },
    headerText: {
        width: width * .7,
        fontSize: 25,
        fontFamily: "TrendaSemibold",
        fontWeight: "600",
        color: "black",
        textAlign: "center",
    },
    image: {
        width: 70,
        height: 65,
        borderRadius: 18,
        backgroundColor: "lightgray",
    },


    touchable: {
        width: 70,
        height: 65,
        borderRadius: 22,
        marginLeft: 20
    },




    //tasks styles

    tasksContainer: {
        height: height * 0.38,
        marginLeft: 10,
        justifyContent: "center",
        marginBottom: 10
    },


    title: {
        fontFamily: "MoonBold",
        fontSize: 17,
        color: "black",
        marginBottom: 10,
    },


});



HomeScreen.navigationOptions = {
    headerShown: false
}


export default HomeScreen;