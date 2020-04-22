import React from 'react';

import About from '../Sections/About/About';
import Title from '../Sections/Header/Title';
import Experience from '../Sections/Experience/Experience';

import Menu from '../../components/Menu/Menu'


import './App.css';

import Fade from 'react-reveal/Fade';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Fade right>
        <Title/>
        <About/>
        <Experience/>
      </Fade>
    </div>
  );
}

export default App;
