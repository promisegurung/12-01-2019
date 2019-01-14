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
    currentServices: []
  };
  componentDidMount() {
    const [nineServices, lastPage] = SERVICESHELPER(this.state.currentPage);
    this.setState({ currentServices: nineServices, lastPage: lastPage });
  }
  onClickHandler = service => {
    this.setState({ showModal: true, selectedService: service });
  };
  modalClosedHandler = () => {
    this.setState({ showModal: false });
  };
  onNextBtnClickedHandler = () => {
    if (this.state.currentPage < this.state.lastPage) {
      const [nineServices, _] = SERVICESHELPER(this.state.currentPage + 1);
      this.setState({
        currentPage: this.state.currentPage + 1,
        currentServices: nineServices
      });
    }
  };
  onPreviousBtnClickedHandler = () => {
    if (this.state.currentPage > 1) {
      const [nineServices, _] = SERVICESHELPER(this.state.currentPage - 1);
      this.setState({
        currentPage: this.state.currentPage - 1,
        currentServices: nineServices
      });
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
          <Filters class={"services-category"} cats={servicesCategory} />
          <div className="services-all-view">
            <RenderServicesView
              services={this.state.currentServices}
              class={"service-all"}
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
