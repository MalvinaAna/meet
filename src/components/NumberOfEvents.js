import React, { useState, useEffect } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const [numberEvents, setNumberEvents] = useState(currentNOE);

  useEffect(() => {
    setNumberEvents(currentNOE);
  }, [currentNOE]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNumberEvents(value);
    let errorText;
    if(isNaN(value) || value.length <= 0) { 
      errorText = "Please enter a valid number"
    } else {
      errorText = ""
    }
    setCurrentNOE(value); 
    setErrorAlert(errorText);
  };

  return (
    <div className="number-of-events">
      <label htmlFor="numberOfEvents">Number of Events:</label>
      <input
        id="numberOfEvents"
        type="text"
        className="number-input"
        value={numberEvents}
        onChange={handleInputChange}
        aria-label="number of events"
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;
