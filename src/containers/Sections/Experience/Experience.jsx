import React from 'react';
import './Experience.css';


export const Education = () => (
  <div className="section sub" id="edu">
    <h4>Education</h4>
    <p>
      <b><a className="highlight" href="https://www.jhu.edu" target="blank">
        Johns Hopkins University</a></b>
        <span className="right"><i>2017&mdash;</i></span>
      <br></br>
      <b>Computer Science, B.S.</b><span className="right"><i>Baltimore, Maryland</i></span>

      <ul className="fancylist">
        Relevant Course Work
        <li>Introductory Programming In Java<span className="hidden">EN.601.107</span></li>
        <li>A Hands-On Introduction to MATLAB<span className="hidden">EN.553.282</span></li>
        <li>Intermeediate Programming<span className="hidden">EN.601.220</span></li>
        <li>Data Structures<span className="hidden">EN.601.226</span></li>
        <li>Automata & Computation Theory<span className="hidden">EN.601.231</span></li>
        <li>Computer System Fundamentals<span className="hidden">EN.601.229</span></li>
        <li>Intro Algorithms<span className="hidden">EN.601.433</span></li>
        <li>Computer Graphics<span className="hidden">EN.601.457</span></li>
        <li>Artificial Intelligence<span className="hidden">EN.601.464</span></li>
        <li>Machine Learning<span className="hidden">EN.601.475</span></li>
        <li>Object Oriented Software Engineering<span className="hidden">EN.601.421</span></li>
        <li>Computer Networks<span className="hidden">EN.601.414</span></li>
        <li>Computer Vision<span className="hidden">EN.601.461</span></li>
      </ul>
    </p>
  </div>
);

export const Work = () => (
  <div className="section sub" id="work">
    <h4>Work</h4>
    <p>
      ...empty...
    </p>
  </div>
);

export const Experience = () => (
  <div className="section" id="exp">
    <h3>Experience</h3>
    <Education/>
    <Work/>
  </div>
);

export default Experience;
