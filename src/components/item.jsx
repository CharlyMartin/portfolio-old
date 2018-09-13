import React from 'react';

function Item(props) {
  return (
    <a href={props.data.url} target="_blank" rel="noopener noreferrer">
      <div className="item">
        <div className="item-logo">
          <img src={props.data.logo} alt={props.data.name}/>
        </div>

        <div className="item-info">
          <h4 className="item-name">{props.data.name}</h4>
          <p className="item-description">{props.data.description}</p>
        </div>
      </div>
    </a>
  );
}

export default Item;

