import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../STORE/ACTIONS/button";

import "./header.css";
import Logo from "../assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img href="#default" className="logo" src={Logo} />
        <div className="header-right">
          {this.props.activeState === "services" ? (
            <a
              className="active"
              onClick={() => this.props.onActiveStateChange("services")}
            >
              Services
            </a>
          ) : (
            <a onClick={() => this.props.onActiveStateChange("services")}>
              Services
            </a>
          )}
          <a href="help">Help</a>
          <a href="signin">Sign In</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeState: state.activeState
  };
};

const mapDisptachToProps = dispatch => {
  return {
    onActiveStateChange: ser => dispatch(actions.setActiveState(ser))
  };
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Header);
