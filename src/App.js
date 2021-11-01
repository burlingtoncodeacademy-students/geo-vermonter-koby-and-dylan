import "./App.css";
import react from "react";
import { useState } from "react";

import MapControls from "./components/MapControls";
import Modal from "./components/guessModal";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [disable, setDisable] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

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
          <button disabled={disable} onClick={() => setDisable(true)}>
            Start
          </button>
          <button disabled={!disable} onClick={() => setModalOpen(true)}>
            Guess
          </button>

          <button disabled={!disable}>I give up!</button>

          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div id="map-area">
          <MapControls />
        </div>
      </div>
    </div>
  );
}

export default App;
