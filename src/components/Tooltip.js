import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  // Clone the child to add mouse events and className
  const childWithProps = React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  });

  return (
    <>
      {childWithProps}
      {showTooltip && <div className="tooltiptext">{text}</div>}
    </>
  );
};

export default Tooltip;
