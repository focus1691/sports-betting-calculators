import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	appBar: {
		width: '100%',
		marginLeft: drawerWidth,
		zIndex: 2500,
		position: 'fixed',
		backgroundColor: "#1f221e"
	},
	title: {
		textAlign: 'center',
		paddingLeft: '20px',
		color: '#ffffff',
		fontWeight: 'bold'
	},
	logoContainer: {
		width: '8%',
	},
	logo: {
		width: '100%',
		margin: '10px',
		padding: '5px',
		position: 'relative',
		overflow: 'hidden'
	}
}));

export default function Header() {
	console.log(window.location.origin);
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<div className={classes.logoContainer}>
						<img src={window.location.origin + '/logo3.png'} alt="Top Bet Calculator" className={classes.logo} />
					</div>
					
					<Typography variant="h1" noWrap className={classes.title} align="center" alignCenter>
						Easy to use, sports calculators!
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
}
