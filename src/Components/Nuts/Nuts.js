import React, { Component } from 'react';
import styles from './Nuts.module.scss';
import styled from 'styled-components';

const Nut = styled.div`
    background: ${ props => 
    props.color === "black" && props.empty === false ? "#212121" : "#ba68c8" }
`

export default class Nuts extends Component {
  render() {
    return (
      <div className={styles.nutField}>
            <Nut className={styles.nut}/>
      </div>
    )
  }
}
