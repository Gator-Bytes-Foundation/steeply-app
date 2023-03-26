import {Asset} from 'expo-asset';
import { getStories } from '../story.helper';

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
    Asset.fromModule(require('../../../images/stories/med/21.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/22.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/23.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/24.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/25.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/26.jpg')).uri,
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
    Asset.fromModule(require('../../../images/stories/med/39.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/40.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/med/41.jpg')).uri
]


const interactions = {
    1: "https://cancer.ca/en/living-with-cancer/your-child-has-cancer/managing-your-child-s-care/giving-medicines-at-home"
}

const getMedStories = (start,end) => getStories(start,end,interactions,imgs)

// indices should be 1 less than the page number
export const sections = [
    {
        index: 0,
        title: "Less Scary",
        sectionImg: Asset.fromModule(require('../../../images/stories/med/section1.jpg')).uri,
        stories: getMedStories(0,9)
    },
    {
        index: 9,
        title: "Side Effects"
    },
    {
        index: 14,
        title: "Ask Your Doctor",
        swipe: "https://cancer.ca/en/living-with-cancer/your-child-has-cancer/managing-your-child-s-care/giving-medicines-at-home"
    },
    {
        index: 18,
        title: "Med Life Hacks"
    },
    {
        index: 26,
        title: "Create Med List"
    },
    {
        index: 30,
        title: "Med Responsibility"
    },
    {
        index: 41,
        title: "Last story"
    }
];
export const slides = [
    {
        info: "Medications can quickly get overwhelming throughout treatments...",
        img:null,
        link: null,
    },
    {
        info: "Managing symptoms, organizing bottles, and taking pills on time can be challenging. ",
        img:null,
        link: null
    },
    {
        info: "However, understanding and managing your meds well...",
        img:null,
        link: null
    }
]   

export default imgs;