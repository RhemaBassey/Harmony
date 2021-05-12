import React from "react";


function DropDownItem(props) {
  return (
      // If User selected an item prior (props.detailValue), when user clicks the drop down menu again the previously selected item would remain selected
    <>
      {props.detailValue === props.value ? (
        <option value={props.value} selected>
          {props.value}
        </option>
      ) : (
        <option value={props.value}>
          {props.value}
        </option>
      )}
    </>
  );
}

function DropDownItemSelected(props) {
  return (
    <option value={props.value} selected>
      {props.value}
    </option>
  );
}

export { DropDownItem, DropDownItemSelected };
