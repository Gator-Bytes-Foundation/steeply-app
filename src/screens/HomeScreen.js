import React from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "native-base";
import References from "../components/References";
import TeamSection from "../components/TeamSection";
import Header from "../components/Header";

const ReferencesScreen = (props) => {

    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = homeStyles(dimenWidth,dimenHeight);

    //animation managing
    //const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <LinearGradient start={[-0.6, -0.3]} end={[0.8, 0.5]} colors={["#408BC0", "#0F2F6A"]} style={styles.container1} >
          <ScrollView>
            {/*HEADER CONTAINER*/}
            <Header/>
            <TeamSection/>
            <References/>
          </ScrollView>   
        </LinearGradient>
    );

};


const homeStyles = (width, height) => StyleSheet.create({

    /*Containers */
    container1: {
        backgroundColor: "white",
        width: width,
        height: height,
        alignItems: "flex-end"
    }
});

export default ReferencesScreen;