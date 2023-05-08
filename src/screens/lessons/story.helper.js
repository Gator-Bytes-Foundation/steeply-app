export const getStories = (start,end,interactions,imgs,components={}) => {
    const stories = []
    for (let i=start; i < end; i++) {
        const story = {
            img: imgs[i],
            components: components[i], // will eventually replace all text
            swipe: interactions[i]
        }
        stories.push(story)
    }
    return stories;
}
