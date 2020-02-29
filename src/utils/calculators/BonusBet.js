// eslint-disable-next-line no-extend-native
Number.prototype.round = function(places) {
	return +(Math.round(this + "e+" + places) + "e-" + places);
};

export const calculateBonusBet = (outcomeA, outcomeB, teamAOdds, teamBOdds, bonusBet) => {
	if (teamAOdds >= teamBOdds) {
		let stake = ((bonusBet * teamAOdds - bonusBet) / teamBOdds).round(2);
		let profit = (bonusBet * teamAOdds - bonusBet - stake).round(2);
		return { bonusBet, stake, profit, bonus: outcomeA, other: outcomeB };
	} else {
		let stake = ((bonusBet * teamBOdds - bonusBet) / teamAOdds).round(2);
		let profit = (bonusBet * teamBOdds - bonusBet - stake).round(2);
		return { bonusBet, stake, profit, bonus: outcomeB, other: outcomeA };
	}
};