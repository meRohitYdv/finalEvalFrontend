import React from "react";
import ContentTypes from "../../components/ContentTypes";
import NavBar from "../../components/NavBar";
import "./index.css";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <NavBar className="landingPageNavBar" />
      <ContentTypes />
    </div>
  );
}
