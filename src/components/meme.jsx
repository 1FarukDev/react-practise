// import React, { useState } from "react";
// import "./meme.css";
// import '../components/style.css'
// import memesData from "../memesData";

// function Meme() {
//   const [meme, setMeme] = useState({
//     topText: "",
//     bottomText : "",
//     randomImage : "http://i.imgflip.com/1bij.jpg"
//   })
//   const [allMemeImages, setAllMemeImages] = useState(memesData)
//   const [memeImage, setMemeImage] = useState("")
//   function getMemeImage() {
//     const memeArray = allMemeImages.data.memes;
//     const randomNumber = Math.floor(Math.random() * memeArray.length);
//     const url = memeArray[randomNumber].url;
//     setMeme(prevMeme => ({
//       ...prevMeme, 
//       randomImage: url
//     }))

//   }
//   return (
//     <main>
//       <div className="form">
//         <input 
//         type="text" 
//         placeholder="Top text" 
//         className="form--input" />
//         <input 
//         type="text" 
//         placeholder="Bottom text" 
//         className="form--input" />
//         <button 
//         className="form--button"
//         onClick={getMemeImage} >
//           Get a new meme image 🖼
//         </button>
//       </div>
//       <img src={meme.randomImage} alt="" className="meme--image"/>
//     </main>
//   );
// }

// export default Meme;


import React from "react"
import memesData from "../memesData"
import '../components/style.css'

export default function Meme() {
    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    function handleChange(event){
      const {name, value, type, checked} = event.target
      setMeme(prevMeme => {
        return {
               ...prevMeme,
               [name]: type === "checkbox" ? checked : value
           }
      })
    }
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    console.log(meme.topText, meme.bottomText)
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}