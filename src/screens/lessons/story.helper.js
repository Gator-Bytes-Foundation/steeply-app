export const getStories = (start,end,interactions,imgs) => {
    const stories = []
    for (let i=start; i < end; i++) {
        const story = {
            img: imgs[i],
            interact: interactions[i]
        }
        stories.push(story)
    }
    return stories;
}
