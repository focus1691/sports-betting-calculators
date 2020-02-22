import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Chip from '@material-ui/core/Chip';
import validator from "validator";
import { isValidInput, isValidInputStrict } from "../../utils/sanitiser/NumberSanitiser";
import { fractionalFromDecimal } from "../../utils/calculators/OddsConverter";

const useStyles = makeStyles(theme => ({
    root: {
        margin: "auto",
        maxWidth: "30%",
        border: "1px solid #e6e6e6",
        padding: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(1)
    }
}));

export default function Lay() {
    const classes = useStyles();
    const [odds, setOdds] = useState("");
    const [fraction, setFraction] = useState("");

    const handleOddsChange = () => e => {
        isValidInput(e.target.value) && setOdds(e.target.value);
    };

    const handleCalculate = () => e => {
        isValidInputStrict(odds) && setFraction(fractionalFromDecimal(odds));
    };

    const handleClear = () => e => {
        setOdds("");
        setFraction("");
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField required label="Odds e.g. 2.56" value={odds} onChange={handleOddsChange()} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleCalculate()}>
                        Calculate
					</Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleClear()}>
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
                            color="primary"
                        />
                    </Grid>
                    : null}
            </Grid>
        </div>
    );
}