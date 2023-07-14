import { Link, Box } from "native-base";

export const getStories = (start,end,interactions,imgs) => {
    const stories = []
    for (let i=start; i < end; i++) {
        const story = {
            img: imgs[i],
            component: interactions[i]?.component, // will eventually replace all text
            swipe: interactions[i]?.swipe
        }
        stories.push(story)
    }
    return stories;
}

const defaultText = {
    color: "white",
    fontWeight: "medium",
    fontFamily: "MoonLight",
    textAlign: "center"
}

export const LinkBtn = ({link,styles,textStyles=defaultText}) => {
    return(<Link href={link}>
        <Box px="3" py="2" rounded="sm" style={styles} _text={textStyles}>
            Learn More
        </Box>
    </Link>)
}
