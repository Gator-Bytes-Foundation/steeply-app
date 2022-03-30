import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet,Text,View,Animated,TouchableOpacity,Image } from "react-native";
import { Box, Center, Container, Flex, HStack, Column, VStack } from "native-base";
import styled from 'styled-components/native'
import storyImgs, { sections, slides } from "./stories/social.stories";
import Lesson from "../../components/Lesson";
import Banner from "../../components/Banner";

const coral = "#ff7f6f"

const WhiteView=styled(VStack)`
    background-color: #fff;
    color: ${coral}; 
    height:100%;
`

const SocialScreen = (props) => {

    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = socialStyles(dimenWidth,dimenHeight);

    //calls once on first component render
    useEffect(() => {

    }, []);

    return (    
        <WhiteView w="100%" h="100%">
          <Banner banners={slides} header="Stay Connected" headerIcon={require("../../images/social.png")} fontColor={coral} circleBg="#f1f0f0" titleOffset="20" {...props}/>
          <Lesson lessonSections={sections} storyImgs={storyImgs}>
          </Lesson>   
        </WhiteView>
    );
};


const socialStyles = (width, height) => StyleSheet.create({

    /*Containers */
    container1: {
        backgroundColor: "white",
        width: width,
        height: height,
        alignItems: "flex-end"
    }
});

export default SocialScreen;