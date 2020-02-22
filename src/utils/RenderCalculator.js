import React from "react";
import Lay from "../components/calculators/Lay";
import Arbitrage from "../components/calculators/Arbitrage";
import DecToFrac from "../components/calculators/DecToFrac";
import FracToDec from "../components/calculators/FracToDec";

export default calculator => {
	switch (calculator) {
		case "Lay Bet":
			return <Lay />;
		case "Arbitrage":
			return <Arbitrage />;
		case "Decimal to Fractional Odds":
			return <DecToFrac />;
		case "Fractional to Decimal Odds":
			return <FracToDec />
		default:
			return null;
	}
};
