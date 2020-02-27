import React from "react";
import Lay from "../components/calculators/Lay";
import Arbitrage from "../components/calculators/Arbitrage";
import Dutching from "../components/calculators/Dutching";
import DecToFrac from "../components/calculators/DecToFrac";
import FracToDec from "../components/calculators/FracToDec";
import Hedging from "../components/calculators/Hedging";
import Staking from "../components/calculators/Staking";

export default calculator => {
	switch (calculator) {
		case "Lay Bet":
			return <Lay />;
		case "Arbitrage":
			return <Arbitrage />;
		case "Decimal to Fractional Odds":
			return <DecToFrac />;
		case "Fractional to Decimal Odds":
			return <FracToDec />;
		case "Hedging":
			return <Hedging />
		case "Staking":
			return <Staking />;
		case "Dutching":
			return <Dutching />;
		default:
			return null;
	}
};