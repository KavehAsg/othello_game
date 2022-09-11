import React, { Component } from 'react';
import styles from './Button.module.scss'

export default class Button extends Component {
  render() {
    const {text , handler} = this.props;
    return (
      <div className={styles.btn} onClick={handler}>{text}</div>
    )
  }
}
