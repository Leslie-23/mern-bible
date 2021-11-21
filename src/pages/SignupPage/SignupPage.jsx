import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";
import userService from "../../utils/userService";

export default function SignUpPage({ handleSignupOrLogin }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await userService.signup(fields);
      handleSignupOrLogin();
      navigate("/search");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-primary text-center text-2xl font-theme">
      <h1 className="text-3xl">Sign Up</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={fields.username}
          onChange={handleChange}
          required={true}
          className="mt-4 border-2 border-black rounded"
        />
        <br/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={fields.email}
          onChange={handleChange}
          required={true}
          className="mt-4 border-2 border-black rounded"
        />
        <br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={fields.password}
          onChange={handleChange}
          required={true}
          className="mt-4 border-2 border-black rounded"
        />
        <br/>
        <input
          type="password"
          name="passwordConf"
          placeholder="Confirm password"
          value={fields.passwordConf}
          onChange={handleChange}
          required={true}
          className="mt-4 border-2 border-black rounded"
        />
        <br/>
        <button type="submit" className="bg-primary px-4 py-1 my-4 border-2 border-black rounded-full">Sign Up</button>
      </form>
      <p className="mt-4">{error ? <ErrorMessage error={error} /> : null}</p>
    </div>
  );
}
