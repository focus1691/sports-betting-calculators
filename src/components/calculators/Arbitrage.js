import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { reducer, initialState } from "../../reducers/layReducer";
import { Paper } from "@material-ui/core";
// import overLay from "../utils/calculators/LayBet/over";
// import standardLay from "../utils/calculators/LayBet/standard";
// import underLay from "../utils/calculators/LayBet/under";

const useStyles = makeStyles(theme => ({
	root: {
		margin: "auto",
		maxWidth: "50%",
		backgroundColor: theme.palette.background,
		color: "yellow",
		border: "1px solid #e6e6e6",
		padding: theme.spacing(1)
	},
	button: {
		margin: theme.spacing(1)
	},
	result: {
		margin: theme.spacing(2)
	},
	resultSection: {
		margin: theme.spacing(4)
	},
	resultTitle: {
		textDecoration: "underline",
		textAlign: "center"
	}
}));

export default function Arbitrage() {
	const classes = useStyles();
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className={classes.root}>
			<Grid container xs={12} spacing={3}>
				<Grid item xs={4}>
					<TextField required label="Bet Stake" />
				</Grid>
				<Grid item xs={4}>
					<TextField required label="Back Odds" />
					<TextField required label="Lay Odds" />
				</Grid>
				<Grid item xs={4}>
					<TextField required label="Back Commission" />
					<TextField required label="Lay Commission" />
				</Grid>
				<Grid item xs={12}>
					<Button variant="contained" color="primary" className={classes.button}>
						Calculate
					</Button>
					<Button variant="contained" color="primary" className={classes.button}>
						Clear
					</Button>
				</Grid>
			</Grid>
			<Divider variant="middle" />
			<div className={classes.resultSection}>
				<Grid container xs={12} spacing={3}>
					<Grid xs={4}>
						<Paper className={classes.result}>
							<Typography className={classes.resultTitle} variant="h6">UNDER LAY</Typography>
							<Typography>{`lay ${5.52} at odds ${2}`}</Typography>
							<Typography>{`Liability is 39.54`}</Typography>
							<Typography>{`Overall position if win 0.00`}</Typography>
							<Typography>{`Overall position if lose -0.49`}</Typography>
						</Paper>
					</Grid>
					<Grid xs={4}>
						<Paper className={classes.result}>
							<Typography className={classes.resultTitle} variant="h6">STANDARD LAY</Typography>
							<Typography>{`lay ${5.52} at odds ${2}`}</Typography>
							<Typography>{`Liability is 39.54`}</Typography>
							<Typography>{`Overall position if win 0.00`}</Typography>
							<Typography>{`Overall position if lose -0.49`}</Typography>
						</Paper>
					</Grid>
					<Grid xs={4}>
					<Paper className={classes.result}>
							<Typography className={classes.resultTitle} variant="h6">OVER LAY</Typography>
							<Typography>{`lay ${5.52} at odds ${2}`}</Typography>
							<Typography>{`Liability is 39.54`}</Typography>
							<Typography>{`Overall position if win 0.00`}</Typography>
							<Typography>{`Overall position if lose -0.49`}</Typography>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
