// // import logo from "./logo.svg";
// // import "./App.css";
// // // import Meme from './components/meme';
// // import Header from "./components/Header";
// // import Meme from "./components/meme";
// // import State from "./components/state";
// // import Counter from "./components/counter";
// // import Things from './components/things';
// // import Objects from './components/objects'

// // function App() {
// //   return (
// //     <div>
// //       {/* <Header />
// //       <Meme /> */}
// //       {/* <State /> */}
// //       {/* <Counter /> */}
// //       {/* <Things /> */}
// //       <Objects />
// //     </div>
// //   );
// // }

// // export default App;

// // import React, { useState } from "react"
// // import Header from "./components/Header";
// // import Body from "./components/body";
// // // import Body from "./Body"

// // export default function App() {
// //   const [user, setUser] = React.useState("Faruk")
// //   let owner = useState(user)
// //     return (
// //         <main>
// //             <Header name={user}/>
// //             <Body name={user}/>
// //         </main>
// //     )
// // }

// import React, { useState } from "react";
// import boxes from "./boxes";
// import Box from "./box";
// import "./boxstyle.css";
// export default function App(props) {
//   function handleClick(id) {
//     console.log(id);
//   }
//   const [box, setBox] = useState(boxes);
//   const styles = {
//     backgroundColor: props.darkMode ? "#222222" : "#cccccc",
//   };
//   const mappedBox = boxes.map((square) => (
//     <Box 
//     key={square.id} 
//     id={square.id} 
//     on={square.on} 
//     style={styles} 
//     handleClick={handleClick} />
//   ));
//   /**
//    * Challenge part 1:
//    * 1. Initialize state with the default value of the
//    *    array pulled in from boxes.js
//    * 2. Map over that state array and display each one
//    *    as an empty square (black border, transparent bg color)
//    *    (Don't worry about using the "on" property yet)
//    */
//   return <main>{mappedBox}</main>;
// }


// import logo from "./logo.svg";
// import "./App.css";
// // import Meme from './components/meme';
// import Header from "./components/Header";
// import Meme from "./components/meme";
// import State from "./components/state";
// import Counter from "./components/counter";
// import Things from './components/things';
// import Objects from './components/objects'

// function App() {
//   return (
//     <div>
//       {/* <Header />
//       <Meme /> */}
//       {/* <State /> */}
//       {/* <Counter /> */}
//       {/* <Things /> */}
//       <Objects />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react"
// import Header from "./components/Header";
// import Body from "./components/body";
// // import Body from "./Body"

// export default function App() {
//   const [user, setUser] = React.useState("Faruk")
//   let owner = useState(user)
//     return (
//         <main>
//             <Header name={user}/>
//             <Body name={user}/>
//         </main>
//     )
// }

import React, { useState } from "react";
import boxes from "./boxes";
import Box from "./box";
import "./boxstyle.css";
export default function App(props) {
  
 const [message, setMessage] = React.useState(["a", "b"])
  return(
    <div>
      {message.length > 0 && <h1>You have {message.length} of unread Messages</h1>}
      </div>
  );
}
