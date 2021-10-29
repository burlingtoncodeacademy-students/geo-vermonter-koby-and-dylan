import './App.css';
import { useState } from 'react'
import Random from './components/Random';
import Start from './components/start.js'

import Map from './components/Map'
import Modal from './components/guessModal';

function App() {

  const [center, setCenter] = useState([43.88, -72.7317])

  const [show,setShow] = useState(false)

  return (
    <div>
      <Map center={center} />
      <Start/>
      <div className="App">
        <button onClick={()=> setShow(true) }>Guess</button>
        <Modal show={show}/>
      </div>
      
      
      {/* <Random /> */}
    </div>
  );
}

export default App;
