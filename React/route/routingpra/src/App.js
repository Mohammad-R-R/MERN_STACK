import React from 'react';
import { Router } from '@reach/router';

import Home from './components/pagetwo';

function App() {
  return (
    <div className="App">
        <Router>

        <Home path="/home"/>
            <Home path="/:id"/>
            <Home path="/:id/:core/:due"/>
            
            
        </Router>
    </div>
  );
}
export default App;
