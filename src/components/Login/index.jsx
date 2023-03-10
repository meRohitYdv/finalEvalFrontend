/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from "react";
import { useNavigate } from "react-router-dom";
import makeRequest from "../../utils/makeRequest";
import {
  AUTHENTICATE_USER,
  AUTH_BACKEND_URL,
} from "../../constants/apiEndPoints";
import { ERROR_ROUTE, LANDING_ROUTE } from "../../constants/routes";
import "./index.css";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await makeRequest(AUTH_BACKEND_URL, AUTHENTICATE_USER, {
        data: { email, password },
      });
      localStorage.setItem("accessToken", userData.accessToken);
      setIsLoggedIn(true);
      navigate(LANDING_ROUTE);
    } catch (e) {
      if (e.response?.status === 400) {
        alert("Invalid email or password.");
      } else if (e.response?.status) {
        navigate(`${ERROR_ROUTE}/${e.response.status}`);
      } else {
        navigate(ERROR_ROUTE);
      }
      return null;
    }
    return true;
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className="loginEmailLabel">
          <p>Email</p>
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <label className="loginPasswordLabel">
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <input className="loginInput" type="submit" value="Login" />
      </form>
    </div>
  );
}
