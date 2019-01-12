import React from "react";

import "./filters.css";

const Filters = props => {
  return (
    <div className={props.class}>
      {props.cats.map(cat => {
        return <div className="filter-categories">{cat}</div>;
      })}
      <div className="filter-categories">...</div>
    </div>
  );
};
export default Filters;
