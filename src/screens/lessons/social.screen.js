import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import { VStack } from "native-base";
import styled from 'styled-components/native'
import storyImgs, { sections, slides } from "./stories/social.stories";
import Lesson from "../../components/Lesson";
import Banner from "../../components/Banner";
import { coral, blue, pink } from "../../helpers/colors";

const OrangeStack=styled(VStack)`
    background-color: ${pink};
    color: ${coral}; 
    height:100%;
`

const SocialScreen = (props) => {

    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = socialStyles(dimenWidth,dimenHeight);

    return (    
        <OrangeStack w="100%" h="100%">
          <Banner banners={slides} header="Stay Connected" headerIcon={require("../../images/social.png")} fontColor={blue} circleBg="#f1f0f0" titleOffset={75} type="social" {...props}/>
          <Lesson lessonSections={sections} storyImgs={storyImgs} />
        </OrangeStack>
    );
};


const socialStyles = (width, height) => StyleSheet.create({

});

export default SocialScreen;