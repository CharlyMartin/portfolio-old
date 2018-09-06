import React, { Component } from 'react';

import SideBar from './sidebar';
import Header from './header';
import List from './list';

import content from '../../data/content.js'

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
              <Header content={content}/>
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
