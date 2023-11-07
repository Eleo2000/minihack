import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MiniSpace from './components/MiniSpace';
import Education from './components/Education';
import Home from './components/Home';


const Routee = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/education" element={<Education/>} />
    <Route path="/minispace" element={<MiniSpace/>} />
  </Routes>
)
export default Routee

