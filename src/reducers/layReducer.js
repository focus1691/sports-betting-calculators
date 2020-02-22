import { NumberSantiser } from "../components/utils/sanitiser/NumberSanitiser";

export const initialState = {
	betType: "Normal",
	betStake: "",
	backOdds: "",
	backCommission: 0.00.toFixed(2),
	layOdds: "",
	layCommission: 0.00.toFixed(2),
	calculationMade: false,
	standard: {},
	over: {},
	under: {}
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_BET_TYPE":
			return { ...state, betType: action.payload };
		case "SET_BACK_STAKE":
			return { ...state, betStake: NumberSantiser(action.payload, state.betStake) };
		case "SET_BACK_ODDS":
			return { ...state, backOdds: NumberSantiser(action.payload, state.backOdds) };
		case "SET_BACK_COMMISSION":
			return { ...state, backCommission: NumberSantiser(action.payload, state.backCommission) };
		case "SET_LAY_ODDS":
			return { ...state, layOdds: NumberSantiser(action.payload, state.layOdds) };
		case "SET_LAY_COMMISSION":
			return { ...state, layCommission: NumberSantiser(action.payload, state.layCommission) };
		case "SET_CALCULATION":
			return { ...state, calculationMade: action.payload };
		case "CLEAR_CALCULATION":
			return initialState;
		case "SET_STANDARD":
			return { ...state, standard: action.payload };
		case "SET_OVER":
			return { ...state, over: action.payload };
		case "SET_UNDER":
			return { ...state, under: action.payload };
		default:
			return state;
	}
};
