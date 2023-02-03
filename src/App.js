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


import React, { useState } from "react"
import Header from "./components/Header";
import Body from "./components/body";
// import Body from "./Body"

export default function App() {
  const [user, setUser] = React.useState("Faruk")
  let owner = useState(user)
    return (
        <main>
            <Header name={user}/>
            <Body name={user}/>
        </main>
    )
}
