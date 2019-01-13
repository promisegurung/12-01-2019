import React, { Component } from "react";
import "./seeMoreEventsView.css";

import Filters from "../UI/filters/filters";
import PageNav from "../UI/pageNav/pageNav";
import RenderEventsView from "../renderView/renderEventsView/renderEventsView";

import Modal from "../UI/modal/modal";
import EventViewModal from "../eventsView/eventViewModal/eventViewModal";

import { eventsCategory, nineEvents } from "../../eventsMockData";

class SeeMoreEventsView extends Component {
  state = {
    showModal: false,
    selectedEvent: {}
  };
  onClickHandler = event => {
    this.setState({ showModal: true, selectedEvent: event });
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
        <div className="see-more-events-view fade">
          <Filters class={"events-category"} cats={eventsCategory} />
          <div className="events-all-view">
            <RenderEventsView
              class={"event-all-view"}
              events={nineEvents}
              onClickHandler={this.onClickHandler}
              imgID={"event-all-img"}
              descID={"event-all-desc"}
              monthID={"event-all-month"}
              eventDateID={"event-all-date"}
              eventTitleID={"event-all-title"}
              eventDetailsID={"event-all-details"}
            />
          </div>
          <PageNav class={"page-nav"} currentPage={1} lastPage={49} />
        </div>
      </>
    );
  }
}

export default SeeMoreEventsView;
