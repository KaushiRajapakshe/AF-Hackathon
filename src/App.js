import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Imgslid from "./Imgslid";
import Slimg from "./Slimg";
import Eventfooter from "./Eventfooter";
import Main from "./Main";

import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div>
            <Main/>
        </div>

          <div style={{width:'100%'}}>
              <Footer />
          </div>
      </div>
    );
  }
}

export default App;
