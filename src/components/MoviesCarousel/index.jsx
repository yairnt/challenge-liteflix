import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getMovies } from "../../apis/movies";
import arrowUp from "../../assets/arrowup.png"
import arrowDown from "../../assets/arrowdown.png"
import MovieMiniature from '../MovieMiniature';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css'
import Dropdown from '../Dropdown';


const CustomArrow = ({ onClick, direction }) => {
  const arrowStyles = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  };

  if (direction === 'next') {
    return (
      <button onClick={onClick} style={{ ...arrowStyles, bottom: '-10px' }}>
        <img src={arrowDown} />
      </button>
    );
  }
  
  return (
    <button onClick={onClick} style={{ ...arrowStyles, top: '-20px' }}>
      <img src={arrowUp} />
    </button>
  );
};

const MoviesCarousel = () => {
  const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL;
  const [movies, setMovies] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next">next</CustomArrow>,
    prevArrow: <CustomArrow direction="prev">prev</CustomArrow>,
    vertical: true,
    verticalSwiping: true,
  };


  async function getMoviesFromAPI() {
    try {
      const response = await getMovies();
      if (response.results) setMovies(response.results);
    } catch (error) {
      console.error("Error al obtener las películas:", error);
    }
  }

  useEffect(() => {
    getMoviesFromAPI();
  }, []);

  return (
    <div className='carousel-container animate__animated animate__fadeInRight'>
      <div className='dropdown'>
        <Dropdown />
      </div>
      <Slider {...settings}>
        {console.log(movies)}
        {movies?.map((movie, index) => (
          <div className='carousel-img' key={index}>
            <MovieMiniature
              title={movie.title}
              img={movie.backdrop_path}
              rate={movie.vote_average}
              desc={movie.overview}
              year={movie.release_date}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MoviesCarousel;
