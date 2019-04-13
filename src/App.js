import React, { Component } from "react";
import "./App.css";
import PotentialDateTemplate from "./browse/PotentialDateProfiles";
import ProfileFormTemplate from "./profile/ProfileFormTemplate";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ProfileFormTemplate /> */}
        <PotentialDateTemplate />
      </div>
    );
  }
}

export default App;
