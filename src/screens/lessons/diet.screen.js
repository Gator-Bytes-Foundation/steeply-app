import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet,Text,View,Animated,TouchableOpacity,Image } from "react-native";
import { Box, Center, Container, Flex, HStack, Column, VStack } from "native-base";
import Lesson from "../../components/Lesson";
import Banner from "../../components/Banner";
import styled from 'styled-components/native'
import storyImgs, { sections, slides } from "./stories/social.stories";

const purple = "#6241a4;"
const orange = "#fe900c;"
const OrangeView=styled(VStack)`
    background-color: ${orange}
    color: ${purple} 
    height:100%;
`

const DietScreen = (props) => {

    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = dietStyles(dimenWidth,dimenHeight);

    let circleInfo = {
        bg:"white",
        header:"Social",
        headerIcon:null
    }
    //calls once on first component render
    useEffect(() => {

    }, []);

    return (
        <OrangeView w="100%" h="100%">
          <Banner banners={slides} header="Nutrition & Diet" fontColor={purple} circleBg="#fff" titleOffset="20"/>
          <Lesson lessonSections={sections} storyImgs={storyImgs}>
          </Lesson>   
        </OrangeView>
    );

};


const dietStyles = (width, height) => StyleSheet.create({

    /*Containers */
    container1: {
        backgroundColor: "white",
        width: width,
        height: height,
        alignItems: "flex-end"
    }
});

export default DietScreen;