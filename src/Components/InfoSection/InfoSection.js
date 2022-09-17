import React, { Component } from "react";
import PlayerProfile from "../PlayerProfile/PlayerProfile";
import styles from "./InfoSection.module.scss";
import Button from "../Button/Button";

export default class InfoSection extends Component {


  render() {
    const { playerTurn , resetHandler , blackNumber , purpleNumber} = this.props;
    return (
      <div className={styles.infoSection}>
        <div className={styles.logoContainer}>
          <PlayerProfile itsTurn={playerTurn} playerNumber={1} pieceCount={blackNumber} />
          <PlayerProfile itsTurn={!playerTurn} playerNumber={2} pieceCount={purpleNumber} />
        </div>

        <Button text="reset" handler={resetHandler}/>

      </div>
    );
  }
}
