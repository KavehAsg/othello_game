import React, { Component } from "react";
import styles from "./Playground.module.scss";
import Nuts from "../Nuts/Nuts";

export default class Playground extends Component {

  render() {
    const {
      nuts: [row1, row2, row3, row4, row5, row6, row7, row8],
    } = this.props;
    const {nutsClickHandler} = this.props;
    return (
      <div className={styles.playground}>
        <div className={styles.field}>
          {row1.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={nutsClickHandler}
            />
          ))}

          {row2.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={nutsClickHandler}
            />
          ))}

          {row3.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={nutsClickHandler}
            />
          ))}

          {row4.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={nutsClickHandler}
            />
          ))}

          {row5.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={nutsClickHandler}
            />
          ))}

          {row6.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={nutsClickHandler}
            />
          ))}

          {row7.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={nutsClickHandler}
            />
          ))}

          {row8.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={nutsClickHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}
