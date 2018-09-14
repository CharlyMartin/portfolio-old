import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <div className="header-title">
        <h1>{props.data.hello}</h1>
      </div>

      <div className="header-paragraph">
        <p>{props.data.me}</p>
        <br />
        <p>{props.data.you}</p>
      </div>

      <div className="header-button">
        <br />
        <a href={props.data.link} className="btn-orange-plain" data-balloon={props.data.email} data-balloon-pos="up">{props.data.cta}</a>
        <br />
      </div>
    </div>
  );
}

export default Header;
