import React, { Component } from "react";
import styled from "styled-components";
import styles from "./PlayerProfile.module.scss";

const Logo = styled.div`
  animation: ${(props) =>
    props.itsTurn ? "playerTurn 2s linear infinite normal forwards" : "none"};
    // set animation for each player on their turns

  color: ${(props) => (props.playerNumber === 1 ? "#212121" : "#ba68c8")};
  // set color based on nuts status

  @keyframes playerTurn {
    40% {
      -webkit-box-shadow: 0px 0px 1px 4px #2979ff;
      box-shadow: 0px 0px 1px 4px #2979ff;
    }
    0%,
    100% {
      -webkit-box-shadow: 0px 0px 2px 1px #2979ff;
      box-shadow: 0px 0px 2px 1px #2979ff;
    }
  }
`;

const Counter = styled.div`
  color: ${(props) => (props.playerNumber === 1 ? "#212121" : "#ba68c8")};
`;

export default class PlayerProfile extends Component {
  render() {
    const { itsTurn, playerNumber, pieceCount } = this.props;
    // itsTurn shows us each color turn
    // player number get P1 or P2
    // pieceCount is the number of color nuts in the field to show in Counter
    return (
      <div className={styles.container}>

        <Logo className={styles.logo} itsTurn={itsTurn} playerNumber={playerNumber}>
          <div>P{playerNumber}</div>
        </Logo>

        <Counter className={styles.counter} playerNumber={playerNumber}>
          {pieceCount}
        </Counter>
        
      </div>
    );
  }
}
