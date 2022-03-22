import {Asset} from 'expo-asset';

export const sections = [
    {
        index: 1,
        title: "Support Groups"
    },
    {
        index: 3,
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
let imgs = [
    Asset.fromModule(require('../../../images/stories/diet/1.gif')).uri,
    Asset.fromModule(require('../../../images/stories/diet/2.gif')).uri,
    Asset.fromModule(require('../../../images/stories/diet/3.gif')).uri
]

export default imgs;