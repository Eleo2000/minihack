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

    useEffect(() => {
        setShowTransition(true);

        const timeoutId = setTimeout(() => {
            setShowTransition(false);
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [location]);

    return (
        <div className="App">
            <Header />
            {showTransition ? (<Transition onComplete={() => setShowTransition(false)} />)

                :

                <Routee />}

        </div>
    );
}

export default App;
