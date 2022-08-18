import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const numberWords = ["one", "two", "three", "four", "five", "six"];
    return (
      <i
        onClick={this.handleClick}
        className={
          this.props.locked
            ? `Die Die-locked fas fa-dice-${
                numberWords[this.props.val - 1]
              } fa-5x`
            : `Die fas fa-dice-${numberWords[this.props.val - 1]} fa-5x`
        }
      />
    );
  }
}

export default Die;
