export const calculateArb = (stake, odds1, odds2, betCount) => {
	let totalPayout = 0;
	let overRound = 1 / (parseFloat(1 / odds1) + parseFloat(1 / odds2));

	const calculateAmountToBet = odds => {
		let amountBet = parseFloat(1 / odds) * overRound;

		let betStake = parseFloat(amountBet) * parseFloat(stake);

		let overallAmountBet = parseFloat(betStake) * odds;

		totalPayout = parseFloat(overallAmountBet) + parseFloat(totalPayout);

		return { stake: betStake.toFixed(2), payout: overallAmountBet.toFixed(2) };
	};

	const amountToBetOnFirst = calculateAmountToBet(odds1);
	const amountToBetOnSecond = calculateAmountToBet(odds2);
	const stake1 = amountToBetOnFirst.stake;
	const stake2 = amountToBetOnSecond.stake;
	const payout1 = amountToBetOnFirst.payout;
	const payout2 = amountToBetOnSecond.payout;

	totalPayout = (parseFloat(totalPayout) / parseFloat(betCount)).toFixed(2);

	let profit = (parseFloat(totalPayout) - parseFloat(stake)).toFixed(2);
	let roi = ((parseFloat(profit) / parseFloat(stake)) * 100).toFixed(2) + "%";

	return {
		stake1,
		stake2,
		payout1,
		payout2,
		totalPayout,
		profit,
		roi
	};
};
