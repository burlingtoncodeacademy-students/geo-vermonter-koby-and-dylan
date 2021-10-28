import './App.css';
import { useState } from 'react'
import Random from './components/Random';

import Map from './components/Map'

function App() {

  const [center, setCenter] = useState([43.88, -72.7317])

  return (
    <div>
      <Map center={center} />
      {/* <Random /> */}
    </div>
  );
}

export default App;
