import React from "react";
import styled from 'styled-components/native'
import { View, Linking, StyleSheet, useWindowDimensions, TouchableOpacity, FlatList } from "react-native";
import { Button, Text} from "native-base";
import * as FileSystem from 'expo-file-system';
import InstaStory from 'react-native-insta-story';
//import SmallTaskCard from "../components/SmallTaskCard";
import { useNavigation } from "@react-navigation/native";
import { StorageAccessFramework } from 'expo-file-system';

const StoryList=styled(InstaStory)`
    position:absolute;
    bottom:10px;
    fontSize: 22px;
`
function Lesson(props) {
    const navigation = useNavigation(); 
    let dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    const circleHeight = dimenHeight * 0.4;
    const circleWidth = dimenWidth * 0.7; 
    let lessons = []
    const downloadPath = FileSystem.documentDirectory + (Platform.OS == 'android' ? '' : '');

    const saveFile = async (fileUri, fileName = 'File') => {
        try {
          const fileString = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });
          
          const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
          if (!permissions.granted) {
            return;
          }
    
          try {
            await StorageAccessFramework.createFileAsync(permissions.directoryUri, fileName, 'application/pdf')
              .then(async (uri) => {
                await FileSystem.writeAsStringAsync(uri, fileString, { encoding: FileSystem.EncodingType.Base64 });
                alert('Report Downloaded Successfully')
              })
              .catch((e) => {
              });
          } catch (e) {
            throw new Error(e);
          }
    
        } catch (err) {
        }
    }

    const downloadFile = async (fileUrl) => {
    
        const downloadResumable = FileSystem.createDownloadResumable(
          fileUrl,
          downloadPath + fileName,
          {},
          downloadCallback
        );
    
        try {
          const { uri } = await downloadResumable.downloadAsync();
          saveFile(uri, fileName)
        } catch (e) {
          console.error('download error:', e);
        }
    }

    const downloadCallback = downloadProgress => { // todo add loading bar
        const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
    };
    
    for (let i=0; i < props.lessonSections.length-1; i++) {
        let stories = []
        let sectionIndex = props.lessonSections[i].index
        let sectionTitle = props.lessonSections[i].title
        let sectionImg = props.lessonSections[i].sectionImg
        const nextSectionIndex = props.lessonSections[i+1].index
        for (let j=props.lessonSections[i].index; j < nextSectionIndex; j++) {
            const swipeAction = props.lessonSections[i].stories?.[j-props.lessonSections[i].index]?.swipe
            const storyComponent = props.lessonSections[i].stories?.[j-props.lessonSections[i].index]?.component
            const story = {
                story_id: j,
                story_image: props.storyImgs[j],
                customProps: {  
                    component: storyComponent,
                    swipeUpComponent: null, // tmp
                },
                onPress: async () => { // triggered on swipe up
                    if(swipeAction) {
                        console.log(swipeAction)
                        if(swipeAction.includes(".pdf")) {
                            const fileByPath = swipeAction.split("/")
                            const fileName = fileByPath[fileByPath.length-1]
                            downloadFile(swipeAction)
                            //const { uri: localUri } = await FileSystem.downloadAsync(swipeAction, FileSystem.documentDirectory + "download.pdf");
                            //console.log(localUri)
                        }
                        else if(swipeAction.includes("https")) {
                            Linking.openURL(swipeAction)
                        }
                        else {
                            navigation.navigate(swipeAction);
                        }
                    }
                    else if(props.lessonSections[i].swipe) { // if section has swipe functionality
                        if(props.lessonSections[i].swipe.includes("http")) {
                            Linking.openURL(props.lessonSections[i].swipe)
                        }
                        navigation.navigate(props.lessonSections[i].swipe);
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
        }
        lessons.push(storySection);
    }
    return (<>
        <StoryList 
            data={lessons}
            duration={5}
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
            renderTextComponent={({item, onPress}) => 
            <View elevation={99999} zIndex={99999}>
                {item.customProps?.component ? 
                    <>{item.customProps.component}</>
                    : <></>                           
                }
            </View>}
            renderSwipeUpComponent={({item, onPress}) => <View>
                {item.customProps.swipeUpComponent ? 
                    <Button style={styles.swipeUpPrimary} onPress={onPress}>
                        <Text style={{ fontFamily: 'MoonLight', fontSize: 20, color: "#1B79D7", fontWeight: "bold" }}>
                            {"Swipe Up"}
                        </Text>
                    </Button> 
                    : <></>                           
                }
            </View>}
            avatarWrapperStyle={{marginRight:10}}
            avatarTextStyle={{fontSize: 14, fontFamily: "TrendaLight", fontWeight: "bold", width:80}}
            style={{marginTop: 100, height:110,color:"white !important", fontSize:"24px !important"}}
        />
    </>)
}
const styles = StyleSheet.create({

    btnPrimary: {
        width: 330,
        height: 60,
        top: 300,
        color: "#1B79D7",
        fontWeight: "bold",
        backgroundColor: "#fff",
        borderRadius: 18,
        marginTop: 12,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
    },
    swipeUpPrimary: {
        height: 60,
        bottom: 40,
        color: "#1B79D7",
        fontWeight: "bold",
        backgroundColor: "#fff",
        borderRadius: 18,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 6 },
        elevation: 1,
    }
});

export default Lesson