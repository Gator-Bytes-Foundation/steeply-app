import {Asset} from 'expo-asset';
import React from 'react';
import { getStories } from '../story.helper';
import { Link } from "native-base";

const imgs = [
    Asset.fromModule(require('../../../images/stories/social/1.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/2.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/3.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/4.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/5.png')).uri,
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
    Asset.fromModule(require('../../../images/stories/social/21.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/22.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/23.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/24.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/25.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/26.png')).uri,
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
    Asset.fromModule(require('../../../images/stories/social/39.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/40.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/41.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/42.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/43.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/44.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/45.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/46.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/47.png')).uri,
    Asset.fromModule(require('../../../images/stories/social/48.png')).uri
]

const socialInteractions = {
    2: { // In Person support groups
        swipe: "https://cancer.ufl.edu/patient-care/support-and-resources/", // todo: show other resources outside UF
    },
    3: { // online support groups intro
        swipe: "https://cancer.ufl.edu/patient-care/support-and-resources/", // todo: add "OnlineSupportGroups" section and remove story 4,
    },
    4: { // online support groups
        component: <Link>Click here</Link>
    },
    7: { // reconnect with friends/fam
        swipe: Asset.fromModule(require("../../../images/social_participation.pdf")).uri, // need this pdf broken down
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
       swipe: "https://chemoduck.org/for-kids/making-friends/",
       component: <Link>Click here</Link>
    },
    38: {
        swipe: "https://chemoduck.org/for-kids/making-friends/", // todo: replace with retreats
    },
    44: {
        swipe: "OnlineDiagnosisGroups",
    },
    45: {
        swipe: "https://stupidcancer.org/", // todo add vimeo link to story as well
        component: <Link className='' href="https://stupidcancer.org">click here</Link>
    },
    46: {
        swipe: "https://belong.life/?utm_source=canva&utm_medium=iframely",
    },
    47: {
        swipe: "https://www.caringbridge.org/?gclid=Cj0KCQjwt_qgBhDFARIsABcDjOdJq3jWvUTvlj43oiuupTFidOE-KPeplEm4Ug8TSQqtG3sCzb4VnxIaAp28EALw_wcB",
        component: <Link>click here</Link>
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
        stories: getSocialStories(8,14)
    },
    {
        index: 14,
        title: "For Siblings"
    },
    {
        index: 24,
        title: "Knowing The Team"
    },
    {
        index: 36,
        title: "Camps & Retreats"
    },
    {
        index: 48,
        title: "Last story"
    }
];
export const slides = [
    {
        info: "Being  active every day helps you stay strong throughout treatment and in the future!",
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