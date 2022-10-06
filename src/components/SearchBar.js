import React from 'react'

function SearchBar({setSearch}) {
    return (
        <div className="search">
          <input className='searchbar'
            type="text"
            placeholder="Search for your Favorite Movie"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )
}

export default SearchBar