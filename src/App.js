import React, { Component } from "react";
// import styles from "./Scss/App.module.scss";
import InfoSection from "./Components/InfoSection/InfoSection";
import Playground from "./Components/Playground/Playground";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      blackTurn: true,
      purpleTurn: false,
    };
  }

  changePlayerTurn = () => {
    this.setState(prevState => ({
      blackTurn: !prevState.blackTurn,
      purpleTurn: !prevState.purpleTurn,
    }))
  }

  render() {
    const { blackTurn, purpleTurn } = this.state;

    return (
      <>
        <InfoSection blackTurn={blackTurn} purpleTurn={purpleTurn}/>
        <Playground blackTurn={blackTurn} purpleTurn={purpleTurn} turnHandler={this.changePlayerTurn}/>
      </>
    );
  }
}
