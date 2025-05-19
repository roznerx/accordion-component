import  { useState } from 'react';
import './Accordion.css';

export default function Accordion({ items }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  function toggle(index) {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    };
  };

  return (
    <div className="accordion-container">
      {
        items.map((i, index) => {
          return (
            <div key={index} className="item-container">
              <div className="accordion-title">
                <h2>{i.title}</h2>
                <button 
                  className="accordion-btn" 
                  onClick={() => toggle(index)}
                >
                  {openIndexes.includes(index) ? "-" : "+"}
                </button>
              </div>
              {
                openIndexes.includes(index) &&
                <div className="accordion-content">
                  <h4>{i.content}</h4>
                </div>
              }
            </div>
          )
        })
      }
    </div>
  );
};
