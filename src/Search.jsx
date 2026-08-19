import { useState } from "react"

function Search({ movies, setMovies, displayed, setDisplayed}) {

  function handleSearch(i) {
        
    if (i) {
      const filtered = movies.filter(m => m.title.toLowerCase().includes(i) || m.year.toLowerCase().includes(i) || m.genre.toLowerCase().includes(i) );
      if (filtered.length > 0) {
        setDisplayed([...filtered]);
      } else {
        setDisplayed([])
      }
    } else {
        setDisplayed([...movies])
    }
  }

  return (
    <>
      <input type="text" name="search" id="search" placeholder='Hae elokuvaa...' onChange={() => handleSearch(document.querySelector('input#search').value.toLowerCase())}/>
    </>
  )
}

export default Search