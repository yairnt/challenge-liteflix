import React, { useState, useContext } from 'react';
import perfilIcon from '../../assets/Perfil.png'
import notifications from '../../assets/notification.png'
import close from '../../assets/close.png'
import Text from '../Text';
import AuthContext from '../../context/AuthContext';

import './styles.css'

const Menu = ({isOpen, handleMenuToggle}) => {
  const { isOpenModal, setIsOpenModal } = useContext(AuthContext);

  const handleModal = () => {
    setIsOpenModal(true);
    handleMenuToggle();
  }

  return (
    <div style={{display: isOpen ? 'block' : 'none' }}>
      <div className="menu animate__animated animate__bounceInRight">
        <div className="icons-container">
          <div className="icon" onClick={handleMenuToggle}>
            <img src={close} />
          </div>
          <div className="icon-user">
            <div className="icon">
              <img src={notifications} alt='notifications' onClick={handleMenuToggle}/>
            </div>
            <div className="icon">
              <img src={perfilIcon} onClick={handleMenuToggle}/>
            </div>
          </div>
        </div>
        <div className="main-menu">
          <div className="menu-item" onClick={handleMenuToggle}>
            Inicio
          </div>
          <div className="menu-item" onClick={handleMenuToggle}>
            Series
          </div>
          <div className="menu-item" onClick={handleMenuToggle}>
            Películas
          </div>
          <div className="menu-item" onClick={handleMenuToggle}>
            Agregadas Recientemente
          </div>
          <div className="menu-item" onClick={handleMenuToggle}>
            Populares
          </div>
          <div className="menu-item" onClick={handleMenuToggle}>
            Mis Películas
          </div>
          <div className="menu-item" onClick={handleMenuToggle}>
            Mi Lista
          </div>
          <div className="menu-item" onClick={handleModal}>
            <Text weight={700}>
              + AGREGAR PELICULA
            </Text>
          </div>
          <div className="menu-item" onClick={handleMenuToggle}>
            Cerrar Sesion
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;