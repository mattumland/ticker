import './StoryModal.css'
import React from 'react'

const StoryModal = ({ story, removeDetails }) => {

    return (
        <div className='modal'>
            <section className='story-container'>
                <aside className='title-box'>
                    <h3 className='title'>{story.title}</h3>
                    <button onClick={e => removeDetails()} className='xbutton'>X</button>
                </aside>
                <div className='full-img-box'>
                    <img className='full-img' src={story.imageLink} alt={story.caption} />
                </div>
                <aside className='details-box'>
                    <h4>{story.byline}</h4>
                    <h5>{story.publishedDate}</h5>
                    <p>{story.abstract}</p>
                    <h5>Image Caption</h5>
                    <p>{story.imageCaption}</p>
                    <h5>Image Credit</h5>
                    <p>{story.imageCredit}</p>
                    <h5>Click here for the full story</h5>
                    <a>{story.link}</a>
                </aside>
            </section>
        </div>
    )
}

export default StoryModal