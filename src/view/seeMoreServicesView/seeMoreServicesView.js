import React, { Component } from "react";
import "./seeMoreServicesView.css";

import Filters from "../UI/filters/filters";
import PageNav from "../UI/pageNav/pageNav";

import Modal from "../UI/modal/modal";
import RenderServicesView from "../renderView/renderServicesView/renderServicesView";
import ServiceViewModal from "../servicesView/serviceViewModal/serviceViewModal";

import { servicesCategory, nineServices } from "../../servicesMockData";

class SeeMoreServicesView extends Component {
  state = {
    showModal: false,
    selectedService: {}
  };
  onClickHandler = service => {
    this.setState({ showModal: true, selectedService: service });
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
              services={nineServices}
              class={"service-all"}
              onClickHandler={this.onClickHandler}
              imgID={"service-all-img"}
              descID={"service-all-desc"}
              serviceTitleID={"service-all-title"}
              serviceDescID={"service-all-desc"}
            />
          </div>
          <PageNav class={"page-nav"} currentPage={1} lastPage={36} />
        </div>
      </>
    );
  }
}

export default SeeMoreServicesView;
