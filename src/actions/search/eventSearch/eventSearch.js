import React from "react";

import "./eventSearch.css";

const EventSearch = () => {
  return (
    <div className="event-search fade">
      <label id="where">Where</label>
      <input id="location" type="text" placeholder="London, United Kingdom" />
      <label id="when">When</label>
      <input id="date" type="text" placeholder="Any Date" />
      <button id="btn">Search</button>
    </div>
  );
};

export default EventSearch;
