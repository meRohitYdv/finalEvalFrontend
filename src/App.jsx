/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import CollectionsPage from "./pages/CollectionsPage";
import "./App.css";
import {
  HOME_ROUTE,
  LANDING_ROUTE,
  ERROR_ROUTE,
  COLLECTIONS_ROUTE,
} from "./constants/routes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={HOME_ROUTE}
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          {isLoggedIn && (
            <Route path={LANDING_ROUTE} element={<LandingPage />} />
          )}
          {isLoggedIn && (
            <Route
              path={`${COLLECTIONS_ROUTE}/:contentName?`}
              element={<CollectionsPage />}
            />
          )}
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
