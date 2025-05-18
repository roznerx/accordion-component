import  { useState } from 'react';
import './Accordion.css';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(prev => (prev === index ? null : index));
  }

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
                  {openIndex === index ? "-" : "+"}
                </button>
              </div>
              {
                openIndex === index &&
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
