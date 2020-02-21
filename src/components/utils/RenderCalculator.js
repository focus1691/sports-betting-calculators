import React from "react";
import Lay from "../../components/calculators/Lay";
import Arbitrage from "../../components/calculators/Arbitrage";

export default calculator => {
	switch (calculator) {
		case "Lay Bet":
			return <Lay />;
		case "Arbitrage":
			return <Arbitrage />;
		default:
			return null;
	}
};
