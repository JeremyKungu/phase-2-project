import React from 'react'
import {useState, useEffect} from 'react'
import Movies from './Movies';
import NavBar from './NavBar';


function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(data => setMovie(data))
  }, [])

  function handleSubmit(obj) {
    fetch("http://localhost:3000/movies", {
    method: "POST",
    headers:{"Content-type": "application/json"},
    body:JSON.stringify(obj)
    })
  }


  return (
    <div>
      <Movies movies={movie}/>
      <NavBar submit={handleSubmit} />
    </div>
  )
}

export default Home