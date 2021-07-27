import React, { useState } from 'react'
const taps = ["Tap 1", "Tap 2", "Tap 3"];
export const Tabss = () => {
    const [tab,setTab]=useState();
    const handler =(e,x)=>{
        setTab(x)
    }
    return (
        <div>
        {taps.map( (item, index) => {
            return <button onClick={ (e) => handler(e, item) }>{ item }</button>

        })}
        <p>you taped it   {tab}</p>
            
        </div>
    )
}
export default Tabss;
