import { roundTheVal } from "../../math/general";
import { getAmountByBetType, getStakeAddedBetType } from "../../BetTypes/BetTypes";

export const getUnderlayStake = (betType, standardLayProfit, backStake, backOdds, layOdds, backCommission, layCommission) => {
	var parseFloatBackStake = getAmountByBetType(betType, backStake);
	let res;
	if (standardLayProfit < 0) res = parseFloat(roundTheVal(((backOdds - 1) * backStake * (1 - backCommission / 100) + parseFloatBackStake - backStake) / (layOdds - 1), 2));
	else res = parseFloat(roundTheVal(backStake / (1 - layCommission / 100), 2));
	return res.toFixed(2);
};

export const getUnderlayLiability = (betType, standardLayProfit, backStake, backOdds, layOdds, backCommission, layCommission) => {
	var parseFloatBackStake = getAmountByBetType(betType, backStake);
	let res;
	if (standardLayProfit < 0) res = (backOdds - 1) * backStake * (1 - backCommission / 100) + parseFloatBackStake - backStake;
	else res = roundTheVal(backStake / (1 - layCommission / 100), 2) * (layOdds - 1);

	return res.toFixed(2);
};

export const getUnderlayOverAllPositionIfWin = (betType, standardLayProfit, backStake, backOdds, backCommission, underLayLiability) => {
	var parseFloatBackStake = getAmountByBetType(betType, backStake);
	let res = (backOdds - 1) * backStake * (1 - backCommission / 100) + parseFloatBackStake - backStake - underLayLiability;
	res = getStakeAddedBetType(betType, backStake, res);
	return res.toFixed(2);
};

export const getUnderlayOverAllPositionIfLoss = (betType, standardLayProfit, backStake, underlayLayStake, layCommission) => {
	let res = underlayLayStake * (1 - layCommission / 100) - backStake;
	res = getStakeAddedBetType(betType, backStake, res);
	return res.toFixed(2);
};