import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import validator from "validator";
import { isValidInputStrict } from "../../utils/sanitiser/NumberSanitiser";
import calculatorStyle from "../../jss/calculator";
import resultChipStyle from "../../jss/ResultChip";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  ...calculatorStyle(theme),
  root: {
    margin: "auto",
    maxWidth: "75%",
    border: "1px solid #e6e6e6",
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  chip: {
    ...resultChipStyle,
    margin: theme.spacing(3),
  },
}));

export default function Staking() {
  const classes = useStyles();
  const [balance, setBalance] = useState("");
  const [risk, setRisk] = useState(100);
  const [stake, setStake] = useState("");
  const matches = useMediaQuery('(min-width:960px)');

  const handleChangeBalance = () => (e) => {
    if (isValidInputStrict(e.target.value)) setBalance(e.target.value);
    else {
      setBalance("");
      setStake("");
    }
  };

  const handleCalculate = () => {
    setStake((balance / risk).toString());
  };

  const handleClear = () => {
    setRisk("");
    setBalance("");
    setStake("");
  };

  return (
    <div className={clsx(classes.root, "Arbitrage3", "stakking")}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.title}>
          <Box fontSize="30px" fontWeight="bold">
            Staking
          </Box>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item lg={9} sm={12} xs={12}>
            <TextField
              required
              fullWidth
              label="Bank Balance"
              value={balance}
              className={classes.selection}
              onChange={handleChangeBalance()}
            />
          </Grid>
          <Grid item sm={12} lg={3} xs={12} className={classes.selectContainer}>
            <Select
              style={{ width: "100%" }}
              native
              value={risk}
              className={classes.select}
              onChange={(e) => setRisk(e.target.value)}
            >
              <option value={200}>Conservative</option>
              <option value={100}>Aggressive</option>
            </Select>
          </Grid>
          {!validator.isEmpty(stake) && !validator.isEmpty(balance) ? (
            <Grid
              item
              sm={12}
              lg={6}
              xs={12}
              className={classes.controls}
              style={{ marginTop: !matches ? 15 : null,marginBottom: !matches ? 20 : null }}
            >
              <Typography variant="h6" className={classes.chipStyle}>
                {stake}
              </Typography>
            </Grid>
          ) : null}

          <Grid item lg={6} sm={12} xs={12} className={classes.controls}>
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
