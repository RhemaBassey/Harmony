import React, { useState } from "react";
import { forEachChild } from "typescript";
import { DropDownItem, DropDownItemSelected } from "../Components/DropDownItem";
import Card from "../Components/Card";
import ProfileInputs from "../Components/ProfileInputs";
import ProfileOutputs from "../Components/ProfileOutputs"

const username = "Rhema";

// set an array/variable to push edits into, so you can revert to the last one when 'cancel' is pressed
export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [details, setDetails] = useState({});

  // let profileDetails = [
  //   details.aboutMe,
  //   "Email: " + details.emailAddress,
  //   "Twitter: " + details.twitterHandle,
  //   "Location: " + details.location,
  //   "Gender: " + details.gender,
  //   "Birthday: " + details.birthday,
  // ];

  // Enable editing the profile page
  function editDetails(event) {
    setEditMode(true);
    console.log(details)
    event.preventDefault();
  }

  function handleExportDetails(exportedValue) {
    setDetails(exportedValue);
  }

  function handleExportEditMode(exportedValue) {
    setEditMode(exportedValue);
  }

  return (
    <div className="card" style={{width:"75%", margin:"0% 12.5%"}}>
      <h1> {username} </h1>
      <form>
        {editMode ? (
          <ProfileInputs
            aboutMe={details.aboutMe}
            emailAddress ={details.emailAddress}
            twitterHandle = {details.twitterHandle}
            location = {details.location}
            gender ={details.gender}
            birthday ={details.birthday}
            prevEdit ={details}

            exportDetails={handleExportDetails}
            exportEditMode={handleExportEditMode}
          />
        ) : (<ProfileOutputs details={details} editDetails={editDetails}/>)}
      </form>
    </div>
  );
}

export { username };
