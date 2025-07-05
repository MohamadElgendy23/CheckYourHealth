import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-end">
      <ul className="flex justify-center gap-5 font-bold mb-10">
        <li className="cursor-pointer hover:text-gray-700">
          <a href="/">Home</a>
        </li>
        <li className="cursor-pointer hover:text-gray-700">
          <a
            onClick={async () => {
              const apiURL = "http://localhost:3000/api/health/";
              const token = localStorage.getItem("token");

              try {
                await axios.get(apiURL, {
                  headers: { Authorization: `Bearer ${token}` },
                });
                navigate("/health");
              } catch (error) {
                console.log(error.message);
                navigate("/user");
              }
            }}
          >
            Health
          </a>
        </li>
        <li className="cursor-pointer hover:text-gray-700">
          <a href="/user">User</a>
        </li>
        <li className="cursor-pointer hover:text-gray-700">
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
