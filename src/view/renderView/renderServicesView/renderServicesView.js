import React from "react";

const RenderServicesView = props => {
  const returned = props.services.map((service, index) => (
    <div
      className={props.class}
      id={`${props.class}-${index}`}
      onClick={() => props.onClickHandler(service)}
    >
      <img id={props.imgID} src={service.src} />
      <div className={props.descID}>
        <div id={props.serviceTitleID}>{service.title}</div>
        <div id={props.serviceDescID}>
          {service.desc.split("*")[0]} <br />
          {service.desc.split("*")[1]} <br />
          {service.desc.split("*")[2]}
        </div>
      </div>
    </div>
  ));
  return returned;
};

export default RenderServicesView;
