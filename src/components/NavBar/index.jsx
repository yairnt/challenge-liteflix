import React, { useState, useContext } from "react";
import Text from '../Text'
import perfilIcon from '../../assets/Perfil.png'
import { HiMenuAlt3 } from "react-icons/hi";
import notifications from "../../assets/notification.png"
import AuthContext from "../../context/AuthContext"
import './styles.css';

function NavBar({ handleMenuToggle }) {
  const { isOpenModal, setIsOpenModal } = useContext(AuthContext);

  return (
    <div className="container animate__animated animate__zoomIn">
      <div className="maincontainer">
        <div className="texts">
          <Text color='#64EEBC' customSize={36} weight={700} >
            LITE
          </Text>
          <Text color='#64EEBC' customSize={36} weight={400} >
            FLIX
          </Text>
          <div className="add-movie" onClick={ ()=> setIsOpenModal(true) }>
            <Text customSize={22} color='#FFF' weight={100}>
              + AGREGAR PELICULAS
            </Text>
          </div>
        </div>
        <div className="icons-container">
          <div className="icon-perfil" onClick={handleMenuToggle} >
            <HiMenuAlt3 size={30} color='#FFF' />
          </div>
          <div className="icon-nav">
            <img src={notifications} alt='notifications' />
          </div>
          <div className="icon-perfil">
            <img src={perfilIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
