/* eslint-disable no-unused-vars */
import React from "react";
import ContentDetails from "./ContentDetails";
import ContentList from "./ContentList";
import "./index.css";

export default function ContentTypes() {
  const [displayContentFor, setDisplayContentFor] = React.useState();

  return (
    <div className="contentTypes">
      <p className="contentTypesHeading">Content Types</p>
      <div className="contentTypesBody">
        <ContentList setDisplayContentFor={setDisplayContentFor} />
        <ContentDetails displayContentFor={displayContentFor} />
      </div>
    </div>
  );
}
