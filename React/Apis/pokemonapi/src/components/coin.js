import React,{useState,useEffect} from "react";

const Example = (props) => {
    const [pokemon, setPeople] = useState([]);
 
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then((jsonPokemon) => setPeople(jsonPokemon.results))
    }, []);
 
    return (
        
        <div>
           
                <button onClick={ useEffect}> get pokemons</button>
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
export default Example