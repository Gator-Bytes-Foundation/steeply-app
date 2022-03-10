import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet,Text,View,Animated,TouchableOpacity,Image } from "react-native";
import { Box, Center, Container, Flex, HStack, Column, VStack } from "native-base";
import Lesson from "../../components/Lesson";
import styled from 'styled-components/native'
import storyImgs, { sections, slides } from "./stories/social.stories";

const BlueView=styled(VStack)`
    background-color: #1f628e;
    color: #f9b10c; 
    height:100%;
`

const EducationScreen = (props) => {

    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = educationStyles(dimenWidth,dimenHeight);

    let circleInfo = {
        bg:"white",
        header:"Social",
        headerIcon:null
    }
    //calls once on first component render
    useEffect(() => {

    }, []);

    return (
        <BlueView w="100%" h="100%">
          <Banner banners={slides} header="Exercise" fontColor="black" circleBg="white"/>
          <Lesson title="Education" lessonSections={sections} storyImgs={storyImgs}>
          </Lesson>   
        </BlueView>
    );

};


const educationStyles = (width, height) => StyleSheet.create({

    /*Containers */
    container1: {
        backgroundColor: "white",
        width: width,
        height: height,
        alignItems: "flex-end"
    }
});

export default EducationScreen;