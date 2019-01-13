import React, { Component } from "react";
import { connect } from "react-redux";
import "./eventsView.css";

import Modal from "../UI/modal/modal";
import EventViewModal from "./eventViewModal/eventViewModal";

import { sixEvents } from "../../eventsMockData";
import RenderEventsView from "../renderView/renderEventsView/renderEventsView";

import * as actions from "../../STORE/ACTIONS/button";

class View extends Component {
  state = {
    showModal: false,
    selectedEvent: {}
  };
  onClickHandler = eventTitle => {
    this.setState({ showModal: true, selectedEvent: eventTitle });
  };
  modalClosedHandler = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <>
        <Modal
          show={this.state.showModal}
          modalClosed={this.modalClosedHandler}
        >
          {this.state.showModal ? (
            <EventViewModal
              event={this.state.selectedEvent}
              onClickHandler={this.modalClosedHandler}
            />
          ) : null}
        </Modal>
        <div className="events-view fade">
          <div className="default-events">
            <RenderEventsView
              class={"events"}
              events={sixEvents}
              onClickHandler={this.onClickHandler}
              imgID={"event-img"}
              descID={"event-desc"}
              monthID={"month"}
              eventDateID={"event-date"}
              eventTitleID={"event-title"}
              eventDetailsID={"event-details"}
            />
            <div
              className="see-more-events"
              onClick={() => this.props.onClickSeeMoreEvents("see-more-events")}
            >
              <p>See More Events</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    onClickSeeMoreEvents: SME => dispatch(actions.setActiveState(SME))
  };
};

export default connect(
  null,
  mapDispatchtoProps
)(View);
