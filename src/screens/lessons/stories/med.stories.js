import {Asset} from 'expo-asset';

export const sections = [
    {
        index: 1,
        title: "Making Meds Less Scary"
    },
    {
        index: 3,
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
let imgs = [
    Asset.fromModule(require('../../../images/stories/med/1.gif')).uri,
    Asset.fromModule(require('../../../images/stories/med/2.gif')).uri
]

export default imgs;