import React, { useState } from "react"
import Count from './Count'
import './counter.css'
export default function Counter() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [count, setCount] = useState(0)

    function add(){
        setCount(prevCount => prevCount + 1 )
    }
    function subtract(){
        setCount(prevCount => prevCount -1 )
    }
    // function reset(){
    //     setCount(count => 0)
    // }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count number={count}/>
            <button className="counter--plus" onClick={add}>+</button>
            {/* <button className="counter--plus" onClick={reset} ></button> */}
        </div>
    )
}
