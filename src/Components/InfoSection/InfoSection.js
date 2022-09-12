import React, { Component } from "react";
import PlayerProfile from "../PlayerProfile/PlayerProfile";
import styles from "./InfoSection.module.scss";
import Button from "../Button/Button";

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
          <PlayerProfile itsTurn={blackTurn} playerNumber={1} pieceCount={25} />
          <PlayerProfile itsTurn={whiteTurn} playerNumber={2} pieceCount={17}/>
        </div>

        <Button text="reset"/>

      </div>
    );
  }
}
