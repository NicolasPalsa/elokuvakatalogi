function MovieList({ movies, setMovies, displayed }) {

  function handleDelete(key) {
    setMovies(movies.filter(m => movies.indexOf(m) != key))
  }

  return (
    <>
      <ul>
        {displayed.map(m => 
          <li key={displayed.indexOf(m)}>
            {m.title} ({m.year}) - {m.genre} 
            <button type="button" onClick={() => handleDelete(displayed.indexOf(m))}>Poista</button>
          </li>
        )}
      </ul>
    </>
  )
}

export default MovieList