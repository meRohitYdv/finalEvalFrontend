/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import {
  SERVER_BACKEND_URL,
  UPDATE_CONTENT_NAME,
} from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";

export default function UpdateContentNameInput({
  setShowUpdateContentName,
  contentName,
}) {
  const [newContentName, setNewContentName] = React.useState("");

  function handleContentNameChange(event) {
    setNewContentName(event.target.value);
  }

  async function handleSubmit() {
    try {
      await makeRequest(
        SERVER_BACKEND_URL,
        UPDATE_CONTENT_NAME,
        {
          data: { contentName, newContentName },
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("accessToken"),
          },
        }
      );
      setShowUpdateContentName(false);
    } catch (e) {
      console.log(e);
    }
  }

  function handleCloseClick() {
    setShowUpdateContentName(false);
  }

  return (
    <div>
      <form className="updateContentForm" onSubmit={handleSubmit}>
        <label className="updateContentLabel">
          <p>Content Name</p>
          <input
            type="text"
            value={newContentName}
            onChange={handleContentNameChange}
          />
        </label>
        <input className="updateContentSubmit" type="submit" value="submit" />
      </form>
      <p onClick={handleCloseClick}>close</p>
    </div>
  );
}
