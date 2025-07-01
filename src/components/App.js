import React from "react";
import Tooltip from "./Tooltip"

const App = () => {
  return (
    <div>
      <h1>React Tooltip Example</h1>

      <Tooltip text="This is a tooltip for Button">
        <button>Hover me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="Tooltip on text">
        <span style={{ textDecoration: "underline", cursor: "pointer" }}>
          Hover over this text
        </span>
      </Tooltip>
    </div>
  );
};

export default App;
