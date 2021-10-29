import './App.css';
import { useState } from 'react'
import Start from './components/start.js'
// import MapControls './components/MapControls.js'
import Map from './components/Map'
import Modal from './components/guessModal';

function App() {

  const [center, setCenter] = useState([43.88, -72.7317])

  const [show,setShow] = useState(false)

  return (
    <div>
     {/* <MapControls /> */}
      <Map center={center} />
      <Start/>
      <div className="App">
        <button onClick={()=> setShow(true) }>Guess</button>
        <Modal show={show}/>

      </div>
      
     
      
    </div>
  );
}

export default App;
