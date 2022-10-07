import React from 'react'
import {useState} from "react";

function UploadMovie({data}) { 
  
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");

    function handleSubmit(obj) {
      obj.preventDefault();
      const newData = {title, year}
      fetch("http://localhost:3000/movies", {
      method: "POST",
      headers:{"Content-type": "application/json"},
      body:JSON.stringify(newData)
      })    
    }
  
  return (
    <form className="movie-form" onSubmit={handleSubmit}>
        <div className="movie-elements">
          <input type="text" name="name" placeholder="Name" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <input type="text" name="description" placeholder="Description" value={year} onChange={(e) => setYear(e.target.value)}/>       
        </div>
        <button className="submit" type='submit'>Add Movie</button>
    </form>

  )
}

export default UploadMovie