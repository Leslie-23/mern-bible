import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import Search from "../Search/Search";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";

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
      <Route
        path="/"
        element={<Layout user={user} handleLogout={handleLogout} />}
      >
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
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
