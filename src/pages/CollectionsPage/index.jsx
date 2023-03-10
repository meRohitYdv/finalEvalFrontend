/* eslint-disable import/no-named-as-default-member */
import React from "react";
import { useParams } from "react-router-dom";
import Collections from "../../components/Collections";
import NavBar from "../../components/NavBar";
import "./index.css";

export default function CollectionsPage() {
  const { contentName } = useParams();
  return (
    <div className="collectionsPage">
      <NavBar />
      <Collections contentName={contentName} />
    </div>
  );
}
