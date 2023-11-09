import React, { useState, useEffect } from 'react';
import { IconProvider } from './IconContext';
import Header from './components/header';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routee from './Routee';
import Transition from './comp/Transition';



function App() {
  return (
    <IconProvider>
      <BrowserRouter>
        <AppWithTransition />
      </BrowserRouter>
    </IconProvider>
  );
}

function AppWithTransition() {
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const [showC, setShowC] = useState(false);

  useEffect(() => {
    setShowTransition(true);
    setShowC(false)
    const timeoutId = setTimeout(() => {
      setShowTransition(false);
      setTimeout(() => {
        setShowC(true)
      }, 50)
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location]);

  return (
    <div className="App">
      <style>
        @import url('https://fonts.cdnfonts.com/css/press-start-2p');
      </style>
      <Header />
      {showTransition && (<Transition onComplete={() => setShowTransition(false)} />)}
      {showC && <Routee />}
    </div>
  );
}

export default App;
