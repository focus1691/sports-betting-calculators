import React from "react";
import Lay from "../../components/calculators/Lay";
import Arbitrage from "../../components/calculators/Arbitrage";
import DecToFrac from "../../components/calculators/DecToFrac";

export default calculator => {
	switch (calculator) {
		case "Lay Bet":
			return <Lay />;
		case "Arbitrage":
			return <Arbitrage />;
		case "Decimal to Fractional Odds":
			return <DecToFrac />;
		default:
			return null;
	}
};
