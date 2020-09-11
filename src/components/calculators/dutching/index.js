import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TableChartIcon from "@material-ui/icons/TableChart";
import FunctionsIcon from "@material-ui/icons/Functions";
import DutchingCalculator from "./DutchingCalculator";
import DutchingTable from "./DutchingTable";
import headerStyle from "../../../jss/Header";
import clsx from 'clsx';
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({ ...headerStyle(theme) }));

const Dutching = () => {
	const classes = useStyles();
	const [mode, setMode] = useState("calculator");

	const toggleMode = () => {
		if (mode === "calculator") setMode("table");
		else if (mode === "table") setMode("calculator");
	};

	return (
		<div className={clsx (classes.root,"Arbitrage" )}>
			<Box mt={11}> </Box>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.title}>
					<Box fontSize="25px" fontWeight="bold">
						Dutching
						<IconButton color="inherit" aria-label="Toggle" edge="start" onClick={toggleMode}>
							{mode === "calculator" ? <TableChartIcon /> : <FunctionsIcon />}
						</IconButton>
					</Box>
				</Grid>
				{mode === "calculator" ? <DutchingCalculator /> : <DutchingTable />}
			</Grid>
		</div>
	);
};

export default Dutching;