import React from 'react';
import './About.css';


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
    <h3>About<hr></hr></h3>
    <General/>
    <Socials/>
  </div>
);

export default About;
