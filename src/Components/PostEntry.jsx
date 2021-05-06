// Post Entry consists of the text input and submit button
import React, { useState } from "react";

function PostEntry(props) {
  //   const d = new Date();
  //   const hour = d.getHours(); // => 9
  //   const min = d.getMinutes(); // =>  30
  //   const sec = d.getSeconds(); // => 51function Post(props)
  const time = new Date().toLocaleTimeString();

  const myUserName = "Rhema";
  const [post, setPost] = useState({
    username: myUserName,
    comment: "",
    time: "",
  });

  function handleChange(event) {
    const { value } = event.target;
    setPost({
      username: myUserName,
      comment: value,
      time: time,
    });
    console.log(post.comment);
  }

  // Posts stuff
  function handleSubmit(event) {
    props.addNew(post); // 'exports' the value of post to app.jsx, using prop addNew
    setPost({
      username: myUserName,
      comment: "",
      time: "",
    });
    event.preventDefault();
  }

  return (
    <div className="post-entry">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Message"
          onChange={handleChange}
          value={post.comment}
        />
        {/* By setting type='submit', and putting the 'onClick' function in the form tag, I can post my text using the 'enter' key */}
        <button
          disabled={post.comment.length < 1}
          type="submit"
          class="btn btn-dark"
        >
          submit
        </button>{" "}
      </form>
    </div>
  );
}

export default PostEntry;
