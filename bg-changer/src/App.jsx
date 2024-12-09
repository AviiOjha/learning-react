import { useState } from "react";

function App() {
  const [color, setColor] = useState("rgba(0, 0, 0, 0.4)");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none rounded-full text-white shadow-lg px-4 py-1"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none rounded-full text-white shadow-lg px-4 py-1"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-none rounded-full text-white shadow-lg px-4 py-1"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("yellow");
              }}
              className="outline-none rounded-full text-black shadow-lg px-4 py-1"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => {
                setColor("orange");
              }}
              className="outline-none rounded-full text-black shadow-lg px-4 py-1"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => {
                setColor("black");
              }}
              className="outline-none rounded-full text-white shadow-lg px-4 py-1"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => {
                setColor("rgba(0, 0, 0, 0.7)");
              }}
              className="outline-none rounded-full text-white shadow-lg px-4 py-1"
              style={{ backgroundColor: "rgba(0, 0, 0, .7)" }}
            >
              Gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
