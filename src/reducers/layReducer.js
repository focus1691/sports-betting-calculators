export const initialState = {
	betStake: null,
	backOdds: null,
	backCommission: null,
	layOdds: null,
	layCommission: null
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_BACK_STAKE":
			return { ...state, betStake: action.payload };
		case "SET_BACK_ODDS":
            return { ...state, backOdds: action.payload };
		case "SET_BACK_COMMISSION":
            return { ...state, backCommission: action.payload };
		case "SET_LAY_ODDS":
            return { ...state, layOdds: action.payload };
		case "SET_LAY_COMMISSION":
            return { ...state, layCommission: action.payload };
		default:
			return state;
	}
};
