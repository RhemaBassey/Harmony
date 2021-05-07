import React from "react";
import {Link} from "react-router-dom"
import {username} from "../pages/Profile"

export default function Post(props){
    
  return (
      
    <div className="card post-style" >
      <div className="card-body">
        <h5 className="card-title"> <Link to="/profile" className="anchor">{username}</Link> <span className="time">{props.time}</span></h5>
        <p className="card-text">{props.comment}</p>
      </div>
    </div>
  );

}
