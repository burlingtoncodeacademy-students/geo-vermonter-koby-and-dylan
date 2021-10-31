import react from "react";
import { useState } from "react";
import Map from "./Map";
import L from "leaflet";
import IsInVermont from "./IsInVermont";
import Random from "./Random";

function MapControls() {
    let startPosition = IsInVermont(Random());
    const [newCenter, setNewCenter] = useState(startPosition);
    console.log(startPosition)

  let newLat = newCenter[0];
  let newLon = newCenter[1];
  const goNorth = () => {
    newLat = newLat + 0.002;
    setNewCenter([newLat, newLon]);
  };
  const goSouth = () => {
    newLat = newLat - 0.002;
    setNewCenter([newLat, newLon]);
  };
  const goEast = () => {
    newLon = newLon + 0.002;
    setNewCenter([newLat, newLon]);
  };
  const goWest = () => {
    newLon = newLon - 0.002;
    setNewCenter([newLat, newLon]);

  };

  return (
    <div>
      <button onClick={goNorth}>North</button>
      <button onClick={goSouth}>South</button>
      <button onClick={goEast}>East</button>
      <button onClick={goWest}>West</button>

      <Map center={newCenter} zoom={18} />
      {/* {L.marker(newCenter).addTo(Map)} */}
    </div>
  );
}

export default MapControls;