import React from "react";
import "./pageNav.css";
const PageNav = props => {
  const isFirstPage = props.currentPage === 1;
  const isLastPage = props.currentPage === props.lastPage;
  return (
    <div className={props.class}>
      <button
        className={isFirstPage ? "disabled" : "previous-btn"}
        onClick={props.onPreviousBtnClickedHandler}
      >
        Previous
      </button>
      <span className="current-page">{props.currentPage}</span>
      <span className="dots">...</span>
      <span className={isLastPage ? "last-page end" : "last-page"}>
        {props.lastPage}
      </span>
      <button
        className={isLastPage ? "disabled" : "next-btn"}
        onClick={props.onNextBtnClickedHandler}
      >
        Next
      </button>
    </div>
  );
};

export default PageNav;
