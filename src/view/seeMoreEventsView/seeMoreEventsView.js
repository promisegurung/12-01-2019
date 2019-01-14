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
    currentEvents: [],
    filter: ["All"]
  };
  componentDidMount() {
    this.callEVENTSHELPER();
  }
  callEVENTSHELPER() {
    const [nineEvents, lastPage] = EVENTSHELPER(
      this.state.currentPage,
      this.state.filter
    );
    this.setState({ currentEvents: nineEvents, lastPage: lastPage });
  }
  setCurrentEvents = (updatedFilter = this.state.filter) => {
    const [nineEvents, lastPage] = EVENTSHELPER(1, updatedFilter);
    this.setState({ currentEvents: nineEvents, lastPage: lastPage });
    this.setState({ currentPage: 1 });
  };
  onClickHandler = event => {
    this.setState({ showModal: true, selectedEvent: event });
  };
  modalClosedHandler = () => {
    this.setState({ showModal: false });
  };
  onNextBtnClickedHandler = () => {
    if (this.state.currentPage < this.state.lastPage) {
      const [nineEvents, lastPage] = EVENTSHELPER(
        this.state.currentPage + 1,
        this.state.filter
      );
      this.setState({
        currentEvents: nineEvents,
        currentPage: this.state.currentPage + 1,
        lastPage: lastPage
      });
    }
  };
  onPreviousBtnClickedHandler = () => {
    if (this.state.currentPage > 1) {
      const [nineEvents, lastPage] = EVENTSHELPER(
        this.state.currentPage - 1,
        this.state.filter
      );
      this.setState({
        currentEvents: nineEvents,
        currentPage: this.state.currentPage - 1,
        lastPage: lastPage
      });
    }
  };
  onFilterClickedHandler = cat => {
    switch (true) {
      case cat === "All":
        this.setState({ filter: ["All"] });
        this.setCurrentEvents(["All"]);
        break;
      case this.state.filter.includes(cat):
        const oldFilterState = [...this.state.filter];
        const newFilterState = oldFilterState.filter(item => item !== cat);
        if (newFilterState.length === 0) {
          newFilterState.push("All");
        }
        this.setState({ filter: newFilterState });

        this.setCurrentEvents(newFilterState);
        break;
      case !this.state.filter.includes(cat):
        const newFilterState1 = [...this.state.filter].filter(
          item => item !== "All"
        );
        newFilterState1.push(cat);
        this.setState({ filter: newFilterState1 });
        this.setCurrentEvents(newFilterState1);
        break;
      default:
        const newFilterState2 = [...this.state.filter];
        this.setState({ filter: newFilterState2 });
        this.setCurrentEvents(newFilterState2);
        break;
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
          <Filters
            class={"events-category"}
            cats={eventsCategory}
            filterBy={this.state.filter}
            onFilterClickedHandler={this.onFilterClickedHandler}
          />
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
