export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh"
  },

  logo: {
    marginRight: 15,
    padding: "0 13px",
    fontSize: 22,
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "&  a ": {
      textDecoration: "none",
      color: "black"
    }
  },

  slider: {
    width: 340,
    margin: "0 10px",
    display: "inline-block",
    "& rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& rc-slider-rail": {
      height: "10px"
    },
    "       & .rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:hover, .rc-slider-handle:active": {
      backgroundColor: "green",
      border: "2px solid green",
      outline: "none",
      boxShadow: "none",
      width: 13,
      height: 13,
      marginLeft: "-7px",
      marginTop: "-3px"
    }
  },

  selectContainer: {
    marginLeft: "auto",
    marginRight: "1.5rem"
  }
};
