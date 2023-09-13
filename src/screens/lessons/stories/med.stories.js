import React from 'react';
import { Asset } from 'expo-asset';
import { getStories, LinkBtn } from '../story.helper';
import { StyleSheet, Dimensions } from "react-native";
import { View } from "native-base";
import { darkBlue, darkOrange } from '../../../helpers/colors';
const windowWidth = Dimensions.get('window').width

const imgs = [
    Asset.fromModule(require('../../../images/stories/med/1.gif')).uri,
    Asset.fromModule(require('../../../images/stories/med/2.gif')).uri,
    Asset.fromModule(require('../../../images/stories/med/3.gif')).uri,
    Asset.fromModule(require('../../../images/stories/med/4.gif')).uri,
    Asset.fromModule(require('../../../images/stories/med/5.gif')).uri,
    Asset.fromModule(require('../../../images/stories/med/6.gif')).uri,
    Asset.fromModule(require('../../../images/stories/med/7.gif')).uri,
    Asset.fromModule(require('../../../images/stories/med/8.gif')).uri,
    Asset.fromModule(require('../../../images/stories/med/9.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/10.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/11.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/12.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/13.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/14.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/15.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/16.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/17.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/18.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/19.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/20.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/21.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/22.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/23.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/24.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/25.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/26.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/27.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/28.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/29.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/30.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/31.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/32.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/33.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/34.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/35.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/36.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/37.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/38.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/39.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/40.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/41.jpg')).uri
]

const styles = StyleSheet.create({
    orgBtn: {
        fontFamily: 'MoonLight', 
        fontSize: "xl",
        padding: 5,
        width: 100,
        backgroundColor: darkOrange
    },
    whiteBtn: {
        fontFamily: 'MoonLight', 
        fontSize: "xl",
        padding: 5,
        width: 100,
        color: darkBlue,
        backgroundColor: "#fff"
    }
});

const interactions = {
    16: {
        swipe: "https://cancer.ca/en/living-with-cancer/your-child-has-cancer/managing-your-child-s-care/giving-medicines-at-home"
    },
    34: {
        swipe: "https://www.facebook.com/CareZoneTeam",
        component: <View style={{position: "absolute", top: 655, left: 100, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://www.facebook.com/CareZoneTeam"} styles={styles.whiteBtn} textStyles={{color: darkBlue, fontWeight: "medium"}}/>   
        </View>
    },
    35: {
        swipe: "https://caringvillage.com/product/app",
        component: <View style={{position: "absolute", top: 630, left: 100, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://caringvillage.com/product/app"} styles={styles.orgBtn} />   
        </View>
    },
    36: {
        swipe: "https://www.goodrx.com",
        component: <View style={{position: "absolute", top: 650, left: 100, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://www.goodrx.com"} styles={styles.whiteBtn} textStyles={{color: darkBlue, fontWeight: "medium"}}/>     
        </View>
    },
    37: {
        swipe: "https://medisafeapp.com",
        component: <View style={{position: "absolute", top: 630, left: 100, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://medisafeapp.com"} styles={styles.orgBtn} />   
        </View>
    },
    38: {
        swipe: "https://play.google.com/store/apps/details?id=com.esborders.cacmembers&hl=en_US&gl=US", // todo check if they have ios/android and link off that
        component: <View style={{position: "absolute", top: 610, left: 100, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://play.google.com/store/apps/details?id=com.esborders.cacmembers&hl=en_US&gl=US"} styles={styles.whiteBtn} textStyles={{color:darkBlue,fontWeight:"medium"}}/>     
        </View>
    },
    39: {
        swipe: "https://cancer.net/navigating-cancer-care/managing-your-care/cancernet-mobile",
        component: <View style={{position: "absolute", top: 650, left: 100, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://cancer.net/navigating-cancer-care/managing-your-care/cancernet-mobile"} styles={styles.orgBtn} />   
        </View>
    },
    40: {
        swipe: "https://dokiedhuzhqa9.cloudfront.net/",
        component: <View style={{position: "absolute", top: 645, left: 100, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://dokiedhuzhqa9.cloudfront.net/"} styles={styles.whiteBtn} textStyles={{color: darkBlue, fontWeight: "medium"}}/>   
        </View>
    },
}

const getMedStories = (start,end) => getStories(start,end,interactions,imgs)

// indices should be 1 less than the page number
export const sections = [
    {
        index: 0,
        title: "Less Scary",
        sectionImg: Asset.fromModule(require('../../../images/stories/med/section1.jpg')).uri,
        stories: getMedStories(0,8)
    },
    {
        index: 8,
        title: "Side Effects",
        stories: getMedStories(8,14)
    },
    {
        index: 14,
        title: "Your Doctor",
        swipe: "https://cancer.ca/en/living-with-cancer/your-child-has-cancer/managing-your-child-s-care/giving-medicines-at-home",
        stories: getMedStories(14,17)
    },
    {
        index: 17,
        title: "Med Life Hacks",
        stories: getMedStories(17,25)
    },
    {
        index: 25,
        title: "Create Med List",
        stories: getMedStories(25,29)
    },
    {
        index: 29,
        title: "Responsibility",
        stories: getMedStories(29,41)
    },
    {
        index: 41,
        title: "Last story"
    }
];
export const slides = [
    {
        info: "Medications can quickly get overwhelming throughout treatments.",
        img: null,
        link: null,
    },
    {
        info: "Managing symptoms, organizing bottles, and taking pills on time can be challenging.",
        img: null,
        link: null
    },
    {
        info: "Understanding your meds lowers stress & keeps you safe from missing doses.",
        img: null,
        link: null
    }
]   

export default imgs;