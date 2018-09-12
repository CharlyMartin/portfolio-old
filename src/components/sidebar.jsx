import React from 'react';

function SideBar(props) {
  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <h2 id="brand">Charly</h2>
        <p id="caption">code + design</p>
      </div>

      <div className="sidebar-links">
        <a href="https://www.linkedin.com/in/charlymartin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <br />
        <br />
        <a href="https://github.com/CharlyMartin" target="_blank" rel="noopener noreferrer">GitHub</a>
        <br />
        <br />
        <a href="https://medium.com/@charly.martin" target="_blank" rel="noopener noreferrer">Medium</a>
      </div>

      {/* Make button turn orange once sidebar exceeds wrapper */}
      <div className="sidebar-cta">
        <a href="mailto:ahoycm@gmail.com" className="btn-orange-transparent">email</a>
      </div>

      <div className="sidebar-picture">
        <img src="../../assets/images/me.jpg" alt="" />
      </div>

    </div>
  );
}

export default SideBar;
