import React, { useState } from 'react';
import MessageForm from './components/form';
import MessageDisplay from './components/twof';
import MyComponent from './components/comp';
    

    
    
function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  
  return (
      <>
        <MyComponent/>
         
      </>
  );
}
    
export default App;
