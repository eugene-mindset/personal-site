import React from 'react';

import About from '../Sections/About/About';
import Title from '../Sections/Header/Title';
import Experience from '../Sections/Experience/Experience';

import Menu from '../../components/Menu/Menu'

import './App.css';



function App() {
  const resumeData = require('./../../resume.json');
  console.log(resumeData);

  return (
    <div className="App">
      <Menu/>
      <Title/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
