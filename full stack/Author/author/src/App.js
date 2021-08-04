
import './App.css';

import { Router } from '@reach/router';
import Add from './components/addAouther';
import Aouther from './components/aoutherForm';
import De from './components/deraill'
import Las from './components/List'
import Main from './views/Main';
import Update from './views/Update'


function App() {
  return (
    <div className="App">
      
      <Router>
      <Main path="/"/>
      
      <Add path="/dashboard"/>
      <De path="people/:id" />
      <Las path = "/Las"/>
      <Update path="people/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
