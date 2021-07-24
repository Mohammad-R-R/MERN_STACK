import react, {useState} from 'react';

const Colorchange= (props) => {
    const [color, setColor]= useState("");




const boxes= [];
const handler = (e)  =>{
    e.preventDefault();
   
    const box = {color};
    boxes.push(box);
    props.createBox(boxes);
    setColor("");
};
return(
    <form onSubmit={handler}>
     <h2>color</h2>
     <input type="text" onChange={(e) => setColor(e.target.value)}/>
     <input type="submit" value="Submit"/>

    </form>
)
};

export default Colorchange;