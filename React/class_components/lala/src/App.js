import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';
    
    
function App() {
  return (
    <MyNewComponent setState={"hello"}/>
    <button onClick={ () => { this.setState({ position: "On" }) } }>Flip Switch</button>
  )
    }
    
export default App;
