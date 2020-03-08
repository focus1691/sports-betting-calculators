import React, { useState } from "react";
import { connect } from "react-redux";
import { addArb } from "../../../actions/arbActions";
import ArbResults from "./ArbResults";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { isValidInput, isInputsValid } from "../../../utils/sanitiser/NumberSanitiser";
import { createArb } from "../../../utils/constants/table/Arbitrage";
import { calculateArb, EmptyArb } from "../../../utils/calculators/Arbitrage";
import calculatorStyle from "../../../jss/calculator";

const useStyles = makeStyles(theme => ({ ...calculatorStyle(theme) }));

const ArbCalculator = ({onReceiveArb}) => {
	const classes = useStyles();
	const [betOne, setBetOne] = useState("");
	const [betTwo, setBetTwo] = useState("");
	const [stake, setStake] = useState("");
	const [arb, setArb] = useState(undefined);

	const { stake1, stake2, payout1, payout2, totalPayout, profit, roi } = arb || EmptyArb();

	const handleCalculate = () => {
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

	const handleAddArb = () => {
		if (isInputsValid([betOne, betTwo, stake])) {
			const {stake1, payout1, stake2, payout2, totalPayout, profit, roi} = calculateArb(stake, betOne, betTwo, 2);

			//! dispatch to redux store here
			onReceiveArb(createArb(betOne, stake1, payout1, betTwo, stake2, payout2, totalPayout, profit, roi));
		} 
	};

	const handleClear = () => {
		setBetOne("");
		setBetTwo("");
		setStake("");
		setArb(undefined);
	};
	
	return (
		<Grid container className={classes.container}>
			<Grid item xs={3}>
				<TextField required label="Bet 1 odds" value={betOne} onChange={e => isValidInput(e.target.value) && setBetOne(e.target.value)} className={classes.selection} />
			</Grid>
			<Grid item xs={3}>
				<TextField required label="Bet 2 odds" value={betTwo} onChange={e => isValidInput(e.target.value) && setBetTwo(e.target.value)} className={classes.selection} />
			</Grid>
			<Grid item xs={2}>
				<TextField required label="Stake" value={stake} onChange={e => isValidInput(e.target.value) && setStake(e.target.value)} className={classes.selection} />
			</Grid>
			<Grid item xs={4}>
				<Button variant="contained" color="primary" className={classes.calculateBtn} onClick={handleCalculate}>
					Calculate
				</Button>
				<Button variant="contained" color="primary" className={classes.clearBtn} onClick={handleClear}>
					Clear
				</Button>
				<IconButton color="inherit" className={classes.addBtn} aria-label="Add" edge="start" onClick={handleAddArb}>
					<AddIcon />
				</IconButton>
			</Grid>
			{arb ? <ArbResults stake1={stake1} stake2={stake2} payout1={payout1} payout2={payout2} totalPayout={totalPayout} profit={profit} roi={roi} style={classes.result} /> : null}
		</Grid>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		onReceiveArb: arb => dispatch(addArb(arb))
	};
};

export default connect(null, mapDispatchToProps)(ArbCalculator);