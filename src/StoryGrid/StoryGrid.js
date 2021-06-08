import './StoryGrid.css'
import React from 'react';

const StoryGrid = (stories) => {

    const storyList = props.stories.map(story => {
        <button id={story.id}>
            <img src={story.imageLink} alt={story.caption} />
            <div className='headline-box'>
                <h3>{story.headline}</h3>
            </div>
        </button>

    }) 

    return (
        <section className='story-grid'>

        </section>
    )
}

export default StoryGrid 