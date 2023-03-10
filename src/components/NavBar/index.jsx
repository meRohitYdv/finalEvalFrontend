/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from "react";
import searchIcon from "../../assets/icon-search-dark/icon-search-dark@3x.png";
import "./index.css";
import {
  GET_CONTENT_LIST,
  SERVER_BACKEND_URL,
} from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";

export default function NavBar() {
  const [contentList, setContentList] = React.useState();

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

  return (
    <div className="navBar">
      <p className="navBarTitle">CMS+</p>
      <div className="navBarHeader">
        <p>COLLECTION TYPES</p>
        <img src={searchIcon} alt="searchIcon" />
      </div>
      <ul>
        {contentList ? (
          contentList.map((item, index) => (
            <li key={index}>{item.contentName}</li>
          ))
        ) : (
          <p />
        )}
      </ul>
      <p className="navBarContentBuilder">CONTENT TYPE BUILDER</p>
    </div>
  );
}
