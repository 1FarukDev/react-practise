import React from "react";
import star from "./images/star.png";
import starFilled from "./images/star--filled.png";
export default function Star(props){
    const starIcon = props.isFilled ? star : starFilled;
    return (
        <img
            src={starIcon}
            className="card--favorite"
            onClick={props.handleClick}
          />
    )
}