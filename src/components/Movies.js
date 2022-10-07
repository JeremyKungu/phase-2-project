import React from 'react'

function Movies( {movie}) {
  return (
    <div className='movie'>
      <img className="poster" src={movie.Poster} alt="poster"></img>
      <h2>{movie.Title}</h2>
      <h3>{movie.Year}</h3>      
    </div>
  )
}

export default Movies