import React, { Component } from "react";
import { connect } from "react-redux";

import EventsView from "./eventsView/eventsView";
import ServicesView from "./servicesView/servicesView";
import CategoriesView from "./categoriesView/categoriesView";

import SeeMoreEventsView from "./seeMoreEventsView/seeMoreEventsView";
import SeeMoreServicesView from "./seeMoreServicesView/seeMoreServicesView";

class View extends Component {
  render() {
    switch (true) {
      case this.props.activeState === "events":
        return <EventsView />;
      case this.props.activeState === "see-more-events":
        return <SeeMoreEventsView />;
      case this.props.activeState === "services":
        return <ServicesView />;
      case this.props.activeState === "see-more-services":
        return <SeeMoreServicesView />;
      case this.props.activeState === "categories":
        return <CategoriesView />;
      default:
        return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    activeState: state.activeState
  };
};

export default connect(mapStateToProps)(View);
