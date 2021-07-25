import React,{useState} from "react";
import axios from 'axios';

const Example = (props) => {

    const [pokemon, setPeople] = useState([]);

 const rem = (e) => {   
   
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
       
        .then((x) => setPeople(x.data.results))
        
            
 };
 
    return (
        
        <div>
           
                <button onClick={ rem}> get pokemons</button>
              
                {
                pokemon.map((pokemon, index) => (
                    <div key={ index }>
                        <p>{ pokemon.name }</p>
                    </div>
                ) )
            }
        </div>
    );
};
export default Example;