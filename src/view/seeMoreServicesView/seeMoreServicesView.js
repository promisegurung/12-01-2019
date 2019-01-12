import React from "react";
import "./seeMoreServicesView.css";

import Filters from "../UI/filters/filters";
import PageNav from "../UI/pageNav/pageNav";

const servicesCategory = [
  "All",
  "Plumbers",
  "Mechanics",
  "Housekeeping",
  "Wedding",
  "Legal",
  "Transport",
  "Catering",
  "Business"
];

const SeeMoreEventsView = () => {
  return (
    <div className="see-more-services-view">
      <Filters class={"services-category"} cats={servicesCategory} />
      <div className="services-all-view">view</div>
      <PageNav class={"page-nav"} currentPage={1} lastPage={36} />
    </div>
  );
};

export default SeeMoreEventsView;
