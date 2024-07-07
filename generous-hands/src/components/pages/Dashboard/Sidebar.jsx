import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar({ onNavClick, activeNavItem }) {
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
        <li className={activeNavItem === 'Analytics' ? 'active-dash' : ''} onClick={() => handleNavClick('Analytics')}>
          <i className="fas fa-chart-line"></i>Analytics
        </li>
        <li className={activeNavItem === 'Maps' ? 'active-dash' : ''} onClick={() => handleNavClick('Maps')}>
          <i className="fas fa-map-marker-alt"></i>Maps
        </li>
        <li className={activeNavItem === 'Donation' ? 'active-dash' : ''} onClick={() => handleNavClick('Donation')}>
          <i className="fas fa-th-list"></i>Donation
        </li>
        <li className={activeNavItem === 'Logout' ? 'active-dash' : ''} onClick={() => handleNavClick('Logout')}>
          <i className="fas fa-sign-out-alt"></i>Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

