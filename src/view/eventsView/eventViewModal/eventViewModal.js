import React from "react";
import { months } from "../../../eventsMockData";

import "./eventViewModal.css";

const EventViewModal = props => {
  return (
    <div className="event-specific">
      <img id="event-specific-img" src={props.event.src} alt="" />
      <div className="event-specific-desc">
        <h6>Description</h6>
        <p>{props.event.description}</p>
      </div>
      <div className="right-desc-area">
        <div id="closeBtn" onClick={props.onClickHandler}>
          X
        </div>
        <div className="topHalf">
          <p id="event-specific-month">
            {months[parseInt(props.event.date.date.split("/")[1]) - 1]}
          </p>
          <p id="event-specific-date">{props.event.date.date.split("/")[0]}</p>
          <h6 id="event-specific-title">{props.event.title}</h6>
          <p id="event-specific-organiser">{`by ${props.event.organiser}`}</p>
          <p id="event-specific-fullPrice">{props.event.fullPrice}</p>
        </div>
        <button id="event-specific-tickets-button">Tickets</button>
        <div className="bottomHalf">
          <h6 id="date-time-label">Date and Time</h6>
          <p id="date-time">{`${props.event.date.day}, ${
            months[parseInt(props.event.date.date.split("/")[1]) - 1]
          } ${props.event.date.date.split("/")[0]}, ${
            props.event.date.date.split("/")[2]
          }, ${props.event.date.time}`}</p>
          <h6 id="location-label">Location</h6>
          <p id="event-specific-location">{props.event.location}</p>
          <a id="view-map" href="/">
            View Map
          </a>
          <h6 id="refund-policy-label">Refund Policy</h6>
          <p id="refund-policy">{props.event.refundPolicy}</p>
        </div>
      </div>
    </div>
  );
};

export default EventViewModal;
