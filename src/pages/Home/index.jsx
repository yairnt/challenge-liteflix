import React from "react";
import NavBar from "../../components/NavBar";

import './styles.css';
import MainMovie from "../../components/MainMovie";
import MovieMiniature from "../../components/MovieMiniature";
import MoviesCarousel from "../../components/MoviesCarousel";

function Home() {
  return (
    <div className="background">
      <div className="container">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="mainmovie">
          <MainMovie />
        </div>
        <div className="moviescarousel-container">
          <MoviesCarousel />
        </div>
      </div>

    </div>
  )
}

export default Home;
