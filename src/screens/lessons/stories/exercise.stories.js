import {Asset} from 'expo-asset';
import { getStories } from '../story.helper';

const exerciseImgs = [
    Asset.fromModule(require('../../../images/stories/exercises/1.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/2.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/3.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/4.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/5.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/6.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/7.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/8.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/9.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/10.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/11.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/12.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/13.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/14.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/15.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/16.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/17.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/18.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/19.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/20.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/21.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/21.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/22.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/23.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/24.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/25.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/26.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/26.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/27.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/28.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/29.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/30.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/31.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/32.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/33.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/34.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/35.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/36.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/37.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/38.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/39.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/39.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/40.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/41.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/42.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/43.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/44.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/45.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/46.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/47.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/48.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/49.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/50.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/51.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/51.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/52.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/53.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/54.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/55.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/56.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/57.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/58.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/59.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/60.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/61.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/61.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/62.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/63.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/64.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/65.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/66.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/67.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/68.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/69.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/69.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/70.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/71.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/72.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/73.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/74.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/75.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/76.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/77.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/78.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/79.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/80.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/81.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/82.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/exercises/83.jpg')).uri
]
const sectionInteractions = {
    0: "Exercises",
    1: "Exercises",
}

const getExerciseStories = (start,end) => getStories(start,end,sectionInteractions,exerciseImgs)


// indices should be 1 less than the page number except first/last
export const sections = [
    {
        index: 0,
        title: "Importance",
        swipe: "Exercises",
        stories: getExerciseStories(0,21)
    },
    {
        index: 21,
        title: "Stretching",
        swipe: "Stretching"
    },
    {
        index: 26,
        title: "Strength Exercises",
        swipe: "Exercises"
    },
    {
        index: 31,
        title: "Exercise Impact",
        swipe: "Side Effect Management"// story 34 (index 33) swipes up to symptom management
    },
    {
        index: 39,
        title: "Making Exercise Fun"
    },
    {
        index: 51,
        title: "Handling Hard Feelings"
    },
    {
        index: 61,
        title: "Room Activities"
    },
    {
        index: 69,
        title: "Exercise Apps"
    },
    {
        index: 75,
        title: "Too much Exercise?"
    },
    {
        index: 78,
        title: "Milestone Guideline"
    },
    {
        index: 84,
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


export default exerciseImgs;