import React, { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiURL = "https://localhost:3000/api/user";

function User() {
  const [mode, setMode] = useState("Login");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null);

  const signupEmailRef = useRef(null);
  const signupPasswordRef = useRef(null);
  const signupConfirmPasswordRef = useRef(null);

  // Helper: focus the real input when the wrapper is clicked
  const focus = (ref) => () => ref.current?.focus();

  const navigate = useNavigate();

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${apiURL}/login`, {
        email: loginEmail,
        password: loginPassword,
      });
      console.log("JWT:", data.token);
      localStorage.setItem("token", data.token);
      navigate("/health");
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSignupSubmit(e) {
    e.preventDefault();
    if (signupPassword !== signupConfirmPassword) {
      return alert("Passwords do not match");
    }
    try {
      await axios.post(`${apiURL}/signup`, {
        email: signupEmail,
        password: signupPassword,
      });

      // reset
      setSignupEmail("");
      setSignupPassword("");
      setSignupConfirmPassword("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen w-full bg-yellow-300 p-10">
      <NavBar />

      {mode === "Login" ? (
        <form
          onSubmit={handleLoginSubmit}
          className="mx-auto flex w-full max-w-md h-130 flex-col items-center gap-4 rounded-lg border bg-white p-10 shadow"
        >
          <h2 className="mb-2 text-4xl font-semibold">Log In</h2>

          <div
            onClick={focus(loginEmailRef)}
            className="w-full rounded bg-gray-300 p-3 focus-within:ring-2 focus-within:ring-purple-500"
          >
            <label htmlFor="loginEmail" className="block text-sm text-gray-700">
              Email
            </label>
            <input
              ref={loginEmailRef}
              id="loginEmail"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div
            onClick={focus(loginPasswordRef)}
            className="w-full rounded bg-gray-300 p-3 focus-within:ring-2 focus-within:ring-purple-500"
          >
            <label
              htmlFor="loginPassword"
              className="block text-sm text-gray-700"
            >
              Password
            </label>
            <input
              ref={loginPasswordRef}
              id="loginPassword"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded bg-purple-500 p-3 text-white transition hover:bg-purple-600 cursor-pointer"
          >
            Log In
          </button>

          <p className="mt-2 text-sm">
            Not registered?{" "}
            <button
              type="button"
              className="text-purple-600 underline cursor-pointer"
              onClick={() => setMode("Signup")}
            >
              Sign Up
            </button>
          </p>
        </form>
      ) : (
        <form
          onSubmit={handleSignupSubmit}
          className="mx-auto flex w-full max-w-md h-130 flex-col items-center gap-4 rounded-lg border bg-white p-10 shadow"
        >
          <h2 className="mb-2 text-4xl font-semibold">Sign Up</h2>

          <div
            onClick={focus(signupEmailRef)}
            className="w-full rounded bg-gray-300 p-3 focus-within:ring-2 focus-within:ring-purple-500"
          >
            <label
              htmlFor="signupEmail"
              className="block text-sm text-gray-700"
            >
              Email
            </label>
            <input
              ref={signupEmailRef}
              id="signupEmail"
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div
            onClick={focus(signupPasswordRef)}
            className="w-full rounded bg-gray-300 p-3 focus-within:ring-2 focus-within:ring-purple-500"
          >
            <label
              htmlFor="signupPassword"
              className="block text-sm text-gray-700"
            >
              Password
            </label>
            <input
              ref={signupPasswordRef}
              id="signupPassword"
              type="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div
            onClick={focus(signupConfirmPasswordRef)}
            className="w-full rounded bg-gray-300 p-3 focus-within:ring-2 focus-within:ring-purple-500"
          >
            <label
              htmlFor="signupConfirmPassword"
              className="block text-sm text-gray-700"
            >
              Confirm Password
            </label>
            <input
              ref={signupConfirmPasswordRef}
              id="signupConfirmPassword"
              type="password"
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded bg-purple-500 p-3 text-white transition hover:bg-purple-600 cursor-pointer"
          >
            Sign Up
          </button>

          <p className="mt-2 text-sm">
            Already registered?{" "}
            <button
              type="button"
              className="text-purple-600 underline cursor-pointer"
              onClick={() => setMode("Login")}
            >
              Log In
            </button>
          </p>
        </form>
      )}
    </div>
  );
}

export default User;
