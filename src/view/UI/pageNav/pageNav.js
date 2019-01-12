import React from "react";
import "./pageNav.css";
const PageNav = props => {
  return (
    <div className={props.class}>
      <a className="previous-btn">Previous</a>
      <span className="current-page">{props.currentPage}</span>
      <span className="dots">...</span>
      <span className="last-page">{props.lastPage}</span>
      <a className="next-btn">Next</a>
    </div>
  );
};

export default PageNav;
