import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PermanentDrawerLeft from "./components/sidebar/Sidebar";
import renderCalculator from "./utils/RenderCalculator";

const camelCase = require("camelcase");

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3)
	}
}));

function App() {
	const classes = useStyles();
	const [calculator, setCalculator] = useState("Dutching");

	const changeCalculator = key => {
		setCalculator(key);
	};

	return (
		<div className={classes.root}>
			<PermanentDrawerLeft calculator={calculator} setCalculator={changeCalculator} />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{renderCalculator(calculator)}
			</main>
		</div>
	);
}

export default App;