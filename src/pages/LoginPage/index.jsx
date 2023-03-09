/* eslint-disable react/prop-types */
import React from "react";
import Login from "../../components/Login";
import "./index.css";

export default function LoginPage({ setIsLoggedIn }) {
  return (
    <div>
      <div className="loginPage">
        <Login setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
}
