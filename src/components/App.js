import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css";

function App() {
  return (
    <div>
      <Tooltip text="Tooltip for Heading">
        <h2 className="tooltip">Hover over heading</h2>
      </Tooltip>

      <Tooltip text="Tooltip for paragraph">
        <p className="tooltip">Hover over paragraph</p>
      </Tooltip>

      <Tooltip text="Another tooltip">
        <h2 className="tooltip">Hover over another heading</h2>
      </Tooltip>
    </div>
  );
}

export default App;
