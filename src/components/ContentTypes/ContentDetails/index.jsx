/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/prop-types */
import React from "react";
import {
  GET_CONTENT_FIELDS,
  SERVER_BACKEND_URL,
} from "../../../constants/apiEndPoints";
import makeRequest from "../../../utils/makeRequest";
import AddFieldInput from "../../AddFieldInput";
import "./index.css";

export default function ContentDetails({ displayContentFor }) {
  const [showAddFieldInput, setShowAddFieldInput] = React.useState(false);
  const [fields, setFields] = React.useState();

  React.useEffect(() => {
    if (displayContentFor) {
      makeRequest(
        SERVER_BACKEND_URL,
        GET_CONTENT_FIELDS(displayContentFor),
        {},
        {
          headers: { "x-auth-token": localStorage.getItem("accessToken") },
        }
      ).then((res) => {
        setFields(res);
      });
    }
  }, [displayContentFor]);

  function handleAddFieldClick() {
    setShowAddFieldInput(true);
  }

  return (
    <div className="contentDetails">
      {fields ? (
        <div className="contentDetailsBody">
          <p className="contentDetailsHeading">{displayContentFor}</p>
          <p className="contentDetailsNoOfFields">{fields.length} Fields</p>
          <p
            onClick={handleAddFieldClick}
            className="contentDetailsAddAnotherField"
          >
            Add another field
          </p>
          {fields.map((item, index) => (
            <p key={index} className="contentDetailsFieldItem">
              {item}
            </p>
          ))}
          {showAddFieldInput && (
            <AddFieldInput
              contentName={displayContentFor}
              setShowAddFieldInput={setShowAddFieldInput}
            />
          )}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
