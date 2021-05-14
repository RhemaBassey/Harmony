// Post Entry consists of the text input and submit button
import React, { useState } from "react";

function PostEntry(props) {
  const time = new Date().toLocaleTimeString();

  const myUserName = "Rhema";
  const [post, setPost] = useState({
    comment: "",
    time: "",
  });

  function handleChange(event) {
    const { value } = event.target;
    setPost({
      comment: value,
      time: time,
    });
    console.log(post.comment);
  }

  // Posts stuff
  function handleSubmit(event) {
    props.addNew(post); // 'exports' the value of post to app.jsx, using prop addNew
    setPost({
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
        {/* Setting type='submit', and putting the 'onClick' function in the form tag, enables posting text using the 'enter' key */}
        <button
          disabled={post.comment.length < 1}
          type="submit"
          class="btn btn-dark"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default PostEntry;
