import './StoryGrid.css'
import React from 'react';

const StoryGrid = (props) => {
    const storyList = props.stories.map(story => {
        return (
        <button className='story-card' id={story.id} key={story.id}>
            <img src={story.imageLink} alt={story.caption} />
            <div className='headline-box'>
                <h3>{story.headline}</h3>
            </div>
        </button>
        )
    }) 

    console.log(storyList)


    return (
        <section className='story-grid'>
            { storyList.length ? storyList : <h4>No stories</h4>}
        </section>
    )
}

export default StoryGrid 