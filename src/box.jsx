import React from "react";
import boxes from "./boxes";
export default function Box(props){
    // console.log(props.id)
    // const [on, setOn] = React.useState(props.on)
    // function handleClick(){
    //     setOn(prevOn => !prevOn)
    // }
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    return(
        <div style={styles} className="box" onClick={() => props.handleClick(props.id)}></div>
        // <div style={styles} className="box" onClick={handleClick}></div>
    )
}