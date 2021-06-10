import './StoryGrid.css'
import React from 'react';

const StoryGrid = ({stories, updateDetails }) => {
    const storyList = stories.map(story => {
        return (
        <button onClick={e => updateDetails(story.id)} className='story-card' id={story.id} key={story.id}>
            <div className='img-box'>
                <img src={story.imageLink} alt={story.title} />
            </div>
            <div className='headline-box'>
                <h3>{story.title}</h3>
            </div>
        </button>
        )
    }) 

    return (
        <section className='story-grid'>
            {storyList.length ? storyList : <h4>No stories</h4>}
        </section>
    )
}

export default StoryGrid 