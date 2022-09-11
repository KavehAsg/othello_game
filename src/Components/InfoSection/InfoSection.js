import React, { Component } from "react";
import PlayerLogo from "../PlayerLogo/PlayerLogo";
import styles from "./InfoSection.module.scss";

export default class InfoSection extends Component {
  constructor() {
    super();

    this.state = {
      blackTurn: true,
      whiteTurn: false,
    };
  }

  render() {
    const { blackTurn, whiteTurn } = this.state;
    return (
      <div className={styles.infoSection}>
        <div className={styles.logoContainer}>
          <PlayerLogo itsTurn={blackTurn} playerNumber={1} />
          <PlayerLogo itsTurn={whiteTurn} playerNumber={2} />
        </div>
      </div>
    );
  }
}
