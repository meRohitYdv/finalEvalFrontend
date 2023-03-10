/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import {
  ADD_CONTENT_FIELD,
  SERVER_BACKEND_URL,
} from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";

export default function AddFieldInput({ setShowAddFieldInput, contentName }) {
  const [fieldName, setFieldName] = React.useState("");

  function handleFieldNameChange(event) {
    setFieldName(event.target.value);
  }

  async function handleSubmit() {
    try {
      await makeRequest(
        SERVER_BACKEND_URL,
        ADD_CONTENT_FIELD,
        {
          data: { contentName, fieldName },
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("accessToken"),
          },
        }
      );
      setShowAddFieldInput(false);
    } catch (e) {
      console.log(e);
    }
  }

  function handleCloseClick() {
    setShowAddFieldInput(false);
  }

  return (
    <div>
      <form className="addFieldForm" onSubmit={handleSubmit}>
        <label className="addFieldFieldNameLabel">
          <p>Field Name</p>
          <input
            type="text"
            value={fieldName}
            onChange={handleFieldNameChange}
          />
        </label>
        <input className="addFieldSubmit" type="submit" value="submit" />
      </form>
      <p onClick={handleCloseClick}>close</p>
    </div>
  );
}
