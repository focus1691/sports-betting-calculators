import { isValidInputStrict } from "../../utils/sanitiser/NumberSanitiser";

// eslint-disable-next-line no-extend-native
Number.prototype.round = function(places) {
	return +(Math.round(this + "e+" + places) + "e-" + places);
};

export const calculateProfit = (selections, stake) => {
	let total = 0;
	let N = 0;
	Object.keys(selections).forEach(key => {
		if (isValidInputStrict(selections[key].stake)) {
			total += selections[key].stake * selections[key].odds;
			N++;
		}
	});
	if (N === 0) return null;

	let totalReturn = total / N;

	return {
		totalReturn: totalReturn.round(2),
		profit: (totalReturn - stake).round(2)
	};
};

const calculateStake = (stake, winProbability, summedProbabilities) => {
	if (!isValidInputStrict(winProbability)) return "";
	let amountToStake = (winProbability / summedProbabilities) * stake;
	return amountToStake.round(2);
};

export const calculateDutching = (selections, stake) => {
	const winProbabilities = Object.values(selections).map(v => (isValidInputStrict(v.odds) ? (1 / v.odds) * stake : ""));
	const summedProbabilities = winProbabilities.reduce((acc, tot) => acc + tot);

	Object.keys(selections).forEach((key, index) => {
		selections[key].stake = calculateStake(stake, winProbabilities[index], summedProbabilities);
	});

	return selections;
};