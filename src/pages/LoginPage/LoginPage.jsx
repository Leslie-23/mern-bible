import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import "./LoginPage.css";

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(fields);
      props.handleSignupOrLogin();
      navigate("/search");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Log In</button>
      </form>
      <p>No Account? <a href="/signup">Sign up</a></p>
      <p>{error ? <ErrorMessage error={error} /> : null}</p>
    </div>
  );
}
