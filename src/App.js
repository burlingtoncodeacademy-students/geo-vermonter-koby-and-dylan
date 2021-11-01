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
        <h2>About</h2> {/* placeholder for About and High Scores in the header */}
        <h1>GeoVermonter</h1>
        <h2>High Scores</h2>
      </div>
      <div id="middle-section">
        <div class="sidebar">
          <h2>Maple Syrup...</h2> {/* Header for the sidebar */}
          {/* when start button is clicked enable the Guess and I give up buttons and disable the Start button. */}
          <button disabled={disable} onClick={() => {
            setDisable(true) 
            setStartGamePosition(false) /* starts the map at a random position  */
          }}>
            Start
          </button>
          <button disabled={!disable} onClick={() => setModalOpen(true)}> {/* Opens the choices modal */}
            Guess
          </button>

          <button disabled={!disable}onClick={() => {
            setDisable(false)
            setStartGamePosition(true) /** resets the game */
          }}>I give up!</button>

          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div id="map-area">
        {startGamePosition ? <Map center={center} zoom={8}/> : <MapControls />} {/** if the game hasn't started yet it will display the map's center, when game starts it returns the randomized start location */}
          
        </div>
      </div>
    </div>
  );
}

export default App;
