// //Using Objects in state

// import React, { useState } from "react";
// import './object.css';
// import star from './images/star.png';
// import starFilled from './images/star--filled.png'
// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: true
//     })
//     /**
//      * Challenge: Fill in the values in the markup
//      * using the properties of our state object above
//      * (Ignore `isFavorite` for now)
//      */
//     let starIcon = contact["isFavorite"] === false ? star  : starFilled;
//     function toggleFavorite() {
//         console.log("Toggle Favorite")
//     }

//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     <img
//                         src={starIcon}
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                     {`${contact["firstName"]} ${contact.lastName}`}
//                     </h2>
//                     <p className="card--contact">{contact["phone"]}</p>
//                     <p className="card--contact">{contact["email"]}</p>
//                 </div>

//             </article>
//         </main>
//     )
// }

//Updating States when it is Objects

// import React, { useState } from "react";
// import "./object.css";
// import star from "./images/star.png";
// import starFilled from "./images/star--filled.png";
// export default function App() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false,
//   });

//   let starIcon = contact["isFavorite"] === false ? star : starFilled;
//   function toggleFavorite() {
//     setContact((prevContact) => {
//       return {
//         ...prevContact,
//         isFavorite: !prevContact.isFavorite,
//       };
//     });
//   }

//   return (
//     <main>
//       <article className="card">
//         <img src="./images/user.png" className="card--image" />
//         <div className="card--info">
//           <img
//             src={starIcon}
//             className="card--favorite"
//             onClick={toggleFavorite}
//           />
//           <h2 className="card--name">
//             {`${contact["firstName"]} ${contact.lastName}`}
//           </h2>
//           <p className="card--contact">{contact["phone"]}</p>
//           <p className="card--contact">{contact["email"]}</p>
//         </div>
//       </article>
//     </main>
//   );
// }



import React, { useState } from "react";
import Star from "./star";
import "./object.css";
import star from "./images/star.png";
import starFilled from "./images/star--filled.png";
export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img src="./images/user.png" className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
          <h2 className="card--name">
            {`${contact["firstName"]} ${contact.lastName}`}
          </h2>
          <p className="card--contact">{contact["phone"]}</p>
          <p className="card--contact">{contact["email"]}</p>
        </div>
      </article>
    </main>
  );
}
