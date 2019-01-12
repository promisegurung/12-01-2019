import React from "react";
import Button from './button/button'

import "./buttons.css";


const Buttons = () => {
  return (
    <div className="buttons">
      <Button/>
      <label id="label-events">Events</label>
      <label id="label-services">Services</label>
      <label id="label-categories">Categories</label>
      <label id="label-surprise">Surprise me!</label>
    </div>
  );
};

export default Buttons;
