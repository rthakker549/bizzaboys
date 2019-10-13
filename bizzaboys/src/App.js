import React from 'react';
import { Button } from 'shards-react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="bizza.jpg"></img>
        <br></br>
        <p>Bizza.</p>
        <p>Cooked, Cut, and Delivered Quickly.</p>
        <Button href='/order'>Order Now</Button>
      </header>
    </div>
  );
}

export default App;
