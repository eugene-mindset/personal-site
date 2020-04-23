import React from 'react';
import Fade from 'react-reveal/Fade';

import './Menu.css';


export const Menu = () => (
  <div className="menu">
    <Fade right cascade delay={500} duration={1500}>
      <ul className="center">
        <a href="#title" className="c2"><li>title</li></a>
        <a href="#about" className="c1"><li>about</li></a>
        <a href="#exp" className="c2"><li>experience</li></a>
      </ul>
    </Fade>
  </div>
);

export default Menu;
