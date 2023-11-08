import React from 'react';
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

  // Fonction pour obtenir le nom de l'icône active en fonction de l'emplacement actuel
  const getActiveIcon = (pathname) => {
    if (pathname === '/') {
      return 'home';
    }
    const match = pathname.match(/^\/([a-z]+)$/);
    if (match && iconNames.includes(match[1])) {
      return match[1];
    }
    return null;
  };

  const activeIconFromLocation = getActiveIcon(location.pathname);

  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
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
        <div className="profile">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
