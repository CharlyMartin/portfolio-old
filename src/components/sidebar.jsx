import React, { Component } from 'react';

function SideBar(props) {
  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <h2 id="brand">Charly</h2>
        <p id="caption">code + design</p>
      </div>

      <div className="sidebar-links">
        <a href="https://www.linkedin.com/in/charlymartin/" target="_blank">LinkedIn</a>
        <br/>
        <br/>
        <a href="https://github.com/CharlyMartin" target="_blank">GitHub</a>
        <br/>
        <br/>
        <a href="https://medium.com/@charly.martin" target="_blank">Medium</a>
      </div>

      <div className="sidebar-cta">
        <a href="mailto:ahoycm@gmail.com" className="btn-orange-transparent">email</a>
      </div>

      <div className="sidebar-picture">
        <img src="../../assets/images/me.jpg" alt=""/>
      </div>

    </div>
  );
}

export default SideBar;
