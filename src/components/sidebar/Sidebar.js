import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import Header from "../Header";
import sidebarStyle from "../../jss/Sidebar";

const useStyles = makeStyles(theme => ({ ...sidebarStyle(theme) }));
const calculatorList = ["Arbitrage", "Bonus Bet", "Dutching", "Hedging", "Lay Bet", "Staking", "Decimal to Fractional Odds", "Fractional to Decimal Odds"];

export default function PermanentDrawerLeft({ calculator, setCalculator }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper
				}}
				anchor="left">
				<div className={classes.toolbar} />
				<Divider />
				<List>
					{calculatorList.map((text, index) => (
						<ListItem button key={text} onClick={() => setCalculator(text)} selected={calculator === text}>
							<ListItemIcon className={classes.icon}>{<SportsSoccerIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</div>
	);
}