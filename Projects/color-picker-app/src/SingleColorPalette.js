import React, { Component } from "react";
import ColorBox from "./ColorBox";

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props);

    this._shades = this.getShades(this.props.palette, this.props.colorId);
  }

  getShades(palette, colorToFilter) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilter)
      );
    }
    return shades.slice(1);
  }

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color.hex}
        showLink={false}
      ></ColorBox>
    ));
    return (
      <div className="Palette">
        <h1>Single</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
