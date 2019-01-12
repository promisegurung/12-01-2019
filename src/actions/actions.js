import React from "react";
import { Slide } from "react-slideshow-image";
import "./actions.css";

import back1 from "../assets/background-1.jpg";
import back2 from "../assets/background-2.jpg";
import back3 from "../assets/background-3.jpg";

import Search from "./search/search";
import Buttons from "./buttons/buttons";

const backs = [back1, back2, back3];
const properties = {
  duration: 10000,
  transitionDuration: 900,
 
};

const Actions = () => {
  return (
    <>
      <Slide {...properties}>
        <div
          className="actions"
          style={{ backgroundImage: `url(${backs[0]})` }}
        />
        <div
          className="actions"
          style={{ backgroundImage: `url(${backs[1]})` }}
        />
        <div
          className="actions"
          style={{ backgroundImage: `url(${backs[2]})` }}
        />
      </Slide>
      <Search />
      <Buttons />
    </>
  );
};

export default Actions;
