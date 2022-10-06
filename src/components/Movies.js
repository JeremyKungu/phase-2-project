import React from 'react'

function Movies( {movie}) {
  return (
    <div key={movie.id}>
      <h2>{movie.Title}</h2>
      <h3>{movie.Year}</h3>
      <img src={movie.Poster} alt="poster"></img>
    </div>
  )
}

export default Movies