import React from 'react';
import { Asset } from 'expo-asset';
import { getStories, LinkBtn } from '../story.helper';
import { StyleSheet } from "react-native";
import { Link, View, Image, Box, Text } from "native-base";
import { darkBlue } from '../../../helpers/colors';
import { Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width

const imgs = [
    Asset.fromModule(require('../../../images/stories/social/1.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/2.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/3.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/4.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/5.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/6.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/7.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/8.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/9.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/10.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/11.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/12.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/13.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/14.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/15.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/16.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/17.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/18.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/19.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/20.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/21.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/22.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/23.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/24.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/25.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/26.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/27.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/28.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/29.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/30.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/31.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/32.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/33.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/34.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/35.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/36.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/37.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/38.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/39.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/40.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/41.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/42.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/43.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/44.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/45.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/46.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/47.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/48.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/49.jpg')).uri
]

const styles = StyleSheet.create({

    whiteRect: {
        width: 310,
        height: 45,
        display: "flex",
        backgroundColor: "#fff",
        color: "#206891",
        fontWeight: "bold",
        fontFamily: 'MoonLight', 
        fontSize: 20,
        borderRadius: 8,
        padding: 8,
        textDecoration: "none",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    orangeBorderRight: {
        width: 200,
        paddingRight: 20,
        borderRightWidth: 2,
        borderRightColor: "orange"
    },
    blueBold: {
        fontFamily: 'MoonLight', 
        fontSize: "xl",
        color: "cyan.800"

    },
    blueBtn: {
        padding: 5,
        width: 120,
        backgroundColor: darkBlue
    }
});

// index is less than 1 of the story img name
const socialInteractions = {
    2: { // In Person support groups
        swipe: "https://cancer.ufl.edu/patient-care/support-and-resources/", // todo: show other resources outside UF
    },
    3: { // online support groups intro
        swipe: "https://cancer.ufl.edu/patient-care/support-and-resources/", // todo: add "OnlineSupportGroups" section and remove story 4,
    },
    4: { // online support groups
        component: <View style={{position: "absolute", top: 150, left: -10, width: "100%", display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <Box style={styles.whiteRect}>
                <Text styles={styles.orangeBorderRight} _text={styles.blueBold} color={"cyan.800"} fontSize={"xl"} fontFamily={"MoonLight"} bold>AML</Text>
                <Link href="https://www.facebook.com/groups/783809048323389" isUnderlined={false}>
                    <Image source={require("../../../images/fb.png")} w={9} h={9} alt={"facebook"} />
                </Link>
            </Box>
            <Box style={styles.whiteRect} mt={3}>
                <Text _text={styles.blueBold} color={"cyan.800"} fontSize={"xl"} fontFamily={"MoonLight"} bold>ALL</Text>
                <Link href="https://www.reddit.com/r/leukemia/" isUnderlined={false}>
                    <Image source={require("../../../images/reddit.png")} w={9} h={9} alt={"facebook"} />
                </Link>
            </Box>
            <Box style={styles.whiteRect} mt={3}>
                <Text _text={styles.blueBold} color={"cyan.800"} fontSize={"xl"} fontFamily={"MoonLight"} bold>Neuroblastoma</Text>
                <Link href="https://www.facebook.com/groups/neuroblastomasupport" isUnderlined={false}>
                    <Image source={require("../../../images/reddit.png")} w={9} h={9} alt={"facebook"} />
                </Link>
            </Box>
            <Box style={styles.whiteRect} mt={3}>
                <Text _text={styles.blueBold} color={"cyan.800"} fontSize={"xl"} fontFamily={"MoonLight"} bold>Brain Cancers</Text>
                <Box flexDirection={"row"}>
                    <Link href="https://www.reddit.com/r/braincancer/" isUnderlined={false}>
                        <Image source={require("../../../images/reddit.png")} w={9} h={9} alt={"facebook"} />
                    </Link>
                    <Link href="https://www.reddit.com/r/glioblastoma/" isUnderlined={false}>
                        <Image source={require("../../../images/reddit.png")} w={9} h={9} zIndex={999} alt={"reddit"} />
                    </Link>
                </Box>
            </Box>
            <Box style={styles.whiteRect} mt={3}>
                <Text _text={styles.blueBold} color={"cyan.800"} fontSize={"xl"} fontFamily={"MoonLight"} bold>Lymphoma</Text>
                <Link href="https://www.facebook.com/groups/113903748651959" isUnderlined={false}>
                    <Image source={require("../../../images/fb.png")} w={9} h={9} alt={"facebook"} />
                </Link>
            </Box>
            <Box style={styles.whiteRect} mt={3}>
                <Text _text={styles.blueBold} color={"cyan.800"} fontSize={"xl"} fontFamily={"MoonLight"} bold>Osteosarcoma</Text>
                <Link href="https://www.facebook.com/groups/341734433060" isUnderlined={false}>
                    <Image source={require("../../../images/fb.png")} w={9} h={9} alt={"facebook"} />
                </Link>
            </Box>
            <Box style={styles.whiteRect} mt={3}>
                <Text _text={styles.blueBold} color={"cyan.800"} fontSize={"xl"} fontFamily={"MoonLight"} bold>Ewings Sarcoma</Text>
                <Link href="https://www.facebook.com/groups/341734433060" isUnderlined={false}>
                    <Image source={require("../../../images/fb.png")} w={9} h={9} alt={"facebook"} />
                </Link>
            </Box>
        </View>
    },
    7: { // reconnect with friends/fam
        //swipe: Asset.fromModule(require("../../../images/social_participation.pdf")).uri, // need this pdf broken down
        swipe: "https://drive.google.com/uc?export=download&id=1ly0qNgJ3hPeYGKp5KsAh8ODh9m89A_6l"
    },
    12: { // helpful tips for YOU
        swipe: "https://www.premierhealth.com/your-health/articles/women-wisdom-wellness-/10-self-care-tips-for-the-cancer-caregiver",
    },    
    15: { // helpful tips for parents
        swipe: Asset.fromModule(require("../../../images/social_participation.pdf")).uri, // need this pdf broken down
    }, 
    18: { // ways to support your friends with cancer
        swipe: Asset.fromModule(require("../../../images/social_participation.pdf")).uri, // need this pdf broken down
    },   
    23: { // making friends
       swipe: "https://chemoduck.org/for-kids/making-friends",
       component: <View style={{position: "absolute", top: 330, left: 0, width: "100%", display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://chemoduck.org/for-kids/making-friends"} styles={styles.blueBtn} />   
        </View>
    },
    38: {
        swipe: "https://chemoduck.org/for-kids/making-friends/", // todo: replace with retreats
    },
    44: {
        swipe: "OnlineDiagnosisGroups",
    },
    46: {
        swipe: "https://stupidcancer.org/", // todo add vimeo link to story as well
        component: <Box alignItems="center" style={{position: "absolute", top: 470, left: -50, width: windowWidth}} zIndex={9} elevation={9}>
            <LinkBtn link={"https://stupidcancer.org"} styles={styles.blueBtn} />   
        </Box>
    },
    47: {
        swipe: "https://belong.life/?utm_source=canva&utm_medium=iframely",
        component: <Box alignItems="center"  style={{position: "absolute", top: 470, left: -50, width: windowWidth}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://belong.life/?utm_source=canva&utm_medium=iframely"} styles={styles.blueBtn} />      
        </Box>
    },
    48: {
        swipe: "https://www.caringbridge.org/?gclid=Cj0KCQjwt_qgBhDFARIsABcDjOdJq3jWvUTvlj43oiuupTFidOE-KPeplEm4Ug8TSQqtG3sCzb4VnxIaAp28EALw_wcB",
        component: <View style={{position: "absolute", top: 580, left: 140, width: windowWidth, display: "flex", justifyContent: "center"}} zIndex={999} elevation={999}>
            <LinkBtn link={"https://www.caringbridge.org/?gclid=Cj0KCQjwt_qgBhDFARIsABcDjOdJq3jWvUTvlj43oiuupTFidOE-KPeplEm4Ug8TSQqtG3sCzb4VnxIaAp28EALw_wcB"} styles={styles.blueBtn} />      
        </View>
    }
}

const getSocialStories = (start,end) => getStories(start,end,socialInteractions,imgs);

export const sections = [
    {
        index: 0,
        title: "Support Groups",
        stories: getSocialStories(0,5)
    },
    {
        index: 5,
        title: "You Are Not Alone",
        stories: getSocialStories(5,8)
    },
    {
        index: 8,
        title: "Tips For Parents",
        stories: getSocialStories(8,13)
    },
    {
        index: 13,
        title: "For Siblings",
        stories: getSocialStories(13,26)
    },
    {
        index: 25,
        title: "Your Team",
        stories: getSocialStories(25,36)
    },
    /* waiting for Becs
    {
        index: 36,
        title: "Camps & Retreats",
        stories: getSocialStories(36,39)
    },
    {
        index: 39,
        title: "Grants",
        stories: getSocialStories(39,45)
    },
    */
    {
        index: 45,
        title: "Apps",
        stories: getSocialStories(45,49)
    },
    {
        index: 49,
        title: "Last story"
    }
];
export const slides = [
    {
        info: "Making intentional steps to connect with others, keeps you from feeling alone throughout this journey",
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