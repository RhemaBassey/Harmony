import React from "react";
import Card from "./Card"
export default function ProfileOutputs(props) {
    const details=props.details

    
    return(
  <div>
    <div className="card">
      <div className="card-header">
        <p> About Me: </p> {details.aboutMe}
      </div>
    </div>
    <Card title="Email: " text={details.emailAddress} style="card-body" />
    <Card title="Twitter: " text={details.twitterHandle} style="card-header" />
    <Card title="Location: " text={details.location} style="card-body" />
    <Card title="Gender: " text={details.gender} style="card-header" />
    <Card
      title="Birthday: "
      text={details.birthday + " (yyyy-mm-dd)"}
      style="card-body"
    />
    <p>
      <button onClick={props.editDetails} type="button" class="btn btn-primary">
        Edit
      </button>
    </p>
  </div>)
}
