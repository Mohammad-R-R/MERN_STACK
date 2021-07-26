import './App.css';
import Lukee from './components/lukee';
import Page2 from './components/page2';
import Planets from './components/palnets';
import { Router } from '@reach/router';
function App() {
  return (
    <div className="App">
      <Router>
      <Planets path="/Planets/:id"/>
      <Lukee path="/people/:id"/>
     <Page2 path="/"/>
     </Router>
         </div>
         
  );
}

export default App;
