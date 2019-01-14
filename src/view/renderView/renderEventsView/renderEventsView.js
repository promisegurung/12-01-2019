import React from "react";
import { months } from "../../../eventsMockData";

const RenderEventsView = props => {
  const returned = props.events.map((event, index) => (
    <div
      className={props.class}
      id={`${props.class}-${index}`}
      onClick={() => props.onClickHandler(event)}
    >
      <img id={props.imgID} src={event.src} />
      <div className={props.descID}>
        <div id={props.monthID}>
          {months[parseInt(event.date.date.split("/")[1]) - 1]}
        </div>
        <div id={props.eventDateID}>{event.date.date.split("/")[0]}</div>
        <div id={props.eventTitleID}>{event.title}</div>
        <div id={props.eventDetailsID}>
          {`${event.date.day}, ${event.date.date.split("/")[0]} ${
            months[parseInt(event.date.date.split("/")[1]) - 1]
          }, ${event.date.date.split("/")[2]}`}
          <br />
          {event.date.time}
          <br />
          {event.location}
          <br />
          {event.price === "FREE" ? "FREE" : `£${event.price}`}
        </div>
      </div>
    </div>
  ));
  return returned;
};

export default RenderEventsView;
