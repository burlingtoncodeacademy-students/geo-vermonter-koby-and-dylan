import Random from "./Random";
import borderData from "../data/border";
import L from "leaflet";
import leafletPip from "leaflet-pip";

// Added while loop to keep checking until random coordinates supplied fell within VT border

function IsInVermont() {
  let inVermont = false; // true if value is in vermont, thus leaving the while loop
  let randomStart = [];

  while (!inVermont === true) {
    randomStart = Random(); // creates random location within the bounding box that contains Vermont

    leafletPip.bassackwards = true;
    let gjLayer = L.geoJSON(borderData);
    let results = leafletPip.pointInLayer(randomStart, gjLayer);

    if (results.length === 0) {
      // if the return has no length, then it isn't in VT, otherwise it return a value and that evaluates to true
      inVermont = false;
    } else {
      inVermont = true;
    }
  }
  return randomStart; // returns the random location that is within the state of VT
}

export default IsInVermont;
