import './App.css';
import React, { useState, useEffect } from 'react';
import { getStories, cleanStoryData } from '../utilities.js'
import Header from '../Header/Header'
import StoryGrid from '../StoryGrid/StoryGrid'

function App() {

  const [error, setError] = useState('')
  const [allStories, setAllStories] = useState([])
  const [storyList, setStoryList] = useState([])
  const [filter, setFilter] = useState('')
  const [storyDetails, setStoryDetails] = useState({})

  useEffect(() => {
    getStories()
    .then((stories) => {
      setAllStories(cleanStoryData(stories))
    })
    .catch(error => setError(error))
  }, [])

  const updateFilter = (event) => {
    setFilter(event.target.id)
  }

  return (
    <main className='App'>
      <Header 
        updateFilter={updateFilter}
        currentFilter={filter}
      />
      {allStories.length && (
        <StoryGrid 
          stories={allStories}
        />
      )}
    </main>
  );
}

export default App;
