import React from 'react';
import {Asset} from 'expo-asset';
import { getStories, LinkBtn } from '../story.helper';
import { StyleSheet } from "react-native";
import { Link, View, Image, Box, Text, Button } from "native-base";
import { lilac, cyan, darkBlue } from '../../../helpers/colors';
import { Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width

const imgs = [
    Asset.fromModule(require('../../../images/stories/diet/1.gif')).uri,
    Asset.fromModule(require('../../../images/stories/diet/2.gif')).uri,
    Asset.fromModule(require('../../../images/stories/diet/3.gif')).uri,
    Asset.fromModule(require('../../../images/stories/diet/4.gif')).uri,
    Asset.fromModule(require('../../../images/stories/diet/5.gif')).uri,
    Asset.fromModule(require('../../../images/stories/diet/6.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/7.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/8.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/9.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/10.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/11.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/12.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/13.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/14.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/15.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/16.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/17.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/18.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/19.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/20.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/21.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/22.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/23.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/24.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/25.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/26.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/27.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/28.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/29.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/30.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/31.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/32.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/33.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/34.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/35.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/36.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/37.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/38.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/39.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/40.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/41.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/42.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/43.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/44.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/45.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/46.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/47.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/48.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/49.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/50.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/51.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/51.jpg')).uri,
]

const styles = StyleSheet.create({
    purpBtn: {
        padding: 2,
        width: 120,
        color: lilac,
        backgroundColor: "rgba(0,0,0,0)",
        borderRadius: 5,
        borderWidth: 5,
        borderColor: lilac
    },
    blueBtn: {
        padding: 5,
        width: 200,
        backgroundColor: darkBlue
    },
    cyanBtn: {
        padding: 5,
        width: 200,
        backgroundColor: cyan
    }
});

const interactions = {
    3: { // what do i eat
        swipe: "https://www.hsph.harvard.edu/nutritionsource/kids-healthy-eating-plate/",
    },
    14: { // making eating fun
        swipe: "https://www.amazon.com/Fred-DINNER-WINNER-Dinner-Outer/dp/B07PP49SZ8/ref=sr_1_3?crid=1F5I8GCH26R4H&keywords=space%2Bgame%2Bboard%2Bplate&qid=1683481515&sprefix=space%2Bgame%2Bboard%2Bplat%2Caps%2C96&sr=8-3&th=1",
        component: <View style={{position: "absolute", top: 625, left: 0, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://www.amazon.com/Fred-DINNER-WINNER-Dinner-Outer/dp/B07PP49SZ8/ref=sr_1_3?crid=1F5I8GCH26R4H&keywords=space%2Bgame%2Bboard%2Bplate&qid=1683481515&sprefix=space%2Bgame%2Bboard%2Bplat%2Caps%2C96&sr=8-3&th=1"} styles={styles.purpBtn} />   
        </View>        
    },
    16: { // master plating examples
        swipe: "https://tasty.co/article/hannahloewentheil/20-adorable-food-creations-thatll-get-kids-excited-for",
    },
    26: { // unhealthy weight gain leads to
        swipe: "https://www.cancer.net/coping-with-cancer/physical-emotional-and-social-effects-cancer/managing-physical-side-effects/weight-gain",
    },
    48: {
        swipe: "https://www.mealtrain.com",
        component: <View style={{position: "absolute", top: 550, left: 50, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://www.mealtrain.com"} styles={styles.blueBtn} />    
        </View>  
    },
    49: {
        swipe: "https://www.mealime.com",
        component: <View style={{position: "absolute", top: 550, left: 50, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://www.mealtrain.com"} styles={styles.cyanBtn} /> 
        </View>  
    },
    50: {
        swipe: "https://lifesum.com",
        component: <View style={{position: "absolute", top: 525, left: 50, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://lifesum.com"} styles={styles.blueBtn} />    
        </View>  
    }
}

const getDietStories = (start,end) => getStories(start,end,interactions,imgs)

// indices should be 1 less than the page number
export const sections = [
    {
        index: 0,
        title: "Support Groups",
        sectionImg: Asset.fromModule(require('../../../images/stories/diet/section1.jpg')).uri,
        stories: getDietStories(0,5)
    },
    {
        index: 5,
        title: "Drink Water",
        stories: getDietStories(5,9)
    },
    {
        index: 9,
        title: "Mealtime Fun",
        stories: getDietStories(9,17)
    },
    {
        index: 17,
        title: "Healthy Weight",
        stories: getDietStories(17,30)
    },
    {
        index: 28,
        title: "Snacks",
        stories: getDietStories(28,35)
    },
    {
        index: 35,
        title: "Appetite",
        stories: getDietStories(35,47)
    },
    {
        index: 47,
        title: "Meal Apps",
        stories: getDietStories(47,51)
    },
    {
        index: 51,
        title: "Last story"
    }
];
export const slides = [
    {
        info: "Eating a balanced diet can make great impacts on how you feel as you go through treatments!",
        img:null,
        link: null,
    },
    {
        info: "Being active during treatment can...",
        img:null,
        link: null
    }
]   


export default imgs;