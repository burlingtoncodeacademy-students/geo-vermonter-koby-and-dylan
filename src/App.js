import "./App.css";
// import react from 'react';
import { useState } from "react";
import Start from "./components/start.js";
import MapControls from "./components/MapControls";
import Map from "./components/Map";
import Modal from "./components/guessModal";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);

  const [show, setShow] = useState(false);

  return (
    <div id="container">
      <div id="header">
      <h2>About</h2>
        <h1>GeoVermonter</h1>
        <h2>High Scores</h2>
      </div>
      <div id="middle-section">
      <div class="sidebar">
        <h2>Maple Syrup...</h2>
      <Start />

      </div>
      <div id="map-area">
        <MapControls />
      </div>
      </div> 
      <div id="footer">
        <h2>Footer Area</h2>
      </div>
    
      <div className="App">
        <button onClick={() => setShow(true)}>Guess</button>
        <Modal show={show} />
      </div>
    </div>
  );
}

export default App;
