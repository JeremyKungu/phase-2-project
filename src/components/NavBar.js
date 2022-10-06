import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/search'>Search</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
        <NavLink to='/uploadmovie'>Upload Movie</NavLink>
    </div>
  )
}

export default NavBar