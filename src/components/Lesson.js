import React from "react";
import styled from 'styled-components/native'
import { View, Linking, StyleSheet, useWindowDimensions, TouchableOpacity, FlatList } from "react-native";
import { Text} from "native-base";
import InstaStory from 'react-native-insta-story';
//import SmallTaskCard from "../components/SmallTaskCard";
import { useNavigation } from "@react-navigation/native";

const StoryList=styled(FlatList)`
    position:absolute;
    bottom:0;
    paddingBottom: 10;
`
function Lesson(props) {
    const navigation = useNavigation(); 
    let dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    const circleHeight = dimenHeight * 0.4;
    const circleWidth = dimenWidth * 0.7; 
    let lessons = []
    for (let i=0; i < props.lessonSections.length-1; i++) {
        let stories = []
        let sectionIndex = props.lessonSections[i].index
        let sectionTitle = props.lessonSections[i].title
        let sectionImg = props.lessonSections[i].sectionImg
        const nextSectionIndex = props.lessonSections[i+1].index
        for (let j=props.lessonSections[i].index; j < nextSectionIndex; j++) {
            let story = {
                story_id: j,
                story_image: props.storyImgs[j],
                //swipeText:'Custom swipe text for this story',
                onPress: () => {
                    console.log("PRESS")
                    const interactAction = props.lessonSections[i].stories?.[j]?.interact
                    if(props.lessonSections[i].swipe) {
                        if(props.lessonSections[i].swipe.includes("http")) {
                            Linking.openURL(props.lessonSections[i].swipe)
                        }
                        navigation.navigate(props.lessonSections[i].swipe);
                    }
                    else if(interactAction) {
                        
                        if(interactAction.includes("http")) {
                            Linking.openURL(interactAction)
                        }
                        else {
                            navigation.navigate(interactAction);
                        }
                    }
                },
            }
            stories.push(story);
        }
        
        let storySection = {
            user_id: i,
            user_image: sectionImg || props.storyImgs[sectionIndex],
            user_name: sectionTitle,
            stories: stories,
            sectionBtn: props.lessonSections[i].sectionBtn
        }
        lessons.push(storySection);
    }

    return (<>
        <StoryList
            bounces={true}  
            scrollEventThrottle={18}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            data={lessons}
            keyExtractor={(item) => `${item.user_id}`}
            renderItem={({item,index}) => {
                // must prevent index out of bound and buttons from carrying over by swiping to next lesson
                const forceExitStories = (index < lessons.length-1) && (item.sectionBtn || lessons[index+1].sectionBtn)
                const remainingLessons = forceExitStories ? [] : lessons.slice(index+1,lessons.length-1)
                return (<>
                    <InstaStory 
                        data={[item, ...remainingLessons]}
                        duration={7}
                        unPressedBorderColor={"red"}
                        pressedBorderColor={"grey"}
                        avatarSize={80}
                        onStart={item => console.log('start')}
                        onClose={item => console.log('close: ')}
                        textStyle={{color:"white"}}
                        /* if this is clicked, will trigger onPress passed into the respective story
                            however the component is passed by section, so commenting out until source
                            code is updated or decide to pass in a common component for each section
                        */
                        customSwipeUpComponent={
                        <View>
                            {item.sectionBtn ? 
                                <View style={styles.btnPrimary}>
                                    <Text style={{ fontFamily: 'MoonLight', fontSize: 20, color: "#1B79D7", fontWeight: "bold" }}>
                                        {item.sectionBtn}
                                    </Text>
                                </View> 
                                : <></>                           
                            }
                        </View>
                        }
                        style={{marginTop: 100, bottom:0, height:110,color:"white !important"}}
                    />
                </>)
            }}
        />                               
    </>);
}
const styles = StyleSheet.create({

    btnPrimary: {
        width: 330,
        height: 60,
        color: "#1B79D7",
        fontWeight: "bold",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        marginTop: 12,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
    }
});
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