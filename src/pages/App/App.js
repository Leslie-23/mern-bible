import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Protected from "../../components/Protected/Protected";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import SearchPage from "../SearchPage/SearchPage";
import SavedPage from "../SavedPage/SavedPage";

function App() {
  const [user, setUser] = useState(userService.getUser());

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/"
        element={<Layout user={user} handleLogout={handleLogout} />}
      >
        <Route path="search" element={<SearchPage />} />
        <Route
          path="saved"
          element={
            <Protected user={user}>
              <SavedPage />
            </Protected>
          }
        />
        <Route
          path="login"
          element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="signup"
          element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route path="logout" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
