import React, { Component } from 'react'
import styled from 'styled-components';
import styles from './PlayerLogo.module.scss'

const Logo = styled.div`
    animation: ${ props =>
        props.itsTurn ? "playerTurn 2s linear infinite normal forwards" : "none" }  ;

    @keyframes playerTurn {
        0% ,100% {
          -webkit-box-shadow: 0px 0px 1px 1px #2979ff;
          box-shadow: 0px 0px 1px 1px #2979ff;
        }
        40% {
          -webkit-box-shadow: 0px 0px 1px 5px #2979ff;
          box-shadow: 0px 0px 1px 5px #2979ff;
        }
      }

`

export default class PlayerLogo extends Component {
  render() {
    const {itsTurn , playerNumber} = this.props;
    return (
      <Logo className={styles.logo} itsTurn={itsTurn}>
            <div>P{playerNumber}</div>
      </Logo>
    )
  }
}
