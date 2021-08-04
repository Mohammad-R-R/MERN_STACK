import React, { useEffect, useState } from 'react'
import Aouther from '../components/aoutherForm';
import Las from '../components/List';
import axios from 'axios';
const Main = () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
                console.log (people);
            });
    },[])
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }
    return (
        <div>
        <Aouther/>
        <hr/>
        {loaded && <Las people={people} removeFromDom={removeFromDom}/>}
     </div>
    )
}
export default Main;