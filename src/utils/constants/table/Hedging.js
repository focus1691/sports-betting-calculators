export const columns = [
    { title: "Back Stake", field: "backStake" },
    { title: "Back Odds", field: "backPrice" },
    { title: "Lay Odds", field: "layPrice" },
    { title: "Commission (%)", field: "commission" },
    { title: "Lay (£)", field: "layAmount" },
    { title: "Total Stake (£)", field: "total" },
    { title: "Guarenteed (£)", field: "guarenteed" },
    { title: "Total Returned (£)", field: "totalReturned" }
];

export const createHedge = (backStake, backPrice, layPrice, commission, layAmount, total, guarenteed, totalReturned) => {
	return {
        backStake,
        backPrice,
        layPrice,
        commission,
        layAmount,
        total,
        guarenteed,
        totalReturned
    }
};