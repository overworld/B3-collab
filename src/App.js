import React, { Component } from 'react';
import Search from './components/search/Search';
import './App.css';
import History from "./components/history/History";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
      </div>
    );
  }
}

export default App;
