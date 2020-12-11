import React from 'react';
import logo from './logo.svg';
import './App.css';

function AppContainer(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Module Federation
        </p>
      </header>
      {props.children}
    </div>
  );
}

export default AppContainer;
