import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from '@material-ui/core/Chip';
import validator from "validator";
import { isValidInput, isValidInputStrict } from "../../../utils/sanitiser/NumberSanitiser";
import { fractionalFromDecimal } from "../../../utils/calculators/OddsConverter";
import calculatorStyle from "../../../jss/calculator";

const useStyles = makeStyles(theme => ({
    ...calculatorStyle(theme),
    root: {
        margin: "auto",
        maxWidth: "50%",
        border: "1px solid #e6e6e6",
        padding: theme.spacing(1)
    },
}));

export default function Lay() {
    const classes = useStyles();
    const [odds, setOdds] = useState("");
    const [fraction, setFraction] = useState("");

    const handleOddsChange = (e) => {
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
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant="h1">Decimal to Fraction</Typography>
                </Grid>
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <TextField required label="Odds e.g. 2.56" value={odds} onChange={e => handleOddsChange(e)} className={classes.selection} alignItems="center" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" className={classes.calculateBtn} onClick={handleCalculate}>
                            Calculate
					</Button>
                        <Button variant="contained" color="primary" className={classes.clearBtn} onClick={handleClear}>
                            Clear
					</Button>
                    </Grid>
                    {!validator.isEmpty(odds) && !validator.isEmpty(fraction) ?
                        <Grid item xs={6}>
                            <Chip
                                variant="outlined"
                                size="small"
                                label={fraction}
                                clickable
                                className={classes.resultChip}
                            />
                        </Grid>
                        : null}
                </Grid>
            </Grid>
        </div>
    );
};