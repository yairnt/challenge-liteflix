import React, { useEffect, useState } from "react";
import playMovie from '../../assets/playmovie.png';
import emptyLike from '../../assets/emptylike.png';
import miniPlay from '../../assets/miniplay.png';
import filledLike from '../../assets/filledlike.png';
import star from '../../assets/star1.png';

import './styles.css';

function MovieMiniature({
  title = 'TITULO',
  img = 'pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg',
  desc = 'Erase una vez una cosa q paso ahi nose q onda y blblal hsadjfjkh dsjk fdsf jksdjkhf sadjkhf sjkfh dskj fkjsdkhja ',
  rate = '5',
  year = '2020'
}) {
  const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL;
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }


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
          {desc.substring(0, 80)+'...'}
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
      <img className="thumbnail" src={IMG_BASE_URL + img} alt={title} />
    </div>
  );
}

export default MovieMiniature;
