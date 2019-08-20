import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { makeStyles, withStyles, withTheme } from "@material-ui/styles";

const css = {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white"
  },
  palette: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palette}>
            <MiniPalette />
            {palettes.map(p => (
              <MiniPalette {...p} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(css)(PaletteList);
