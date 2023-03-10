import React from "react";
import Collections from "../../components/Collections";
import NavBar from "../../components/NavBar";
import "./index.css";

export default function CollectionsPage() {
  return (
    <div className="collectionsPage">
      <NavBar />
      <Collections />
    </div>
  );
}
