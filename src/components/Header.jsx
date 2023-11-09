import React, { useEffect, useRef, useState } from 'react';
import { useIconContext } from '../IconContext';
import './css/Header.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from './svg/Logo';
import EducationIcon from './svg/EducationIcon';
import HomeIcon from './svg/HomeIcon';
import MinispaceIcon from './svg/MinispaceIcon';
import ProfileIcon from './svg/ProfileIcon';

const iconComponents = {
  home: <HomeIcon />,
  education: <EducationIcon />,
  minispace: <MinispaceIcon />,
};

function Header() {
  const { activeIcon, handleIconClick } = useIconContext();
  const iconNames = ['home', 'education', 'minispace'];
  const location = useLocation();
  const activeIconFromLocation = getActiveIcon(location.pathname);

  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target) && profileRef.current && !profileRef.current.contains(event.target)) {
        setIsCardVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const showCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  const hideCard = () => {
    setIsCardVisible(false);
  };

  function getActiveIcon(pathname) {
    if (pathname === '/') {
      return 'home';
    }
    const match = pathname.match(/^\/([a-z]+)$/);
    if (match && iconNames.includes(match[1])) {
      return match[1];
    }
    return null;
  }

  return (
    <div className="header">
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <div className="menu">
        <div className="icones">
          {iconNames.map((iconName) => (
            <Link
              to={`/${iconName}`}
              key={iconName}
              className={`icon ${activeIconFromLocation === iconName ? 'active' : ''}`}
              onClick={() => handleIconClick(iconName)}
            >
              {iconComponents[iconName]}
            </Link>
          ))}
        </div>
        <div ref={profileRef} onClick={showCard} className="profile">
          <ProfileIcon />
        </div>

        {isCardVisible && (
          <div className="card" ref={cardRef}>
            <h2>Profil de Antroine</h2>
            <div className="deconnecta underra "> Deconnecter </div>
            <button className = "  underra " onClick={hideCard}>Fermer</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
