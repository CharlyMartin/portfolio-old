import React, { Component } from 'react';

import SideBar from './sidebar';
import Header from './header';
import ProjectList from './project_list';
import ItemList from './item_list';
import Footer from './footer';

import content from '../../data/content';
import projects from '../../data/projects';
import companies from '../../data/companies';
import tools from '../../data/tools';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="background-light"></div>

        <div className="page-container">
          <div className="page-layout">

            <div className="left-column">
              <SideBar />
            </div>


            <div className="right-column">
              <Header data={content.header} />

              <div className="section" id="projects">
                <h3 className="section-title">PREVIOUS WORK <span role="img" aria-label="sparkles">✨</span></h3>
                <br />
                <ProjectList data={projects} />
              </div>

              <div className="section" id="companies">
                <h3 className="section-title">TEACHING GIGS <span role="img" aria-label="teacher">👨‍🏫</span></h3>
                <br />
                <ItemList data={companies}/>
              </div>

              <div className="section" id="tools">
                <h3 className="section-title">STACK & TOOLS <span role="img" aria-label="laptop">💻</span></h3>
                <br />
                <ItemList data={tools}/>
              </div>

            </div>
          </div>

        </div>
        <Footer data={content.footer}/>
      </div>
    );
  }
}

export default App;
