import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;
