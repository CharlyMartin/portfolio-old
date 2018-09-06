import React, { Component } from 'react';

function SideBar(props) {
  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <h2 className="brand">Charly</h2>
        <p className="tagline">code + design</p>
      </div>

      <div className="sidebar-links">
        <a href="">LinkedIn</a>
        <br/>
        <a href="">GitHub</a>
        <br/>
        <a href="">Medium</a>
      </div>

      <div className="sidebar-cta">
        <a href="">Email Me</a>
      </div>

      <div className="sidebar-picture">
        <img src="../../assets/images/me.jpg" alt=""/>
      </div>

    </div>
  );
}

export default SideBar;
