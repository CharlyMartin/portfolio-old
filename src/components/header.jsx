import React, { Component } from 'react';

function Header(props) {

  return (
    <div className="header">
      <div className="header-title">
        <h1>{props.content.header.hello}</h1>
      </div>

      <div className="header-paragraph">
        <p>{props.content.header.me}</p>
        <br/>
        <br/>
        <p>{props.content.header.you}</p>
      </div>

      <div className="header-button">
        <a href="" className="btn-orange-plain">{props.content.header.cta}</a>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default Header;
