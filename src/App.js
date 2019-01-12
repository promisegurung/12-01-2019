import React, { Component } from "react";

import Header from "./header/header";
import Actions from "./actions/actions";
import View from "./view/view";
import Footer from "./footer/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Actions/>
        <View />
        <Footer />
      </div>
    );
  }
}

export default App;