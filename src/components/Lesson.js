import React, { useState, useEffect } from "react";
//import styledTypes from '@types/styled-components'
import styled from 'styled-components/native'
import { StyleSheet, View, TouchableOpacity, TextInput, useWindowDimensions, Alert, FlatList } from "react-native";
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
import SmallTaskCard from "../components/SmallTaskCard";

const BeigeView=styled(VStack)`
    background-color: rgb(228, 220, 212);
    color: rgb(49, 69, 85); 
    height:100%;
`
const HeadTitle=styled(Center)`
    padding-top:10px; 
    margin-top:30px;
    height:15%; 
    text-align:center !important;
`  
const BigOleCircle=styled(Circle)`
    margin:30px; 
    display:flex;
    background-color: rgb(72,96,115);
    color:white;
    max-width:500px; 
    max-height:500px; 
    flex-direction:column;
` 
function Lesson(props) {
    let dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    const circleHeight = dimenHeight * 0.4;
    const circleWidth = dimenWidth * 0.7; 
    //let storyElement = useRef()
    //var currentSkin = Story.currentSkin;
    return (<>
        <BeigeView w="100%" h="100%">
            <Center>
                <HeadTitle>
                    <Text fontSize="xl" fontWeight="bold">{props.title}</Text>
                </HeadTitle>
                <Flex>
                    <BigOleCircle w={circleWidth} h={circleWidth} >
                        <Text color="white">{props.info}</Text>
                    </BigOleCircle>
                </Flex>
            </Center>
            <FlatList
                    bounces={true}
                    scrollEventThrottle={16}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    data={props.stories}
                    keyExtractor={(item) => `${item.user_id}`}
                    renderItem={({item}) => {
                        return <InstaStory data={[item]}
                        duration={10}
                        unPressedBorderColor={"blue"}
                        pressedBorderColor={"green"}
                        avatarSize={80}
                        onStart={item => console.log(item)}
                        onClose={item => console.log('close: ', item)}
                        customSwipeUpComponent={
                        <View>
                            <Text>Swipe</Text>
                        </View>
                        }
                        style={{marginTop: 150, bottom:0, height:110}}/>
                    }}
                />                
        </BeigeView>
    </>);
}

export default Lesson