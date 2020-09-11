import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import validator from "validator";
import { decimalFromFraction } from "../../../utils/calculators/OddsConverter";
import calculatorStyle from "../../../jss/calculator";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	...calculatorStyle(theme),
	root: {
		margin: "auto",
		maxWidth: "50%",
		border: "1px solid #e6e6e6",
		padding: theme.spacing(1),
		[theme.breakpoints.down('md')]: {
			maxWidth: '75%',
		},
		[theme.breakpoints.down('sm')]: {
			maxWidth: '100%',
		},
	}
}));

export default function FracToDec() {
	const classes = useStyles();
	const [fraction, setFraction] = useState("");
	const [decimal, setDecimal] = useState("");

	const handleFractionChange = (e) => {
		setFraction(e.target.value);
	};

	const handleCalculate = () => {
		setDecimal(decimalFromFraction(fraction));
	};

	const handleClear = () => {
		setFraction("");
		setDecimal("");
	};

	return (
		<div className={clsx (classes.root,"Arbitrage3" )}>
			
			<Grid container spacing={3}>
			
				<Grid item xs={12} className={classes.title}>
				
					<Typography variant="h1">Fractional to Decimal</Typography>
				</Grid>
				<Grid container className={classes.container}>
				<Grid item xs={12}>
					<TextField required label="Fraction e.g. 5/2" value={fraction} onChange={e => handleFractionChange(e)} className={classes.selection}/>
				</Grid>
				<Grid item xs={12} className={classes.controls}>
					<Button variant="contained" color="primary" className={classes.calculateBtn} onClick={handleCalculate}>
						Calculate
					</Button>
					<Button variant="contained" color="primary" className={classes.clearBtn} onClick={handleClear}>
						Clear
					</Button>
				</Grid>
				{!validator.isEmpty(decimal) && !validator.isEmpty(decimal) ? (
					<Grid item xs={6}>
						<Chip variant="outlined" size="small" label={decimal} clickable className={classes.resultChip} />
					</Grid>
				) : null}
				</Grid>
			</Grid>
		</div>
	);
};
