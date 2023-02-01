import React from "react";
import "./meme.css";
import memesData from "../memesData";
let url;
function Meme() {
  function getMemeImage() {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    url = memeArray[randomNumber].url;
    console.log(url)
  }
  return (
    <main>
      <form className="form">
        <input 
        type="text" 
        placeholder="Top text" 
        className="form--input" />
        <input 
        type="text" 
        placeholder="Bottom text" 
        className="form--input" />
        <button 
        onClick={getMemeImage} 
        className="form--button">
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
}

export default Meme;
