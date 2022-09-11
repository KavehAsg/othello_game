import React, { Component } from "react";
// import styles from "./Scss/App.module.scss";
import InfoSection from "./Components/InfoSection/InfoSection";
import Playground from "./Components/Playground/Playground";

export default class App extends Component {
  render() {
    return (
      <>
        <InfoSection />
        <Playground />
      </>
    );
  }
}
