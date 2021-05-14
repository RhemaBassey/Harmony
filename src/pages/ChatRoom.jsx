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

      <div className="middle">
        <div className="middle-center">
          {text.map((textItem) => {
            return (
              <Post
                username={textItem.username}
                comment={textItem.comment}
                time={textItem.time}
              />
            );
          })}
        </div>
      </div>

      <PostEntry addNew={addText} />
    </div>
  );
}
