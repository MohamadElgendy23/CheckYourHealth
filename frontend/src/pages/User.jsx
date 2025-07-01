import React, { useState } from "react";
import NavBar from "../components/NavBar";

function User() {
  const [mode, setMode] = useState("Login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  function handleLoginSubmit(event) {
    event.preventDefault();
    
  }

  function handleSignupSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="bg-yellow-300 min-h-screen w-full p-10">
      <NavBar />
      {mode === "Login" ? (
        <form
          onSubmit={handleLoginSubmit}
          className="m-auto flex items-center flex-col border border-solid rounded-lg p-10 w-1/3 h-180 bg-white gap-3"
        >
          <h2 className="text-5xl p-20">Log In</h2>
          <div className="bg-gray-300 w-70 p-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </div>
          <div className="bg-gray-300 w-70 p-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-5 bg-purple-400 p-3 w-50 cursor-pointer"
          >
            Log In
          </button>
          <p className="flex flex-end gap-1">
            Not registered?{" "}
            <button
              type="button"
              className="text-purple-400 cursor-pointer"
              onClick={() => setMode("Signup")}
            >
              Sign Up
            </button>
          </p>
        </form>
      ) : (
        <form
          onSubmit={handleSignupSubmit}
          className="m-auto flex items-center flex-col border border-solid rounded-lg p-10 w-1/3 h-180 bg-white gap-3"
        >
          <h2 className="text-5xl p-20">Sign Up</h2>
          <div className="bg-gray-300 w-70 p-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
            />
          </div>
          <div className="bg-gray-300 w-70 p-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
            />
          </div>
          <div className="bg-gray-300 w-70 p-2 h-15">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-5 bg-purple-400 p-3 w-50 cursor-pointer"
          >
            Sign Up
          </button>
          <p className="flex flex-end gap-1">
            Already registered?{" "}
            <button
              type="button"
              onClick={() => setMode("Login")}
              className="text-purple-400 cursor-pointer"
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
