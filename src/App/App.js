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

  return (
    <main className='App'>
      <Header />
      {allStories.length && (
        <StoryGrid 
          stories={allStories}
        />
      )}
    </main>
  );
}

export default App;
