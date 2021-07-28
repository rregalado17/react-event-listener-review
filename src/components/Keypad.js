// Code Keypad Component Here
import React from 'react';


function handleClick() {
    console.log("Entering password...") 
} 

function Keypad () {
    return (
        <div>
            <input type="password" onChange={handleClick}></input>
        </div>
    )
}

export default Keypad; 
