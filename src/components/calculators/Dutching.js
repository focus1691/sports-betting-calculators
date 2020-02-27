import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { isValidInput, isInputsValid } from "../../utils/sanitiser/NumberSanitiser";
import { calcHedge } from "../../utils/calculators/Hedging";

const useStyles = makeStyles(theme => ({
	root: {
		margin: "auto",
		maxWidth: "90%",
		border: "1px solid #e6e6e6",
		padding: theme.spacing(1)
	},
	container: {
		border: "1px solid #000",
		backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)"
	},
	title: {
		background: "#000",
		color: "#fff"
	},
	selection: {
		padding: theme.spacing(1)
	},
	result: {
		margin: theme.spacing(1),
		background: "#FFF",
		border: "1px solid"
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

	const renderResults = () => {
		calcHedge;
		return (
			<>
				<Grid item xs={2}>
					<TextField required label="Stake" className={classes.selection} />
				</Grid>
				<Grid item xs={2}>
					<TextField disabled label="Net Profit" className={classes.result} />
				</Grid>
				<Grid item xs={2}>
					<TextField disabled label="Gross Profit" className={classes.result} />
				</Grid>
			</>
		);
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h1">Dutching</Typography>
				</Grid>
				<Grid container className={classes.container}>
					<Grid item xs={2}>
						<TextField required label="Selection 1 odds" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>
					<Grid item xs={2}>
						<TextField label="Selection 2" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>
					<Grid item xs={2}>
						<TextField label="Selection 3" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>

					<Grid item xs={2}>
						<TextField label="Selection 4" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>
					<Grid item xs={2}>
						<TextField label="Selection 5" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>
					<Grid item xs={2}>
						<TextField label="Selection 6" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>

					<Grid item xs={2}>
						<TextField label="Selection 7" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>
					<Grid item xs={2}>
						<TextField label="Selection 8" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>
					<Grid item xs={2}>
						<TextField label="Selection 9" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>

					<Grid item xs={2}>
						<TextField label="Selection 10" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>
					<Grid item xs={2}>
						<TextField label="Selection 11" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>
					<Grid item xs={2}>
						<TextField label="Selection 12" className={classes.selection} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} />
					</Grid>
					{}
				</Grid>
			</Grid>
		</div>
	);
}
