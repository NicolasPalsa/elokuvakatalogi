import { useState } from "react"

function Form({ movies, setMovies, setDisplayed }) {

  function handleForm(e) {
    e.preventDefault()
    /* document.querySelector('.form').querySelectorAll('input[type="text"]').forEach(input => {
      if (!input.value) {
        window.alert('Kaikki tekstikentät pitäisi olla täytetty')
        return
      }
    }) */

    setMovies([...movies, ({ "title": document.getElementById('name').value, 
                            "year": document.getElementById('year').value, 
                            "genre": document.getElementById('genre').value})])

    setDisplayed([...movies, ({ "title": document.getElementById('name').value, 
                            "year": document.getElementById('year').value, 
                            "genre": document.getElementById('genre').value})])

    document.querySelector('.form').querySelectorAll('input[type="text"]').forEach(input => {
      input.value = ''
    })
  }

  return (
    <>
      <div className="form">
        <input type="text" name="name" id="name" placeholder='Nimi'/>
        <input type="text" name="year" id="year" placeholder='Vuosi'/>
        <input type="text" name="genre" id="genre" placeholder='Genre'/>
        <button type="submit" onClick={(e) => handleForm(e)}>Lisää</button>
      </div>
    </>
  )
}

export default Form