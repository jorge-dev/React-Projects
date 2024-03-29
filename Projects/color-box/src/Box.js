import React, { Component } from "react";
import { choice } from "./helper";
import "./Box.css";

export class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: choice(this.props.colors)
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.pickColor();
  }

  pickColor() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Box;
