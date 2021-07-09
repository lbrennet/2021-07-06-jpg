import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1>Voici mon button</h1>
      <Button text="Une valeur" backColor="cyan"/>
      <Button text="Une autre valeur" backColor="tomato" style={{textDecoration: 'underline green', fontFamily: 'cursive'}}/>
      <Button text="Une autre autre valeur" />
    </div>
  );
}

export default App;
