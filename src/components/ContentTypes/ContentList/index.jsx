/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from "react";
import searchIcon from "../../../assets/icon-search-dark/icon-search-dark@3x.png";
import makeRequest from "../../../utils/makeRequest";
import AddContentInput from "../../AddContentInput";
import {
  GET_CONTENT_LIST,
  SERVER_BACKEND_URL,
} from "../../../constants/apiEndPoints";

import "./index.css";

export default function ContentList({ setDisplayContentFor }) {
  const [contentList, setContentList] = React.useState();
  const [showContentInput, setShowContentInput] = React.useState();

  React.useEffect(() => {
    makeRequest(
      SERVER_BACKEND_URL,
      GET_CONTENT_LIST,
      {},
      {
        headers: { "x-auth-token": localStorage.getItem("accessToken") },
      }
    ).then((res) => {
      setContentList(Object.values(res));
    });
  }, []);

  function handleContentNameClick(contentName) {
    setDisplayContentFor(contentName);
  }
  function handleNewTypesClick() {
    setShowContentInput(true);
  }

  return (
    <div className="contentList">
      <div className="contentListHeader">
        <p>{contentList ? contentList.length : 0} types</p>
        <img src={searchIcon} alt="searchIcon" />
      </div>
      <div className="contentListFieldListContainer">
        <p onClick={handleNewTypesClick} className="contentListNewTypeButton">
          + New Types
        </p>
        {contentList ? (
          contentList.map((item, index) => (
            <p
              key={item.contentName}
              className="contentListFieldListItems"
              onClick={() => handleContentNameClick(item.contentName)}
            >
              {item.contentName}
            </p>
          ))
        ) : (
          <p />
        )}
        {showContentInput && (
          <AddContentInput setShowContentInput={setShowContentInput} />
        )}
      </div>
    </div>
  );
}
