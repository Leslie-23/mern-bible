import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import "./LoginPage.css";

export default function LoginPage({ handleSignupOrLogin }) {
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
      handleSignupOrLogin();
      navigate("/search");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="text-center text-2xl text-theme-dark font-theme">
      <h1 className="text-3xl text-white">Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={fields.email}
          onChange={handleChange}
          required={true}
          className="mt-4 p-2 border-2 rounded-lg focus:outline-none"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={fields.password}
          onChange={handleChange}
          required={true}
          className="mt-4 p-2 border-2 rounded-lg focus:outline-none"
        />
        <br />
        <button
          type="submit"
          className="bg-theme-light p-2 my-4 rounded-lg hover:bg-theme-4 transition in-expo duration-150"
        >
          Log In
        </button>
      </form>
      <p>
        <span className="text-white">No account?</span>{" "}
        <span>
          <a href="/signup" className="text-theme-light hover:text-theme-4">
            Sign up
          </a>
        </span>
      </p>
      <p className="text-yellow-400">{error ? <ErrorMessage error={error} /> : null}</p>
    </div>
  );
}
