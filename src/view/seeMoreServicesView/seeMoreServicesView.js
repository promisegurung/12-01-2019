import React, { Component } from "react";
import "./seeMoreServicesView.css";

import Filters from "../UI/filters/filters";
import PageNav from "../UI/pageNav/pageNav";

import Modal from "../UI/modal/modal";
import RenderServicesView from "../renderView/renderServicesView/renderServicesView";
import ServiceViewModal from "../servicesView/serviceViewModal/serviceViewModal";

import Service1 from "../../assets/servicesView/service-1.jpeg";
import Service2 from "../../assets/servicesView/service-2.jpeg";
import Service3 from "../../assets/servicesView/service-3.jpeg";
import Service4 from "../../assets/servicesView/service-4.jpeg";
import Service5 from "../../assets/servicesView/service-5.jpeg";
import Service6 from "../../assets/servicesView/service-6.jpeg";
import Service7 from "../../assets/servicesView/service-2.jpeg";
import Service8 from "../../assets/servicesView/service-3.jpeg";
import Service9 from "../../assets/servicesView/service-4.jpeg";

const servicesCategory = [
  "All",
  "Plumbers",
  "Mechanics",
  "Housekeeping",
  "Wedding",
  "Legal",
  "Transport",
  "Catering",
  "Business"
];

const nineServices = [
  {
    id: "service-1",
    title: "Professional Health check-up",
    desc:
      "Book an appointmnet for in-house checkups. * Part of NHS approved Health Care Provider. * Our members enjoy 24*7 emergency care and phone consultancy.",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: Service1,
    location: "Lorem Ipsum, London",
    host: "The Lorem Ipsum",
    contact: ["07829388901", "02082204901"],
    availability: "Mon - Fri 05:00 to 21:00"
  },
  {
    id: "service-2",
    title: "Exclusive Housekeeping Services",
    desc:
      "Provider of top class house keeping services.* Variable visits plan available. * Call us today for a free quotation",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    src: Service2,
    location: "Lorem Ipsum, London",
    host: "The Lorem Ipsum",
    contact: ["07829388901", "02082204901"],
    availability: "Mon - Fri 05:00 to 21:00"
  },
  {
    id: "service-3",
    title: "House Maintenance and Repairs",
    desc:
      "From odd jobs to the entire house refurbishment. * we provide it all. * Call us today to book a free of charge visit.",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    src: Service3,
    location: "Lorem Ipsum, London",
    host: "The Lorem Ipsum",
    contact: ["07829388901", "02082204901"],
    availability: "Mon - Fri 05:00 to 21:00"
  },
  {
    id: "service-4",
    title: "Vehicle Repair and Maintanence",
    desc:
      "Visit our Garage in London or call for outcalls. * Memberships start from £16.00 per month. * Yearly services, road-side assistance and many more.",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    src: Service4,
    location: "Lorem Ipsum, London",
    host: "The Lorem Ipsum",
    contact: ["07829388901", "02082204901"],
    availability: "Mon - Fri 05:00 to 21:00"
  },
  {
    id: "service-5",
    title: "IT services and Repairs",
    desc:
      "Computer Repairs and Maintanence. * Also provide web and mobile app development. * Call us today for more information.",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    src: Service5,
    location: "Lorem Ipsum, London",
    host: "The Lorem Ipsum",
    contact: ["07829388901", "02082204901"],
    availability: "Mon - Fri 05:00 to 21:00"
  },
  {
    id: "service-6",
    title: "Legal Support and Advice",
    desc:
      "Injury Claims, Insurances and Mortgages. * Top quality personal support to all our clients. * Call us today for more information and free advice.",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    src: Service6,
    location: "Lorem Ipsum, London",
    host: "The Lorem Ipsum",
    contact: ["07829388901", "02082204901"],
    availability: "Mon - Fri 05:00 to 21:00"
  },
  {
    id: "service-7",
    title: "House Maintenance and Repairs",
    desc:
      "From odd jobs to the entire house refurbishment. * we provide it all. * Call us today to book a free of charge visit.",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    src: Service7,
    location: "Lorem Ipsum, London",
    host: "The Lorem Ipsum",
    contact: ["07829388901", "02082204901"],
    availability: "Mon - Fri 05:00 to 21:00"
  },
  {
    id: "service-8",
    title: "Vehicle Repair and Maintanence",
    desc:
      "Visit our Garage in London or call for outcalls. * Memberships start from £16.00 per month. * Yearly services, road-side assistance and many more.",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    src: Service8,
    location: "Lorem Ipsum, London",
    host: "The Lorem Ipsum",
    contact: ["07829388901", "02082204901"],
    availability: "Mon - Fri 05:00 to 21:00"
  },
  {
    id: "service-9",
    title: "IT services and Repairs",
    desc:
      "Computer Repairs and Maintanence. * Also provide web and mobile app development. * Call us today for more information.",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    src: Service9,
    location: "Lorem Ipsum, London",
    host: "The Lorem Ipsum",
    contact: ["07829388901", "02082204901"],
    availability: "Mon - Fri 05:00 to 21:00"
  }
];

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
