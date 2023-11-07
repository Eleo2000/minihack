import React from 'react';
import { useIconContext } from '../IconContext';
import './css/Header.css'
import { Link } from 'react-router-dom';
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
                className={`icon ${activeIcon === iconName ? 'active' : ''}`}
                onClick={() => handleIconClick(iconName)}
              >
                {iconComponents[iconName]}
              </Link>
            ))}
          </div>
          <div className="profile"><ProfileIcon/></div>
        </div>
      </div>
    );
  }
  
  export default Header;