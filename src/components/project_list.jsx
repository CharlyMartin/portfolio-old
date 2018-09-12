import React from 'react';
import Project from './project';

function ProjectList(props) {
  const renderList = () => {
    return props.data.map((obj) => {
      return <Project data={obj} key={obj.name} />;
    });
  };

  return (
    <div className="projects">
      {renderList()}
    </div>
  );
}

export default ProjectList;
