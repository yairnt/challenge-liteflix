import React, { useEffect, useContext } from 'react';
import Slider from 'react-slick';
import { getMovies, getMoviesFromDB } from "../../apis/movies";
import arrowUp from "../../assets/arrowup.png"
import arrowDown from "../../assets/arrowdown.png"
import MovieMiniature from '../MovieMiniature';
import AuthContext from '../../context/AuthContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dropdown from '../Dropdown';
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
    <button onClick={onClick} style={{ ...arrowStyles, top: '-25px' }}>
      <img src={arrowUp} />
    </button>
  );
};

const MoviesCarousel = () => {
  const { allMovies, setAllMovies } = useContext(AuthContext);

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
      if (response.results) {
        const moviesWithSource = response.results.map(movie => ({ ...movie, from: 'api' }));
        return moviesWithSource;
      }
    } catch (error) {
      console.error("Error getting movies from external api:", error);
      return [];
    }
  }

  async function getUserMovies() {
    try {
      const response = await getMoviesFromDB();
      if (response) {
        const userMoviesWithSource = response.map(movie => ({ ...movie, from: 'db' }));
        return userMoviesWithSource;
      }
    } catch (error) {
      console.error('Error getting movies from db, please make sure db is up', error)
      return [];
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesFromAPIResponse, moviesFromDBResponse] = await Promise.all([
          getMoviesFromAPI(),
          getUserMovies()
        ]);
        const combinedMovies = [...moviesFromAPIResponse, ...moviesFromDBResponse];
        setAllMovies(combinedMovies);
      } catch (error) {
        console.error('Error getting movies', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className='carousel-container animate__animated animate__fadeInRight'>
      <div className='dropdown'>
        <Dropdown />
      </div>
      <Slider {...settings}>
        {allMovies?.map((movie, index) => (
          <div className='carousel-img' key={index}>
            {movie.from === 'api' ? (
              <MovieMiniature
                title={movie.title}
                img={movie.backdrop_path}
                rate={movie.vote_average}
                desc={movie.overview}
                year={movie.release_date}
                from={movie.from}
              />) : (
              <MovieMiniature
                title={movie.title}
                img={movie.imageUrl}
                rate={10}
                desc={'Description'}
                year={'2020'}
                from={movie.from}
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MoviesCarousel;
