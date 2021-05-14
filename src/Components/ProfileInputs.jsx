import {React, useState} from "react";
import { DropDownItem } from "./DropDownItem";

let genderList = ["male", "female", "trans", "non-binary", "prefer not to say"];


export default function ProfileInputs(props) {
    var prevEdit = props.prevEdit;

    const [editMode, setEditMode] = useState(false);

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var date = d.getDate();
  month < 10 && (month = "0" + month);
  date < 10 && (date = "0" + month);

  const [details, setDetails] = useState({
    aboutMe: props.aboutMe,
    emailAddress: props.emailAddress,
    twitterHandle: props.twitterHandle,
    location: props.location,
    gender: props.gender,
    age: props.age,
    birthday: props.birthday,
    
  });
  // Records any editted input
  function handleChange(e) {
    const { name, value } = e.target;
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }

  // Updates your profile and stores it in prevEdit, which is used to retrieve previous edits.
  function updateEdit(e) {
    setEditMode(false);
    props.exportEditMode(editMode)
    props.exportDetails(details)

    e.preventDefault();
    prevEdit = details;
    console.log(details)
  }

  // Cancel the edit and sets the details to the previous edit
  function cancelEdit(e) {
    // for some reason you can't setDetails here, so I exported 'prevEdit' instead
    setEditMode(false);
    props.exportDetails(prevEdit)
    props.exportEditMode(editMode)
    

    e.preventDefault();
  }
  return (
    <div>
      {/* About Me */}
      <p>
        <textarea
          name="aboutMe"
          placeholder="About Me..."
          onChange={handleChange}
          value={details.aboutMe}
        />
      </p>
      <p>
        {/* Email */}
        <p>
          <form>
            <label> Email: </label>
            <input
              name="emailAddress"
              value={details.emailAddress}
              onChange={handleChange}
            />
          </form>
        </p>

        {/* Twitter */}
        <p>
          <form>
            <label> Twitter: </label>
            <input
              name="twitterHandle"
              value={details.twitterHandle}
              onChange={handleChange}
            />
          </form>
        </p>

        {/* Location */}
        <p>
          <form>
            <label> Location: </label>
            <input
              name="location"
              value={details.location}
              onChange={handleChange}
            />
          </form>
        </p>

        {/* Gender */}
        <p>
          <form>
            <label> Gender: </label>
            <select name="gender" onChange={handleChange}>
              <option disabled selected>
                --Gender--
              </option>
              {genderList.map((item) => {
                return (
                  <DropDownItem detailValue={details.gender} value={item} />
                );
              })}
            </select>
          </form>
        </p>

        {/* Birthday */}
        <p>
          <form action="/action_page.php">
            <label for="birthday"> Birthday: </label>
            <input
              type="date"
              name="birthday"
              value={details.birthday}
              onChange={handleChange}
              min="1900-01-01"
              max={year + "-" + month + "-" + date}
            />
          </form>
        </p>

        {/* Submit Button */}
        <button  onClick={updateEdit} class="btn btn-primary">
          OK
        </button>

        {/* Cancel Button */}
        <button onClick={cancelEdit} class="btn btn-outline-dark">
          Cancel
        </button>
      </p>
    </div>
  );
}
