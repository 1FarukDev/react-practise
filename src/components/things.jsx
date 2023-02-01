import React, { useState } from "react";

function Things(){
    const [thingsArray, setThingsArray] = useState(["Things 1, Things 2"])
    function addItem(){
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Things ${thingsArray.length + 1} ,`]
        })
    }
    const thingsElements = thingsArray.map( thing => <p>{thing}</p>)
    return(
        <div>
        <button onClick={addItem}>Click me</button>
        {thingsElements}
        </div>
    )
}

export default Things;