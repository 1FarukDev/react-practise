import React from "react";
import './state.css'
export default function State(){
    const [result, setResult] =React.useState("Yes")
    function handleClick(){
        setResult("No")
    }
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result}</h1>
            </div>
        </div>
    )
    console.log(result)
}