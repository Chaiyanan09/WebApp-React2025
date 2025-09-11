import React from "react";
import { useState } from "react";

function Item({name,isPacked}){
    if(isPacked)
        return (<li>{name}</li>);
        else
            return (<li>{name}</li>)
    }
    
export default function Hello() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(''); 

    const numericValue = parseFloat(value);
    const m = !isNaN(numericValue) ? numericValue : 0;
    const cm = !isNaN(numericValue) ? numericValue * 100 : 0;
    const mm = !isNaN(numericValue) ? numericValue * 1000 : 0;

    return (
        <div>
            <ol>
                <Item name = "flashlight" isPacked={true}/>
            </ol>
            
            <input 
                type="text" 
                value={value} 
                placeholder="Enter metre"
                onChange={event => setValue(event.target.value)}
            />
            <p>{value.length}</p>
            <p>m = {m} m</p>
            <p>cm = {cm} cm</p>
            <p>mm = {mm} mm</p>
            
            <hr /> 

            <p>You Click {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me +</button>
            <button onClick={() => setCount(count - 1)}>Click me -</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}