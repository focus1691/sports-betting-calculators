export const columns = [
    { title: "Bonus Bet (£)", field: "bonus" },
    { title: "Outcome 1", field: "outcomeOne" },
    { title: "Odds", field: "oddsOne" },
    { title: "Bet Bonus on", field: "bonusBet" },
	{ title: "Outcome 2", field: "outcomeTwo" },
    { title: "Odds", field: "oddsTwo" },
    { title: "Stake (£) on", field: "stake" },
    { title: "Profit", field: "profit"}
];

export const createBonusBet = (bonus, outcomeOne, oddsOne, bonusBet, outcomeTwo, oddsTwo, stake, profit) => {
	return {
        bonus,
        outcomeOne,
        oddsOne,
        bonusBet,
        outcomeTwo,
        oddsTwo,
        stake,
        profit
    }
};