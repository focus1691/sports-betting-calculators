import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from '@material-ui/core/Select';
import { reducer, initialState } from "../../reducers/layReducer";
import { Paper } from "@material-ui/core";
import { getStandardLayStake, getStandardLiability, getStandardOverAllPositionIfWin, getStandardOverAllPositionIfLoss } from "../../utils/calculators/LayBet/standard";
import { getOverlayStake, getOverlayLiability, getOverlayOverAllPositionIfWin, getOverlayOverAllPositionIfLoss } from "../../utils/calculators/LayBet/over";
import { getUnderlayStake, getUnderlayLiability, getUnderlayOverAllPositionIfWin, getUnderlayOverAllPositionIfLoss } from "../../utils/calculators/LayBet/under";
import { isInputsValid } from "../../utils/sanitiser/NumberSanitiser";

const useStyles = makeStyles(theme => ({
	root: {
		margin: "auto",
		maxWidth: "70%",
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
	result: {
		margin: theme.spacing(1)
	},
	resultTitle: {
		textDecoration: "underline",
		textAlign: "center"
	},
	hidden: {
		display: "none"
	}
}));

export default function Lay() {
	const classes = useStyles();
	const [state, dispatch] = useReducer(reducer, initialState);

	const { betType, betStake, backOdds, layOdds, backCommission, layCommission } = state;
	const { standardStake, standardLiability, standardWin, standardLose } = state.standard;
	const { overStake, overLiability, overWin, overLose } = state.over;
	const { underStake, underLiability, underWin, underLose } = state.under;

	const handleCalculate = () => e => {
		//! Standard Lay stake, liability, win, lose
		let standardStake = getStandardLayStake(betType, betStake, backOdds, layOdds, backCommission, layCommission);
		let standardLiability = getStandardLiability(betType, standardStake, layOdds);
		let standardWin = getStandardOverAllPositionIfWin(betType, betStake, backCommission, backOdds, standardLiability);
		let standardLose = getStandardOverAllPositionIfLoss(betType, betStake, standardStake, layCommission);
		dispatch({ type: "SET_STANDARD", payload: { standardStake, standardLiability, standardWin, standardLose } });

		//! Over Lay stake, liability, win, lose
		let overStake = getOverlayStake(betType, standardWin, betStake, backOdds, layOdds, backCommission, layCommission);
		let overLiability = getOverlayLiability(betType, standardWin, betStake, backOdds, layOdds, backCommission, layCommission);
		let overWin = getOverlayOverAllPositionIfWin(betType, standardWin, betStake, backOdds, layOdds, backCommission, layCommission, overLiability);
		let overLose = getOverlayOverAllPositionIfLoss(betType, standardWin, betStake, overStake, layCommission);
		dispatch({ type: "SET_OVER", payload: { overStake, overLiability, overWin, overLose } });

		//! Under Lay stake, liability, win, lose
		let underStake = getUnderlayStake(betType, standardWin, betStake, backOdds, layOdds, backCommission, layCommission);
		let underLiability = getUnderlayLiability(betType, standardWin, betStake, backOdds, layOdds, backCommission, layCommission);
		let underWin = getUnderlayOverAllPositionIfWin(betType, standardWin, betStake, backOdds, backCommission, underLiability);
		let underLose = getUnderlayOverAllPositionIfLoss(betType, standardWin, betStake, underStake, layCommission);
		dispatch({ type: "SET_UNDER", payload: { underStake, underLiability, underWin, underLose } });

		if (isInputsValid([state.betStake, state.backOdds, state.backCommission, state.layOdds, state.layCommission])) {
			dispatch({ type: "SET_CALCULATION", payload: true });
		} else {
			dispatch({ type: "SET_CALCULATION", payload: false });
		}
	};

	const handleClear = () => e => {
		dispatch({ type: "CLEAR_CALCULATION", payload: false });
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h1">Lay</Typography>
				</Grid>
				<Grid item xs={12}>
					<Select
						native
						value={state.betType}
						onChange={e => dispatch({ type: "SET_BET_TYPE", payload: e.target.value })}
						inputProps={{
							name: 'betType',
							id: 'bet-type-selector',
						}}
					>
						<option value={"Normal"}>Normal</option>
						<option value={"SNR"}>SNR</option>
						<option value={"SR"}>SR</option>
					</Select>
				</Grid>
				<Grid item xs={4}>
					<TextField required label="Bet Stake" value={state.betStake} onChange={e => dispatch({ type: "SET_BACK_STAKE", payload: e.target.value })} />
				</Grid>
				<Grid item xs={4}>
					<TextField required label="Back Odds" value={state.backOdds} onChange={e => dispatch({ type: "SET_BACK_ODDS", payload: e.target.value })} />
					<TextField required label="Lay Odds" value={state.layOdds} onChange={e => dispatch({ type: "SET_LAY_ODDS", payload: e.target.value })} />
				</Grid>
				<Grid item xs={4}>
					<TextField required label="Back Commission" value={state.backCommission} onChange={e => dispatch({ type: "SET_BACK_COMMISSION", payload: e.target.value })} />
					<TextField required label="Lay Commission" value={state.layCommission} onChange={e => dispatch({ type: "SET_LAY_COMMISSION", payload: e.target.value })} />
				</Grid>
				<Grid item xs={12}>
					<Button variant="contained" color="primary" className={classes.button} onClick={handleCalculate()}>
						Calculate
					</Button>
					<Button variant="contained" color="primary" className={classes.button} onClick={handleClear()}>
						Clear
					</Button>
				</Grid>
			</Grid>
			<Divider variant="middle" />
			<div className={classes.resultSection} style={{ display: state.calculationMade ? "" : "none" }}>
				<Grid container xs={12} spacing={1} item={true}>
					<Grid xs={4} item={true}>
						<Paper className={classes.result}>
							<Typography className={classes.resultTitle} variant="h6">UNDER LAY</Typography>
							<Typography>{`lay ${underStake} at odds ${layOdds}`}</Typography>
							<Typography>{`Liability is ${underLiability}`}</Typography>
							<Typography>{`Overall position if win ${underWin}`}</Typography>
							<Typography>{`Overall position if lose ${underLose}`}</Typography>
						</Paper>
					</Grid>
					<Grid xs={4} item={true}>
						<Paper className={classes.result}>
							<Typography className={classes.resultTitle} variant="h6">STANDARD LAY</Typography>
							<Typography>{`lay ${standardStake} at odds ${layOdds}`}</Typography>
							<Typography>{`Liability is ${standardLiability}`}</Typography>
							<Typography>{`Overall position if win ${standardWin}`}</Typography>
							<Typography>{`Overall position if lose ${standardLose}`}</Typography>
						</Paper>
					</Grid>
					<Grid xs={4} item={true}>
						<Paper className={classes.result}>
							<Typography className={classes.resultTitle} variant="h6">OVER LAY</Typography>
							<Typography>{`lay ${overStake} at odds ${layOdds}`}</Typography>
							<Typography>{`Liability is ${overLiability}`}</Typography>
							<Typography>{`Overall position if win ${overWin}`}</Typography>
							<Typography>{`Overall position if lose ${overLose}`}</Typography>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}