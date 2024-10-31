import { useState } from 'react'
import './App.css'
import Button from './Button'
import YesButton from './YesButton'
import Cat from './Cat';
import Page2 from './Page2'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Page3 from './Page3';
import Page4 from './Page4';

function App() {

  return (
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
  )
}

export default App
