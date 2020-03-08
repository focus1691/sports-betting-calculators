import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const ArbResults = ({ stake1, stake2, payout1, payout2, totalPayout, profit, roi, style }) => {
	return (
        <>
        <Grid item xs={4}>
            <TextField disabled label={`stake ${stake1}`} className={style} />
            <TextField disabled label={`payout ${payout1}`} className={style} />
        </Grid>
        <Grid item xs={4}>
            <TextField disabled label={`stake ${stake2}`} className={style} />
            <TextField disabled label={`payout ${payout2}`} className={style} />
        </Grid>
        <Grid item xs={4}>
            <TextField disabled label={`Total Payout ${totalPayout}`} className={style} />
            <TextField disabled label={`Profit ${profit}`} className={style} />
            <TextField disabled label={`ROI ${roi}`} className={style} />
        </Grid>
    </>
	);
};

export default ArbResults;