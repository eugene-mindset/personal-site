import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';


export const Socials = () => (
  <div className="section sub" id="soc">
    <h4>Socials</h4>
    <p>
      ...empty...
    </p>
  </div>
);

export const General = () => (
  <div className="section sub" id="gen">
    <h4>General</h4>
    <p>
      ...empty...
    </p>
  </div>
);

export const About = () => (
  <div className="section" id="about">
    <Fade>
      <h3>About</h3>
      <General/>
      <Socials/>
    </Fade>
  </div>
);

export default About;
