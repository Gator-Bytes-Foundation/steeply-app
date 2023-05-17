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
