import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet,Text,View,Animated,TouchableOpacity,Image } from "react-native";
import { VStack } from "native-base";
import Lesson from "../../components/Lesson";
import Banner from "../../components/Banner";
import styled from 'styled-components/native'
import storyImgs, { sections, slides } from "./stories/med.stories";

const darkBlue = "#1f628e"

const YellowView=styled(VStack)`
    background-color: #ffde59;
    color: ${darkBlue}; 
    height:100%;
`

const MedScreen = (props) => {

    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = medStyles(dimenWidth,dimenHeight);

    return (
        <YellowView w="100%" h="100%">
          <Banner banners={slides} header="Exercise" fontColor={darkBlue} circleBg="white" titleOffset="20"/>
          <Lesson title="Medication Mangement" lessonSections={sections} storyImgs={storyImgs}>
          </Lesson>   
        </YellowView>
    );

};


const medStyles = (width, height) => StyleSheet.create({

    /*Containers */
    container1: {
        backgroundColor: "white",
        width: width,
        height: height,
        alignItems: "flex-end"
    }
});

export default MedScreen;