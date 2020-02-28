import { NumberSantiser } from "../utils/sanitiser/NumberSanitiser";

export const initialState = {
	calculationMade: false,
	selections: {
		sel1: { odds: "", stake: "" },
		sel2: { odds: "", stake: "" },
		sel3: { odds: "", stake: "" },
		sel4: { odds: "", stake: "" },
		sel5: { odds: "", stake: "" },
		sel6: { odds: "", stake: "" },
		sel7: { odds: "", stake: "" },
		sel8: { odds: "", stake: "" },
		sel9: { odds: "", stake: "" },
		sel10: { odds: "", stake: "" },
		sel11: { odds: "", stake: "" },
		sel12: { odds: "", stake: "" }
	},
	stake: 0,
	stakes: {},
	profit: "",
	totalReturn: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_SELECTION":
			const newSelections = Object.assign({}, state.selections);
			if (newSelections[action.payload.selectionId]) {
				newSelections[action.payload.selectionId].odds = NumberSantiser(action.payload.odds, newSelections[action.payload.selectionId].odds);
				return { ...state, selections: newSelections };
			}
			return state;
		case "SET_STAKE":
			return { ...state, stake: NumberSantiser(action.payload, state.stake) };
		case "SET_SELECTIONS":
			return { ...state, selections: action.payload };
		case "SET_PROFIT":
			return { ...state, profit: action.payload };
		case "SET_TOTAL_RETURN":
			return { ...state, totalReturn: action.payload };
		case "SET_CALCULATION":
			return { ...state, calculationMade: action.payload };
		case "CLEAR_CALCULATION":
			return initialState;
		default:
			return state;
	}
};