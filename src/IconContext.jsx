import React, { createContext, useContext, useState } from "react";

const IconContext = createContext();

export function useIconContext() {
  return useContext(IconContext);
}

export function IconProvider({ children }) {
  const [activeIcon, setActiveIcon] = useState('home');

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <IconContext.Provider value={{ activeIcon, handleIconClick }}>
      {children}
    </IconContext.Provider>
  );
}
