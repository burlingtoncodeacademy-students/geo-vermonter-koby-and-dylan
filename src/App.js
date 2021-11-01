import "./App.css";
import react from "react";
import { useState } from "react";
import Map from "./components/Map";
import MapControls from "./components/MapControls";
import Modal from "./components/guessModal";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [disable, setDisable] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
const [startGamePosition, setStartGamePosition] = useState(true)
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
          {/* when start button is clicked enable the Guess and I give up buttons */}
          <button disabled={disable} onClick={() => {
            setDisable(true)
            setStartGamePosition(false)
          }}>
            Start
          </button>
          <button disabled={!disable} onClick={() => setModalOpen(true)}>
            Guess
          </button>

          <button disabled={!disable}onClick={() => {
            setDisable(false)
            setStartGamePosition(true)
          }}>I give up!</button>

          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div id="map-area">
        {startGamePosition ? <Map center={center}/> : <MapControls />}
          
        </div>
      </div>
    </div>
  );
}

export default App;
