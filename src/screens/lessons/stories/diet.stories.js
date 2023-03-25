import {Asset} from 'expo-asset';
import { getStories } from '../story.helper';

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
    Asset.fromModule(require('../../../images/stories/diet/21.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/22.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/23.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/24.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/25.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/diet/26.jpg')).uri,
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

const interactions = {
    3: "https://www.hsph.harvard.edu/nutritionsource/kids-healthy-eating-plate/",
    16: "https://tasty.co/article/hannahloewentheil/20-adorable-food-creations-thatll-get-kids-excited-for",
    21: "https://www.cancer.net/coping-with-cancer/physical-emotional-and-social-effects-cancer/managing-physical-side-effects/weight-gain",


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
        title: "Drink Water"
    },
    {
        index: 9,
        title: "Mealtime Fun",
        stories: getDietStories(0,17)
    },
    {
        index: 17,
        title: "Healthy Weight",
        stories: getDietStories(0,28)
    },
    {
        index: 28,
        title: "Snacks"
    },
    {
        index: 35,
        title: "Appetite"
    },
    {
        index: 47,
        title: "Meal Apps"
    },
    {
        index: 51,
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