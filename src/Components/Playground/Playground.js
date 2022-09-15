import React, { Component } from "react";
import styles from "./Playground.module.scss";
import Nuts from "../Nuts/Nuts";

export default class Playground extends Component {
  constructor() {
    super();
    this.state = {
      nuts: this.defaultNuts,
    };
  }

  defaultNuts = [
    // default properties of Nuts
    [
      { name: "a0", color: null, empty: true, isPossible: false },
      { name: "a1", color: null, empty: true, isPossible: false },
      { name: "a2", color: null, empty: true, isPossible: false },
      { name: "a3", color: null, empty: true, isPossible: false },
      { name: "a4", color: null, empty: true, isPossible: false },
      { name: "a5", color: null, empty: true, isPossible: false },
      { name: "a6", color: null, empty: true, isPossible: false },
      { name: "a7", color: null, empty: true, isPossible: false },
    ],
    [
      { name: "b0", color: null, empty: true, isPossible: false },
      { name: "b1", color: null, empty: true, isPossible: false },
      { name: "b2", color: null, empty: true, isPossible: false },
      { name: "b3", color: null, empty: true, isPossible: false },
      { name: "b4", color: null, empty: true, isPossible: false },
      { name: "b5", color: null, empty: true, isPossible: false },
      { name: "b6", color: null, empty: true, isPossible: false },
      { name: "b7", color: null, empty: true, isPossible: false },
    ],
    [
      { name: "c0", color: null, empty: true, isPossible: false },
      { name: "c1", color: null, empty: true, isPossible: false },
      { name: "c2", color: null, empty: true, isPossible: false },
      { name: "c3", color: null, empty: true, isPossible: true },
      { name: "c4", color: null, empty: true, isPossible: false },
      { name: "c5", color: null, empty: true, isPossible: false },
      { name: "c6", color: null, empty: true, isPossible: false },
      { name: "c7", color: null, empty: true, isPossible: false },
    ],
    [
      { name: "d0", color: null, empty: true, isPossible: false },
      { name: "d1", color: null, empty: true, isPossible: false },
      { name: "d2", color: null, empty: true, isPossible: true },
      { name: "d3", color: "purple", empty: false, isPossible: false },
      { name: "d4", color: "black", empty: false, isPossible: false },
      { name: "d5", color: null, empty: true, isPossible: false },
      { name: "d6", color: null, empty: true, isPossible: false },
      { name: "d7", color: null, empty: true, isPossible: false },
    ],
    [
      { name: "e0", color: null, empty: true, isPossible: false },
      { name: "e1", color: null, empty: true, isPossible: false },
      { name: "e2", color: null, empty: true, isPossible: false },
      { name: "e3", color: "black", empty: false, isPossible: false },
      { name: "e4", color: "purple", empty: false, isPossible: false },
      { name: "e5", color: null, empty: true, isPossible: true },
      { name: "e6", color: null, empty: true, isPossible: false },
      { name: "e7", color: null, empty: true, isPossible: false },
    ],
    [
      { name: "f0", color: null, empty: true, isPossible: false },
      { name: "f1", color: null, empty: true, isPossible: false },
      { name: "f2", color: null, empty: true, isPossible: false },
      { name: "f3", color: null, empty: true, isPossible: false },
      { name: "f4", color: null, empty: true, isPossible: true },
      { name: "f5", color: null, empty: true, isPossible: false },
      { name: "f6", color: null, empty: true, isPossible: false },
      { name: "f7", color: null, empty: true, isPossible: false },
    ],
    [
      { name: "g0", color: null, empty: true, isPossible: false },
      { name: "g1", color: null, empty: true, isPossible: false },
      { name: "g2", color: null, empty: true, isPossible: false },
      { name: "g3", color: null, empty: true, isPossible: false },
      { name: "g4", color: null, empty: true, isPossible: false },
      { name: "g5", color: null, empty: true, isPossible: false },
      { name: "g6", color: null, empty: true, isPossible: false },
      { name: "g7", color: null, empty: true, isPossible: false },
    ],
    [
      { name: "h0", color: null, empty: true, isPossible: false },
      { name: "h1", color: null, empty: true, isPossible: false },
      { name: "h2", color: null, empty: true, isPossible: false },
      { name: "h3", color: null, empty: true, isPossible: false },
      { name: "h4", color: null, empty: true, isPossible: false },
      { name: "h5", color: null, empty: true, isPossible: false },
      { name: "h6", color: null, empty: true, isPossible: false },
      { name: "h7", color: null, empty: true, isPossible: false },
    ],
  ];

  orderOFRowsName = ["a", "b", "c", "d", "e", "f", "g", "h"]; // we get row index of nuts array of object with this order

  nutsClickHandler = (name, empty, isPossible, changePlayer) => {
    const { nuts } = this.state;
    let clickedColor = this.props.playerTurn ? "black" : "purple";
    let opponentColor = !this.props.playerTurn ? "black" : "purple";
    const nutRowIndex = this.orderOFRowsName.indexOf(name.split("")[0]);
    const nutColumnIndex = Number(name.split("")[1]);
    let allNutsChangedColor = [];

    let upperNutsChanged = [],
      belowNutsChanged = [],
      leftNutsChanged = [],
      rightNutsChanged = [],
      upRightNutsChanged = [],
      belowRightNutsChanged = [],
      upLeftNutsChanged = [],
      belowLeftNutsChanged = [];

    upperNutsChanged =
      nutRowIndex > 0
        ? this.changeUpperNutsColor(
            nutRowIndex,
            nutColumnIndex,
            opponentColor,
            clickedColor
          )
        : [];

    belowNutsChanged =
      nutRowIndex < 7
        ? this.changeBelowNutsColor(
            nutRowIndex,
            nutColumnIndex,
            opponentColor,
            clickedColor
          )
        : [];

    leftNutsChanged =
      nutColumnIndex > 0
        ? this.changeLeftNutsColor(
            nutRowIndex,
            nutColumnIndex,
            opponentColor,
            clickedColor
          )
        : [];

    rightNutsChanged =
      nutColumnIndex < 7
        ? this.changeRightNutsColor(
            nutRowIndex,
            nutColumnIndex,
            opponentColor,
            clickedColor
          )
        : [];

    upRightNutsChanged =
      nutColumnIndex < 7 && nutRowIndex > 0
        ? this.changeUpRightNutsColor(
            nutRowIndex,
            nutColumnIndex,
            opponentColor,
            clickedColor
          )
        : [];

    belowRightNutsChanged =
      nutColumnIndex < 7 && nutRowIndex < 7
        ? this.changeBelowRightNutsColor(
            nutRowIndex,
            nutColumnIndex,
            opponentColor,
            clickedColor
          )
        : [];

    upLeftNutsChanged =
      nutColumnIndex > 0 && nutRowIndex > 0
        ? this.changeUpLeftNutsColor(
            nutRowIndex,
            nutColumnIndex,
            opponentColor,
            clickedColor
          )
        : [];

    belowLeftNutsChanged =
      nutColumnIndex > 0 && nutRowIndex < 7
        ? this.changeBelowLeftNutsColor(
            nutRowIndex,
            nutColumnIndex,
            opponentColor,
            clickedColor
          )
        : [];

    allNutsChangedColor = [
      ...upperNutsChanged,
      ...belowNutsChanged,
      ...rightNutsChanged,
      ...leftNutsChanged,
      ...upRightNutsChanged,
      ...belowRightNutsChanged,
      ...upLeftNutsChanged,
      ...belowLeftNutsChanged,
    ];

    if (empty && isPossible && changePlayer) {
      let newNuts = [...nuts];
      for (const row of newNuts) {
        for (const nut of row) {
          nut.color = allNutsChangedColor.includes(nut.name)
            ? clickedColor
            : nut.color;
        }
      }
      newNuts[nutRowIndex][nutColumnIndex].color = clickedColor;
      newNuts[nutRowIndex][nutColumnIndex].empty = false;
      newNuts[nutRowIndex][nutColumnIndex].isPossible = false;

      this.setState({ nuts: newNuts });
      this.props.turnHandler();
      this.checkIsPossible();
    } else if (empty && !changePlayer) {
      return allNutsChangedColor;
    }
  };

  changeUpperNutsColor = (
    nutRowIndex,
    nutColumnIndex,
    opponentColor,
    clickedColor
  ) => {
    const { nuts } = this.state;
    let upperNutsChanged = []; // list of nut fields which must change color in up direction

    for (let row = nutRowIndex - 1; row >= 0; row--) {
      if (nuts[row][nutColumnIndex].color === opponentColor && row === 0) {
        upperNutsChanged = [];
        break;
      } else if (nuts[row][nutColumnIndex].color === clickedColor) {
        break;
      } else if (nuts[row][nutColumnIndex].color === opponentColor) {
        upperNutsChanged.push(nuts[row][nutColumnIndex].name);
      } else {
        upperNutsChanged = [];
        break;
      }
    }

    return upperNutsChanged;
  };

  changeBelowNutsColor = (
    nutRowIndex,
    nutColumnIndex,
    opponentColor,
    clickedColor
  ) => {
    const { nuts } = this.state;
    let belowNutsChanged = []; // list of nut fields which must change color in up direction

    for (let row = nutRowIndex + 1; row <= 7; row++) {
      if (nuts[row][nutColumnIndex].color === opponentColor && row === 7) {
        belowNutsChanged = [];
        break;
      } else if (nuts[row][nutColumnIndex].color === clickedColor) {
        break;
      } else if (nuts[row][nutColumnIndex].color === opponentColor) {
        belowNutsChanged.push(nuts[row][nutColumnIndex].name);
      } else {
        belowNutsChanged = [];
        break;
      }
    }

    return belowNutsChanged;
  };

  changeLeftNutsColor = (
    nutRowIndex,
    nutColumnIndex,
    opponentColor,
    clickedColor
  ) => {
    const { nuts } = this.state;
    let leftNutsChanged = []; // list of nut fields which must change color in up direction

    for (let column = nutColumnIndex - 1; column >= 0; column--) {
      if (nuts[nutRowIndex][column].color === opponentColor && column === 0) {
        leftNutsChanged = [];
        break;
      } else if (nuts[nutRowIndex][column].color === clickedColor) {
        break;
      } else if (nuts[nutRowIndex][column].color === opponentColor) {
        leftNutsChanged.push(nuts[nutRowIndex][column].name);
      } else {
        leftNutsChanged = [];
        break;
      }
    }

    // console.log(leftNutsChanged);
    return leftNutsChanged;
  };

  changeRightNutsColor = (
    nutRowIndex,
    nutColumnIndex,
    opponentColor,
    clickedColor
  ) => {
    const { nuts } = this.state;
    let rightNutsChanged = []; // list of nut fields which must change color in up direction

    for (let column = nutColumnIndex + 1; column <= 7; column++) {
      if (nuts[nutRowIndex][column].color === opponentColor && column === 7) {
        rightNutsChanged = [];
        break;
      } else if (nuts[nutRowIndex][column].color === clickedColor) {
        break;
      } else if (nuts[nutRowIndex][column].color === opponentColor) {
        rightNutsChanged.push(nuts[nutRowIndex][column].name);
      } else {
        rightNutsChanged = [];
        break;
      }
    }

    return rightNutsChanged;
  };

  changeUpRightNutsColor = (
    nutRowIndex,
    nutColumnIndex,
    opponentColor,
    clickedColor
  ) => {
    const { nuts } = this.state;
    let upRightNutsChanged = []; // list of nut fields which must change color in up direction
    let row = nutRowIndex - 1,
      column = nutColumnIndex + 1;
    while (row >= 0 && column <= 7) {
      if (
        nuts[row][column].color === opponentColor &&
        (row === 0 || column === 7)
      ) {
        upRightNutsChanged = [];
        break;
      } else if (nuts[row][column].color === clickedColor) {
        break;
      } else if (nuts[row][column].color === opponentColor) {
        upRightNutsChanged.push(nuts[row][column].name);
      } else {
        upRightNutsChanged = [];
        break;
      }

      row--;
      column++;
    }

    return upRightNutsChanged;
  };

  changeBelowRightNutsColor = (
    nutRowIndex,
    nutColumnIndex,
    opponentColor,
    clickedColor
  ) => {
    const { nuts } = this.state;
    let belowRightNutsChanged = []; // list of nut fields which must change color in below direction
    let row = nutRowIndex + 1,
      column = nutColumnIndex + 1;
    while (row <= 7 && column <= 7) {
      if (
        nuts[row][column].color === opponentColor &&
        (row === 7 || column === 7)
      ) {
        belowRightNutsChanged = [];
        break;
      } else if (nuts[row][column].color === clickedColor) {
        break;
      } else if (nuts[row][column].color === opponentColor) {
        belowRightNutsChanged.push(nuts[row][column].name);
      } else {
        belowRightNutsChanged = [];
        break;
      }

      row++;
      column++;
    }

    return belowRightNutsChanged;
  };

  changeUpLeftNutsColor = (
    nutRowIndex,
    nutColumnIndex,
    opponentColor,
    clickedColor
  ) => {
    const { nuts } = this.state;
    let upLeftNutsChanged = []; // list of nut fields which must change color in up direction
    let row = nutRowIndex - 1,
      column = nutColumnIndex - 1;
    while (row >= 0 && column >= 0) {
      if (
        nuts[row][column].color === opponentColor &&
        (row === 0 || column === 0)
      ) {
        upLeftNutsChanged = [];
        break;
      } else if (nuts[row][column].color === clickedColor) {
        break;
      } else if (nuts[row][column].color === opponentColor) {
        upLeftNutsChanged.push(nuts[row][column].name);
      } else {
        upLeftNutsChanged = [];
        break;
      }
      row--;
      column--;
    }

    return upLeftNutsChanged;
  };

  changeBelowLeftNutsColor = (
    nutRowIndex,
    nutColumnIndex,
    opponentColor,
    clickedColor
  ) => {
    const { nuts } = this.state;
    let belowLeftNutsChanged = []; // list of nut fields which must change color in up direction
    let row = nutRowIndex + 1,
      column = nutColumnIndex - 1;
    while (row <= 7 && column >= 0) {
      if (
        nuts[row][column].color === opponentColor &&
        (row === 7 || column === 0)
      ) {
        belowLeftNutsChanged = [];
        break;
      } else if (nuts[row][column].color === clickedColor) {
        break;
      } else if (nuts[row][column].color === opponentColor) {
        belowLeftNutsChanged.push(nuts[row][column].name);
      } else {
        belowLeftNutsChanged = [];
        break;
      }

      row++;
      column--;
    }

    return belowLeftNutsChanged;
  };

  checkIsPossible = () => {
    let newNuts = [...this.state.nuts];
    console.log(this.props.playerTurn);
    for (const row of newNuts) {
      for (const nut of row) {
        if (nut.empty) {
          let possibleNuts = this.nutsClickHandler(
            nut.name,
            nut.empty,
            nut.isPossible,
            false
          );
          nut.isPossible = possibleNuts.length > 0 ? true : false;
        }
      }
    }

    this.setState({
      nuts: newNuts,
    });
    console.log(this.props.playerTurn);
  };

  render() {
    const {
      nuts: [row1, row2, row3, row4, row5, row6, row7, row8],
    } = this.state;
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
              handler={this.nutsClickHandler}
            />
          ))}

          {row2.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={this.nutsClickHandler}
            />
          ))}

          {row3.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={this.nutsClickHandler}
            />
          ))}

          {row4.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={this.nutsClickHandler}
            />
          ))}

          {row5.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={this.nutsClickHandler}
            />
          ))}

          {row6.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={this.nutsClickHandler}
            />
          ))}

          {row7.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={this.nutsClickHandler}
            />
          ))}

          {row8.map((item) => (
            <Nuts
              key={item.name}
              color={item.color}
              empty={item.empty}
              isPossible={item.isPossible}
              name={item.name}
              handler={this.nutsClickHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}
