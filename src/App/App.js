import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [error, setError] = useState('')
  const [allStories, setAllStories] = useState([])
  const [storyList, setStoryList] = useState([])
  const [filter, setFilter] = useState('')
  const [storyDetails, setStoryDetails] = useState({})

  useEffect(() => {

  }, [])

  return (
    <main>

    </main>
  );
}

export default App;
