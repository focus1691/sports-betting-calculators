import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button, Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { reducer, initialState } from "../../../reducers/layReducer";
import { getStandardLayStake, getStandardLiability, getStandardOverAllPositionIfWin, getStandardOverAllPositionIfLoss } from "../../../utils/calculators/LayBet/standard";
import { getOverlayStake, getOverlayLiability, getOverlayOverAllPositionIfWin, getOverlayOverAllPositionIfLoss } from "../../../utils/calculators/LayBet/over";
import { getUnderlayStake, getUnderlayLiability, getUnderlayOverAllPositionIfWin, getUnderlayOverAllPositionIfLoss } from "../../../utils/calculators/LayBet/under";
import { isInputsValid } from "../../../utils/sanitiser/NumberSanitiser";
import calculatorStyle from "../../../jss/calculator";

const useStyles = makeStyles(theme => ({
	...calculatorStyle(theme),
	root: {
		margin: "auto",
		maxWidth: "70%",
		border: "1px solid #e6e6e6",
		padding: theme.spacing(1),
		[theme.breakpoints.down('md')]: {
			maxWidth: '75%',
		},
		[theme.breakpoints.down('sm')]: {
			maxWidth: '100%',
		},
	},
}));

export default function Lay() {
	const classes = useStyles();
	const [state, dispatch] = useReducer(reducer, initialState);

	const { betType, betStake, backOdds, layOdds, backCommission, layCommission } = state;
	const { standardStake, standardLiability, standardWin, standardLose } = state.standard;
	const { overStake, overLiability, overWin, overLose } = state.over;
	const { underStake, underLiability, underWin, underLose } = state.under;

	const handleCalculate = () => {
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

	const handleClear = () => {
		dispatch({ type: "CLEAR_CALCULATION", payload: false });
	};

	return (
		<>
			<Grid container className={classes.container}>
				<Grid item xs={12} className={classes.selectContainer}>
					<Select
						native
						className={classes.select}
						value={state.betType}
						onChange={e => dispatch({ type: "SET_BET_TYPE", payload: e.target.value })}
						inputProps={{
							name: "betType",
							id: "bet-type-selector"
						}}>
						<option value={"Normal"}>Normal</option>
						<option value={"SNR"}>SNR</option>
						<option value={"SR"}>SR</option>
					</Select>
				</Grid>
				<Grid item lg={4} md={4} xs={12}>
					<Box className="stake-setting">
					<TextField required label="Bet Stake" value={state.betStake} onChange={e => dispatch({ type: "SET_BACK_STAKE", payload: e.target.value })} className={classes.selection} />
					</Box>
				</Grid>
				<Grid item lg={4} md={4} xs={12}>
					<Box className="Back-Odds">
					<TextField required label="Back Odds" value={state.backOdds} onChange={e => dispatch({ type: "SET_BACK_ODDS", payload: e.target.value })} className={classes.selection} />
					<Box  className="lay-odds">
					<TextField required label="Lay Odds" value={state.layOdds} onChange={e => dispatch({ type: "SET_LAY_ODDS", payload: e.target.value })} className={classes.selection} />
					</Box>
					</Box>

				</Grid>
				<Grid item lg={4} md={4} xs={12}>
					<Box className="Back-Commission">
					<TextField required label="Back Commission" value={state.backCommission} onChange={e => dispatch({ type: "SET_BACK_COMMISSION", payload: e.target.value })} className={classes.selection} />
					
					
					<TextField required label="Lay Commission" value={state.layCommission} onChange={e => dispatch({ type: "SET_LAY_COMMISSION", payload: e.target.value })} className={classes.selection} />
					</Box>
				</Grid>
				<Grid container xs={12} spacing={1} style={{ display: state.calculationMade ? "" : "none" }}>
					<Grid item lg={4} md={4} sm={12} xs={12}>
						<Paper className={classes.resultTextArea}>
							<Typography className={classes.resultTitle} variant="h6">
								UNDER LAY
							</Typography>
							<Typography className={classes.resultItem}>{`lay ${underStake} at odds ${layOdds}`}</Typography>
							<Typography className={classes.resultItem}>{`Liability is ${underLiability}`}</Typography>
							<Typography className={classes.resultItem}>{`Overall position if win ${underWin}`}</Typography>
							<Typography className={classes.resultItem}>{`Overall position if lose ${underLose}`}</Typography>
						</Paper>
					</Grid>
					<Grid item lg={4} md={4} sm={12} xs={12}>
						<Paper className={classes.resultTextArea}>
							<Typography className={classes.resultTitle} variant="h6">
								STANDARD LAY
							</Typography>
							<Typography className={classes.resultItem}>{`lay ${standardStake} at odds ${layOdds}`}</Typography>
							<Typography className={classes.resultItem}>{`Liability is ${standardLiability}`}</Typography>
							<Typography className={classes.resultItem}>{`Overall position if win ${standardWin}`}</Typography>
							<Typography className={classes.resultItem}>{`Overall position if lose ${standardLose}`}</Typography>
						</Paper>
					</Grid>
					<Grid item lg={4} md={4} sm={12} xs={12}>
						<Paper className={classes.resultTextArea}>
							<Typography className={classes.resultTitle} variant="h6">
								OVER LAY
							</Typography>
							<Typography className={classes.resultItem}>{`lay ${overStake} at odds ${layOdds}`}</Typography>
							<Typography className={classes.resultItem}>{`Liability is ${overLiability}`}</Typography>
							<Typography className={classes.resultItem}>{`Overall position if win ${overWin}`}</Typography>
							<Typography className={classes.resultItem}>{`Overall position if lose ${overLose}`}</Typography>
						</Paper>
					</Grid>
				</Grid>

				<Grid item xs={12} className={classes.controls}>
					<Button variant="contained" color="primary" className={classes.calculateBtn} onClick={handleCalculate}>
						Calculate
					</Button>
					<Button variant="contained" color="primary" className={classes.clearBtn} onClick={handleClear}>
						Clear
					</Button>
				</Grid>
			</Grid>
		</>
	);
};
