import React, { useState } from "react";
const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);
  
    const handleMouseEnter = () => setShowTooltip(true);
    const handleMouseLeave = () => setShowTooltip(false);
  
    return (
      <div
        className="tooltip"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {showTooltip && <div className="tooltiptext">{text}</div>}
      </div>
    );
  };
  
  export default Tooltip;