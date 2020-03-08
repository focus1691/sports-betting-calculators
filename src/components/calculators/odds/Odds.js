import React from "react";
import DecToFrac from "./DecToFrac";
import FracToDec from "./FracToDec";
import Grid from "@material-ui/core/Grid";

const Odds = () => {
    return (
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<DecToFrac />
				</Grid>
				<Grid item xs={12}>
					<FracToDec />
				</Grid>
			</Grid>
    );
};

export default Odds;