import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Nav from "./Components/Nav/Nav";

import "./App.css";
import routes from './routes';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          {routes}
          <h1 style={{ padding: "200px 35%" }}>
            This is where your pages will appear
          </h1>
        </div>
      </HashRouter>
    );
  }
}

export default App;
