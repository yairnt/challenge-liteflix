import React from "react";
import Text from '../Text'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

import './styles.css';

function NavBar() {
  return (
    <div className="container">
      <div className="text">
        <Text color='#64EEBC' customSize={36} weight={900}>
          LITE 
        </Text>
        <Text color='#64EEBC' customSize={36} weight={100}>
          FLIX
        </Text>
        <div className="add-movie">
          <Text customSize={22} color='#FFF' weight={100}>
            + AGREGAR PELICULAS
          </Text>
        </div>
      </div>
      <div className="icons-container">
        <div className="icon">
          <HiMenuAlt3 size={30} color='#FFF'/>
        </div>
        <div className="icon">
          <IoNotificationsOutline size={30} color='#FFF'/>
        </div>
        <div className="icon">
          <FaUserCircle size={30} color='#FFF'/>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
