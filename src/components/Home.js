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
  }, [movie])  

  return (
    <div>
      <h1 className='header'>Browse your Favorite Movies</h1>
      <SearchBar search={search} setSearch={setSearch}/> 
      <MovieList movies={movie} search={search}/>       
      <UploadMovie data={movie} />             
    </div>
  )
}

export default Home
