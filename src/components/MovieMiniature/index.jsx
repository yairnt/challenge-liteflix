import React, { useEffect, useState } from "react";

import './styles.css';
import { getMovies } from "../../apis/movies";

function MovieMiniature() {
  const [movies, setMovies] = useState();

  async function getMoviesFromAPI() {
    const res = await getMovies();
    setMovies(res.results);
  }

  useEffect(()=> {
    getMoviesFromAPI();
  }, [])

  return (
    <div className="container">
      {console.log(movies)}
      hola
    </div>
  )
}

export default MovieMiniature;
