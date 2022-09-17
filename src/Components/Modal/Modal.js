import React, { Component } from "react";
import "./Modal.scss";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";


export default class Modal extends Component {
  render() {
    const { show , handler , text , resetHandler} = this.props;

    return ReactDOM.createPortal(
      <CSSTransition in={show} unmountOnExit timeout={{enter: 50 , exit: 300}}>
        <div className='modal' onClick={() => handler(false) }>
          <div className='modalContainer' onClick={ e => e.stopPropagation()}>
            <p>{text}</p>
            <button onClick={() => {
              handler(false);
              resetHandler();
            }}>reset</button>
          </div>
        </div>
      </CSSTransition>,
      document.getElementById("modal")
    );
  }
}
