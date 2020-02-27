import { NumberSantiser } from "../utils/sanitiser/NumberSanitiser";

export const initialState = {
	backStake: "",
	backPrice: "",
	layPrice: "",
	commission: (0.0).toFixed(2),
    calculationMade: false,
    hedge: {}
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_BACK_STAKE":
			return { ...state, backStake: NumberSantiser(action.payload, state.backStake) };
		case "SET_BACK_PRICE":
			return { ...state, backPrice: NumberSantiser(action.payload, state.backPrice) };
		case "SET_LAY_PRICE":
			return { ...state, layPrice: NumberSantiser(action.payload, state.layPrice) };
		case "SET_COMMISSION":
            return { ...state, commission: NumberSantiser(action.payload, state.commission) };
        case "SET_HEDGE":
            return { ...state, hedge: action.payload };
		case "SET_CALCULATION":
			return { ...state, calculationMade: action.payload };
		case "CLEAR_CALCULATION":
            return initialState;
		default:
			return state;
	}
};