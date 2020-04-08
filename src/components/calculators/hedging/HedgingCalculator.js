import React, { useReducer } from "react";
import { connect } from "react-redux";
import { addHedge } from "../../../actions/hedgingActions";
import { reducer, initialState } from "../../../reducers/hedgingReducer";
import { makeStyles } from "@material-ui/core/styles";
import HedgeResults from "./HedgeResults";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { createHedge } from "../../../utils/constants/table/Hedging";
import { calculateHedge } from "../../../utils/calculators/Hedging";
import { isValidInput, isInputsValid } from "../../../utils/sanitiser/NumberSanitiser";
import calculatorStyle from "../../../jss/calculator";

const useStyles = makeStyles(theme => ({ ...calculatorStyle(theme) }));

const HedgingCalculator = ({ onReceiveHedge }) => {
	const classes = useStyles();
	const [state, dispatch] = useReducer(reducer, initialState);

	const { backStake, backPrice, layPrice, commission, calculationMade } = state;
	const { amountToBet, profit, totalStaked, totalReturned } = state.hedge;

	const handleCalculate = () => {
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

	const handleAddHedge = () => {
		if (isInputsValid([backStake, backPrice, layPrice, commission])) {
			const { amountToBet, profit, totalStaked, totalReturned } = calculateHedge(backStake, backPrice, layPrice);

			//! dispatch to redux store here
			onReceiveHedge(createHedge(backStake, backPrice, layPrice, commission, amountToBet, totalStaked, profit, totalReturned));
		}
	};

	const handleClear = () => {
		dispatch({ type: "CLEAR_CALCULATION", payload: false });
	};

	return (
		<Grid container className={classes.container}>
			<Grid item lg={2} md={4} sm={6} xs={12}>
				<TextField label="Back Stake" className={classes.selection} value={backStake} onChange={e => dispatch({ type: "SET_BACK_STAKE", payload: e.target.value })} />
			</Grid>
			<Grid item lg={2} md={4} sm={6} xs={12}>
				<TextField label="Back Price" className={classes.selection} value={backPrice} onChange={e => dispatch({ type: "SET_BACK_PRICE", payload: e.target.value })} />
			</Grid>
			<Grid item lg={2} md={4} sm={6} xs={12}>
				<TextField label="Lay Price" className={classes.selection} value={layPrice} onChange={e => dispatch({ type: "SET_LAY_PRICE", payload: e.target.value })} />
			</Grid>
			<Grid item lg={2} md={4} sm={6} xs={12}>
				<TextField
					label="Commission (%)"
					className={classes.selection}
					inputProps={{ min: "0", max: "100" }}
					value={commission}
					onChange={e => dispatch({ type: "SET_COMMISSION", payload: e.target.value })}
				/>
			</Grid>
			{calculationMade ? <HedgeResults amountToBet={amountToBet} profit={profit} totalStaked={totalStaked} totalReturned={totalReturned} style={classes.resultText} /> : null}
			<Grid item lg={4} md={8} sm={12} xs={12}>
				<Button variant="contained" color="primary" className={classes.calculateBtn} onClick={handleCalculate}>
					Calculate
				</Button>
				<Button variant="contained" color="primary" className={classes.clearBtn} onClick={handleClear}>
					Clear
				</Button>
				<IconButton color="inherit" className={classes.addBtn} aria-label="Add" edge="start" onClick={handleAddHedge}>
					<AddIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		onReceiveHedge: hedge => dispatch(addHedge(hedge))
	};
};

export default connect(null, mapDispatchToProps)(HedgingCalculator);
