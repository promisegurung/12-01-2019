import React, { Component } from "react";
import "./seeMoreServicesView.css";

import Filters from "../UI/filters/filters";
import PageNav from "../UI/pageNav/pageNav";

import Modal from "../UI/modal/modal";
import RenderServicesView from "../renderView/renderServicesView/renderServicesView";
import ServiceViewModal from "../servicesView/serviceViewModal/serviceViewModal";

import { servicesCategory } from "../../servicesMockData";
import SERVICESHELPER from "../../HELPERS/SERVICESHELPER/SERVICESHELPER";

class SeeMoreServicesView extends Component {
  state = {
    showModal: false,
    selectedService: {},
    currentPage: 1,
    lastPage: null,
    currentServices: [],
    filter: ["All"]
  };
  componentDidMount() {
    this.callEVENTSHELPER();
  }
  callEVENTSHELPER() {
    const [nineServices, lastPage] = SERVICESHELPER(
      this.state.currentPage,
      this.state.filter
    );
    this.setState({ currentServices: nineServices, lastPage: lastPage });
  }
  setCurrentServices = (updatedFilter = this.state.filter) => {
    const [nineServices, lastPage] = SERVICESHELPER(1, updatedFilter);
    this.setState({ currentServices: nineServices, lastPage: lastPage });
    this.setState({ currentPage: 1 });
  };
  onClickHandler = service => {
    this.setState({ showModal: true, selectedService: service });
  };
  modalClosedHandler = () => {
    this.setState({ showModal: false });
  };
  onNextBtnClickedHandler = () => {
    if (this.state.currentPage < this.state.lastPage) {
      const [nineServices, lastPage] = SERVICESHELPER(
        this.state.currentPage + 1,
        this.state.filter
      );
      this.setState({
        currentServices: nineServices,
        currentPage: this.state.currentPage + 1,
        lastPage: lastPage
      });
    }
  };
  onPreviousBtnClickedHandler = () => {
    if (this.state.currentPage > 1) {
      const [nineServices, lastPage] = SERVICESHELPER(
        this.state.currentPage - 1,
        this.state.filter
      );
      this.setState({
        currentServices: nineServices,
        currentPage: this.state.currentPage - 1,
        lastPage: lastPage
      });
    }
  };
  onFilterClickedHandler = cat => {
    switch (true) {
      case cat === "All":
        this.setState({ filter: ["All"] });
        this.setCurrentServices(["All"]);
        break;
      case this.state.filter.includes(cat):
        const oldFilterState = [...this.state.filter];
        const newFilterState = oldFilterState.filter(item => item !== cat);
        if (newFilterState.length === 0) {
          newFilterState.push("All");
        }
        this.setState({ filter: newFilterState });

        this.setCurrentServices(newFilterState);
        break;
      case !this.state.filter.includes(cat):
        const newFilterState1 = [...this.state.filter].filter(
          item => item !== "All"
        );
        newFilterState1.push(cat);
        this.setState({ filter: newFilterState1 });
        this.setCurrentServices(newFilterState1);
        break;
      default:
        const newFilterState2 = [...this.state.filter];
        this.setState({ filter: newFilterState2 });
        this.setCurrentServices(newFilterState2);
        break;
    }
  };
  render() {
    return (
      <>
        <Modal
          show={this.state.showModal}
          modalClosed={this.modalClosedHandler}
        >
          {this.state.showModal ? (
            <ServiceViewModal
              service={this.state.selectedService}
              onClickHandler={this.modalClosedHandler}
            />
          ) : null}
        </Modal>
        <div className="see-more-services-view fade">
          <Filters
            class={"services-category"}
            cats={servicesCategory}
            filterBy={this.state.filter}
            onFilterClickedHandler={this.onFilterClickedHandler}
          />
          <div className="services-all-view">
            <RenderServicesView
              class={"service-all"}
              services={this.state.currentServices}
              onClickHandler={this.onClickHandler}
              imgID={"service-all-img"}
              descID={"service-all-desc"}
              serviceTitleID={"service-all-title"}
              serviceDescID={"service-all-desc"}
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

export default SeeMoreServicesView;
