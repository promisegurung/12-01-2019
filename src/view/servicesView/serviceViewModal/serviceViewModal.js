import React from "react";
import "./serviceViewModal.css";

const ServiceViewModal = props => {
  return (
    <div className="service-specific">
      <img id="service-specific-img" src={props.service.src} alt="" />
      <div className="service-specific-desc">
        <h6>Description</h6>
        <p>{props.service.fullDesc}</p>
      </div>
      <div className="right-desc-area">
        <div id="closeBtn" onClick={props.onClickHandler}>
          X
        </div>
        <div className="topHalf">
          <h6 id="service-specific-title">{props.service.title}</h6>
          <p id="service-specific-host">{`by ${props.service.host}`}</p>
        </div>
        <p id="service-specific-contact-number">{props.service.contact[0]}</p>
        <div className="bottomHalf">
          <h6 id="contact-label">Contact</h6>
          <p id="contact-1">{props.service.contact[0]}</p>
          <p id="contact-2">{props.service.contact[1]}</p>
          <h6 id="location-label">Location</h6>
          <p id="service-specific-location">{props.service.location}</p>
          <h6 id="availability-label">Availability</h6>
          <p id="availability">{props.service.availability}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceViewModal;
