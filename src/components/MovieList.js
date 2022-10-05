import React from 'react'
import Movies from './Movies'

function MovieList( {movies}) {
    console.log(movies)
    const moviesData = movies.map(movie => (
        <Movies key={movie.id} movie={movie}/>
    ))
  return (
    
    <div>
        {moviesData}
        MovieList
    </div>
  )
}

export default MovieList