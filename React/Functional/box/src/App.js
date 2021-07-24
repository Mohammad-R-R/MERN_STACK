import logo from './logo.svg';
import './App.css';
import Colorchange from './components/secondox'
import MessageDisplay from './components/firstbox'
import react, { useState } from 'react';


function App() {
  const  [generated, setGenerated] = useState([]);

  const generateBox = (boxes) => {
    setGenerated(generated.concat(boxes));
  }
  return (
    <div className="App">
      <Colorchange createBox={generateBox} />
      <MessageDisplay dam={generated}/>
      {/* <MessageDisplay /> */}

    </div>
  );
}

export default App;
