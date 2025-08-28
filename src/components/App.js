import React from "react";
import Tooltip from "./Tooltip";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>React Tooltip Example</h1>

      <Tooltip text="This is a tooltip for Button">
        <button>Hover over me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="Tooltip for text">
        <span style={{ borderBottom: "1px dotted black", cursor: "pointer" }}>
          Hover over this text
        </span>
      </Tooltip>

      <br /><br />

      <Tooltip text="Tooltip on an image">
        <img
          src="https://via.placeholder.com/100"
          alt="placeholder"
          style={{ border: "1px solid black", cursor: "pointer" }}
        />
      </Tooltip>
    </div>
  );
}

export default App;
