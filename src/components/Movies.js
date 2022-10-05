import React from 'react'

function Movies( {movies}) {
    const moviesData = movies.map(movie => (
        <div key={movie.id}>
            <h2>{movie.Title}</h2>
            <h3>{movie.Year}</h3>
            <img src={movie.Poster} alt="poster"></img>
        </div>
    ))
    
  return (
    <div>
        movies
        {moviesData}
    </div>
  )
}

export default Movies