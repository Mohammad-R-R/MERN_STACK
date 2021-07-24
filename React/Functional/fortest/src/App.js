import React, { useState } from 'react';
import MessageForm from './components/form';
import MessageDisplay from './components/twof';
    

    
    
function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  
  return (
      <>
          <MessageForm onNewMessage={ youveGotMail } />
          <MessageDisplay mes={ currentMsg } />
      </>
  );
}
    
export default App;
