import React from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import { VStack } from "native-base";
import Lesson from "../../components/Lesson";
import Banner from "../../components/Banner";
import styled from 'styled-components/native'
import storyImgs, { sections, slides } from "./stories/diet.stories";
import { green, teal } from "../../helpers/colors";

const GreenStack=styled(VStack)`
    background-color: ${green}
    color: ${teal} 
    height:100%;
`

const DietScreen = (props) => {

    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = dietStyles(dimenWidth,dimenHeight);

    let circleInfo = {
        bg:"white",
        header:"Diet",
        headerIcon:null
    }

    return (
        <GreenStack w="100%" h="100%">
          <Banner banners={slides} header="Nutrition & Diet" headerIcon={require("../../images/diet.png")} fontColor={green} circleBg="#e1e8ed" titleOffset={80} type="diet"/>
          <Lesson lessonSections={sections} storyImgs={storyImgs} />
        </GreenStack>
    );

};


const dietStyles = (width, height) => StyleSheet.create({

    /* Containers */
    container1: {
        backgroundColor: "white",
        width: width,
        height: height,
        alignItems: "flex-end"
    }
});

export default DietScreen;