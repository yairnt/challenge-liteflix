import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getMovies } from "../../apis/movies";
import arrowUp from "../../assets/arrowup.png"
import arrowDown from "../../assets/arrowdown.png"
import MovieMiniature from '../MovieMiniature';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css'


const CustomArrow = ({ onClick, direction }) => {
  const arrowStyles = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (direction === 'next') {
    return (
      <button onClick={onClick} style={{ ...arrowStyles, bottom: '2px', right: 'calc(50% - 1.5rem)' }}>
        <img src={arrowDown} />
      </button>
    );
  }
  
  return (
    <button onClick={onClick} style={{ ...arrowStyles, top: '-10px', left: 'calc(50% - 1.5rem)' }}>
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
    const res = await getMovies();
    setMovies(res.results);
  }

  useEffect(() => {
    getMoviesFromAPI();
  }, [])

  return (
    <div className='carousel-container animate__animated animate__fadeInRight'>
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
