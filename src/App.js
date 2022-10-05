import React, { Component } from "react";
import InfoSection from "./Components/InfoSection/InfoSection";
import Playground from "./Components/Playground/Playground";
import Modal from "./Components/Modal/Modal";
import cloneDeep from "lodash/cloneDeep";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      nuts: cloneDeep(this.defaultNuts),
      playerTurn: true, // true is black turn and false is purple turn
      blackNumber: 2, // number of each color nuts
      purpleNumber: 2,
      showModal: false, // state to handle modal
      modalText: "",
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

  endOfPossibilities = false; 
  // Boolean to detect all possiPossibilities for two colors have ended
  

  changePlayerTurn = () => { // function to change player turn after each play or no possiblity to move
    this.setState(
      (prevState) => ({
        playerTurn: !prevState.playerTurn,
      }),
      () => {
        this.checkIsPossible();
        this.countNuts();
      }
    );
  };

  resetHandler = () => { // reset button handler
    let newData = cloneDeep(this.defaultNuts);
    console.log(newData);
    this.setState(
      {
        playerTurn: true,
        blackNumber: 2,
        purpleNumber: 2,
        nuts: [...newData],
      },
      () => {
        console.log(this.state.nuts);
      }
    );
  };

  modalHandler = (open) => {
    this.setState({
      showModal: open,
    });
  };

  countNuts = () => { // function to count number of each color nuts and show in profile section
    let blackCounter = 0,
      purpleCounter = 0,
      nutCounter = 0,
      possibleCounter = 0;
    for (const row of this.state.nuts) {
      for (const item of row) {
        switch (item.color) {
          case "black":
            blackCounter++;
            break;
          case "purple":
            purpleCounter++;
            break;
          default:
            break;
        }
        !item.empty && nutCounter++;
        item.isPossible && possibleCounter++;
      }
    }

    this.setState(
      {
        blackNumber: blackCounter,
        purpleNumber: purpleCounter,
      },
      () => {
        if (nutCounter === 64) this.showWinner(); // if there is no empty space that means game has ended and winner fuction runs 
        else if (possibleCounter === 0) {
          if (this.endOfPossibilities) this.showWinner(); // if there were not any possible for each color game is done
          else {
            this.endOfPossibilities = true;
            this.changePlayerTurn();
          }
        } else if (possibleCounter > 0) this.endOfPossibilities = false;
        // here we set true to endOfPossibilities after detection no Possibilities so if the next
        // color has no move neither game would end but if it has endOfPossibilities set to false again
      }
    );
  };

  showWinner = () => {
    const { blackNumber, purpleNumber } = this.state;
    if (blackNumber > purpleNumber)
      this.setState({ modalText: "Black is Winner" });
    else if (blackNumber < purpleNumber)
      this.setState({ modalText: "Purple is Winner" });
    else this.setState({ modalText: "Game isDraw" });

    this.modalHandler(true);
  };

  findEffectedNuts = (name) => { 
    // with this function we find any nuts which can be effected by player moves 
    // we use the result to change colors after the move and ahow guids to player
    let clickedColor = this.state.playerTurn ? "black" : "purple";
    let opponentColor = !this.state.playerTurn ? "black" : "purple";
    const nutRowIndex = this.orderOFRowsName.indexOf(name.split("")[0]);
    const nutColumnIndex = Number(name.split("")[1]);
    // getting number of row and column 

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

    return allNutsChangedColor;
  };

  nutsClickHandler = (name, empty, isPossible) => {
    // if conditions are true , we get effected nuts by played move
    // and change their states with a loop based on the findEffectedNuts function output
    if ((empty, isPossible)) {
      let clickedColor = this.state.playerTurn ? "black" : "purple";
      const nutRowIndex = this.orderOFRowsName.indexOf(name.split("")[0]);
      const nutColumnIndex = Number(name.split("")[1]);

      let result = this.findEffectedNuts(name, nutRowIndex, nutColumnIndex);
      let newNuts = [...this.state.nuts];
      for (const row of newNuts) {
        for (const nut of row) {
          nut.color = result.includes(nut.name) ? clickedColor : nut.color;
        }
      }
      newNuts[nutRowIndex][nutColumnIndex].color = clickedColor;
      newNuts[nutRowIndex][nutColumnIndex].empty = false;
      newNuts[nutRowIndex][nutColumnIndex].isPossible = false;

      this.setState({
        nuts: [...newNuts],
      });

      this.changePlayerTurn();
    }
  };


  // these functions find possible effected nuts in 8 directions
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
    // find possible moves for each player and set item.isPossible to true
    // this action leads to show a guid circle in the nut field
    let newNuts = [...this.state.nuts];
    for (const row of newNuts) {
      for (const nut of row) {
        if (nut.empty) {
          let possibleNuts = this.findEffectedNuts(nut.name);
          nut.isPossible = possibleNuts.length > 0 ? true : false;
        }
      }
    }

    this.setState({
      nuts: [...newNuts],
    });
  };

  render() {
    const {
      playerTurn,
      nuts,
      blackNumber,
      purpleNumber,
      showModal,
      modalText,
    } = this.state;

    return (
      <>
        <InfoSection
          playerTurn={playerTurn}
          resetHandler={this.resetHandler}
          blackNumber={blackNumber}
          purpleNumber={purpleNumber}
        />
        <Playground
          playerTurn={playerTurn}
          nuts={nuts}
          nutsClickHandler={this.nutsClickHandler}
        />
        <Modal show={showModal} handler={this.modalHandler} text={modalText} resetHandler={this.resetHandler}/>
      </>
    );
  }
}
//test1