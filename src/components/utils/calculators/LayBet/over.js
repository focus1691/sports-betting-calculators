import { roundTheVal } from "../math/general";
import { getAmountByBetType, getStakeAddedBetType } from "../BetTypes/BetTypes";

export const getOverlayStake = (betType, standardLayProfit, backStake, backOdds, layOdds, backCommission, layCommission) => {
	var parseFloatBackStake = getAmountByBetType(betType, backStake);
	let res;
	if (standardLayProfit < 0) res = parseFloat(roundTheVal(backStake / (1 - layCommission / 100), 2));
	else res = parseFloat(roundTheVal(((backOdds - 1) * backStake * (1 - backCommission / 100) + parseFloatBackStake - backStake) / (layOdds - 1), 2));
	return res.toFixed(2);
};

export const getOverlayLiability = (betType, standardLayProfit, backStake, backOdds, lay_odds, backCommission, layCommission) => {
	var parseFloatBackStake = getAmountByBetType(betType, backStake);
	let res;
	if (standardLayProfit < 0) res = parseFloat(roundTheVal(backStake / (1 - layCommission / 100), 2)) * (lay_odds - 1);
	else res = (backOdds - 1) * backStake * (1 - backCommission / 100) + parseFloatBackStake - backStake;
	return res.toFixed(2);
};

export const getOverlayOverAllPositionIfWin = (betType, standardLayProfit, backStake, backOdds, lay_odds, backCommission, layCommission, over_lay_liability) => {
	var parseFloatBackStake = getAmountByBetType(betType, backStake);
	let res = (backOdds - 1) * backStake * (1 - backCommission / 100) + parseFloatBackStake - backStake - over_lay_liability;
	res = getStakeAddedBetType(betType, backStake, res);
	return res.toFixed(2);
};

export const getOverlayOverAllPositionIfLoss = (betType, standardLayProfit, backStake, over_lay_stake, layCommission) => {
	let res = over_lay_stake * (1 - layCommission / 100) - backStake;
	res = getStakeAddedBetType(betType, backStake, res);
	return res.toFixed(2);
};