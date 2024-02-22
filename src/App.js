import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333333';
      document.title = 'TEXTA - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TEXTA - Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TEXTA" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />}>
            </Route>
            <Route path="/About" element={<About mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
