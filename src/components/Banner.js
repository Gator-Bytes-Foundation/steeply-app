import React, { useState, useEffect } from "react";
//import styledTypes from '@types/styled-components'
import styled from 'styled-components/native'
import { StyleSheet, View, TouchableOpacity, Image, useWindowDimensions, Alert, FlatList } from "react-native";
import { NativeBaseProvider, Button, Flex, Link, Box, Container, Circle,
    Pressable,
    Heading,
    Text,
    Center,
    VStack,
    Divider,
    Icon,
    Stack,
  } from "native-base";
//import * as Story from "zuck.js"
import InstaStory from 'react-native-insta-story';
//import SmallTaskCard from "../components/SmallTaskCard";
import { StoryContainer } from 'react-native-stories-view';
import Story from 'react-native-story';


const HeadTitle=styled(Center)`
    font-size:30px;
    padding-top:10px; 
    margin-top:30px;
    text-align:center !important;
`  
const CircleText=styled(Text)`
    font-size: 20px;
    margin-top:10px;
    text-align:center !important;
    width:75%;
    fontWeight:bold;
`
const BigOleCircle=styled(Circle)`
    margin:10px; 
    display:flex;
    background-color: white;
    color:white;
    max-width:500px; 
    max-height:500px; 
    flex-direction:column;
` 
function Banner(props) {
    let dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    const circleHeight = dimenHeight * 0.4;
    const circleWidth = dimenWidth * 0.7; 

    return (<>
            <Center>
                <HeadTitle>
                    {props.headerIcon? <Image style={{ width: 50, height: 50 }} source={props.headerIcon}/> : ''}
                    <Text color={props.fontColor} fontSize={23} fontFamily="Poppins" textShadow="5px 5px 5px" fontWeight="bold">{props.header}</Text>          
                </HeadTitle>
                <Flex>

                    <BigOleCircle w={circleWidth} h={circleWidth} bg={props.circleBg} >
                        <CircleText color={props.fontColor}>{props.banners[0].info}</CircleText>
                    </BigOleCircle>
                </Flex>
            </Center>                          
    </>);
}
export default Banner