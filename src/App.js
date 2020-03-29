import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import PermanentDrawerLeft from "./components/sidebar/Sidebar";
import renderCalculator from "./utils/RenderCalculator";
import { useCookies } from 'react-cookie';

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		height: '100vh'
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		margin: 'auto'
	}
}));

function App() {
	const classes = useStyles();
	const [cookies, setCookies] = useCookies(['calculator']);
	const [calculator, setCalculator] = useState(cookies.calculator || 'Arbitrage');

	const handleChange = selection => {
		setCookies('calculator', selection);
		setCalculator(selection);
	};

	return (
		<div className={classes.root}>
			<Header />
			<PermanentDrawerLeft calculator={calculator} setCalculator={handleChange} />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{renderCalculator(calculator)}
			</main>
		</div>
	);
}

export default App;