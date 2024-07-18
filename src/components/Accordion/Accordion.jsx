import React, { useState } from "react";
import { Plus } from "lucide-react";
import './Accordion.css';

const Accordion = ({ data }) => {
  const [currentActive, setCurrentActive] = useState(0);

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => setCurrentActive(index)}
          >
            <h6 className="accordion-question">{item.question}</h6>
            <div
              className={`accordion-icon ${
                currentActive === index ? "rotate" : ""
              }`}
            >
              <Plus size={16} />
            </div>
          </div>
          <div
            className={`accordion-content ${
              currentActive !== index ? "hidden" : "visible"
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
