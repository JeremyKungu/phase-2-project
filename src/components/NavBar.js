import React from 'react'
import {useState} from "react";

function NavBar( {submit} ) {
    const [movieData, setMovieData] = useState([]);
    const [images, setImages] = useState([]);

    function handleChange(e) {
        e.preventDefault()
        setMovieData({
        ...movieData,
        [e.target.name]: e.target.value,
        })
    }

    function submitData(e) {
        e.preventDefault();
        submit(movieData)
    }

    function onImageChange(e) {
      setImages({
        ...images,
        [e.target.files]: e.target.value,
      })
    }
  return (
    <form className="movie-form">
        <div className="inline fields">
          <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" onChange={handleChange}/>       
          <input type="file" multiple accept="image/*" onChange={onImageChange} />
        </div>
        <button type='submit' onClick={submitData}>Add Movie</button>
    </form>

  )
}

export default NavBar