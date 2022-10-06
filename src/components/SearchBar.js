import React from 'react'

function SearchBar({setSearch}) {
    return (
        <div className="ui large fluid icon input">
          <input
            type="text"
            placeholder="Search for your Favorite Movie"
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="circular search link icon"></i>
        </div>
      )
}

export default SearchBar