import React, { useState } from "react";
import NavBar from "../components/NavBar";

function Health() {
  const [height, setHeight] = useState(48);
  const [weight, setWeight] = useState(1);
  const [diet, setDiet] = useState("");
  const [workout, setWorkout] = useState("");

  function calculateHealth() {
    if (Number(height) === )
  }

  return (
    <div className="min-h-screen w-full bg-yellow-300 p-10">
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-5xl">Check your health</h2>
        <div className="flex flex-col items-center justify-center bg-gray-200 w-1/3 p-3 mt-10 gap-3">
          <label htmlFor="height" className="font-bold">
            Enter your height (inches):
          </label>
          <input
            type="number"
            id="height"
            min="48"
            max="100"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="bg-purple-500 text-center"
          />
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-200 w-1/3 p-3 gap-3">
          <label htmlFor="weight" className="font-bold">
            Enter your weight (lbs):
          </label>
          <input
            type="number"
            id="weight"
            min="1"
            max="500"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="bg-purple-500 text-center"
          />
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-200 w-1/3 p-3 gap-3">
          <label htmlFor="diet" className="font-bold">
            Are you on a clean diet?:
          </label>
          <input
            type="text"
            id="diet"
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            className="bg-purple-500 text-center"
          />
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-200 w-1/3 p-3 gap-3">
          <label htmlFor="workout" className="font-bold">
            How many days a week do you workout?:
          </label>
          <input
            type="text"
            id="workout"
            value={workout}
            onChange={(e) => setWorkout(e.target.value)}
            className="bg-purple-500 text-center"
          />
        </div>
        <button
          type="button"
          className="bg-purple-500 p-3 w-40 hover:bg-purple-600 mt-5 cursor-pointer"
          onClick={calculateHealth}
        >
          Calculate Health
        </button>
      </div>
    </div>
  );
}

export default Health;
