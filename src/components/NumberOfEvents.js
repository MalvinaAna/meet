import React, { useState } from "react";

const NumberOfEvents = ({ onNumberChange }) => {
  const [numberEvents, setNumberEvents] = useState(32);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNumberEvents(value);
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
      />
    </div>
  );
};

export default NumberOfEvents;
