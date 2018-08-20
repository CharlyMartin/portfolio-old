import React, { Component } from 'react';

import SideBar from './sidebar';
import Header from './header';
import List from './list';

class App extends Component {
  render() {
    return (
      <div className="wrapper">

        <div className="background-light" />

        <div className="container">
          <div className="container-layout">
            <div className="sidebar-container">
              <SideBar />
              <span>hello</span>
            </div>

            <div className="content-container">
              <Header />
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
