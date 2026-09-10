import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Saraswati");
  const [clr, setClr] = useState("white");

  return (
    <>
      <div
        style={{ backgroundColor: clr }}
        className="w-50 mx-auto border border-secondary rounded-4 d-flex flex-column"
      >
        <h1 className="text-center text-warning bg-dark p-">
          UseState Hook in Functional Component
        </h1>
        <h1 className="text-center">Counter:{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            alert("Count has increased..!");
            //console.log("count has increased");
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
            alert("Count has decreased..!");
            //console.log("Count is decreased..!");
          }}
        >
          Decrease
        </button>

        <h1>{name}</h1>
        <button
          onClick={() => {
            setName("Amala");
            alert("Name changed");
          }}
        >
          Change Name
        </button>

        <button onClick={() => setClr("blue")}>change color</button>
        <button onClick={() => setClr("white")}>LightMode</button>
        <button onClick={() => setClr("black")}>darkMode</button>
      </div>
    </>
  );
};

export default UseState;
