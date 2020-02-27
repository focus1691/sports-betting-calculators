// eslint-disable-next-line no-extend-native
Number.prototype.round = function(places) {
	return +(Math.round(this + "e+" + places) + "e-" + places);
};

export const calculateHedge = (stake, price, exitPrice) => {
    let total = (stake * price).round(2);
	let amountToBet = (total / exitPrice).round(2);
    let profit = (amountToBet - stake).round(2);
	let totalStaked = (total - profit).round(2);

	return {
		amountToBet,
		profit,
		totalStaked
	};
};