import React, { useState } from 'react';
import Text from '../Text';
import arrowDown from '../../assets/arrowdown2.png'
import './styles.css'

const Dropdown = ({ label, options = ['POPULARES', 'MIS PELICULAS'] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <label className="label">{label}</label>
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-header" onClick={toggleDropdown}>
          <Text>
            VER:
          </Text>
          <div className='drop-arrowdown'>
            <Text weight={700}>
              {selectedOption ? selectedOption : options[0]}
            </Text>
            <img src={arrowDown} style={{ height: 15, width: 20, objectFit: 'contain'}} />
          </div>
        </div>
        {isOpen && (
          <ul className="options">
            {options?.map((option) => (
              <li key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;