/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/prop-types */
import React from "react";
import {
  DELETE_CONTENT_FIELD,
  GET_CONTENT_FIELDS,
  SERVER_BACKEND_URL,
} from "../../../constants/apiEndPoints";
import makeRequest from "../../../utils/makeRequest";
import AddFieldInput from "../../AddFieldInput";
import editIcon from "../../../assets/user-pencil-write-ui-education/user-pencil-write-ui-education@2x.png";
import "./index.css";
import deleteIcon from "../../../assets/trash-delete-recycle-bin-bucket-waste/trash-delete-recycle-bin-bucket-waste@3x.png";
import UpdateContentNameInput from "../../UpdateContentNameInput";

export default function ContentDetails({ displayContentFor }) {
  const [showAddFieldInput, setShowAddFieldInput] = React.useState(false);
  const [showUpdateContentName, setShowUpdateContentName] =
    React.useState(false);
  const [fields, setFields] = React.useState();
  const [somethingDeleted, setSomethingDeleted] = React.useState(false);

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
  }, [displayContentFor, somethingDeleted]);

  function handleAddFieldClick() {
    setShowAddFieldInput(true);
  }
  function editNameIconClick() {
    setShowUpdateContentName(true);
  }
  async function handleDeleteIconClick(fieldName) {
    await makeRequest(
      SERVER_BACKEND_URL,
      DELETE_CONTENT_FIELD,
      { data: { contentName: displayContentFor, fieldName } },
      { headers: { "x-auth-token": localStorage.getItem("accessToken") } }
    );
    setSomethingDeleted(!somethingDeleted);
  }

  return (
    <div className="contentDetails">
      {fields ? (
        <div className="contentDetailsBody">
          <div className="contentDetailsHeader">
            <p className="contentDetailsHeading">{displayContentFor}</p>
            <img src={editIcon} onClick={editNameIconClick} alt="editIcon" />
          </div>
          {showUpdateContentName && (
            <UpdateContentNameInput
              setShowUpdateContentName={setShowUpdateContentName}
              contentName={displayContentFor}
            />
          )}
          <p className="contentDetailsNoOfFields">{fields.length} Fields</p>
          <p
            onClick={handleAddFieldClick}
            className="contentDetailsAddAnotherField"
          >
            Add another field
          </p>
          {fields.map((item, index) => (
            <div className="contentDetailsFieldItem">
              <p key={index}>{item}</p>
              <img
                onClick={() => {
                  handleDeleteIconClick(item);
                }}
                src={deleteIcon}
                alt="deleteIcon"
              />
            </div>
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
