import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const HedgeResults = ({ amountToBet, profit, totalStaked, totalReturned, style }) => {
	return (
		<>
			<Grid item lg={4} md={4} sm={6} xs={12}>
				<Typography variant="h2" className={style}>{`You should lay £${amountToBet}`}</Typography>
			</Grid>
			<Grid item lg={4} md={4} sm={6} xs={12}>
				<Typography variant="h2" className={style}>{`Total Stake £${totalStaked}`}</Typography>
			</Grid>
			<Grid item lg={4} md={4} sm={6} xs={12}>
				<Typography variant="h2" className={style}>{`To Gurantee £${profit}`}</Typography>
			</Grid>
			<Grid item lg={4} md={4} sm={6} xs={12}>
				<Typography variant="h2" className={style}>{`Total returned £${totalReturned}`}</Typography>
			</Grid>
		</>
	);
};

export default HedgeResults;