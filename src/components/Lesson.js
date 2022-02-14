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
    const data = [
        {
            user_id: 1,
            user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
            user_name: "Stretching",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
                }]
        },
        {
            user_id: 2,
            user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
            user_name: "Stretching",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
                }]
        },
        {
            user_id: 3,
            user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
            user_name: "Stretching",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
                }]
        },
        {
            user_id: 4,
            user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
            user_name: "Stretching",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
                }]
        },
        {
            user_id: 5,
            user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            user_name: "Running",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                    swipeText:'Custom swipe text for this story',
                    onPress: () => console.log('story 2 swiped'),
                }]
        }];
    return (<>
        <BeigeView w="100%" h="100%">
            <Center>
                <HeadTitle>
                    <Text fontSize="xl" fontWeight="bold">Social Participation</Text>
                </HeadTitle>
                <Flex>
                    <BigOleCircle w={circleWidth} h={circleWidth} >
                        <Text color="white">Definition and Purpose</Text>
                        <Text color="white">blah blah</Text>
                    </BigOleCircle>
                </Flex>
            </Center>
            <FlatList
                    bounces={true}
                    scrollEventThrottle={16}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    data={data}
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