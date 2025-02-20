import React, { useState } from 'react';
import './Accordion.css'; // Import file CSS

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-header ${isOpen ? 'open' : ''}`}
        onClick={toggleAccordion}
      >
        {title}
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;