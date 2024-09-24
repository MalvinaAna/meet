import { useState } from "react";

const Event = ({event}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <div className = "event">
        <title>{event.summary}</title>
        <p>{event.location}</p>
        <p>{event.created}</p>
      </div>
      {showDetails ? (
        <div className = "event-details">
          <p>{event.description}</p>
        </div>
      ) : null}
      <button className = "show-details"
        onClick = {() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </li>
  );
}

export default Event;