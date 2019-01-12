import React, { Component } from "react";
import { connect } from "react-redux";

import EventSearch from "./eventSearch/eventSearch";
import ServicesSearch from "./servicesSearch/servicesSearch";
import CategoriesSearch from "./categoriesSearch/categoriesSearch";
import Error from "./error/error";

class Search extends Component {
  render() {
    const renderThis = () => {
      switch (this.props.activeState) {
        case "events":
          return <EventSearch />;
        case "see-more-events":
          return <EventSearch />;
        case "services":
          return <ServicesSearch />;
        case "see-more-services":
          return <ServicesSearch />;
        case "categories":
          return <CategoriesSearch />;
        default:
          return null;
      }
    };
    return <>{renderThis()}</>;
  }
}

const mapStateToProps = state => {
  return {
    activeState: state.activeState
  };
};

export default connect(mapStateToProps)(Search);
