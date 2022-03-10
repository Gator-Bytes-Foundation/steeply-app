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
//import SmallTaskCard from "../components/SmallTaskCard";
import { StoryContainer } from 'react-native-stories-view';
import Story from 'react-native-story';


const HeadTitle=styled(Center)`
    padding-top:10px; 
    margin-top:30px;
    height:15%; 
    text-align:center !important;
`  
const BigOleCircle=styled(Circle)`
    margin:30px; 
    display:flex;
    background-color: white;
    color:white;
    max-width:500px; 
    max-height:500px; 
    flex-direction:column;
` 
const StoryList=styled(FlatList)`
    position:absolute;
    bottom:0;
`
function Lesson(props) {
    let dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    const circleHeight = dimenHeight * 0.4;
    const circleWidth = dimenWidth * 0.7; 
    let lessons = []
    for (let i=0; i < props.lessonSections.length-1; i++) {
        let exerciseStories = []
        let sectionIndex = props.lessonSections[i].index
        let sectionTitle = props.lessonSections[i].title
        for (let j=props.lessonSections[i].index; j <= props.lessonSections[i+1].index; j++) {
            //console.log(j)
            let oldExerciseStory = {
                story_id: j,
                story_image: props.storyImgs[j],
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            }
            exerciseStories.push(oldExerciseStory)
        }
        
        let exericseSection = {
            user_id: i,
            user_image: props.storyImgs[sectionIndex],
            user_name: sectionTitle,
            stories: exerciseStories
        }
        lessons.push(exericseSection)
    }

    return (<>
            <StoryList
                    bounces={true}  
                    scrollEventThrottle={18}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    data={lessons}
                    keyExtractor={(item) => `${item.user_id}`}
                    renderItem={({item}) => {
                        //console.log(item)
                        return <>
                            <InstaStory data={[item]}
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
                                style={{marginTop: 150, bottom:0, height:110}}
                            />
                        </>}}
            />                               
    </>);
}

/*
<InstaStory data={[item]}
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
                                                
                        <Story
                        unPressedBorderColor="#e95950"
                        pressedBorderColor="#ebebeb"
                        stories={item.stories}
                        footerComponent={
                            <TextInput
                                placeholder="Send message"
                                placeholderTextColor="white"
                            />
                        }
                    />
                    */
export default Lesson