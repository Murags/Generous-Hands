import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar({ buttons, onNavClick, activeNavItem }) {
  const navigate = useNavigate();

  const handleNavClick = (navItem) => {
    if (navItem === 'Logout') {
      navigate('/');
    } else {
      onNavClick(navItem);
    }
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        {buttons.map((button) => (
          <li
            key={button.label}
            className={activeNavItem === button.label ? 'active-dash' : ''}
            onClick={() => handleNavClick(button.label)}
          >
            <i className={`fas ${button.icon}`}></i>{button.label}
          </li>
        ))}
        <li className={activeNavItem === 'Logout' ? 'active-dash' : ''} onClick={() => handleNavClick('Logout')}>
          <i className="fas fa-sign-out-alt"></i>Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
