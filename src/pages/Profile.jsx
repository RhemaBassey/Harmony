import React, { useState } from "react";
const username = "Rhema";
var prevEdit = "";

// set an array/variable to push edits into, so you can revert to the last one when 'cancel' is pressed
export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [aboutMe, setAboutMe] = useState("");


  function editAboutMe(event) {
    setEditMode(true);
    event.preventDefault();
  }

  function handleChange(e) {
    const { value } = e.target;
    setAboutMe(value);
  }

  function updateEdit(e) {
    setEditMode(false);

    e.preventDefault();
    prevEdit = aboutMe;
  }

  function cancleEdit(e) {
    setAboutMe(prevEdit);
    setEditMode(false);
    e.preventDefault();
  }

  return (
    <div>
      <h1> {username} </h1>
      <form>
        <p> About Me:</p>
        {editMode ? (
          <div>
            <textarea
              placeholder="About Me..."
              onChange={handleChange}
              value={aboutMe}
            />
            <p>
              <button type="submit" onClick={updateEdit}>
                OK
              </button>
              <button onClick={cancleEdit}> Cancel </button>
            </p>
          </div>
        ) : (
          <div>
            <p>{aboutMe}</p>
            <p>
              <button onClick={editAboutMe}>Edit</button>{" "}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export { username };
