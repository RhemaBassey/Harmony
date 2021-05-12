import React, { useState } from "react";
import { forEachChild } from "typescript";
import {DropDownItem, DropDownItemSelected} from "../Components/DropDownItem"

const username = "Rhema";
var prevEdit = {};
let ageList = []
let genderList = ["male","female","trans","non-binary", "prefer not to say"]


// set an array/variable to push edits into, so you can revert to the last one when 'cancel' is pressed
export default function Profile() {
  // 
  for(var i=13; i<101; i++){
    ageList.push(String(i))
  }


  
  const [editMode, setEditMode] = useState(false);
  const [details, setDetails] = useState({
    aboutMe:"",
    emailAddress:"",
    twitterHandle: "",
    location:"",
    gender:"",
    age:""
  });


  function editDetails(event) {
    setEditMode(true);
    event.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails((prevDetails) => {
      return{
        ...prevDetails,
        [name]: value
      }
    });
  }

  function updateEdit(e) {
    setEditMode(false);

    e.preventDefault();
    prevEdit = details;
  }

  function cancleEdit(e) {
    
    setDetails(prevEdit);
    setEditMode(false);
    e.preventDefault();
  }

  function generateList(){
    return(<option>test</option>)
  }

  return (
    <div>
      <h1> {username} </h1>
      <form>
        <p> About Me:</p>
        {editMode ? (
          <div>
            <textarea
              name="aboutMe"
              placeholder="About Me..."
              onChange={handleChange}
              value={details.aboutMe}
            />
            <p>

            <form>
              <label>Email: </label>
              <input name="emailAddress" value={details.emailAddress} onChange={handleChange}/>
            </form>
            <form>
              <label>Twitter: </label>
              <input name="twitterHandle" value={details.twitterHandle} onChange={handleChange}/>
            </form>
            <form>
              <label>Location: </label>
              <input name="location" value={details.location} onChange={handleChange}/>
            </form>
            <form>
            <label>Gender: </label>
              <select name="gender" onChange={handleChange}>
              <option disabled selected>--Gender--</option>
                {genderList.map((item) => {
                  return(<DropDownItem detailValue={details.gender} value={item}/>)
                })}
              </select>
            </form>
            <form>
            <label>Age: </label>
            <select name="age" onChange={handleChange}>
            <option disabled selected>--Age--</option>
                {ageList.map((item) => {
                  return(<DropDownItem detailValue={details.age} value={item}/>)
                })}
            </select>
            </form>
            
              <button
                type="submit"
                onClick={updateEdit}
                class="btn btn-primary"
              >
                OK
              </button>

              <button onClick={cancleEdit} class="btn btn-outline-dark">
                Cancel
              </button>
            </p>
          </div>
        ) : (
          <div>
            <p>{details.aboutMe}</p>
            <p>Email: {details.emailAddress}</p>
            <p>Twitter: {details.twitterHandle}</p>
            <p>Location: {details.location}</p>
            <p>Gender: {details.gender}</p>
            <p>Age: {details.age}</p>
            <p>
              <button
                onClick={editDetails}
                type="button"
                class="btn btn-primary"
              >
                Edit
              </button>{" "}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export { username };
