import React, { useEffect, useState } from "react";
import Text from "../Text";
import { getMovies } from "../../apis/movies";
import './styles.css';

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
    <div className="asd">
      {console.log(movies)}
      <Text>
        HOLAAAAA
      </Text>
    </div>
  )
}

export default MovieMiniature;
