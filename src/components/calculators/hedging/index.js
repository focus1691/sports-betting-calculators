import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Box} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import TableChartIcon from "@material-ui/icons/TableChart";
import FunctionsIcon from "@material-ui/icons/Functions";
import HedgingCalculator from "./HedgingCalculator";
import HedgingTable from "./HedgingTable";
import headerStyle from "../../../jss/Header";
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({ ...headerStyle(theme) }));

const Hedging = () => {
	const classes = useStyles();
	const [mode, setMode] = useState("calculator");
	const matches = useMediaQuery('(min-width:970px)');

	const toggleMode = () => {
		if (mode === "calculator") setMode("table");
		else if (mode === "table") setMode("calculator");
	};

	return (
    <div className={clsx(classes.root, "Arbitrage")}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          className={classes.title}
          style={{ marginTop: matches && mode != "calculator" ? 100 : null }}
        >
          <Box fontSize="25px" fontWeight="bold">
            Hedging
            <IconButton
              color="inherit"
              aria-label="Toggle"
              edge="start"
              onClick={toggleMode}
            >
              {mode === "calculator" ? <TableChartIcon /> : <FunctionsIcon />}
            </IconButton>
          </Box>
        </Grid>
        {mode === "calculator" ? <HedgingCalculator /> : <HedgingTable />}
      </Grid>
    </div>
  );
};

export default Hedging;
