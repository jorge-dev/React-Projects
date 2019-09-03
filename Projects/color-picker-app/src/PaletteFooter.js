import React from "react";
import styles from "./Styles/PaletteFooterStyles";
import { withStyles } from "@material-ui/core";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}
export default withStyles(styles)(PaletteFooter);
