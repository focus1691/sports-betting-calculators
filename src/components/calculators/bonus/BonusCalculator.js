import React, { useState } from "react";
import { connect } from "react-redux";
import { addBonusBet } from "../../../actions/bonusActions";
import { createBonusBet } from "../../../utils/constants/table/Bonus";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import calculatorStyle from "../../../jss/calculator";
import { isValidInput, isInputsValid } from "../../../utils/sanitiser/NumberSanitiser";
import { calculateBonusBet } from "../../../utils/calculators/BonusBet";

const useStyles = makeStyles(theme => ({ ...calculatorStyle(theme) }));

const BonusBetCalculator = ({onReceiveBonusBet}) => {
	const classes = useStyles();
	const [bonusBet, setBonusBet] = useState("");
	const [outcome1, setOutcome1] = useState("");
	const [outcome2, setOutcome2] = useState("");
	const [oddsOne, setOddsOne] = useState("");
	const [oddsTwo, setOddsTwo] = useState("");
	const [calculation, setCalculation] = useState(null);

	const handleCalculate = () => e => {
		if (isInputsValid([bonusBet, oddsOne, oddsTwo])) {
			const bonusBetCalculation = calculateBonusBet(outcome1, outcome2, oddsOne, oddsTwo, bonusBet);
			setCalculation(bonusBetCalculation);
		} else {
			if (!bonusBet) setBonusBet("");
			if (!oddsOne) setOddsOne("");
			if (!oddsTwo) setOddsTwo("");
		}
	};

	const handleAddBonusBet = () => {
		if (isInputsValid([bonusBet, oddsOne, oddsTwo])) {
			const {stake, profit, bonus, other} = calculateBonusBet(outcome1, outcome2, oddsOne, oddsTwo, bonusBet);
			
			//! dispatch to redux store here
			onReceiveBonusBet(createBonusBet(bonusBet, outcome1, oddsOne, bonus, other, oddsTwo, stake, profit));

		} 
	};

	const handleClear = () => e => {
		setBonusBet("");
		setOddsOne("");
		setOddsTwo("");
	};

	const renderResults = () => {
		return (
			<>
				<Grid item lg={4} md={6} xs={12}>
					<Typography variant="h2" className={classes.resultText}>{`Use the £${calculation.bonusBet} bonus on ${calculation.bonus}`}</Typography>
				</Grid>
				<Grid item lg={4} md={6} xs={12}>
					<Typography variant="h2" className={classes.resultText}>{`Stake £${calculation.stake} on ${calculation.other}`}</Typography>
				</Grid>
				<Grid item lg={4} md={6} xs={12}>
					<Typography variant="h2" className={classes.resultText}>{`Total profit for either outcome £${calculation.profit}`}</Typography>
				</Grid>
			</>
		);
	};

	return (
		<Grid container className={classes.container}>
			<Grid item lg={2} md={6} xs={12}>
				<TextField label="Bonus Bet" placeholder={"£5"} value={bonusBet} onChange={e => isValidInput(e.target.value) && setBonusBet(e.target.value)} className={classes.selection} />
			</Grid>

			<Grid item lg={2} md={6} xs={12}>
				<TextField label="Outcome 1" placeholder={"Outcome 1"} value={outcome1} onChange={e => setOutcome1(e.target.value)} className={classes.selection} />
			</Grid>

			<Grid item lg={2} md={6} xs={12}>
				<TextField label="Odds" placeholder={"2.56"} value={oddsOne} onChange={e => isValidInput(e.target.value) && setOddsOne(e.target.value)} className={classes.selection} />
			</Grid>

			<Grid item lg={2} md={6} xs={12}>
				<TextField label="Outcome 2" placeholder={"Outcome 2"} value={outcome2} onChange={e => setOutcome2(e.target.value)} className={classes.selection} />
			</Grid>
			<Grid item lg={2} md={6} xs={12}>
				<TextField label="Odds" placeholder={"3.55"} value={oddsTwo} onChange={e => isValidInput(e.target.value) && setOddsTwo(e.target.value)} className={classes.selection} />
			</Grid>
			{calculation ? renderResults() : null}
			<Grid item xs={12} className={classes.controls}>
				<Button variant="contained" color="primary" className={classes.calculateBtn} onClick={handleCalculate()}>
					Calculate
				</Button>
				<Button variant="contained" color="primary" className={classes.clearBtn} onClick={handleClear()}>
					Clear
				</Button>
				<IconButton color="inherit" className={classes.addBtn} aria-label="Add" edge="start" onClick={handleAddBonusBet}>
					<AddIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		onReceiveBonusBet: bonusBet => dispatch(addBonusBet(bonusBet))
	};
};

export default connect(null, mapDispatchToProps)(BonusBetCalculator);