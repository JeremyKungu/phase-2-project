import React from 'react'
import Movies from './Movies'

function MovieList( {movies}) {
  return (    
    <div className='movies'>
       {movies.map(data =>  {
        return <Movies key={data.id} movie={data}/>
       })} 
    </div>
  )
}

export default MovieList