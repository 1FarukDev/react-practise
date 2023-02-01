import React, { useState } from "react";
import './state.css'
export default function State(){
    // const [result, setResult] = React.useState("Yes")
    // function handleClick(){
    //     setResult("No")
    // }

    const [result, setResult] = useState(true)
    function handleClick(){
        //  answer = result ? true : false
        setResult(prevState => !prevState )

    }


    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{result ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
    console.log(result)
}