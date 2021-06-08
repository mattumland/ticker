import './App.css';
import React, { useState, useEffect } from 'react';
import { getStories, cleanStoryData, filterStories } from '../utilities.js'
import Header from '../Header/Header'
import StoryGrid from '../StoryGrid/StoryGrid'

function App() {

  const [error, setError] = useState('')
  const [allStories, setAllStories] = useState([])
  const [storyList, setStoryList] = useState([])
  const [filter, setFilter] = useState('')
  const [storyDetails, setStoryDetails] = useState(0)

  useEffect(() => {
    getStories()
    .then((stories) => {
      setAllStories(cleanStoryData(stories))
      setStoryList(cleanStoryData(stories))
    })
    .catch(error => setError(error))
  }, [])

  useEffect(() => {
    setStoryList(filterStories(filter, allStories))
  }, [filter])

  const updateFilter = (e) => {
    setFilter(e.target.id)
  }

  const updateDetails = (id) => {
    const storyDetail = allStories.find(story => story.id === id)
    setStoryDetails(storyDetail)
  }

  const removeDetails = () => {
    setStoryDetails(0);
  }

  return (
    <main className='App'>
      <Header 
        updateFilter={updateFilter}
        currentFilter={filter}
      />
      {allStories.length && (
        <StoryGrid 
          stories={storyList}
          updateDetails={updateDetails}
        />
      )}
    </main>
  );
}

export default App;
