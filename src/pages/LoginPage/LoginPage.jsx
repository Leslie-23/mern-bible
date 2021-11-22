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
    <div className="bg-primary text-center text-2xl font-theme">
      <h1 className="text-3xl">Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={fields.email}
          onChange={handleChange}
          required={true}
          className="mt-4 border-2 border-black rounded focus:outline-none"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={fields.password}
          onChange={handleChange}
          required={true}
          className="mt-4 border-2 border-black rounded focus:outline-none"
        />
        <br />
        <button
          type="submit"
          className="bg-primary px-4 py-1 my-4 border-2 border-black rounded-full"
        >
          Log in
        </button>
      </form>
      <p>
        No account?{" "}
        <button>
          <a href="/signup" className="underline">
            Sign up
          </a>
        </button>
      </p>
      <p>{error ? <ErrorMessage error={error} /> : null}</p>
    </div>
  );
}
