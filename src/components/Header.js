import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";
import ClearIcon from "@material-ui/icons/Clear";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    marginLeft: drawerWidth,
    zIndex: 150,
    position: "fixed",
    backgroundColor: "#a6812f",
  },
  logoContainer: {
    width: "8%",
    filter: "brightness(0%)",
  },
  [theme.breakpoints.only("sm")]: {
    logoContainer: {
      width: "13%",
      filter: "brightness(0%)",
    },
  },
  [theme.breakpoints.only("xs")]: {
    logoContainer: {
      width: "13%",
      filter: "brightness(0%)",
    },
  },
  logo: {
    width: "100%",
    margin: "10px",
    padding: "0px",
    position: "relative",
    overflow: "hidden",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(true);
  const matches = useMediaQuery('(min-width:601px)');

  const sideBar = () => {
    setValue(!value);
  };
  props.onChange(value);
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.logoContainer}>
            <img
              src={window.location.origin + "/logo3.png"}
              alt="Top Bet Calculator"
              className={classes.logo}
            />
          </div>
          <Box
            textAlign="center"
            className="title-header"
            fontSize="33px"
            fontWeight="bold"
            marginLeft="auto"
            marginRight="auto"
            color="#ffffff"
          >
            Sport Betting Calculators
          </Box>

          {/* <Hidden lgUp xlUp mdUp > */}
          <IconButton onClick={sideBar}>
            {matches ? null : !value ? <ClearIcon /> : <DehazeIcon />}
          </IconButton>
          {/* </Hidden>  */}
        </Toolbar>
      </AppBar>
    </>
  );
}
