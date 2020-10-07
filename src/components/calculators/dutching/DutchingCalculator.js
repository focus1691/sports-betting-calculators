import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { initialState, reducer } from "../../../reducers/dutchingReducer";
import {
  isValidInput,
  isOneInputValid,
  isValidInputStrict,
} from "../../../utils/sanitiser/NumberSanitiser";
import {
  calculateDutching,
  calculateProfit,
} from "../../../utils/calculators/Dutching";
import calculatorStyle from "../../../jss/calculator";
import { Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  ...calculatorStyle(theme),
  root: {
    margin: "auto",
    maxWidth: "90%",
    padding: theme.spacing(1),
  },
}));

export default function Dutching() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selections, stake, profit, totalReturn } = state;

  const handleCalculate = () => {
    //* For validation at least one selection odds need to be correct and stake
    let inputs = Object.values(selections).map((v) => v.odds);
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
      Object.keys(selections).forEach((key) => {
        if (!isValidInput(selections[key])) {
          dispatch({
            type: "SET_SELECTION",
            payload: { selectionId: key, odds: "" },
          });
        }
      });
    }
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_CALCULATION" });
  };

  return (
    <Box className="stake-change">
      <Grid container className={classes.container}>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            required
            label="Selection 1 "
            className={classes.selection}
            value={selections.sel1.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel1", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            label="Selection 2"
            className={classes.selection}
            value={selections.sel2.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel2", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            label="Selection 3"
            className={classes.selection}
            value={selections.sel3.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel3", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>

        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            label="Selection 4"
            className={classes.selection}
            value={selections.sel4.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel4", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            label="Selection 5"
            className={classes.selection}
            value={selections.sel5.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel5", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            label="Selection 6"
            className={classes.selection}
            value={selections.sel6.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel6", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>

        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            label="Selection 7"
            className={classes.selection}
            value={selections.sel7.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel7", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            label="Selection 8"
            className={classes.selection}
            value={selections.sel8.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel8", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            label="Selection 9"
            className={classes.selection}
            value={selections.sel9.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel9", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>

        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            label="Selection 10"
            className={classes.selection}
            value={selections.sel10.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel10", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            label="Selection 11"
            className={classes.selection}
            value={selections.sel11.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel11", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            label="Selection 12"
            className={classes.selection}
            value={selections.sel12.odds}
            onChange={(e) =>
              dispatch({
                type: "SET_SELECTION",
                payload: { selectionId: "sel12", odds: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            value={selections.sel1.stake}
            fontSize="16px"
            marginTop={3}
            borderBottom="1px dashed #78e7fc"
            marginLeft={1}
            color="#fff"
          >
            {" "}
            Stake
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            className={classes.resultMain}
            value={stake}
            onChange={(e) =>
              dispatch({ type: "SET_STAKE", payload: e.target.value })
            }
            style={{ position: "relative", bottom: -8 }}
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            disabled
            label="Total Return"
            className={classes.resultMain}
            value={totalReturn}
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <TextField
            disabled
            label="Profit"
            className={classes.resultMain}
            value={profit}
          />
        </Grid>
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
    </Box>
  );
}
