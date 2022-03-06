import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet,Text,View,Animated,TouchableOpacity,Image } from "react-native";
import { Box, Center, Container, Flex, HStack, Column, ScrollView } from "native-base";
import Lesson from "../../components/Lesson";
import stories from "./stories/lessons.stories.placeholder";

const ExerciseScreen = (props) => {

    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = exerciseStyles(dimenWidth,dimenHeight);

    //calls once on first component render
    useEffect(() => {

    }, []);

    return (
          <Lesson title="Exercise" info={["Stay fit!"]} stories={stories}>
          </Lesson>   
    );

};


const exerciseStyles = (width, height) => StyleSheet.create({

    /*Containers */
    container1: {
        backgroundColor: "white",
        width: width,
        height: height,
        alignItems: "flex-end"
    }
});

export default ExerciseScreen;