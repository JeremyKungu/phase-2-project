import React from 'react'
import {useState, useEffect} from 'react'
import MovieList from './MovieList';
import NavBar from './NavBar';


function Home() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');

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
      <NavBar submit={handleSubmit} />
      <MovieList movies={movie}/>      
    </div>
  )
}

export default Home