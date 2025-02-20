import React, { useState } from 'react';
import './Tooltip.css'; // Import file CSS

const Tooltip = ({ message, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isVisible && <div className="tooltip">{message}</div>}
    </div>
  );
};

export default Tooltip;