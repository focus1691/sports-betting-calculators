import React from "react";
import Lay from "../components/calculators/lay/";
import Arbitrage from "../components/calculators/arbitrage/";
import Dutching from "../components/calculators/dutching/";
import Odds from "../components/calculators/odds/Odds";
import Hedging from "../components/calculators/hedging/";
import Staking from "../components/calculators/Staking";
import BonusBet from "../components/calculators/bonus/";

export default calculator => {
	switch (calculator) {
		case "Lay Bet":
			return <Lay />;
		case "Arbitrage":
			return <Arbitrage />;
		case "Odds":
			return <Odds />;
		case "Bonus Bet":
			return <BonusBet />;
		case "Hedging":
			return <Hedging />;
		case "Staking":
			return <Staking />;
		case "Dutching":
			return <Dutching />;
		default:
			return null;
	}
};