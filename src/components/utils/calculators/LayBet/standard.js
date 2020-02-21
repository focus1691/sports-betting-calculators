import { roundTheVal } from "../math/general";
import { getAmountByBetType, getStakeAddedBetType } from "../BetTypes/BetTypes";

export const getStandardLayStake = (betType, backStake, backOdds, layOdds, backCommission, layCommission) => {
	var parseFloatBackStake = getAmountByBetType(betType, backStake);
	let res = parseFloat(roundTheVal(((backOdds - 1) * backStake * (1 - backCommission / 100) + parseFloatBackStake) / (layOdds - layCommission / 100), 2));
	return res.toFixed(2);
};

export const getStandardLiability = (betType, standardLayStake, layOdds) => {
	let res = standardLayStake * (layOdds - 1);
	return res.toFixed(2);
};

export const getStandardOverAllPositionIfWin = (betType, backStake, backCommission, backOdds, standardLiablity) => {
	var parseFloatBackStake = getAmountByBetType(betType, backStake);
	let res = (backOdds - 1) * backStake * (1 - backCommission / 100) + parseFloatBackStake - standardLiablity - backStake;
	res = getStakeAddedBetType(betType, backStake, res);
	return res.toFixed(2);
};

export const getStandardOverAllPositionIfLoss = (betType, backStake, standardLayStake, standardLayCommission) => {
	let res = standardLayStake * (1 - standardLayCommission / 100) - backStake;
	res = getStakeAddedBetType(betType, backStake, res);
	return res.toFixed(2);
};