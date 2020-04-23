import React from 'react';
import './Title.css';
import Fade from 'react-reveal/Fade';

export const Title = () => (
  <div className="section header" id="title">
    <Fade down duration={2000}>
    <div className="center">
      <h1 className="name">Eugene Asare<hr></hr></h1>
      <h2 className="subtitle">Studying CS @ JHU</h2>
    </div>
    </Fade>
  </div>
);

export default Title;
