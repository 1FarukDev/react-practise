// import React from "react"
// import './style.css'
// import logo from './images/logo.png'
// export default function Header() {
//     return (
//         <header className="header">
//             <img 
//                 src={logo}
//                 className="header--image"
//             />
//             <h2 className="header--title">Meme Generator</h2>
//             <h4 className="header--project">React Course - Project 3</h4>
//         </header>
//     )
// }


import React from "react"

export default function Header(props) {
    
    
    return (
        <header>
            <p>Current user: {props.name}</p>
        </header>
    )
}