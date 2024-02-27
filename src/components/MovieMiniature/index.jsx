import React, { useState } from "react";
import playMovie from '../../assets/playmovie.png';
import emptyLike from '../../assets/emptylike.png';
import miniPlay from '../../assets/miniplay.png';
import filledLike from '../../assets/filledlike.png';
import star from '../../assets/star1.png';
import imgNotFound from '../../assets/image-not-found.png'

import './styles.css';

function MovieMiniature({
  title = 'TITULO',
  img,
  desc = 'MOVIE DESCRIPTION',
  rate = '5',
  year = '2020',
  from,
}) {
  const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL;
  const LOCAL_BASE_URL = import.meta.env.VITE_LOCAL_BASE_URL
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }
  console.log('imagennnn', img);
  const imageSource = from === 'api' ? IMG_BASE_URL + img : LOCAL_BASE_URL + img;
  console.info('image source', imageSource);

  return (
    <div className="video-card">
      <div className="default">
        <img src={playMovie} />
        <div className="title">{title}</div>
      </div>
      <div className="overlay">
        <div className="overlay-title-heart">
          <div className="overlay-play-title">
            <img src={miniPlay} />
            {title}
          </div>
          <div className="overlay-right" onClick={handleLike}>
            {like ? (<img src={filledLike} />) : (<img src={emptyLike} />)}
          </div>
        </div>
        <div className="overlay-desc">
          {desc.substring(0, 80) + '...'}
        </div>
        <div className="overlay-title-bottom">
          <div className="overlay-play-title">
            <img src={star} alt="star" />
            {rate.toFixed(1)}
          </div>
          <div className="overlay-right">
            {year.substring(0, 4)}
          </div>
        </div>
      </div>
      <img className="thumbnail" src={imageSource} alt={title} onError={(event) => event.target.src = imgNotFound} />
    </div>
  );
}

export default MovieMiniature;
