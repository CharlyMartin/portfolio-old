import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <div className="header-title">
        <h1>{props.data.header.hello}</h1>
      </div>

      <div className="header-paragraph">
        <p>{props.data.header.me}</p>
        <br />
        <br />
        <p>{props.data.header.you}</p>
      </div>

      <div className="header-button">
        <br />
        <a href="mailto:ahoycm@gmail.com" className="btn-orange-plain">{props.data.header.cta}</a>
        <br />
      </div>
    </div>
  );
}

export default Header;
