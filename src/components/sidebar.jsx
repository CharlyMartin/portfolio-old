import React from 'react';
import imageUrl from '../helpers/image_url';

function SideBar(props) {
  const renderList = () => {
    return props.data.links.map((obj) => {
      return (
        <div className="sidebar-link" key={obj.name}>
          <a href={obj.url} target="_blank" rel="noopener noreferrer">{obj.name}</a>
        </div>
      );
    });
  };

  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <h2 id="brand">{props.data.brand}</h2>
        <p id="caption">{props.data.caption}</p>
      </div>

      <div className="sidebar-links">
        {renderList()}
      </div>

      <div className="sidebar-cta">
        <a href={props.data.link} className="btn-orange-transparent">{props.data.cta}</a>
      </div>

      <div className="sidebar-picture">
        <img src={imageUrl(props.data.picture)} alt={props.data.brand} />
      </div>

    </div>
  );
}

export default SideBar;
