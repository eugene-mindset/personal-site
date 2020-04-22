import React from 'react';
import './Menu.css'

export const Menu = () => (
  <div className="menu">
    <ul>
      <a href="#title" className="c2"><li>title</li></a>
      <a href="#about" className="c1"><li>about</li></a>
      <a href="#gen" className="c1"><li>general</li></a>
      <a href="#soc" className="c1"><li>socials</li></a>
      <a href="#exp" className="c2"><li>experience</li></a>
      <a href="#edu" className="c2"><li>education</li></a>
      <a href="#work" className="c2"><li>work</li></a>
    </ul>
  </div>
);

export default Menu;
