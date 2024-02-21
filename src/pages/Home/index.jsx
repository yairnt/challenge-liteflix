import React from "react";
import NavBar from "../../components/NavBar";

import './styles.css';
import MainMovie from "../../components/MainMovie";
import MovieMiniature from "../../components/MovieMiniature";

function Home() {
  return (
    <div className="background">
      <div className="container">
        <NavBar />
      </div>
      <div className="mainmovie">
        <MainMovie />
        <MovieMiniature />
      </div>

    </div>
  )
}

export default Home;
