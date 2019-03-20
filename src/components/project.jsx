import React from 'react';

import imageUrl from '../helpers/image_url';

function Project(props) {
  console.log(props);
  return (
    <div className="project-wrapper">
      <a href={props.data.url} className="project-url" target="_blank" rel="noopener noreferrer">

        <div className="project-container">
          <div className="project-img">
            <img src={imageUrl(props.data.logo)} alt={props.data.logo} />
          </div>

          <div className="project-info">
            <div className="project-info-top">
              <h4 className="project-name">{props.data.name}</h4>
              <p className="project-description">{props.data.about}</p>
            </div>

            <div className="project-info-bottom">
              <p className="project-date">{props.data.dates}</p>
            </div>
          </div>
        </div>

      </a>
    </div>
  );
}

export default Project;
