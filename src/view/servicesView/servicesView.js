import React, { Component } from "react";
import "./servicesView.css";
import { connect } from "react-redux";
import * as actions from "../../STORE/ACTIONS/button";

import Modal from "../UI/modal/modal";
import ServiceViewModal from "./serviceViewModal/serviceViewModal";
import RenderServicesView from "../renderView/renderServicesView/renderServicesView";

import { sixServices } from "../../servicesMockData";

class View extends Component {
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
        <div className="services-view fade">
          <div className="default-services">
            <RenderServicesView
              services={sixServices}
              class={"service"}
              onClickHandler={this.onClickHandler}
              imgID={"service-img"}
              descID={"service-desc"}
              serviceTitleID={"service-title"}
              serviceDescID={"service-desc"}
            />
            <div
              className="see-more-services"
              onClick={() =>
                this.props.onClickSeeMoreServices("see-more-services")
              }
            >
              <p>See More Services</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickSeeMoreServices: SMS => dispatch(actions.setActiveState(SMS))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(View);
