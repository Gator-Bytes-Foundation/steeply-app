import {Asset} from 'expo-asset';
import { getStories } from '../story.helper';

const imgs = [
    Asset.fromModule(require('../../../images/stories/social/1.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/2.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/3.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/4.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/5.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/6.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/7.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/8.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/9.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/10.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/11.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/12.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/13.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/14.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/15.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/16.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/17.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/18.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/19.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/20.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/21.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/21.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/22.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/23.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/24.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/25.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/26.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/26.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/27.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/28.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/29.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/30.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/31.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/32.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/33.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/34.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/35.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/36.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/37.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/38.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/39.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/39.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/40.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/41.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/42.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/43.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/44.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/45.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/46.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/47.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/social/48.jpg')).uri
]

const socialInteractions = {
    2: "https://cancer.ufl.edu/patient-care/support-and-resources/", //"HospitalGroups",
    3: "https://cancer.ufl.edu/patient-care/support-and-resources/", //"OnlineSupportGroups",
    11: "https://www.premierhealth.com/your-health/articles/women-wisdom-wellness-/10-self-care-tips-for-the-cancer-caregiver",
    22: "https://chemoduck.org/for-kids/making-friends/",
    44: "OnlineDiagnosisGroups",
    45: "https://stupidcancer.org/", // todo add vimeo link to story as well
    46: "https://belong.life/?utm_source=canva&utm_medium=iframely",
    47: "https://www.caringbridge.org/?gclid=Cj0KCQjwt_qgBhDFARIsABcDjOdJq3jWvUTvlj43oiuupTFidOE-KPeplEm4Ug8TSQqtG3sCzb4VnxIaAp28EALw_wcB",
}

const getSocialStories = (start,end) => getStories(start,end,socialInteractions,imgs);

export const sections = [
    {
        index: 0,
        title: "Support Groups",
        stories: getSocialStories(0,4)
    },
    {
        index: 4,
        title: "You Are Not Alone"
    },
    {
        index: 9,
        title: "Tips For Parents"
    },
    {
        index: 14,
        title: "For Siblings"
    },
    {
        index: 26,
        title: "Knowing The Team"
    },
    {
        index: 51,
        title: "Handling Hard Feelings"
    },
    {
        index: 37,
        title: "Camps & Retreats"
    },
    {
        index: 49,
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