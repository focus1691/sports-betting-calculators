import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { List } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import sidebarStyle from "../../jss/Sidebar";

import clsx from 'clsx';

const useStyles = makeStyles(theme => ({ ...sidebarStyle(theme) }));
const calculatorList = ["Arbitrage", "Bonus Bet", "Dutching", "Hedging", "Lay Bet", "Staking", "Odds"];

export default function PermanentDrawerLeft({ calculator, setCalculator,openDrawerMobile }) {
	const classes = useStyles();
	
	return (
		<div className={classes.root}>
			
			<Drawer
				className= { clsx(classes.drawer, "drawer-setting",openDrawerMobile ? "":  "mobileDrawerOpen")}

				variant="permanent"
				
				classes={{
					paper: classes.drawerPaper}}
				anchor="left">
				<div className={classes.toolbar} />
				<Divider />
				<List >
					{calculatorList.map((text, index) => (
						<ListItem button key={text} onClick={() => setCalculator(text)} selected={calculator === text} className={classes.calcButton}>
							<ListItemIcon className={classes.icon}>{<SportsSoccerIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			
			
		</div>
	);
}
