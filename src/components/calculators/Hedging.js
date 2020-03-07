import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import TableChartIcon from '@material-ui/icons/TableChart';
import { reducer, initialState } from "../../reducers/hedgingReducer";
import { calculateHedge } from "../../utils/calculators/Hedging";
import { isValidInput, isInputsValid } from "../../utils/sanitiser/NumberSanitiser";
import calculatorStyle from "../../jss/calculator";

const useStyles = makeStyles(theme => ({
	...calculatorStyle(theme),
	root: {
		margin: "auto",
		maxWidth: "70%",
		border: "2px solid #e6e6e6",
		padding: theme.spacing(1),
	},
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
				<Grid item xs={4}>
					<Typography variant="h2" className={classes.resultText}>{`You should lay £${amountToBet}`}</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h2" className={classes.resultText}>{`Total Stake £${totalStaked}`}</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h2" className={classes.resultText}>{`To Gurantee £${profit}`}</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h2" className={classes.resultText}>Total returned £66</Typography>
				</Grid>
			</>
		);
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h1">Hedging
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
						>
							<TableChartIcon />
						</IconButton>
					</Typography>
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
						<Button variant="contained" color="primary" className={classes.calculateBtn} onClick={handleCalculate()}>
							Calculate
						</Button>
						<Button variant="contained" color="primary" className={classes.clearBtn} onClick={handleClear()}>
							Clear
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}