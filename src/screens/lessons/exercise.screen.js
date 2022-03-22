import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet,Text,View,Animated,TouchableOpacity,Image } from "react-native";
import { Box, Center, Container, Flex, HStack, Column, VStack } from "native-base";
import storyImgs, { sections, slides } from "./stories/exercise.stories";
import styled from 'styled-components/native'
import Lesson from "../../components/Lesson";
import Banner from "../../components/Banner";


const BlueView=styled(VStack)`
    background-color: #1f628e;
    color: #f9b10c; 
    height:100%;
`

const ExerciseScreen = (props) => {
    console.log(props.navigation)
    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = exerciseStyles(dimenWidth,dimenHeight);

    return (
        <BlueView w="100%" h="100%">
          <Banner header="Exercise" banners={slides} headerIcon={require("../../images/exercise.png")} fontColor="black" circleBg="white" titleOffset="20" {...props}/>
          <Lesson lessonSections={sections} storyImgs={storyImgs}/>
        </BlueView>
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