import React, { Component } from 'react';

import SideBar from './sidebar';
import Header from './header';
import ProjectList from './project_list';

import content from '../../data/content';
import projects from '../../data/projects';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="background-light" />

        <div className="page-container">
          <div className="page-layout">

            <div className="left-column">
              <SideBar />
            </div>


            <div className="right-column">
              <Header data={content} />

              <div className="section">
                <h3 className="section-title">PREVIOUS WORK <span role="img" aria-label="sparkles">✨</span></h3>
                <br />
                <ProjectList data={projects} />
              </div>

              <div className="section">
                <h3 className="section-title">TEACHING GIGS <span role="img" aria-label="teacher">👨‍🏫</span></h3>
                <br />
              </div>

              <div className="section">
                <h3 className="section-title">STACK & TOOLS <span role="img" aria-label="laptop">💻</span></h3>
                <br />
              </div>

            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
