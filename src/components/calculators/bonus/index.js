import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TableChartIcon from "@material-ui/icons/TableChart";
import BonusCalculator from "./BonusCalculator";
import BonusTable from "./BonusTable";
import headerStyle from "../../../jss/Header";

const useStyles = makeStyles(theme => ({ ...headerStyle(theme) }));

const BonusBet = () => {
	const classes = useStyles();
	const [mode, setMode] = useState("calculator");

	const toggleMode = () => {
		if (mode === "calculator") setMode("table");
		else if (mode === "table") setMode("calculator");
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h1">
						Bonus Bet
						<IconButton color="inherit" aria-label="Toggle" edge="start" onClick={toggleMode}>
							<TableChartIcon />
						</IconButton>
					</Typography>
				</Grid>
				{mode === "calculator" ? <BonusCalculator /> : <BonusTable />}
			</Grid>
		</div>
	);
};

export default BonusBet;