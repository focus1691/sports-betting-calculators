export const columns = [
	{ title: "Bet 1", field: "betOne" },
	{ title: "Odds", field: "betOneOdds" },
	{ title: "Stake", field: "betOneStake" },
	{ title: "Payout", field: "betOnePayout" },
	{ title: "Bet 2", field: "betTwo" },
	{ title: "Odds", field: "betTwoOdds" },
	{ title: "Stake", field: "betTwoStake" },
	{ title: "Payout", field: "betTwoPayout" },
	{ title: "Total Payout", field: "totalPayout" },
	{ title: "Profit", field: "profit" },
	{ title: "ROI", field: "roi" }
];

export const createArb = (betOneOdds, betOneStake, betOnePayout, betTwoOdds, betTwoStake, betTwoPayout, totalPayout, profit, roi) => {
	return {
		betOne: "",
		betOneOdds,
		betOneStake,
		betOnePayout,
		betTwo: "",
		betTwoOdds,
		betTwoStake,
		betTwoPayout,
		totalPayout,
		profit,
		roi
	}
}