import React, { useState, useEffect } from "react";
//import styledTypes from '@types/styled-components'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Image, useWindowDimensions, Alert, FlatList } from "react-native";
import { NativeBaseProvider, Button, Flex, Link, Box, Container, Circle,
    Pressable,
    Heading,
    Text,
    Center,
    VStack,
    Icon,
    Stack,
  } from "native-base";
import CurvedText from "./CurvedText";

const BackButton=styled(Button)`
  position:absolute;
  left:15px; 
  top:15px; 
  z-index:999;
`
const CircleText=styled(Text)`
    font-size: 20px;
    margin-top:10px;
    text-align:center !important;
    width:75%;
    fontWeight:bold;
`
const BigOleCircle=styled(Circle)`
    margin:0px; 
    display:flex;
    max-width:500px; 
    max-height:500px; 
    flex-direction:column;
    margin-top:-80px;
` 
function Banner(props) {
    const navigation = useNavigation();
    let dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    const circleHeight = dimenHeight * 0.4;
    const circleWidth = dimenWidth * 0.7; 

    const HeadTitle=styled(Center)`
        position:relative;
        margin-bottom:0px;
        font-size:80px !important;
        color: ${props.fontColor} !important;
        padding-top:0px; 
        width:100%;
    `
    const BannerIcon=styled(Image)`
    position:absolute;
    bottom:0px; 
    minHeight:75px;
    width:75px;
    resizeMode:contain;
`
//                    <Text color={props.fontColor} fontSize={23} fontFamily="Poppins" textShadow="5px 5px 5px" fontWeight="bold">{props.header}</Text>          



    return (<>
        <Center>
            <BackButton onPress={() => navigation.navigate("Menu")}>Back</BackButton>
            <HeadTitle>
                <CurvedText title={props.header} color={props.fontColor} offset={props.titleOffset}/>
            </HeadTitle>
            <Flex>
            <BigOleCircle w={circleWidth} h={circleWidth} bg={props.circleBg} >
                    <CircleText color={"black"}>{props.banners[0].info}</CircleText>
                    {props.headerIcon ? <BannerIcon style={{marginBottom:-20 }} source={props.headerIcon}/> : ''}
            </BigOleCircle>
            </Flex>
        </Center>                          
    </>);
}
export default Banner