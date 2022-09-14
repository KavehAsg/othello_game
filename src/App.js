import React, { Component } from "react";
// import styles from "./Scss/App.module.scss";
import InfoSection from "./Components/InfoSection/InfoSection";
import Playground from "./Components/Playground/Playground";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      playerTurn: true, // true is black turn and false is purple turn
    };
  }

  changePlayerTurn = () => {
    this.setState(prevState => ({
      playerTurn: !prevState.playerTurn,
    }))
  }

  render() {
    const { playerTurn } = this.state;

    return (
      <>
        <InfoSection playerTurn={playerTurn} />
        <Playground playerTurn={playerTurn} turnHandler={this.changePlayerTurn}/>
      </>
    );
  }
}
