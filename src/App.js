import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';



function App() {
  const [mode,setMode] = useState('light');

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor='#333333';
      document.title='TEXTA - Dark Mode';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      document.title='TEXTA - Light Mode';
    }
  }

  return (
    <>
      <Navbar title="TEXTA" about="About" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
