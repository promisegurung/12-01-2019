import React, { Component } from "react";

import Cat1 from "../../../assets/categories/restaurants.jpeg";
import Cat2 from "../../../assets/categories/pubs.jpeg";
import Cat3 from "../../../assets/categories/clubs.jpg";
import Cat4 from "../../../assets/categories/travel.jpeg";
import Cat5 from "../../../assets/categories/freelancers.jpeg";
import Cat6 from "../../../assets/categories/legal.jpeg";

import "./categoriesSearch.css";

const categories = [
  { src: Cat1, text: "Restaurants" },
  { src: Cat2, text: "Pubs" },
  { src: Cat3, text: "Clubs" },
  { src: Cat4, text: "Travel" },
  { src: Cat5, text: "Free Lancers" },
  { src: Cat6, text: "Legal" }
];

class CategoriesSearch extends Component {
  state = {
    currentDiv: 0
  };
  prevCaseHandler = () => {
    if (this.state.currentDiv === 0) {
      this.setState({ currentDiv: categories.length - 1 });
    } else {
      this.setState({ currentDiv: this.state.currentDiv - 1 });
    }
  };
  nextCaseHandler = () => {
    if (this.state.currentDiv === categories.length - 1) {
      this.setState({ currentDiv: 0 });
    } else {
      this.setState({ currentDiv: this.state.currentDiv + 1 });
    }
  };
  render() {
    const showDiv = categories[this.state.currentDiv];
    return (
      <div className="wrapper">
        <div className="mySlides fade">
          <img src={showDiv.src} alt={showDiv.text} />
          <div className="text">{showDiv.text}</div>
        </div>
        <a className="prev" onClick={this.prevCaseHandler}>
          &#10094;
        </a>
        <a className="next" onClick={this.nextCaseHandler}>
          &#10095;
        </a>
      </div>
    );
  }
}

export default CategoriesSearch;
