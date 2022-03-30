import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet,Text,View,Animated,TouchableOpacity,Image } from "react-native";
import { Box, Center, Container, Flex, HStack, Column, VStack } from "native-base";
import Lesson from "../../components/Lesson";
import Banner from "../../components/Banner";
import styled from 'styled-components/native'
import storyImgs, { sections, slides } from "./stories/symtom.stories";

const teal = "#045580"

const RedishView=styled(VStack)`
    background-color: #fb6d4d;
    color: ${teal}; 
    height:100%;
    display:flex;
`

const SymptomScreen = (props) => {

    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = symptomStyles(dimenWidth,dimenHeight);


    return (
        <RedishView w="100%" h="100%">
          <Banner banners={slides} header="Side Effect Management" headerIcon={require("../../images/symptom.png")} fontColor={teal} circleBg="#f1f0f0" titleOffset="20"/>
          <Lesson lessonSections={sections} storyImgs={storyImgs}>
          </Lesson>   
        </RedishView>
    );

};


const symptomStyles = (width, height) => StyleSheet.create({

    /*Containers */
    container1: {
        backgroundColor: "white",
        width: width,
        height: height,
        alignItems: "flex-end"
    }
});

export default SymptomScreen;