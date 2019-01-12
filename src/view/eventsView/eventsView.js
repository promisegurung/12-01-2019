import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../STORE/ACTIONS/button";
import "./eventsView.css";

import Modal from "../UI/modal/modal";
import EventViewModal from "./eventViewModal/eventViewModal";

import Event1 from "../../assets/eventsView/event-1.png";
import Event2 from "../../assets/eventsView/event-2.png";
import Event3 from "../../assets/eventsView/event-3.png";
import Event4 from "../../assets/eventsView/event-4.png";
import Event5 from "../../assets/eventsView/event-5.png";
import Event6 from "../../assets/eventsView/event-6.png";
import RenderEventsView from "../renderView/renderEventsView/renderEventsView";

const sixEvents = [
  {
    id: "event-1",
    title: "Halloween Special: 90's EDITION",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event1,
    date: { date: "11/01/2019", day: "Fri", time: "18:00" },
    location: "Camden, London",
    price: "21.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£21.00 - £36.00",
    refundPolicy: "No refunds"
  },
  {
    id: "event-2",
    title: "Play For Fun",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event2,
    date: { date: "19/10/2019", day: "Sat", time: "19:00" },
    location: "Harrow, London",
    price: "15.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£15.00 - £20.00",
    refundPolicy: "No refunds"
  },
  {
    id: "event-3",
    title: "SWEET SWEET: Live Music",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event3,
    date: { date: "9/02/2019", day: "Thurs", time: "18:00" },
    location: "Aldershot, UK",
    price: "18.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£18.00 - £32.00",
    refundPolicy: "No refunds"
  },
  {
    id: "event-4",
    title: "LEAF DownTown ft. Ms Jackson",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event4,
    date: { date: "22/03/2019", day: "Fri", time: "21:00" },
    location: "Tottenham, London",
    price: "25.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£25.00 - £98.00",
    refundPolicy: "No refunds"
  },
  {
    id: "event-5",
    title: "Cosmic Mirage: Space Jazz",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event5,
    date: { date: "27/05/2019", day: "Sat", time: "19:00" },
    location: "Vauxhall, London",
    price: "20.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£20.00 - £30.00",
    refundPolicy: "No refunds"
  },
  {
    id: "event-6",
    title: "NEW YEAR 2018 PARTY",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event6,
    date: { date: "5/09/2019", day: "Sun", time: "18:00" },
    location: "Waterloo, London",
    price: "29.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£29.00 - £45.00",
    refundPolicy: "No refunds"
  }
];

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
