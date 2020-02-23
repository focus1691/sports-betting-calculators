import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import validator from "validator";
import { isValidInputStrict } from "../../utils/sanitiser/NumberSanitiser";

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
	text: {
		margin: theme.spacing(1)
	},
	select: {
		margin: theme.spacing(3)
	},
	chip: {
		margin: theme.spacing(3)
	}
}));

export default function Staking() {
	const classes = useStyles();
	const [balance, setBalance] = useState("");
	const [risk, setRisk] = useState(100);
	const [stake, setStake] = useState("");

	const handleChangeBalance = () => e => {
		if (isValidInputStrict(e.target.value)) setBalance(e.target.value);
		else {
			setBalance("");
			setStake("");
		}
	};

	const handleCalculate = () => e => {
		setStake((balance / risk).toString());
	};

	const handleClear = () => e => {
		setRisk("");
		setBalance("");
		setStake("");
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h1">Staking</Typography>
				</Grid>
				<Grid item xs={4}>
					<TextField required label="Bank Balance" value={balance} className={classes.text} onChange={handleChangeBalance()} />
				</Grid>
				<Grid item xs={4}>
					<Select native value={risk} className={classes.select} onChange={e => setRisk(e.target.value)}>
						<option value={200}>Conservative</option>
						<option value={100}>Aggressive</option>
					</Select>
				</Grid>
				{!validator.isEmpty(stake) && !validator.isEmpty(balance) ? (
					<Grid item xs={4}>
						<Chip variant="outlined" size="small" label={stake} className={classes.chip} clickable color="primary" />
					</Grid>
				) : null}
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