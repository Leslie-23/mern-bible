import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router";
import userService from "../../utils/userService";

export default function SignUpPage(props) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    name: "",
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
    console.log(fields);
    try {
      props.handleSignupOrLogin();
      navigate("/search");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Sign up Page!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={fields.name}
          onChange={handleChange}
          required={true}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={fields.email}
          onChange={handleChange}
          required={true}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={fields.password}
          onChange={handleChange}
          required={true}
        />
        <input
          type="password"
          name="passwordConf"
          placeholder="Confirm Password"
          value={fields.passwordConf}
          onChange={handleChange}
          required={true}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>{error ? <ErrorMessage error={error} /> : null}</p>
    </div>
  );
}
