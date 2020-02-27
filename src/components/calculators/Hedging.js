import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { reducer, initialState } from "../../reducers/hedgingReducer";
import { calculateHedge } from "../../utils/calculators/Hedging";
import { isValidInput, isInputsValid } from "../../utils/sanitiser/NumberSanitiser";

const useStyles = makeStyles(theme => ({
	root: {
		margin: "auto",
		maxWidth: "70%",
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
	result: {
		margin: theme.spacing(1),
		textDecoration: "underline",
		textDecorationColor: "#2cb633",
		fontWeight: "bold"
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

export default function Hedging() {
	const classes = useStyles();
	const [state, dispatch] = useReducer(reducer, initialState);

	const { backStake, backPrice, layPrice, commission, calculationMade } = state;
	const { amountToBet, profit, totalStaked } = state.hedge;

	const handleCalculate = () => e => {
		if (isInputsValid([backStake, backPrice, layPrice, commission])) {
			const calculatedHedge = calculateHedge(backStake, backPrice, layPrice);
			dispatch({ type: "SET_HEDGE", payload: calculatedHedge });
			dispatch({ type: "SET_CALCULATION", payload: true });
		} else {
			if (!isValidInput(backStake)) dispatch({ type: "SET_BACK_STAKE", payload: "" });
			if (!isValidInput(backPrice)) dispatch({ type: "SET_BACK_PRICE", payload: "" });
			if (!isValidInput(layPrice)) dispatch({ type: "SET_LAY_PRICE", payload: "" });
			if (!isValidInput(commission)) dispatch({ type: "SET_COMMISSION", payload: "" });

			dispatch({ type: "SET_CALCULATION", payload: false });
		}
	};

	const handleClear = () => e => {
		dispatch({ type: "CLEAR_CALCULATION", payload: false });
	};

	const renderResults = () => {
		return (
			<>
				<Grid item xs={4} className={classes.result}>
					<Typography variant="h2">{`You should lay £${amountToBet}`}</Typography>
				</Grid>
				<Grid item xs={4} className={classes.result}>
					<Typography variant="h2">{`Total Stake £${totalStaked}`}</Typography>
				</Grid>
				<Grid item xs={4} className={classes.result}>
					<Typography variant="h2">{`To Gurantee £${profit}`}</Typography>
				</Grid>
				<Grid item xs={4} className={classes.result}>
					<Typography variant="h2">Total returned £66</Typography>
				</Grid>
			</>
		);
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h1">Hedging</Typography>
				</Grid>
				<Grid container className={classes.container}>
					<Grid item xs={3}>
						<TextField label="Back Stake" className={classes.selection} value={backStake} onChange={e => dispatch({ type: "SET_BACK_STAKE", payload: e.target.value })} />
					</Grid>
					<Grid item xs={3}>
						<TextField label="Back Price" className={classes.selection} value={backPrice} onChange={e => dispatch({ type: "SET_BACK_PRICE", payload: e.target.value })} />
					</Grid>
					<Grid item xs={3}>
						<TextField label="Lay Price" className={classes.selection} value={layPrice} onChange={e => dispatch({ type: "SET_LAY_PRICE", payload: e.target.value })} />
					</Grid>
					<Grid item xs={3}>
						<TextField
							label="Commission (%)"
							className={classes.selection}
							type="number"
							inputProps={{ min: "0", max: "100" }}
							value={commission}
							onChange={e => dispatch({ type: "SET_COMMISSION", payload: e.target.value })}
						/>
					</Grid>
					{calculationMade ? renderResults() : null}
					<Grid item xs={12}>
						<Button variant="contained" color="primary" className={classes.button} onClick={handleCalculate()}>
							Calculate
						</Button>
						<Button variant="contained" color="primary" className={classes.button} onClick={handleClear()}>
							Clear
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}