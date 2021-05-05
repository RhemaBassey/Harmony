import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PostEntry from "./PostEntry";
import Post from "./Post";

export default function App() {
  const [text, setText] = useState([]);
  
  function addText(newText) {
    setText(prevText => {
      return [...prevText, newText]
    });
  }
  return (
    <div className="App">
      <Header />
      {/* <img className="background-img" src="pics/art3.jpg" alt=":p"/> */}

      {text.map(textItem => {return (<Post username={textItem.username} comment={textItem.comment}/>)})}
      <PostEntry addNew={addText} /> 
      <Footer />
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
