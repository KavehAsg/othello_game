import React, { Component } from "react";
import styles from './Playground.module.scss';
import Nuts from "../Nuts/Nuts";

export default class Playground extends Component {

  constructor(){
    super();
    this.state = {
      nuts: this.nuts ,
    }
  }

  nuts = [ // default properties of Nuts
  [
    { name: "a1", color: null, empty: true, isPossible: false },
    { name: "a2", color: null, empty: true, isPossible: false },
    { name: "a3", color: null, empty: true, isPossible: false },
    { name: "a4", color: null, empty: true, isPossible: false },
    { name: "a5", color: null, empty: true, isPossible: false },
    { name: "a6", color: null, empty: true, isPossible: false },
    { name: "a7", color: null, empty: true, isPossible: false },
    { name: "a8", color: null, empty: true, isPossible: false },
  ],
  [
    { name: "b1", color: null, empty: true, isPossible: false },
    { name: "b2", color: null, empty: true, isPossible: false },
    { name: "b3", color: null, empty: true, isPossible: false },
    { name: "b4", color: null, empty: true, isPossible: false },
    { name: "b5", color: null, empty: true, isPossible: false },
    { name: "b6", color: null, empty: true, isPossible: false },
    { name: "b7", color: null, empty: true, isPossible: false },
    { name: "b8", color: null, empty: true, isPossible: false },
  ],
  [
    { name: "c1", color: null, empty: true, isPossible: false },
    { name: "c2", color: null, empty: true, isPossible: false },
    { name: "c3", color: null, empty: true, isPossible: false },
    { name: "c4", color: null, empty: true, isPossible: false },
    { name: "c5", color: null, empty: true, isPossible: false },
    { name: "c6", color: null, empty: true, isPossible: false },
    { name: "c7", color: null, empty: true, isPossible: false },
    { name: "c8", color: null, empty: true, isPossible: false },
  ],
  [
    { name: "d1", color: null, empty: true, isPossible: false },
    { name: "d2", color: null, empty: true, isPossible: false },
    { name: "d3", color: null, empty: true, isPossible: false },
    { name: "d4", color: "purple", empty: false, isPossible: false },
    { name: "d5", color: "black", empty: false, isPossible: false },
    { name: "d6", color: null, empty: true, isPossible: false },
    { name: "d7", color: null, empty: true, isPossible: false },
    { name: "d8", color: null, empty: true, isPossible: false },
  ],
  [
    { name: "e1", color: null, empty: true, isPossible: false },
    { name: "e2", color: null, empty: true, isPossible: false },
    { name: "e3", color: null, empty: true, isPossible: false },
    { name: "e4", color: "black", empty: false, isPossible: false },
    { name: "e5", color: "purple", empty: false, isPossible: false },
    { name: "e6", color: null, empty: true, isPossible: false },
    { name: "e7", color: null, empty: true, isPossible: false },
    { name: "e8", color: null, empty: true, isPossible: false },
  ],
  [
    { name: "f1", color: null, empty: true, isPossible: false },
    { name: "f2", color: null, empty: true, isPossible: false },
    { name: "f3", color: null, empty: true, isPossible: false },
    { name: "f4", color: null, empty: true, isPossible: false },
    { name: "f5", color: null, empty: true, isPossible: false },
    { name: "f6", color: null, empty: true, isPossible: false },
    { name: "f7", color: null, empty: true, isPossible: false },
    { name: "f8", color: null, empty: true, isPossible: false },
  ],
  [
    { name: "g1", color: null, empty: true, isPossible: false },
    { name: "g2", color: null, empty: true, isPossible: false },
    { name: "g3", color: null, empty: true, isPossible: false },
    { name: "g4", color: null, empty: true, isPossible: false },
    { name: "g5", color: null, empty: true, isPossible: false },
    { name: "g6", color: null, empty: true, isPossible: false },
    { name: "g7", color: null, empty: true, isPossible: false },
    { name: "g8", color: null, empty: true, isPossible: false },
  ],
  [
    { name: "h1", color: null, empty: true, isPossible: false },
    { name: "h2", color: null, empty: true, isPossible: false },
    { name: "h3", color: null, empty: true, isPossible: false },
    { name: "h4", color: null, empty: true, isPossible: false },
    { name: "h5", color: null, empty: true, isPossible: false },
    { name: "h6", color: null, empty: true, isPossible: false },
    { name: "h7", color: null, empty: true, isPossible: false },
    { name: "h8", color: null, empty: true, isPossible: false },
  ],
];

  nutsClickHandler = (name , color , empty , isPossible) => {
    if(!empty && isPossible){
      this.props.turnHandler();
    }
  } 

  // componentDidUpdate(){
  //   const {nuts:[column1 , column2 , column3 , column4 , column5 , column6 , column7 , column8]} = this.state;

  // }

  render() {
    const {nuts:[column1 , column2 , column3 , column4 , column5 , column6 , column7 , column8]} = this.state;
    return (
        <div className={styles.playground}>
          <div className={styles.field}>
            {column1.map(item => <Nuts key={item.name} color={item.color} empty={item.empty} isPossible={item.isPossible} name={item.name} handler={this.nutsClickHandler}/>)}
            {column2.map(item => <Nuts key={item.name} color={item.color} empty={item.empty} isPossible={item.isPossible} name={item.name} handler={this.nutsClickHandler}/>)}
            {column3.map(item => <Nuts key={item.name} color={item.color} empty={item.empty} isPossible={item.isPossible} name={item.name} handler={this.nutsClickHandler}/>)}
            {column4.map(item => <Nuts key={item.name} color={item.color} empty={item.empty} isPossible={item.isPossible} name={item.name} handler={this.nutsClickHandler}/>)}
            {column5.map(item => <Nuts key={item.name} color={item.color} empty={item.empty} isPossible={item.isPossible} name={item.name} handler={this.nutsClickHandler}/>)}
            {column6.map(item => <Nuts key={item.name} color={item.color} empty={item.empty} isPossible={item.isPossible} name={item.name} handler={this.nutsClickHandler}/>)}
            {column7.map(item => <Nuts key={item.name} color={item.color} empty={item.empty} isPossible={item.isPossible} name={item.name} handler={this.nutsClickHandler}/>)}
            {column8.map(item => <Nuts key={item.name} color={item.color} empty={item.empty} isPossible={item.isPossible} name={item.name} handler={this.nutsClickHandler}/>)}
          </div>
        </div>
    );
  }
}
