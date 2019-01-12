import React from "react";
import './servicesSearch.css'

const ServicesSearch = () => {
  return (
    <div className="service-search fade">
      <label id="what">What</label>
      <input id="service" type="text" placeholder="Mechanic" />
      <label id="where">Where</label>
      <input id="location" type="text" placeholder="London, United Kingdom" />
      <button id="btn">Search</button>
    </div>
  );
};

export default ServicesSearch;
