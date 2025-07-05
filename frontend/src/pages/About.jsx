import React from "react";
import NavBar from "../components/NavBar";

function About() {
  return (
    <div className="min-h-screen w-full bg-yellow-300 p-10">
      <NavBar />
      <div className="flex flex-col items-center justify-center mt-10 gap-20">
        <h2 className="text-5xl">About</h2>
        <p className="text-center font-bold text-3xl">
          {" "}
          This app allows users to check their health given certain criteria and
          checks. Also allows authentication for each user utilizing JWT tokens
          from the backend and local storage in the frontend.
        </p>
        <img
          src="https://northmaincoc.org/wp-content/uploads/2022/11/aboutus.jpg"
          alt="About img"
          className="h-100 mt-20"
        />
      </div>
    </div>
  );
}

export default About;
