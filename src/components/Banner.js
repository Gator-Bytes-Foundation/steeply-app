import React, { useState, useEffect } from "react";
//import styledTypes from '@types/styled-components'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, useWindowDimensions, FlatList } from "react-native";
import { Button, Flex, Link, Box, Container, Circle,
    Text,
    Center
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
function Banner(props) {
    const navigation = useNavigation();
    let dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    const circleHeight = dimenHeight * 0.4;
    const circleWidth = dimenWidth * 0.8; 
    
    const BigOleCircle=styled(Circle)`
        margin:0px; 
        display:flex;
        max-width:500px; 
        max-height:500px; 
        flex-direction:column;
        margin-top:-80px;
        border: solid 4px ${props.fontColor};
    ` 
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
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
       
    return (<>
        <Center>
            <BackButton onPress={() => navigation.navigate("Menu")}>Back</BackButton>
            <HeadTitle>
                <CurvedText title={props.header} color={'white'} offset={props.titleOffset}/>
            </HeadTitle>
            <Flex>
              <BigOleCircle w={circleWidth} h={circleWidth} bg={props.circleBg} >
                <CircleText color={"black"}>{props.banners[0].info}</CircleText>
                {props.headerIcon ? <BannerIcon style={{marginBottom:-100 }} source={props.headerIcon}/> : ''}
              </BigOleCircle>
            </Flex>
    {/*<FlatList
        data={DATA}
        renderItem={({item}) => (
            <></>
        )}
        keyExtractor={item => item.id}
      />
      */}

        </Center>                          
    </>);
}
export default Banner