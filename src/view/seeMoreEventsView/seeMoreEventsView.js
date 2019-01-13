import React, { Component } from "react";
import "./seeMoreEventsView.css";

import Filters from "../UI/filters/filters";
import PageNav from "../UI/pageNav/pageNav";
import RenderEventsView from "../renderView/renderEventsView/renderEventsView";

import Modal from "../UI/modal/modal";
import EventViewModal from "../eventsView/eventViewModal/eventViewModal";

import { eventsCategory } from "../../eventsMockData";
import EVENTSHELPER from "../../HELPERS/EVENTSHELPER/EVENTSHELPER";

class SeeMoreEventsView extends Component {
  state = {
    showModal: false,
    selectedEvent: {},
    currentPage: 1,
    lastPage: null,
    currentEvents: []
  };
  componentDidMount() {
    const [nineEvents, lastPage] = EVENTSHELPER(this.state.currentPage);
    this.setState({ currentEvents: nineEvents, lastPage: lastPage });
  }
  onClickHandler = event => {
    this.setState({ showModal: true, selectedEvent: event });
  };
  modalClosedHandler = () => {
    this.setState({ showModal: false });
  };
  onNextBtnClickedHandler = () => {
    if (this.state.currentPage < this.state.lastPage) {
      const [nineEvents, _] = EVENTSHELPER(this.state.currentPage + 1);
      this.setState({
        currentPage: this.state.currentPage + 1,
        currentEvents: nineEvents
      });
    }
  };
  onPreviousBtnClickedHandler = () => {
    if (this.state.currentPage > 1) {
      const [nineEvents, _] = EVENTSHELPER(this.state.currentPage - 1);
      this.setState({
        currentPage: this.state.currentPage - 1,
        currentEvents: nineEvents
      });
    }
  };
  render() {
    console.log(this.state.currentPage);
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
          <div className="events-all-view fade">
            <RenderEventsView
              class={"event-all-view"}
              events={this.state.currentEvents}
              onClickHandler={this.onClickHandler}
              imgID={"event-all-img"}
              descID={"event-all-desc"}
              monthID={"event-all-month"}
              eventDateID={"event-all-date"}
              eventTitleID={"event-all-title"}
              eventDetailsID={"event-all-details"}
            />
          </div>
          <PageNav
            class={"page-nav"}
            currentPage={this.state.currentPage}
            lastPage={this.state.lastPage}
            onNextBtnClickedHandler={this.onNextBtnClickedHandler}
            onPreviousBtnClickedHandler={this.onPreviousBtnClickedHandler}
          />
        </div>
      </>
    );
  }
}

export default SeeMoreEventsView;
