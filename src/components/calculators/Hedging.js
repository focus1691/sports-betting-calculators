import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	root: {
		margin: "auto",
		maxWidth: "70%",
		border: "1px solid #e6e6e6",
		padding: theme.spacing(1)
	},
	container: {
		border: "1px solid #000",
		backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)"
	},
	title: {
		background: "#000",
		color: "#fff"
	},
	header: {
		// background: "yellow"
	},
	section: {
		// background: "green"
	},
	result: {
		margin: theme.spacing(1),
		textDecoration: "underline",
		textDecorationColor: "#2cb633",
		fontWeight: "bold"
	},
	selection: {
		padding: theme.spacing(1)
	},
	button: {
		margin: theme.spacing(1),
		background: "#1573ca",
		"&:hover": {
			background: "#0d508d"
		}
	}
}));


export default function Hedging() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h1">Hedging</Typography>
				</Grid>

				<Grid container className={classes.container}>
					<Grid item xs={3}>
						<TextField label="Back Stake" className={classes.selection} />
					</Grid>
					<Grid item xs={3}>
						<TextField label="Back Price" className={classes.selection} />
					</Grid>
					<Grid item xs={3}>
						<TextField label="Lay Price" className={classes.selection} />
					</Grid>
					<Grid item xs={3}>
						<TextField label="Commission" className={classes.selection} />
					</Grid>
					<Grid item xs={4} className={classes.result}>
							<Typography variant="h2">You should lay £232</Typography>
					</Grid>
					<Grid item xs={4} className={classes.result}>
							<Typography variant="h2">Total Stake £88</Typography>
					</Grid>
					<Grid item xs={4} className={classes.result}>
							<Typography variant="h2">To Gurantee £255</Typography>
					</Grid>
					<Grid item xs={4} className={classes.result}>
							<Typography variant="h2">Total returned £66</Typography>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}