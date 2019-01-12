import React from "react";
import "./seeMoreEventsView.css";

import Filters from "../UI/filters/filters";
import PageNav from "../UI/pageNav/pageNav";

const eventsCategory = [
  "All",
  "Parties",
  "Concerts",
  "Social Events",
  "Live Music",
  "Free",
  "Movies",
  "Outdoor",
  "Conference",
  "Festivals"
];

const SeeMoreEventsView = () => {
  return (
    <div className="see-more-events-view">
      <Filters class={"events-category"} cats={eventsCategory} />
      <div className="events-all-view">view</div>
      <PageNav class={"page-nav"} currentPage={1} lastPage={49} />
    </div>
  );
};

export default SeeMoreEventsView;
