import React, { useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import TableChartIcon from '@material-ui/icons/TableChart';
import { initialState, reducer } from "../../reducers/dutchingReducer";
import { isValidInput, isOneInputValid, isValidInputStrict } from "../../utils/sanitiser/NumberSanitiser";
import { calculateDutching, calculateProfit } from "../../utils/calculators/Dutching";
import calculatorStyle from "../../jss/calculator";

const useStyles = makeStyles(theme => ({
	...calculatorStyle(theme),
	root: {
		margin: "auto",
		maxWidth: "90%",
		border: "1px solid #e6e6e6",
		padding: theme.spacing(1)
	},
}));

export default function Dutching() {
	const classes = useStyles();
	const [state, dispatch] = useReducer(reducer, initialState);
	const { selections, stake, profit, totalReturn } = state;

	const handleCalculate = () => e => {
		//* For validation at least one selection odds need to be correct and stake
		let inputs = Object.values(selections).map(v => v.odds);
		if (isOneInputValid(inputs) && isValidInputStrict(stake)) {

			const calculation = calculateDutching(selections, stake);
			const profit = calculateProfit(calculation, stake);

			dispatch({ type: "SET_SELECTIONS", payload: calculation });
			dispatch({ type: "SET_PROFIT", payload: profit.profit });
			dispatch({ type: "SET_TOTAL_RETURN", payload: profit.totalReturn });
			dispatch({ type: "SET_CALCULATION", payload: true });
		} else {
			dispatch({ type: "SET_PROFIT", payload: "" });
			dispatch({ type: "SET_TOTAL_RETURN", payload: "" });
			Object.keys(selections).forEach(key => {
				if (!isValidInput(selections[key])) {
					dispatch({ type: "SET_SELECTION", payload: { selectionId: key, odds: "" } });
				}
			});
		}
	};

	const handleClear = () => e => {
		dispatch({ type: "CLEAR_CALCULATION" });
	};

	const renderResults = () => {
		return (
			<>
				<Grid item xs={2}>
					<TextField required label="Stake" className={classes.selection} />
				</Grid>
				<Grid item xs={2}>
					<TextField disabled label="Net Profit" className={classes.result} />
				</Grid>
				<Grid item xs={2}>
					<TextField disabled label="Gross Profit" className={classes.result} />
				</Grid>
			</>
		);
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
			<Grid item xs={12} className={classes.title}>
					<Typography variant="h1">Dutching
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
					<Grid item xs={2}>
						<TextField
							required
							label="Selection 1 odds"
							className={classes.selection}
							value={selections.sel1.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel1", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel1.stake} />
					</Grid>
					<Grid item xs={2}>
						<TextField
							label="Selection 2"
							className={classes.selection}
							value={selections.sel2.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel2", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel2.stake} />
					</Grid>
					<Grid item xs={2}>
						<TextField
							label="Selection 3"
							className={classes.selection}
							value={selections.sel3.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel3", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel3.stake} />
					</Grid>

					<Grid item xs={2}>
						<TextField
							label="Selection 4"
							className={classes.selection}
							value={selections.sel4.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel4", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel4.stake} />
					</Grid>
					<Grid item xs={2}>
						<TextField
							label="Selection 5"
							className={classes.selection}
							value={selections.sel5.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel5", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel5.stake} />
					</Grid>
					<Grid item xs={2}>
						<TextField
							label="Selection 6"
							className={classes.selection}
							value={selections.sel6.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel6", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel6.stake} />
					</Grid>

					<Grid item xs={2}>
						<TextField
							label="Selection 7"
							className={classes.selection}
							value={selections.sel7.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel7", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel7.stake} />
					</Grid>
					<Grid item xs={2}>
						<TextField
							label="Selection 8"
							className={classes.selection}
							value={selections.sel8.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel8", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel8.stake} />
					</Grid>
					<Grid item xs={2}>
						<TextField
							label="Selection 9"
							className={classes.selection}
							value={selections.sel9.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel9", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel9.stake} />
					</Grid>

					<Grid item xs={2}>
						<TextField
							label="Selection 10"
							className={classes.selection}
							value={selections.sel10.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel10", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel10.stake} />
					</Grid>
					<Grid item xs={2}>
						<TextField
							label="Selection 11"
							className={classes.selection}
							value={selections.sel11.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel11", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel11.stake} />
					</Grid>
					<Grid item xs={2}>
						<TextField
							label="Selection 12"
							className={classes.selection}
							value={selections.sel12.odds}
							onChange={e => dispatch({ type: "SET_SELECTION", payload: { selectionId: "sel12", odds: e.target.value } })}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Stake" className={classes.result} value={selections.sel12.stake} />
					</Grid>
					<Grid item xs={2}>
						<TextField label="Stake" className={classes.resultMain} value={stake} onChange={e => dispatch({ type: "SET_STAKE", payload: e.target.value })} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Total Return" className={classes.resultMain} value={totalReturn} />
					</Grid>
					<Grid item xs={2}>
						<TextField disabled label="Profit" className={classes.resultMain} value={profit} />
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" color="primary" className={classes.calculateBtn} onClick={handleCalculate()}>
							Calculate
						</Button>
						<Button variant="contained" color="primary" className={classes.clearBtn} onClick={handleClear()}>
							Clear
						</Button>
					</Grid>
					{}
				</Grid>
			</Grid>
		</div>
	);
}
