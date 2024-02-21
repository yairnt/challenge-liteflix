import React from "react";
import Text from '../Text'
import Button from '../Button'

import './styles.css';

function MainMovie() {
  return (
    <div className="maintitle-container">
      <div className="movie-container">
        <div className="description animate__animated animate__lightSpeedInLeft">
          <Text color='#FFF' customSize={20} weight={400}>
            ORIGINAL DE LITEFLIX
          </Text>
        </div>
        <div className="maintitle animate__animated animate__lightSpeedInRight">
          <Text color='#64EEBC' customSize={100} weight={700}>
            LA CASA DE PAPEL
          </Text>
        </div>
        <div className="buttons">
          <Button type='play'/>
          <Button type='add' />
        </div>
      </div>
    </div>
  )
}

export default MainMovie;
