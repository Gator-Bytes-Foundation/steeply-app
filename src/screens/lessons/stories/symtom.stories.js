import {Asset} from 'expo-asset';
import { getStories } from '../story.helper';

const imgs = [
    Asset.fromModule(require('../../../images/stories/symptom/1.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/2.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/3.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/4.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/5.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/6.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/7.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/8.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/9.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/10.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/11.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/12.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/13.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/14.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/15.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/16.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/17.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/18.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/19.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/20.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/21.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/21.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/22.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/23.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/24.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/25.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/26.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/26.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/27.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/28.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/29.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/30.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/31.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/32.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/33.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/34.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/35.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/36.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/37.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/38.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/39.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/39.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/40.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/41.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/42.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/43.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/44.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/45.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/46.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/47.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/48.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/49.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/50.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/51.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/51.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/52.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/53.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/54.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/55.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/56.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/57.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/58.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/59.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/60.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/61.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/61.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/62.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/63.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/64.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/65.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/66.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/67.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/68.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/69.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/69.jpg')).uri,
    Asset.fromModule(require('../../../images/stories/symptom/70.jpg')).uri
]
const symptomInteractions = {
    3: "https://www.cancer.gov/types/leukemia/patient/child-all-treatment-pdq#_26",
    4: "https://www.cancer.gov/types/leukemia/patient/child-aml-treatment-pdq#_1",
    5: "https://www.cancer.gov/types/neuroblastoma/patient/neuroblastoma-treatment-pdq",
    6: "https://www.cancer.gov/types/neuroblastoma/patient/neuroblastoma-treatment-pdq",
    7: "https://www.cancer.gov/types/neuroblastoma/patient/neuroblastoma-treatment-pdq",
    8: "https://www.cancer.gov/types/brain/patient/child-cns-embryonal-treatment-pdq#_1",
    24: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8219270/",
    28: "https://www.cancer.org/treatment/treatments-and-side-effects/physical-side-effects/swelling.html",
    32: "https://www.cancer.org/treatment/treatments-and-side-effects/physical-side-effects/swelling.html",
    40: "https://www.cancer.gov/about-cancer/advanced-cancer/care-choices/palliative-care-fact-sheet",
    41: "https://pubmed.ncbi.nlm.nih.gov/25057608/",
    44: "https://www.cancer.net/navigating-cancer-care/advanced-cancer/hospice-care",
    55: "https://www.cancer.org/treatment/treatments-and-side-effects/physical-side-effects/low-blood-counts/anemia.html",
    58: "https://www.cancer.net/navigating-cancer-care/diagnosing-cancer/reports-and-results/understanding-your-complete-blood-count-cbc-tests"
}

const getSymptomStories = (start,end) => getStories(start,end,symptomInteractions,imgs);

export const sections = [
    {
        index: 0,
        title: "Intro"
    },
    {
        index: 3,
        title: "Cancer Quicksheets",
        stories: getSymptomStories(0,10)
    },
    {
        index: 10,
        title: "Manage Side Effects"
    },
    {
        index: 36,
        title: "Paliative Vs Hospice Care"
    },
    {
        index: 49,
        title: "What Are Blood Counts?"
    },
    {
        index: 70,
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