import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./Styles/MiniPaletteStyles";

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

export default withStyles(styles)(MiniPalette);
