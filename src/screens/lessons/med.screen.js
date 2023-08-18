import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet,Text,View,Animated,TouchableOpacity,Image } from "react-native";
import { VStack } from "native-base";
import { orange, blue, gray } from "../../helpers/colors";
import Lesson from "../../components/Lesson";
import Banner from "../../components/Banner";
import styled from 'styled-components/native';
import storyImgs, { sections, slides } from "./stories/med.stories";

const OrangeStack=styled(VStack)`
    background-color: ${orange};
    color: ${blue}; 
    height:100%;
`

const MedScreen = (props) => {

    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = medStyles(dimenWidth,dimenHeight);

    return (
        <OrangeStack w="100%" h="100%">
          <Banner banners={slides} header="Med Management" headerIcon={require("../../images/med.png")} fontColor={blue} circleBg={gray} titleOffset={67} type="med"/>
          <Lesson lessonSections={sections} storyImgs={storyImgs} />
        </OrangeStack>
    );

};


const medStyles = (width, height) => StyleSheet.create({

});

export default MedScreen;