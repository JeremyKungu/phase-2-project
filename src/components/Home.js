import React from 'react'
import {useState, useEffect} from 'react'
import Movies from './Movies';


function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(data => setMovie(data))
  }, [])


  return (
    <div>
      <Movies movies={movie}/>
    </div>
  )
}

export default Home