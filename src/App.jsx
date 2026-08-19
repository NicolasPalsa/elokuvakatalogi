import { useState, createContext, useContext } from 'react'
import Search from './Search'
import Form from './Form'
import MovieList from './MovieList'
import './assets/App.css'

function App() {

  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState()
  const [movies, setMovies] = useState([{ "title": "Inception", "year": "2010", "genre": "Sci-Fi" },
    { "title": "Parasite", "year": "2019", "genre": "Drama" },
    { "title": "The Matrix", "year": "1999", "genre": "Action" }])
  const [displayed, setDisplayed] = useState([...movies])

  function handleTheme() {
    if (theme === 'light') setTheme('dark'); else setTheme('light')
  }

  if (!user) {
    setUser(window.prompt('Mitä on nimesi?'))
  }

  return (
      <div className={theme} id='main'>
        <h1>Tervetuloa, {user}!</h1>
        <button type="button" className='theme' onClick={() => handleTheme()}>Vaihda teema</button>
        <Form movies={movies} setMovies={setMovies} setDisplayed={setDisplayed}></Form>
        <Search movies={movies}setMovies={setMovies} displayed={displayed} setDisplayed={setDisplayed}></Search>
        <MovieList movies={movies} setMovies={setMovies} displayed={displayed}></MovieList>
      </div>
  )
}

export default App
