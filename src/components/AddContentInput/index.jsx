/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { ADD_CONTENT, SERVER_BACKEND_URL } from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";

export default function AddFieldInput({ setShowContentInput }) {
  const [contentName, setContentName] = React.useState("");

  function handleContentNameChange(event) {
    setContentName(event.target.value);
  }

  async function handleSubmit() {
    try {
      await makeRequest(
        SERVER_BACKEND_URL,
        ADD_CONTENT,
        {
          data: { contentName },
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("accessToken"),
          },
        }
      );
      setShowContentInput(false);
    } catch (e) {
      console.log(e);
    }
  }

  function handleCloseClick() {
    setShowContentInput(false);
  }

  return (
    <div>
      <form className="addContentForm" onSubmit={handleSubmit}>
        <label className="addContentLabel">
          <p>Content Name</p>
          <input
            type="text"
            value={contentName}
            onChange={handleContentNameChange}
          />
        </label>
        <input className="addContentSubmit" type="submit" value="submit" />
      </form>
      <p onClick={handleCloseClick}>close</p>
    </div>
  );
}
