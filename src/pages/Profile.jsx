import React, { useState } from "react";
import { forEachChild } from "typescript";
import {DropDownItem, DropDownItemSelected} from "../Components/DropDownItem"
import Card from "../Components/Card"

const username = "Rhema";
var prevEdit = {};
let ageList = []
let genderList = ["male","female","trans","non-binary", "prefer not to say"]
let generated = false //boolean for whether items in the age drop down menu have been generated


// set an array/variable to push edits into, so you can revert to the last one when 'cancel' is pressed
export default function Profile() {
  var d = new Date()
  var year = d.getFullYear();
  var month = d.getMonth();
  var date = d.getDate();

  month < 10 && (month = "0" + month)
  date < 10 && (date = "0" + month)

  console.log(year +"-"+ month +"-"+ date)
  // 

{/* <form action="/action_page.php">
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">
  <input type="submit">
</form> */}

  
  const [editMode, setEditMode] = useState(false);
  const [details, setDetails] = useState({
    aboutMe:"",
    emailAddress:"",
    twitterHandle: "",
    location:"",
    gender:"",
    age:"",
    birthday:""
  });

let profileDetails = [details.aboutMe, "Email: " + details.emailAddress, "Twitter: " + details.twitterHandle, "Location: " + details.location, "Gender: " + details.gender, "Birthday: " + details.birthday]


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
        {editMode ? (
          <div>
          <p>
                      <textarea
              name="aboutMe"
              placeholder="About Me..."
              onChange={handleChange}
              value={details.aboutMe}
            />
          </p>

            <p>

            <p>            <form>
              <label>Email: </label>
              <input name="emailAddress" value={details.emailAddress} onChange={handleChange}/>
            </form></p>
            <p>            <form>
              <label>Twitter: </label>
              <input name="twitterHandle" value={details.twitterHandle} onChange={handleChange}/>
            </form></p>
            <p>         <form>
              <label>Location: </label>
              <input name="location" value={details.location} onChange={handleChange}/>
            </form></p>
            <p><form>
            <label>Gender: </label>
              <select name="gender" onChange={handleChange}>
              <option disabled selected>--Gender--</option>
                {genderList.map((item) => {
                  return(<DropDownItem detailValue={details.gender} value={item}/>)
                })}
              </select>
            </form></p>
            <p><form action="/action_page.php">
  <label for="birthday">Birthday:</label>
  <input type="date"  name="birthday" value={details.birthday} onChange={handleChange} min="1900-01-01" max= {year+"-"+month+"-"+date}/>

</form></p>



   
            

            
            

            
            
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
          <div >

            
                  {/* <p> About Me:</p> */}
            {/* {profileDetails.map((item) => {
              return(
                            <Card text={item} style="card-body"/>
              )
            })} */}
            
            <div className="card">
  <div className="card-header">
    <p> About Me: </p>
    {details.aboutMe}
  </div>
</div>
            <Card title="Email: " text={details.emailAddress} style="card-body"/>
            <Card title="Twitter: " text={details.twitterHandle} style="card-header"/>
            <Card title="Location: " text={details.location} style="card-body"/>
            <Card title="Gender: " text={details.gender} style="card-header"/>
            <Card title="Birthday: " text={details.birthday + " (yyyy-mm-dd)"} style="card-body"/> 
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
