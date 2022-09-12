import React, { Component } from "react";
import styles from './Playground.module.scss';
import Nuts from "../Nuts/Nuts";

export default class Playground extends Component {
  render() {
    return (
        <div className={styles.playground}>
          <div className={styles.field}>
            <Nuts />
          </div>
        </div>
    );
  }
}
