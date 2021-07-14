import logo from './logo.svg';
import './App.css';
import PersonCard from  "../src/components/PersonCard"


function App() {
  return (
    <div className="App">
   <PersonCard firstName="doe" lastName="jave" age={ 45 } hairColor="Black" />
   <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" /> 
   <PersonCard firstName="Fillmore" lastName="Millaed" age={ 50 } hairColor="Brown" /> 
   <PersonCard firstName="Smith" lastName="maria" age={ 62 } hairColor="Brown" />  

    </div>
  );
}

export default App;
