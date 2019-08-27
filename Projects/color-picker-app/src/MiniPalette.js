import React from "react";
import { makeStyles, withStyles, withTheme } from "@material-ui/styles";

const css = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },

  emoji: {
    margindLeft: ".5rem",
    fontSize: "1rem"
  },
  miniBoxes: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px"
  }
};
function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniBoxes = colors.map(color => (
    <div
      className={classes.miniBoxes}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{miniBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(css)(MiniPalette);
