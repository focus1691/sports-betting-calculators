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
		background: 'linear-gradient(86deg, rgba(0,0,0,1) 26%, rgba(253,213,110,1) 53%, rgba(255,216,115,1) 76%, rgba(197,136,0,1) 100%)',
	},
	title: {
		textAlign: 'center',
		paddingLeft: '20px',
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: "70px",
		color: "#ffffff",
		textAlign: "center",
		WebkitAnimation: "glow 1s ease-in-out infinite alternate",
		MozAnimation: "glow 1s ease-in-out infinite alternate",
		animation: "glow 1s ease-in-out infinite alternate",
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
						Sport Betting Calculators
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
}
