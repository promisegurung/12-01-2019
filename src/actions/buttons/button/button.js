import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../STORE/ACTIONS/button";

import Events from "../../../assets/events.svg";
import Services from "../../../assets/services.svg";
import Categories from "../../../assets/categories.svg";
import Surprise from "../../../assets/surprise.svg";

class Button extends Component {
  render() {
    return (
      <>
        <button
          className={this.props.activeState === "events" ? "active" : null}
          id="events"
          onClick={() => this.props.onSetActiveState("events")}
        >
          <img src={Events} alt="events" />
        </button>
        <button
          className={this.props.activeState === "services" ? "active" : null}
          id="services"
          onClick={() => this.props.onSetActiveState("services")}
        >
          <img src={Services} alt="services" />
        </button>
        <button
          className={this.props.activeState === "categories" ? "active" : null}
          id="categories"
          onClick={() => this.props.onSetActiveState("categories")}
        >
          <img src={Categories} alt="categories" />
        </button>
        <button
          className={this.props.activeState === "surprise" ? "active" : null}
          id="surprise"
          onClick={() => this.props.onSetActiveState("surprise")}
        >
          <img src={Surprise} alt="surprise me" />
        </button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeState: state.activeState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetActiveState: id => dispatch(actions.setActiveState(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
