import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import validator from "validator";
import { decimalFromFraction } from "../../../utils/calculators/OddsConverter";
import calculatorStyle from "../../../jss/calculator";
import clsx from "clsx";
import { isValidInput } from "../../../utils/sanitiser/NumberSanitiser";

const useStyles = makeStyles((theme) => ({
  ...calculatorStyle(theme),
  root: {
    margin: "auto",
    maxWidth: "50%",
    border: "1px solid #e6e6e6",
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      maxWidth: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

export default function FracToDec() {
  const classes = useStyles();
  const [fractionVal1, setFractionVal1] = useState("");
  const [fractionVal2, setFractionVal2] = useState("");
  const [decimal, setDecimal] = useState("");

  const handleFractionChange = (e) => {
	isValidInput(e.target.value) && setFractionVal1(e.target.value);
  };

  const handleCalculate = () => {
    if (fractionVal1 === "") {
    } else if (fractionVal2 === "") {
    } else {
      setDecimal(decimalFromFraction(fractionVal1 + "/" + fractionVal2));
    }
  };

  const handleClear = () => {
    setFractionVal1("");
    setFractionVal2("");
    setDecimal("");
  };

  return (
    <div className={clsx(classes.root, "Arbitrage3")}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h1">Fractional to Decimal</Typography>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item xs={5}>
            <TextField
              required
              //   label="Fraction e.g. 5/2"
              value={fractionVal1}
              onChange={(e) => handleFractionChange(e)}
              className={classes.selection}
            />
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: 8,
              color: "#ff8f46",
            }}
          >
            <div>/</div>
          </Grid>
          <Grid item xs={5}>
            <TextField
              required
              //   label="Fraction e.g. 5/2"
              value={fractionVal2}
              onChange={(e) => {
                isValidInput(e.target.value) && setFractionVal2(e.target.value);
              }}
              className={classes.selection}
            />
          </Grid>
            {!validator.isEmpty(decimal) && !validator.isEmpty(decimal) ? (
          <Grid item xs={12}>
          <Typography variant="h6" className={classes.chipStyle}>
                {decimal}
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
}
