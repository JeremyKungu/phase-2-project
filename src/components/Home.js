import React from 'react'
import {useState, useEffect} from 'react'
import MovieList from './MovieList';
import UploadMovie from './UploadMovie';
import SearchBar from './SearchBar';


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
      <UploadMovie submit={handleSubmit} />
      <SearchBar search={search} setSearch={setSearch}/> 
      <MovieList movies={movie} search={search}/>   
       <h1>Home</h1>
    </div>
  )
}

export default Home