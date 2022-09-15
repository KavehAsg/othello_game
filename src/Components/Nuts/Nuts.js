import React, { Component } from "react";
import styles from "./Nuts.module.scss";
import styled from "styled-components";

const Nut = styled.div`
  background: ${(props) =>
    (props.color === "black" && "#212121") ||
    (props.color === "purple" && "#ba68c8") ||
    (props.isPossible && "#2979ff")};

  width: ${(props) => (props.isPossible ? "30%" : "60%")};
  height: ${(props) => (props.isPossible ? "30%" : "60%")};

  opacity: ${(props) => (props.isPossible ? "0.5" : "1")};
`;

export default class Nuts extends Component {

  render() {
    const { handler , name , empty, isPossible } = this.props;
    return (
      <div
        className={styles.nutField}
        onClick={() => handler(name , empty, isPossible , true)}
      >
        <Nut className={styles.nut} {...this.props} />
      </div>
    );
  }
}
