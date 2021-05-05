import React from "react";

function Post(props) {
  return (
    <div className="card post-style" >
      <div className="card-body">
        <h5 className="card-title"> {props.username}:</h5>
        <p className="card-text">{props.comment}</p>
      </div>
    </div>
  );

}
export default Post;
