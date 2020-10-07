import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import validator from "validator";
import { isValidInput, isValidInputStrict } from "../../../utils/sanitiser/NumberSanitiser";
import { fractionalFromDecimal } from "../../../utils/calculators/OddsConverter";
import calculatorStyle from "../../../jss/calculator";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    ...calculatorStyle(theme),
    root: {
        margin: 'auto',
        maxWidth: '50%',
        border: '1px solid #e6e6e6',
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
    const [odds, setOdds] = useState("");
    const [fraction, setFraction] = useState("");

    const handleOddsChange = (e) => {
        console.log("here is the event",e.target.value)
        isValidInput(e.target.value) && setOdds(e.target.value);
    };

    const handleCalculate = () => {
        isValidInputStrict(odds) && setFraction(fractionalFromDecimal(odds));
    };

    const handleClear = () => {
        setOdds("");
        setFraction("");
    };

    return (
      <div className={clsx(classes.root, "Arbitrage3")}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.title}>
            <Typography variant="h1">Decimal to Fraction</Typography>
          </Grid>
          <Grid container className={classes.container}>
            <Grid item xs={12}>
              <TextField
                required
                label="Odds e.g. 2.56"
                value={odds}
                onChange={(e) => handleOddsChange(e)}
                className={classes.selection}
                alignItems="center"
              />
            </Grid>
              {!validator.isEmpty(odds) && !validator.isEmpty(fraction) ? (
            <Grid item xs={12}>
                 <Typography variant="h6" className={classes.chipStyle}>
                {fraction}
              </Typography>
            </Grid>
              ) : null}
            <Grid item xs={12} className={classes.controls}>
              <Button
                variant="contained"
                color="primary"
                className={classes.calculateBtn}
                onClick={handleCalculate}
              >
                Calculate
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.clearBtn}
                onClick={handleClear}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
};
