import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import logo from './images/logo.jpg';

const App = () => (
  <div>
    <h1>Hello, Webpack!</h1>
    <img src={logo} alt="Logo" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
