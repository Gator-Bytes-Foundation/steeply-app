import {Asset} from 'expo-asset';
import { getStories } from '../story.helper';

const imgs = [
    Asset.fromModule(require('../../../images/stories/education/1.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/2.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/3.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/4.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/5.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/6.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/7.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/8.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/9.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/10.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/11.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/12.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/13.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/14.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/15.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/16.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/17.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/18.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/19.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/20.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/21.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/22.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/23.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/24.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/25.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/26.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/27.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/28.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/29.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/30.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/31.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/32.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/33.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/34.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/35.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/36.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/37.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/38.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/39.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/40.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/41.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/42.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/43.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/44.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/45.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/46.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/47.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/48.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/education/49.jpg')).uri,
]

const educationInteractions = {
    24: {
        swipe:"https://media.chop.edu/data/files/pdfs/oncology-oncology-parent-guide-school-reentry.pdf",
    }
}

const getEducationStories = (start,end) => getStories(start,end,educationInteractions,imgs);

export const sections = [
    {
        index: 0,
        title: "What to Expect"
    },
    {
        index: 17,
        title: "Accommodations",
        stories: getEducationStories(0,25)
    },
    {
        index: 25,
        title: "Hospital Homebound"
    },
    {
        index: 32,
        title: "Sharing Diagnosis with Classmates"
    },
    {
        index: 40,
        title: "IEP vs 504 Plan"
    },
    {
        index: 49,
        title: "Last story"
    }
];
export const slides = [
    {
        info: "Being active every day helps you stay strong throughout treatment and in the future!",
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