import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { isValidInput, isInputsValid } from "../../utils/sanitiser/NumberSanitiser";
import { calculateArb } from "../../utils/calculators/Arbitrage";

const useStyles = makeStyles(theme => ({
	root: {
		margin: "auto",
		maxWidth: "60%",
		border: "1px solid #e6e6e6",
		padding: theme.spacing(1)
	},
	title: {
		background: "#000",
		color: "#fff"
    },
    selection: {
        padding: theme.spacing(1)
    },
	button: {
		margin: theme.spacing(1),
		background: "#1573ca",
		"&:hover": {
			background: "#0d508d"
		}
	}
}));

export default function Dutching() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
                <Grid item xs={12} className={classes.title}>
					<Typography variant="h1">Dutching</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField required label="Selection 1" className={classes.selection} />
                    <TextField required label="Selection 2" className={classes.selection} />
                    <TextField required label="Selection 3" className={classes.selection} />
                    <TextField required label="Selection 4" className={classes.selection} />
                    <TextField required label="Selection 5" className={classes.selection} />
					<TextField required label="Selection 6" className={classes.selection} />
                    <TextField required label="Selection 7" className={classes.selection} />
                    <TextField required label="Selection 8" className={classes.selection} />
                    <TextField required label="Selection 9" className={classes.selection} />
                    <TextField required label="Selection 10" className={classes.selection} />
                    <TextField required label="Selection 11" className={classes.selection} />
                    <TextField required label="Selection 12" className={classes.selection} />
				</Grid>
                <Grid item xs={12}>
                    <TextField required label="Stake" className={classes.selection} />
                </Grid>
                <Grid item xs={12}>
                    <TextField required disabled label="Net Profit" className={classes.selection} />
                </Grid>
                <Grid item xs={12}>
                    <TextField required disabled label="Gross Profit" className={classes.selection} />
                </Grid>
			</Grid>
		</div>
	);
}