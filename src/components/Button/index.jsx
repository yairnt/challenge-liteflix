import React from "react";
import './styles.css';

import playIcon from '../../assets/play.png';
import plusIcon from '../../assets/plus.png';

function Button({ type = 'play' }) {
  return (
    <div>
      {type === 'play' ? 
      (<button type='text' className="button-play">
        <img src={playIcon} style={{gap: '10px'}}/>
          REPRODUCIR
      </button>
      ) : (
      <button type='text' className="button-add">
        <img src={plusIcon} style={{gap: '10px'}}/>
        MI LISTA
      </button>)
    }
    </div>
  );
}

export default Button;