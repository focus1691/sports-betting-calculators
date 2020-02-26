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
	button: {
		margin: theme.spacing(1),
		background: "#1573ca",
		'&:hover': {
			background: "#0d508d"
		}
	},
	resultField: {
		margin: theme.spacing(1),
		background: "#f3f3f3",
		border: "1px solid #ffeabc",
		padding: theme.spacing(1)
	}
}));

export default function Arbitrage() {
	const classes = useStyles();
	const [betOne, setBetOne] = useState("");
	const [betTwo, setBetTwo] = useState("");
	const [stake, setStake] = useState("");
	const [arb, setArb] = useState(undefined);

	const handleCalculate = () => e => {
		if (isInputsValid([betOne, betTwo, stake])) {
			let calculatedArb = calculateArb(stake, betOne, betTwo, 2);
			setArb(calculatedArb);
		} else {
			if (!isValidInput(betOne)) setBetOne("");
			if (!isValidInput(betTwo)) setBetTwo("");
			if (!isValidInput(stake)) setStake("");
			setArb(undefined);
		}
	};

	const handleClear = () => e => {
		setBetOne("");
		setBetTwo("");
		setStake("");
		setArb(undefined);
	};

	const renderResults = () => {
		const { stake1, stake2, payout1, payout2, totalPayout, profit, roi } = arb;
		return (
			<>
				<Grid item xs={4}>
					<TextField disabled label={`stake ${stake1}`} className={classes.resultField} />
					<TextField disabled label={`payout ${payout1}`} className={classes.resultField} />
				</Grid>
				<Grid item xs={4}>
					<TextField disabled label={`stake ${stake2}`} className={classes.resultField} />
					<TextField disabled label={`payout ${payout2}`} className={classes.resultField} />
				</Grid>
				<Grid item xs={4}>
					<TextField disabled label={`Total Payout ${totalPayout}`} className={classes.resultField} />
					<TextField disabled label={`Profit ${profit}`} className={classes.resultField} />
					<TextField disabled label={`ROI ${roi}`} className={classes.resultField} />
				</Grid>
			</>
		);
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h1">Arbitrage</Typography>
				</Grid>
				<Grid item xs={4}>
					<TextField required label="Bet 1 odds" value={betOne} onChange={e => isValidInput(e.target.value) && setBetOne(e.target.value)} />
				</Grid>
				<Grid item xs={4}>
					<TextField required label="Bet 2 odds" value={betTwo} onChange={e => isValidInput(e.target.value) && setBetTwo(e.target.value)} />
				</Grid>
				<Grid item xs={4}>
					<TextField required label="Stake" value={stake} onChange={e => isValidInput(e.target.value) && setStake(e.target.value)} />
				</Grid>
				{arb ? renderResults() : null}
				<Grid item xs={12}>
					<Button variant="contained" color="primary" className={classes.button} onClick={handleCalculate()}>
						Calculate
					</Button>
					<Button variant="contained" color="primary" className={classes.button} onClick={handleClear()}>
						Clear
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}
