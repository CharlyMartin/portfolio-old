import React, { Component } from 'react';

function SideBar(props) {
  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <h2 id="brand">Charly</h2>
        <p id="caption">code + design</p>
      </div>

      <div className="sidebar-links">
        <a href="">LinkedIn</a>
        <br/>
        <br/>
        <a href="">GitHub</a>
        <br/>
        <br/>
        <a href="">Medium</a>
      </div>

      <div className="sidebar-cta">
        <a href="" className="btn-orange-transparent">email</a>
      </div>

      <div className="sidebar-picture">
        <img src="../../assets/images/me.jpg" alt=""/>
      </div>

    </div>
  );
}

export default SideBar;
