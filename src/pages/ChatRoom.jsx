import React, { useState } from "react";
import PostEntry from "../Components/PostEntry";
import Post from "../Components/Post";

export default function ChatRoom() {
  const [text, setText] = useState([]);

  function addText(newText) {
    setText((prevText) => {
      return [...prevText, newText];
    });
  }

  return (
    <div className="App">

      {/* <img className="background-img" src="pics/art3.jpg" alt=":p"/> */}

      {text.map((textItem) => {
        return (
          <Post
            username={textItem.username}
            comment={textItem.comment}
            time={textItem.time}
          />
        );
      })}
      <PostEntry addNew={addText} />
    </div>
  );
}

// Routing in React
// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <div className="container mt-2" style={{ marginTop: 40 }}>
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }