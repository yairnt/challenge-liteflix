import React, { useState } from "react";
import playIcon from '../../assets/play.png';
import plusIcon from '../../assets/plus.png';
import { IoMdCheckmark } from "react-icons/io";

import './styles.css';

function Button({ type = 'play' }) {

  const [isAdd, setIsAdd] = useState(false);

  const handleAddList = () => {
    setIsAdd(!isAdd);
  }

  return (
    <div>
      {type === 'play' ? 
      (<button type='text' className="button-play animate__animated animate__zoomIn">
        <img src={playIcon} style={{gap: '10px'}}/>
          REPRODUCIR
      </button>
      ) : (
      <button type='text' className="button-add animate__animated animate__zoomIn" onClick={handleAddList}>
        {isAdd ? <IoMdCheckmark /> : <img src={plusIcon} style={{gap: '10px'}}/> }
        MI LISTA
      </button>)
    }
    </div>
  );
}

export default Button;