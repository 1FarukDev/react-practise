import React from "react";

export default function Star(){
    return (
        <img
            src={starIcon}
            className="card--favorite"
            onClick={toggleFavorite}
          />
    )
}