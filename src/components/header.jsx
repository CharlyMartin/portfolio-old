import React, { Component } from 'react';

function Header(props) {

  return (
    <div className="header-content">
      <h1>{props.content.header.hello}</h1>
      <p>{props.content.header.me}</p>
      <p>{props.content.header.you}</p>
      <div className="btn-main">{props.content.header.cta}</div>
    </div>
  );
}

export default Header;
