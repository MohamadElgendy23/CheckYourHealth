import React from "react";

function NavBar() {
  return (
    <div className="flex items-center justify-end">
      <ul className="flex justify-center gap-5 font-bold mb-10">
        <li className="cursor-pointer hover:text-gray-700">
          <a href="/">Home</a>
        </li>
        <li className="cursor-pointer hover:text-gray-700">
          <a href="/health">Health</a>
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
