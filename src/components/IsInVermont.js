import Random from "./Random";
import borderData from "../data/border";
import L from "leaflet";
import leafletPip from "leaflet-pip";

// Added while function to keep checking until random coordinates supplied fell within VT border

function IsInVermont() {
  let inVermont = false;
  let randomStart = [];

  while (!inVermont === true) {
    randomStart = Random();

    leafletPip.bassackwards = true;
    let gjLayer = L.geoJSON(borderData);
    let results = leafletPip.pointInLayer(randomStart, gjLayer);

    if (results.length === 0) { // if the return has no length, then it isn't in VT, otherwise it return a value and that evaluates to true
      inVermont = false;
    } else {
      inVermont = true;
    }
  }
  return randomStart;
}

export default IsInVermont;
