import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import MainMovie from "../../components/MainMovie";
import MoviesCarousel from "../../components/MoviesCarousel";
import Menu from "../../components/Menu"
import './styles.css';

function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="background">
      <div className="container">
        <NavBar isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
        <Menu isOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
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
