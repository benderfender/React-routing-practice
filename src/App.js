import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import PokeFacts from './components/Pokemon';
import HelloComponent from './components/Hello';
import NumberComponent from './components/Num';
import ColorComponent from './components/Color';

function App() {
  return (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <PokeFacts path="/home"/>
        <HelloComponent path="/:word"/>
        <NumberComponent path="/:numba"/>
        <ColorComponent path="/:word/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;
