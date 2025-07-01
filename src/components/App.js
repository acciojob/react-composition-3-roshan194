import React from "react";
import Tooltip from "../components/Tooltip";

const App = () => {
  return (
    <div>
      <Tooltip text="Tooltip for H2">
        <h2>Hello!</h2>
      </Tooltip>

      <Tooltip text="Tooltip for paragraph">
        <p>This is a paragraph with tooltip</p>
      </Tooltip>

      <Tooltip text="Another tooltip">
        <span>Hover over me</span>
      </Tooltip>
    </div>
  );
};

export default App;
